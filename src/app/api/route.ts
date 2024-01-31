import nodemailer from "nodemailer";
import { NextApiResponse } from "next";

export async function POST(
  request: Request,
  res: NextApiResponse
): Promise<void> {
  try {
    const { firstName, email, message } = await request.json();
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_DOMAIN,
      host: process.env.MAIL_HOST,
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
    const response = await transporter.sendMail(mailOption);
    if (response.accepted)
      res.status(200).json({ message: "Email Sent Successfully" });
    else res.status(500).json({ message: "Failed to send email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
}
