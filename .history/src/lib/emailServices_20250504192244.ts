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
      from_name: data.name,
      from_email: data.email,
      curso: data.curso, 
    };
  
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        params
      );
    } catch (error) {
      throw new Error("Erro ao enviar email.");
    }
  }
