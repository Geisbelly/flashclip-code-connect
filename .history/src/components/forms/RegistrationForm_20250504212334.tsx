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

const formSchema = z.object({
  fullName: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  phone: z.string().min(14, { message: "Por favor, insira um telefone no formato correto (ex: 63 912345678)." }),
  institution: z.string().min(2, { message: "Por favor, selecione uma instituição." }),
  course: z.string().min(1, { message: "Por favor, selecione um curso." }),
  miniCourse: z.string().min(1, { message: "Por favor, selecione um minicurso." }),
  customCourse: z.string().optional(),
  customInstitution: z.string().optional(),
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
      institution: "",
      course: "",
      miniCourse: "",
      customCourse: "",
      customInstitution: "",
      acceptTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const form = document.createElement('form');
    form.action = `https://docs.google.com/forms/d/e/1FAIpQLSd11jX94D_SORUkxWZ6j_4kH2vCK2NmJYua-L_MKxsQUFjCeg/formResponse?entry.605337776=${values.email}`;
    form.method = 'POST';
    form.target = '_self';
  
    const entries = {
      'entry.605337776': values.email,
      'entry.144064944': values.fullName,
      'entry.1390284158': values.phone,
      'entry.1278160725': values.course === 'outro' ? '__other_option__' : values.course,
      'entry.885928829': values.institution === 'outro' ? '__other_option__' : values.institution,
      'entry.1525512698': values.miniCourse,
    };
  
    // Preenche campos padrão
    Object.entries(entries).forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });
  
    // Campos customizados (quando seleciona "outro")
    if (values.course === 'outro') {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'entry.1278160725_other_option_response';
      input.value = values.customCourse || '';
      form.appendChild(input);
    }
  
    if (values.institution === 'outro') {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'entry.885928829_other_option_response';
      input.value = values.customInstitution || '';
      form.appendChild(input);
    }
  
    document.body.appendChild(form);
    form.submit();
  }
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  <SelectItem value="computacao">Ciência da Computação</SelectItem>
                  <SelectItem value="engenharia-software">Engenharia de Software</SelectItem>
                  <SelectItem value="sistemas-informacao">Sistemas de Informação</SelectItem>
                  <SelectItem value="ensino-medio">Ensino Médio</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch("course") === "outro" && (
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
                  <SelectItem value="ulbra">ULBRA Palmas</SelectItem>
                  <SelectItem value="ifto">IFTO</SelectItem>
                  <SelectItem value="uft">UFT</SelectItem>
                  <SelectItem value="unitins">UNITINS</SelectItem>
                  <SelectItem value="unopa">UNOPA</SelectItem>
                  <SelectItem value="catolica">Catolica</SelectItem>
                  <SelectItem value="ulbrinha">Ulbrinha</SelectItem>
                  <SelectItem value="cem">CEM de Taquaralto</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch("institution") === "outro" && (
          <FormField
            control={form.control}
            name="customInstitution"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Informe a instituição</FormLabel>
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
                  <SelectItem value="prolog">Prolog</SelectItem>
                  <SelectItem value="csharp">C#</SelectItem>
                  <SelectItem value="ruby">Ruby</SelectItem>
                  <SelectItem value="go">GO</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
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
