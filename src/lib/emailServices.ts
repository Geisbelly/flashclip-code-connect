// src/lib/emailService.ts
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
const env = import.meta.env

export async function sendContactEmail(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<void> {
    const params = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };
  
    try {
      console.log(env.VITE_EMAILJS_PUBLIC_KEY)
    console.log('Na func',params)
    await emailjs.send(env.VITE_EMAILJS_SERVICE_ID, env.VITE_EMAILJS_TEMPLATE_ID_2, params, env.VITE_EMAILJS_PUBLIC_KEY).then(console.log).catch(console.error);
    } catch (error) {
      throw new Error("Erro ao enviar email.");
    }
  }
  
  export async function sendSucessoEmail(data: {
    name: string;
    email: string;
    curso: string; 
  }): Promise<void> {
    const params = {
      email: data.email,
      curso: data.curso,
      nome:data.name 
    };
  
    try {
      await emailjs.send(env.VITE_EMAILJS_SERVICE_ID
        , env.VITE_EMAILJS_TEMPLATE_ID
        , params
        , env.VITE_EMAILJS_PUBLIC_KEY
      ).then(console.log).catch(console.error);

    } catch (error) {
      throw new Error("Erro ao enviar email.");
    }
  }

  import sgMail from '@sendgrid/mail';

  export async function email2Confirmacao(){
    const chave = import.meta.env.VITE_EMAIL_API_CHAVE
    sgMail.setApiKey(chave)
  const msg = {
    to: 'test@example.com', // Change to your recipient
    from: 'test@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
  }