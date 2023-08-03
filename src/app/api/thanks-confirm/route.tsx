import type { NextApiResponse } from 'next'
import { Resend } from 'resend';
import ThanksGuest from '@/emails/thanksGuest';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: NextApiResponse) {
  const { firstName, email } = await request.json();

  try {
    const data = await resend.emails.send({
      from: `Nayara <${process.env.MAIL_FROM}>`,
      to: `<${email}>`,
      subject: 'Hello world',
      react: ThanksGuest({ nome: firstName }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};