
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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';
import { coursesData } from "@/data/courses";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  phone: z.string().min(10, {
    message: "Por favor, insira um telefone válido.",
  }),
  studentId: z.string().min(5, {
    message: "A matrícula deve ter pelo menos 5 caracteres.",
  }),
  course: z.string({
    required_error: "Selecione um curso.",
  }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "Você precisa aceitar os termos e condições.",
  }),
});

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      studentId: "",
      course: "",
      acceptTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
  
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd11jX94D_SORUkxWZ6j_4kH2vCK2NmJYua-L_MKxsQUFjCeg/formResponse";
  
    const formData = new FormData();
    formData.append("entry.XXXXX1", values.fullName);   // Nome
    formData.append("entry.XXXXX2", values.email);      // Email
    formData.append("entry.XXXXX3", values.phone);      // Telefone
    formData.append("entry.XXXXX4", values.studentId);  // Matrícula
  
    if (values.course === "outro") {
      formData.append("entry.XXXXX5", "__other_option__");
      formData.append("entry.XXXXX5_other_option_response", values); // precisa estar no form
    } else {
      formData.append("entry.XXXXX5", values.course);
    }
  
    formData.append("entry.XXXXX6", values.acceptTerms ? "Sim" : "Não");
  
    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).then(() => {
      toast.success("Inscrição enviada com sucesso!", {
        description: "Você será redirecionado em instantes.",
      });
      setTimeout(() => navigate('/'), 2000);
    }).catch(() => {
      toast.error("Erro ao enviar inscrição.");
    }).finally(() => {
      setIsSubmitting(false);
    });
  }
  
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Nome Completo</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Seu nome completo" 
                  {...field} 
                  className="bg-tech-blue-light/30 border-white/10 text-white placeholder:text-white/50 focus:border-tech-neon"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Telefone</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="(11) 98765-4321" 
                    {...field} 
                    className="bg-tech-blue-light/30 border-white/10 text-white placeholder:text-white/50 focus:border-tech-neon"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="studentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Matrícula</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Número de matrícula" 
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
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Curso</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-tech-blue-light/30 border-white/10 text-white">
                    <SelectValue placeholder="Selecione um curso" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-tech-blue-light border-white/10">
                  {coursesData.map(course => (
                    <SelectItem key={course.id} value={course.id} className="text-white hover:text-tech-neon focus:text-tech-neon">
                      {course.language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-white/10 rounded-md">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-tech-neon data-[state=checked]:text-tech-blue"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm text-white">
                  Eu aceito os termos e condições do evento.
                </FormLabel>
                <p className="text-xs text-white/60">
                  Ao se inscrever, você concorda em receber emails sobre o evento e confirma que leu nossa política de privacidade.
                </p>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full md:w-auto bg-tech-neon text-tech-blue hover:bg-tech-neon/80"
        >
          {isSubmitting ? "Processando..." : "Confirmar Inscrição"}
        </Button>
      </form>
    </Form>
  );
};

export default RegistrationForm;
