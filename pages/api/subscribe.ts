import { NextApiRequest, NextApiResponse } from "next";
import MailerLite from '@mailerlite/mailerlite-nodejs';
import logger from "@/lib/logger";

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_TOKEN!,
})

interface LeadRequest extends NextApiRequest {
  body: {
    email?: string;
  };
}

export default function handler(req: LeadRequest, res: NextApiResponse) {
  logger.info("Lead request initiated", { req });

  if (req.method !== "POST") {
    logger.warn("Lead request method not allowed", { req });
    res.status(405).send("Method not allowed");
    return;
  }

  const email = req.body.email!;

  console.log("mailerlite functionality started");

  mailerlite.subscribers.createOrUpdate({
    email,
    groups: ["96632678153979799"],
    status: "active",
  })
      .then((addResponse) => {
        console.log(addResponse);
        logger.info("added subscriber to MailerLite", { req, addResponse });
        // send a success back
        return res.status(200).json({ success: true });
      })
      .catch((addError) => {
        // we need to notify the business that the lead was not collected and to fix this
        logger.error("error adding subscriber to MailerLite", { req, addError });
        // send an error back
        return res.status(500).json({ error: addError });
      });
}
