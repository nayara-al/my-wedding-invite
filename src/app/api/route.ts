import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
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
      to: `${process.env.MAIL_SENDER}, ${email}`,
      subject: "Confirmação de presença",
      html: `
      <h1>Obrigada por ter avaliado minha aplicação :)</h1>
      <h3>Olá, temos uma nova confirmação de presença para o casamento!</h3>
      <li>Nome: ${firstName} </li>
      <li>E-mail: ${email} </li>
      <li>Mensagem: ${message} </li>
        `,
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOption, function (err, info) {
        if (err) {
          console.error('Error mailOption:', err);
          reject(err);
        } else {
          console.log('Info mailOption:', info);
          resolve(info);
        }
      });
    });

    // if ok response
    return NextResponse.json(
      { message: 'Email Sent Successfully' },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
