import { Resend } from 'resend';
import { sendSMSNotification } from './sendSMS';
import logger from './logger';

const MONITORING_EMAIL_ADDRESSES = ["armaan@kreativeusa.com"];
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendNotificationEmail = async (subject: string, html: string): Promise<void> => {
  for (const email of MONITORING_EMAIL_ADDRESSES) {
    try {
      const data = await resend.emails.send({
        from: 'khz-notifications@kreativeusa.com',
        to: email,
        subject,
        html,
      });

      logger.info("Successfully sent notification email", { data });
    } catch (error: any) {
      await sendSMSNotification(`Error occurred while sending notification email in sendNotificationEmail. Error message: ${error.message}`);
      logger.error("Failed to send notification email", { error, message: error.message });
    }
  }
}