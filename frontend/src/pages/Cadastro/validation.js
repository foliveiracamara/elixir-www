import * as yup from "yup";

export const schema = yup.object().shape({
  nome: yup.string().required("Nome Obrigatório"),
  cpf: yup.string().required("CPF Obrigatório"),
  genero: yup.string().required("Informe seu gênero"),
  email: yup.string().required("Email Obrigatório"),
  senha: yup.string().required("Insira uma senha válida"),
  senha: yup.string().required("Insira uma senha válida"),
});
