import * as yup from "yup";

export const schema = yup.object().shape({
  nome: yup.string().required("Nome Obrigatório"),
  cpf: yup.string().required("CPF Obrigatório"),
  dtNascimento: yup
    .date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, "dd/MM/yyyy", new Date());
      return result;
    })
    .typeError("Por favor coloque uma data valida!")
    .required(" Data de Nascimento Obrigatória!")
    .min("1900-01-01", "Coloque uma data valida!"),
  // tel: yup.string().required("Telefone Obrigatório"),
  cep: yup.string().required("CEP do Hospital Obrigatório"),
  tipoSanguineo: yup.string().required("Tipo sanguineo obrigatório"),
  // genero: yup.string().required("Gênero obrigatório"),
  nomeHospital: yup.string().required("Nome do Hospital Obrigatório"),
});
