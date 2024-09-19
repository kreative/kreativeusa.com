import { sendNotificationEmail } from './sendEmail';
import logger from './logger';
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const MONITORING_PHONE_NUMBERS = ["+15106735179"]
const TWILIO_PHONE_NUMBER = "+18777574406";

export const sendSMSNotification = async (message: string): Promise<void> => {
  for (const phoneNumber of MONITORING_PHONE_NUMBERS) {
    try {
      client.messages
        .create({
          body: message,
          from: TWILIO_PHONE_NUMBER,
          to: phoneNumber
        })
        .then((message: any) => {
          logger.info("Successfully sent SMS notification", { message, to: phoneNumber });
        });
    } catch (error: any) {
      console.log(error);
      sendNotificationEmail(
        "ERROR: sendSMSNotification",
        `Error occurred while sending SMS notification in sendSMSNotification. Error message: ${error.message}`
      );
      logger.error("Failed to send SMS notification", { error, message: error.message });
    }
  }
}