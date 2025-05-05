

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
// components/FormularioInscricao.tsx

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  email: z.string().email(),
  nome: z.string().min(3),
  telefone: z.string().regex(/^63\s?\d{9}$/, {
    message: "Formato esperado: 63 912345678",
  }),
  curso: z.enum(["CC", "ES", "SI", "EM", "Outro"]),
  cursoOutro: z.string().optional(),
  instituicao: z.enum(["ULBRA", "IFTO", "UFT", "Outro"]),
  instituicaoOutro: z.string().optional(),
  minicurso: z.enum(["Prolog", "C#", "Ruby", "GO", "TypeScript"]),
});

type FormData = z.infer<typeof schema>;

export default function FormularioInscricao() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const curso = watch("curso");
  const instituicao = watch("instituicao");

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Inscrição enviada com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label>
        E-mail *
        <input type="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </label>

      <label>
        Nome Completo *
        <input type="text" {...register("nome")} />
        {errors.nome && <span>{errors.nome.message}</span>}
      </label>

      <label>
        Telefone (63 912345678) *
        <input type="text" {...register("telefone")} />
        {errors.telefone && <span>{errors.telefone.message}</span>}
      </label>

      <label>
        Curso *
        <select {...register("curso")}>
          <option value="CC">Ciência da Computação</option>
          <option value="ES">Engenharia de Software</option>
          <option value="SI">Sistemas de Informação</option>
          <option value="EM">Ensino Médio</option>
          <option value="Outro">Outro</option>
        </select>
      </label>

      {curso === "Outro" && (
        <label>
          Informe o curso:
          <input type="text" {...register("cursoOutro")} />
        </label>
      )}

      <label>
        Instituição *
        <select {...register("instituicao")}>
          <option value="ULBRA">ULBRA Palmas</option>
          <option value="IFTO">IFTO</option>
          <option value="UFT">UFT</option>
          <option value="Outro">Outro</option>
        </select>
      </label>

      {instituicao === "Outro" && (
        <label>
          Informe a instituição:
          <input type="text" {...register("instituicaoOutro")} />
        </label>
      )}

      <label>
        Qual minicurso deseja participar? *
        <select {...register("minicurso")}>
          <option value="Prolog">Prolog</option>
          <option value="C#">C#</option>
          <option value="Ruby">Ruby</option>
          <option value="GO">GO</option>
          <option value="TypeScript">TypeScript</option>
        </select>
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
}
