import React, { useEffect, useState } from 'react';
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
import fetchSheetCSV from '@/lib/googleServices'
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  phone: z.string().min(11, { message: "Por favor, insira um telefone no formato correto (ex: 63 912345678)." }),
  institution: z.string().min(2, { message: "Por favor, selecione uma instituição." }),
  indicacao: z.string().min(2, { message: "Por favor, selecione um grupo." }),
  course: z.string().min(1, { message: "Por favor, selecione um curso." }),
  miniCourse: z.string().min(1, { message: "Por favor, selecione um minicurso." }),
  meio: z.string().optional(),
  customMeio: z.string().optional(),
  customCourse: z.string().optional(),
  customInstitution: z.string().optional(),
  customIndicacao: z.string().optional(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "Você precisa aceitar os termos e condições.",
  }),
});

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSucesso, setIsSucesso] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      institution: "",
      course: "",
      indicacao: "",
      meio: "",
      miniCourse: "",
      customCourse: "",
      customInstitution: "",
      customMeio: "",
      acceptTerms: false,
    },
  });


   
  async function emailJaCadastrado(email: string): Promise<boolean> {
    const dados = await fetchSheetCSV();
  
    // Ignorar as 4 primeiras linhas de metadados
    const linhasValidas = dados.slice(3);
  
    // Índice do campo "E-mail" (coluna 1)
    for (const linha of linhasValidas) {
      if (linha[1]?.trim().toLowerCase() === email.trim().toLowerCase()) {
        return true;
      }
    }
  
    return false;
  }
  

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try{
      setIsSubmitting(true)
      const existe = await emailJaCadastrado(values.email)
     
      if(existe){
        toast.message("Você não pode se cadastrar duas vocês com o mesmo email!")
        setIsSubmitting(false)
        return
      }
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd11jX94D_SORUkxWZ6j_4kH2vCK2NmJYua-L_MKxsQUFjCeg/formResponse';
      
      const data = new URLSearchParams();
      
      data.append('entry.473763144', values.email);
      data.append('entry.1811779468', values.fullName);
      data.append('entry.1528936113', values.phone);
      
      // Curso
      if (values.course === 'Outro') {
        data.append('entry.142913211', '__other_option__');
        data.append('entry.142913211.other_option_response', values.customCourse);
      } else {
        data.append('entry.142913211', values.course);
      }
      
      // Instituição
      if (values.institution === 'Outro') {
        data.append('entry.601039953', '__other_option__');
        data.append('entry.601039953.other_option_response', values.customInstitution);
      } else {
        data.append('entry.601039953', values.institution);
      }

      // Indicacao
      if (values.indicacao === 'Outro') {
        data.append('entry.1239734294', '__other_option__');
        data.append('entry.1239734294.other_option_response', values.customIndicacao);
      } else {
        data.append('entry.1239734294', values.indicacao);
      }

      // Meio
      if (values.meio === 'Outro') {
        data.append('entry.687964703', '__other_option__');
        data.append('entry.687964703.other_option_response', values.customMeio);
      } else {
        data.append('entry.687964703', values.meio);
      }
      
      data.append('entry.315572132', values.miniCourse);
      
      const retorno = await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data.toString()
      }).then(console.log).catch()
      toast.message("Inscrição enviada!")
      form.reset();
      setIsSucesso(true)
      
    }catch(e){
      toast.error("Infelizmente não foi possível enviar sua inscrição!");
    }finally{
      setIsSubmitting(false)
    }
   

  }
  
  if(isSucesso){
    return(
          <div className="flex flex-col items-center justify-center p-10 text-center space-y-4 bg-tech-blue-light/30 border border-white/10 rounded-lg">
            <CheckCircle className="w-12 h-12 text-tech-neon" />
            <h2 className="text-white text-2xl font-bold">Inscrição confirmada!</h2>
            <p className="text-white/80">
              Você receberá mais informações por email. Fique atento!
            </p>
          </div>
    )
  }else{

  return (
    <Form {...form}>
      <h2 className="text-2xl font-bold mb-6 text-white">Formulário de Inscrição</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email *</FormLabel>
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
                <FormLabel className="text-white">Telefone *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="(63) 90000-0000" 
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
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Nome Completo *</FormLabel>
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
        

        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Curso *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-tech-blue-light/30 border-white/10 text-white">
                    <SelectValue placeholder="Selecione um curso" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-tech-blue-light border-white/10">
                  <SelectItem value="Ciência da Computação">Ciência da Computação</SelectItem>
                  <SelectItem value="Engenharia de Software">Engenharia de Software</SelectItem>
                  <SelectItem value="Sistemas de Informação">Sistemas de Informação</SelectItem>
                  <SelectItem value="Ensino Médio">Ensino Médio</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch("course") === "Outro" && (
          <FormField
            control={form.control}
            name="customCourse"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Informe o curso</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Digite o nome do curso" 
                    {...field} 
                    className="bg-tech-blue-light/30 border-white/10 text-white placeholder:text-white/50 focus:border-tech-neon"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Instituição *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-tech-blue-light/30 border-white/10 text-white">
                    <SelectValue placeholder="Selecione uma instituição" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-tech-blue-light border-white/10">
                  <SelectItem value="ULBRA Palmas">ULBRA Palmas</SelectItem>
                  <SelectItem value="IFTO">IFTO</SelectItem>
                  <SelectItem value="UFT">UFT</SelectItem>
                  <SelectItem value="UNITINS">UNITINS</SelectItem>
                  <SelectItem value="UNOPA">UNOPA</SelectItem>
                  <SelectItem value="Católica">Catolica</SelectItem>
                  <SelectItem value="Ulbrinha">Ulbrinha</SelectItem>
                  <SelectItem value="CEM de Taquaralto">CEM de Taquaralto</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch("institution") === "Outro" && (
          <FormField
            control={form.control}
            name="customInstitution"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Informe a instituição *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Digite o nome da instituição" 
                    {...field} 
                    className="bg-tech-blue-light/30 border-white/10 text-white placeholder:text-white/50 focus:border-tech-neon"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="indicacao"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Quem te convidou para o FlashClip? *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-tech-blue-light/30 border-white/10 text-white">
                    <SelectValue placeholder="Selecione uma instituição" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-tech-blue-light border-white/10">
                  <SelectItem value="Grupo Prolog">Grupo Prolog</SelectItem>
                  <SelectItem value="Grupo GO">Grupo GO</SelectItem>
                  <SelectItem value="Grupo C#">Grupo C#</SelectItem>
                  <SelectItem value="Grupo Ruby">Grupo Ruby</SelectItem>
                  <SelectItem value="Grupo TypeScript">Grupo TypeScript</SelectItem>
                  <SelectItem value="Todos em Sala">Todos em Sala</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch("indicacao") === "Outro" && (
          <FormField
            control={form.control}
            name="customIndicacao"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Informe o nome de quem te indicou o FLashClip *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Digite o nome de quem te indicou" 
                    {...field} 
                    className="bg-tech-blue-light/30 border-white/10 text-white placeholder:text-white/50 focus:border-tech-neon"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}


        <FormField
          control={form.control}
          name="meio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Por onde você ficou sabendo do Evento? *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-tech-blue-light/30 border-white/10 text-white">
                    <SelectValue placeholder="Selecione uma instituição" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-tech-blue-light border-white/10">
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="Whatsapp">Whatsapp</SelectItem>
                  <SelectItem value="Mural - Card">Mural/Card</SelectItem>
                  <SelectItem value="Sala de Aula">Sala de Aula</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch("meio") === "Outro" && (
          <FormField
            control={form.control}
            name="customMeio"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Qual outro meio? *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Digite o nome de quem te indicou" 
                    {...field} 
                    className="bg-tech-blue-light/30 border-white/10 text-white placeholder:text-white/50 focus:border-tech-neon"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="miniCourse"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Qual minicurso deseja participar? *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-tech-blue-light/30 border-white/10 text-white">
                    <SelectValue placeholder="Selecione um minicurso" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-tech-blue-light border-white/10">
                  <SelectItem value="Prolog">Prolog</SelectItem>
                  <SelectItem value="C#">C#</SelectItem>
                  <SelectItem value="Ruby">Ruby</SelectItem>
                  <SelectItem value="Go">GO</SelectItem>
                  <SelectItem value="Typescript">TypeScript</SelectItem>
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
  );}
};

export default RegistrationForm;
