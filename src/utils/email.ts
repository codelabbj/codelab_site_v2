import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export const buildEmailHtml = (
  name: string,
  email: string,
  company: string,
  message: string
) => `
  <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
    <div style="background: linear-gradient(135deg, #2563eb, #9333ea); padding: 24px; border-radius: 8px; margin-bottom: 24px;">
      <h1 style="color: white; margin: 0; font-size: 22px;">Nouveau message — CodeLab</h1>
    </div>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 10px 0; color: #6b7280; width: 120px; font-size: 14px;">Nom</td><td style="padding: 10px 0; color: #111827; font-weight: 600;">${name}</td></tr>
      <tr><td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Email</td><td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td></tr>
      ${company ? `<tr><td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Entreprise</td><td style="padding: 10px 0; color: #111827;">${company}</td></tr>` : ''}
    </table>
    <div style="margin-top: 24px; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #2563eb;">
      <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px;">Message</p>
      <p style="color: #111827; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
    </div>
  </div>
`;

export const sendContactEmail = (
  name: string,
  email: string,
  company: string,
  message: string
) =>
  emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {email:"hello@codelab.bj" , name:name, company:company, message:message, user_email:email},
    EMAILJS_PUBLIC_KEY
  );