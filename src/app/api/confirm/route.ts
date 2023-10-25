import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function POST(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  try {
    const { firstName, email, message } = request.body;
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: "smtp.gmail.com",
      port: 465, 
      secure: true, 
      auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_SENDER_PASS,
      },
    });

    const mailOption = {
      from: process.env.MAIL_SENDER,
      to: process.env.MAIL_SENDER,
      subject: "Confirmação de presença",
      html: `
      <h3>Olá, temos uma nova confirmação de presença para o casamento!</h3>
      <li>Nome: ${firstName} </li>
      <li>E-mail: ${email} </li>
      <li>Mensagem: ${message} </li>
      `,
    };
    await transporter.sendMail(mailOption);
    response.status(200).json({ message: "Email Sent Successfully" });
  } catch (error) {
    console.error(error);
  }
}