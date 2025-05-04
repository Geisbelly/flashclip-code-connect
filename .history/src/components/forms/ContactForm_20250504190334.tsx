
import React, { useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { sendContactEmail } from '@/lib/emailServices';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  subject: z.string().min(5, {
    message: "O assunto deve ter pelo menos 5 caracteres.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    await sendContactEmail({name:values.name, email:values.email, subject:values.subject, message:values.message})
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contato em breve."
      });
      form.reset();
      setIsSubmitting(false);
    }, 200);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Nome</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Seu nome" 
                  {...field} 
                  className="bg-tech-blue-light/30 border-white/10 text-white placeholder:text-white/50 focus:border-tech-neon"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="seu.email@exemplo.com" 
                  {...field} 
                  className="bg-tech-blue-light/30 border-white/10 text-white placeholder:text-white/50 focus:border-tech-neon"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Assunto</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Assunto da mensagem" 
                  {...field} 
                  className="bg-tech-blue-light/30 border-white/10 text-white placeholder:text-white/50 focus:border-tech-neon"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Mensagem</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Digite sua mensagem aqui..." 
                  {...field} 
                  rows={5}
                  className="bg-tech-blue-light/30 border-white/10 text-white placeholder:text-white/50 focus:border-tech-neon resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-tech-neon text-tech-blue hover:bg-tech-neon/80"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
