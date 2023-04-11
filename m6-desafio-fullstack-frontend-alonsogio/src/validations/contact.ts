import * as yup from "yup";

export const schemaContact = yup.object({
  fullName: yup.string().required("Nome não pode estar em branco"),
  email: yup
    .string()
    .email("Email precisa ser válido")
    .required("Email não pode estar em branco"),
  contact: yup.string().required("Contato não pode estar em branco"),
});
