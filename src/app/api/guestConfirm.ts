"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    user: "nayara.victor1612@gmail.com",
    pass: "07112018N.v",
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: 'Nay e Victor <nayara.victor1612@gmail.com>',
    to: "anna_nayara@hotmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
