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
  fullName: z.string().min(2, { message: "Nome inválido." }),
  email: z.string().email({ message: "Email inválido." }),
  phone: z.string().min(10, { message: "Telefone inválido." }),
  course: z.string({ required_error: "Curso obrigatório." }),
  otherCourse: z.string().optional(),
  shift: z.string({ required_error: "Turno obrigatório." }),
  participation: z.string({ required_error: "Selecione uma opção." }),
  interest: z.string({ required_error: "Selecione uma área." }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "Você precisa aceitar os termos.",
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
      course: "",
      otherCourse: "",
      shift: "",
      participation: "",
      interest: "",
      acceptTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd11jX94D_SORUkxWZ6j_4kH2vCK2NmJYua-L_MKxsQUFjCeg/formResponse";
    const formData = new FormData();

    formData.append("entry.1662151506", values.fullName); // Nome
    formData.append("entry.1925186226", values.email);    // Email
    formData.append("entry.1372332224", values.phone);    // Telefone

    // Curso com opção "Outro"
    if (values.course === "Outro") {
      formData.append("entry.2102587290", "__other_option__");
      formData.append("entry.2102587290_other_option_response", values.otherCourse || "");
    } else {
      formData.append("entry.2102587290", values.course);
    }

    formData.append("entry.1791243051", values.shift);          // Turno
    formData.append("entry.191036212", values.participation);   // Participou edição anterior
    formData.append("entry.1901160944", values.interest);       // Interesse
    formData.append("entry.984284905", values.acceptTerms ? "Sim" : "Não"); // Termos

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

        {/* Nome */}
        <FormField control={form.control} name="fullName" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Nome completo</FormLabel>
            <FormControl>
              <Input placeholder="Digite seu nome" {...field} className="input-style" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* Email e Telefone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="seu@email.com" {...field} className="input-style" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Telefone</FormLabel>
              <FormControl>
                <Input placeholder="(11) 91234-5678" {...field} className="input-style" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        {/* Curso */}
        <FormField control={form.control} name="course" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Curso</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="input-style">
                  <SelectValue placeholder="Selecione seu curso" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-tech-blue-light border-white/10">
                {["Engenharia de Software", "Ciência da Computação", "Design", "Outro"].map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )} />

        {/* Outro Curso */}
        {form.watch("course") === "Outro" && (
          <FormField control={form.control} name="otherCourse" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Qual?</FormLabel>
              <FormControl>
                <Input placeholder="Informe o curso" {...field} className="input-style" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        )}

        {/* Turno */}
        {/* <FormField control={form.control} name="shift" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Turno</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="input-style">
                  <SelectValue placeholder="Selecione o turno" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-tech-blue-light border-white/10">
                {["Matutino", "Vespertino", "Noturno"].map(shift => (
                  <SelectItem key={shift} value={shift}>{shift}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )} /> */}

        {/* Participou edição anterior */}
        <FormField control={form.control} name="participation" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Participou da edição anterior?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="input-style">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-tech-blue-light border-white/10">
                {["Sim", "Não"].map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )} />

        {/* Interesse */}
        <FormField control={form.control} name="interest" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Qual área te interessa?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="input-style">
                  <SelectValue placeholder="Escolha uma área" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-tech-blue-light border-white/10">
                {["Design", "Desenvolvimento", "Vídeo", "Som", "Marketing", "Organização"].map(area => (
                  <SelectItem key={area} value={area}>{area}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )} />

        {/* Termos */}
        <FormField control={form.control} name="acceptTerms" render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 p-4 border border-white/10 rounded-md">
            <FormControl>
              <Checkbox checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-tech-neon" />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-sm text-white">
                Eu aceito os termos e condições do evento.
              </FormLabel>
              <p className="text-xs text-white/60">
                Você autoriza o uso dos dados exclusivamente para fins relacionados ao FlashClip.
              </p>
            </div>
            <FormMessage />
          </FormItem>
        )} />

        {/* Botão */}
        <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-tech-neon text-tech-blue hover:bg-tech-neon/80">
          {isSubmitting ? "Processando..." : "Confirmar Inscrição"}
        </Button>

      </form>
    </Form>
  );
};

export default RegistrationForm;
