import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer'; /* Instalar npm i --save-dev @types/nodemailer */

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Método não permitido' });

  const { name, phone, email, date, contactPref } = req.body;

  // Configure seu e-mail e senha ou use variáveis de ambiente
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS
    },
    tls: {
    rejectUnauthorized: false
  }
  });

  console.log('Email:' + process.env.EMAIL_USER, process.env.EMAIL_PASS, 'Destinário:' + process.env.EMAIL_DEST);


  try {
    await transporter.sendMail({
      from: `"Contato Site" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DEST,
      subject: 'Nova Solicitação de Orçamento',
      text: `
      Nome: ${name}
      Telefone: ${phone}
      E-mail: ${email}
      Melhor data: ${date}
      Preferência de contato: ${contactPref}
      `
    });


    return res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao enviar email' });
  }
}
