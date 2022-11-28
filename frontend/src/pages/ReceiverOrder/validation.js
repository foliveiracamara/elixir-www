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
  dtNascimento: yup
    .date()
    .required(" Data de Nascimento Obrigatória!")
    .max(new Date(), "A data não pode ser superior ao dia de hoje!"),
  tel: yup
    .string()
    .required("Telefone Obrigatório")
    .min(15, "Coloque um telefone valido!"),
  cep: yup
    .string()
    .required("CEP do Hospital Obrigatório")
    .min(9, "Coloque um cep valido!"),
  tipoSanguineo: yup.string().required("Tipo sanguineo obrigatório"),
  genero: yup.string().required("Gênero obrigatório"),
  nomeHospital: yup
    .string()
    .required("Nome do Hospital Obrigatório")
    .max(50, "Coloque os nomes abreviados")
    .min(5, "O nome deve conter pelo menos 5 caracteres(letras)"),
});

export const maskCpf = [
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  ".",
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  ".",
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  "-",
  /[0-9]/,
  /[0-9]/,
];

export const maskCep = [
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  "-",
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
];

export const maskTel = [
  "(",
  /[0-9]/,
  /[0-9]/,
  ")",
  " ",
  "9",
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  "-",
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
];
