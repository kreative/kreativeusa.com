import { NextApiRequest, NextApiResponse } from "next";
import { sendSMSNotification } from "@/lib/sendSMS";
import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_TOKEN,
});

const base = Airtable.base('appc09KpTN0ILZXh9');

interface ContactRequest extends NextApiRequest {
  body: {
    email?: string;
    fullName?: string;
    message?: string;
    phone?: string;
  };
}

export default function handler(req: ContactRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return res.redirect(301, `/contact-us?form_completed=false`);
  }

  if (!req.body.email || !req.body.fullName || !req.body.message) {
    res.status(400).send("Email, full name, and message are required");
    return res.redirect(301, `/contact-us?form_completed=false`);
  }

  const email = req.body.email;
  const fullName = req.body.fullName;
  const message = req.body.message;
  const phone = req.body.phone || "";

  base('Contact Us Form').create({
    "Email": email,
    "Name": fullName,
    "Message": message,
    "Phone": phone,
    "Status": "Todo"
  }, { typecast: true }, function (err, record) {
    if (err) {
      sendSMSNotification(`KHZ Contact Request from ${fullName}: ${message} (${email}, ${phone}) - ERROR: ${err.message}`);
      return res.status(500).json({ error: err });
    }
    else {
      sendSMSNotification(`KHZ Contact Request from ${fullName}: ${message} (${email}, ${phone}) - SUCCESS (record id: ${record!.getId()}))`);
      return res.status(200).json({ success: true });
    }
  });
}
