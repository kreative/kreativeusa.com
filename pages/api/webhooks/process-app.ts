import { NextApiRequest, NextApiResponse } from "next";
import MailerLite from '@mailerlite/mailerlite-nodejs';
import logger from "@/lib/logger";

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_TOKEN!,
});

interface TypeformWebhook extends NextApiRequest {
  body: {
    form_response: any,
  };
}

export default function handler(req: TypeformWebhook, res: NextApiResponse) {
  logger.info("Typeform webhook initiated", { req });
  const email = req.body.form_response.hidden.email;
  let event = "";

  switch(req.body.form_response.form_id) {
    case "cKfz0JGi":
      event = "hackisu-v2";
      break;
    case "gG4yhMSt":
      event = "dataisu-v1";
      break;
    case "Q6r7cgv4":
      event = "builddsm-v1";
      break;
    case "fut0nLMw":
      event = "hackisu-v3";
      break;
  }
  
  console.log(email)

  mailerlite.groups.get({
    limit: 25,
    page: 1,
    filter: {
      // @ts-ignore
      name: event + "-applicants"
    },
    sort: "-name",
  })
    .then(response => {
      const groupId = response.data.data[0].id;
      logger.info("retrieved groups from MailerLite", { req, response });
      mailerlite.subscribers.createOrUpdate({
        email,
        groups: [groupId.toString()],
      })
        .then((addResponse) => {
          console.log(addResponse);
          logger.info("added subscriber to MailerLite", { req, addResponse });
          return res.status(200).send("Completed.");
        })
        .catch((addError) => {
          // we need to notify the business that the lead was not collected and to fix this
          console.log(addError.response.data)
          logger.error("error adding subscriber to MailerLite", { req, addError });
          return res.status(500).send(req);
        });
    })
    .catch(error => {
      // we need to notify the business that the lead was not collected and to fix this
      //console.log(error);
      logger.error("error retrieving groups from MailerLite", { req, error });
      return res.status(500).send(req);
    });
}
