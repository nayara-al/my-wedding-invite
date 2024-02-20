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
    const response = await transporter.sendMail(mailOption);
    if (response.accepted) {
      return Response.json({ message: "Email Sent Successfully" });
    } else
      Response.json(
        { message: "Algo deu errado, tente novamente mais tarde." },
        { status: 500 }
      );
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Algo deu errado, tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
