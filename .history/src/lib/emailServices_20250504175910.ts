// src/lib/emailService.ts
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // use uma variável de ambiente segura

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
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2,
        params
      );
    } catch (error) {
      throw new Error("Erro ao enviar email.");
    }
  }
  
  export async function sendSucessoEmail(data: {
    name: string;
    email: string;
    curso: string; // 👈 novo campo
  }): Promise<void> {
    const params = {
      from_name: data.name,
      from_email: data.email,
      curso: data.curso, // 👈 adiciona aqui também
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
