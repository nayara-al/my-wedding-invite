import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { fullName, email, message, numberGuests } = await request.json();
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
      <div style="margin: 0 auto; background-color: #f0f0f0; padding: 20px; border-radius: 10px; font-family: Arial, sans-serif; max-width: 600px; width: 100%; ">
        <h1 style="text-align: center; font-size: 24px;">Obrigada por ter avaliado minha aplicação :)</h1>
        <h3 style="text-align: center; font-size: 18px;">Olá, temos uma nova confirmação de presença para o casamento!</h3>
        <ul style="list-style: none; padding: 24px; margin: 0 auto; background-color: #fff; border-radius: 10px; width: fit-content">
          <li style="margin-bottom: 10px;"><b>Nome:</b> ${fullName}</li>
          <li style="margin-bottom: 10px;"><b>E-mail:</b> ${email}</li>
          <li style="margin-bottom: 10px;"><b>Mensagem:</b> ${message}</li>
          <li style="margin-bottom: 10px;"><b>Quantidade de acompanhantes:</b> ${numberGuests}</li>
        </ul>
      <div>
        `,
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOption, function (err, info) {
        if (err) {
          console.error("Error mailOption:", err);
          reject(err);
        } else {
          console.log("Info mailOption:", info);
          resolve(info);
        }
      });
    });

    // if ok response
    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
