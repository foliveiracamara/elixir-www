import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().required("Email ou senha inválidos"),
  senha: yup.string().required("Email ou senha inválidos"),
});
