import { NextApiRequest, NextApiResponse } from "next";
import MailerLite from '@mailerlite/mailerlite-nodejs';
import logger from "@/lib/logger";

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_TOKEN!,
})

interface LeadRequest extends NextApiRequest {
  body: {
    email?: string;
    firstName?: string;
    lastName?: string;
    botField?: string;
  };
}

export default function handler(req: LeadRequest, res: NextApiResponse) {
  logger.info("Lead request initiated", { req });
  const event = req.query.event;

  if (req.method !== "POST") {
    logger.warn("Lead request method not allowed", { req });
    res.status(405).send("Method not allowed");
    return res.redirect(301, `/events/${event}?lead_success=false`);
  }

  if (!req.body.email || !req.body.firstName || !req.body.lastName) {
    logger.warn("Lead request missing email or full name", { req });
    res.status(400).send("Email and Full Name are required");
    return res.redirect(301, `/events/${event}?lead_success=false`);
  }

  if (req.body.botField !== "") {
    logger.warn("Lead request bot field not empty", { req });
    res.status(400).send("Bot field must be empty");
    return res.redirect(301, `/events/${event}?lead_success=false`);
  }

  if (req.query.event === "") {
    logger.warn("Lead request missing event", { req });
    res.status(400).send("Event is required");
    return res.redirect(301, `/events/${event}?lead_success=false`);
  }

  const email = req.body.email;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  firstName.toLowerCase();
  lastName.toLowerCase();
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  logger.info("getting list of groups from MailerLite", { req });
  console.log("mailerlite functionality started");

  mailerlite.groups.get({
    limit: 25,
    page: 1,
    filter: {
      // @ts-ignore
      name: event + "-leads"
    },
    sort: "-name",
  })
      .then(response => {
        console.log(response)
        const groupId = response.data.data[0].id;
        logger.info("retrieved groups from MailerLite", { req, response });
        mailerlite.subscribers.createOrUpdate({
          email,
          fields: {
            name: firstName,
            last_name: lastName,
          },
          groups: [groupId.toString(), "96632678153979799"], // second string is for 'KHZ Newsletter'
          status: "active",
        })
            .then((addResponse) => {
              console.log(addResponse);
              logger.info("added subscriber to MailerLite", { req, addResponse });

              if (req.query.function === "appbox") {
                return res.redirect(301, `/events/${event}/complete-app?email=${encodeURIComponent(email)}&form_id=${encodeURIComponent(req.query.form_id!.toString())}`);
              } else {
                return res.redirect(301, `/events/${event}?lead_success=true`);
              }
            })
            .catch((addError) => {
              // we need to notify the business that the lead was not collected and to fix this
              console.log(addError)
              logger.error("error adding subscriber to MailerLite", { req, addError });
              return res.redirect(301, `/events/${event}?lead_success=false`);
            });
      })
      .catch(error => {
        // we need to notify the business that the lead was not collected and to fix this
        console.log(error);
        logger.error("error retrieving groups from MailerLite", { req, error });
        return res.redirect(301, `/events/${event}?lead_success=false`);
      });
}
