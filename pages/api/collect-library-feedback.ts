import { NextApiRequest, NextApiResponse } from "next";
import { sendSMSNotification } from "@/lib/sendSMS";
import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_TOKEN,
});

const base = Airtable.base('appc09KpTN0ILZXh9');

interface FeedbackRequest extends NextApiRequest {
  body: {
    email?: string;
    message?: string;
    libraryItem?: string;
  };
}

export default function handler(req: FeedbackRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return res.redirect(301, `/404`);
  }

  if (!req.body.email || !req.body.message || !req.body.libraryItem) {
    return res.status(400).send("Email, library item, and message are required");
  }

  const email = req.body.email;
  const message = req.body.message;
  const libraryItem = req.body.libraryItem;

  base('Library Feedback').create({
    "Email": email,
    "Message": message,
    "Library Item": libraryItem,
    "Status": "Inbox"
  }, { typecast: true }, function (err, record) {
    if (err) {
      sendSMSNotification(`KHZ Library Feedback from ${email} for ${libraryItem} - ERROR: ${err.message}`);
      return res.status(500).json({ error: err });
    }
    else {
      sendSMSNotification(`KHZ Library Feedback from ${email} for ${libraryItem} stating ${message} - SUCCESS (record id: ${record!.getId()}))`);
      return res.status(200).json({ success: true });
    }
  });
}
