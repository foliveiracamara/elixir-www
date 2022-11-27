import * as yup from "yup";

export const schema = yup.object().shape({
  nome: yup.string().required("Nome Obrigatório"),
  cpf: yup.string().required("CPF Obrigatório"),
  dtNascimento: yup
    .date()
    .required(" Data de Nascimento Obrigatória!")
    .max(new Date(), "A data não pode ser superior ao dia de hoje!"),
  tel: yup.string().required("Telefone Obrigatório"),
  cep: yup.string().required("CEP do Hospital Obrigatório"),
  tipoSanguineo: yup.string().required("Tipo sanguineo obrigatório"),
  genero: yup.string().required("Gênero obrigatório"),
  nomeHospital: yup.string().required("Nome do Hospital Obrigatório"),
});
