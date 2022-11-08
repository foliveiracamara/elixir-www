import * as yup from "yup";

export const schema = yup.object().shape({
  nome: yup.string().required("Nome Obrigatório"),
  cpf: yup.string().required("CPF Obrigatório"),
  dtNascimento: yup.string().required("Data de Nascimento Obrigatória"),
  tel: yup.string().required("Telefone Obrigatório"),
  cepHospital: yup.string().required("CEP do Hospital Obrigatório"),
  tipoSanguineo: yup.string().required("Tipo sanguineo obrigatório"),
  genero: yup.string().required("Gênero obrigatório"),
  nomeHospital: yup.string().required("Nome do Hospital Obrigatório"),
});
