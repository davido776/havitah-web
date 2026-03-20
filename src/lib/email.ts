import nodemailer from 'nodemailer';
import { earlyAccessWelcomeHtml, earlyAccessWelcomeText } from './email-templates/early-access-welcome';

const mailHost = process.env.MAIL_HOST;
const mailPort = Number(process.env.MAIL_PORT || 465);
const mailUser = process.env.MAIL_USERNAME;
const mailPass = process.env.MAIL_PASSWORD;
const mailFromAddress = process.env.MAIL_FROM_ADDRESS || process.env.MAIL_USERNAME;
const mailFromName = process.env.MAIL_FROM_NAME || 'Havitah';
const mailEncryption = process.env.MAIL_ENCRYPTION || '';

export async function sendEarlyAccessWelcome(email: string) {
  if (!mailHost || !mailUser || !mailPass || !mailFromAddress) {
    return;
  }

  const secure = mailPort === 465 || mailEncryption.toLowerCase() === 'ssl';

  const transporter = nodemailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure,
    auth: {
      user: mailUser,
      pass: mailPass,
    },
  });

  await transporter.sendMail({
    from: `${mailFromName} <${mailFromAddress}>`,
    to: email,
    subject: 'Welcome to the Wave - Havitah',
    html: earlyAccessWelcomeHtml,
    text: earlyAccessWelcomeText,
  });
}
