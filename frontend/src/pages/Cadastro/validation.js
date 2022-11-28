import * as yup from "yup";

export const schema = yup.object().shape({
  nome: yup
    .string()
    .required("Nome Obrigatório")
    .max(50, "Coloque os nomes abreviados")
    .min(5, "O nome deve conter pelo menos 5 caracteres(letras)"),
  cpf: yup
    .string()
    .required("CPF Obrigatório")
    .min(11, "Coloque um cpf que contenha no minimo 11 caracteres!"),
  sexo: yup.string().required("Informe seu gênero"),
  email: yup
    .string()
    .email("Email incorreto, tem que conter @ e dominio e .com")
    .required("Email Obrigatório"),
  senha: yup
    .string()
    .required("Senha obrigatória!")
    .min(6, "Senha deve possui no mínimo 6 caracteres")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
      "Deve conter uma maiúscula uma minúscula, um número e um caractere especial"
    ),
});
