import * as yup from "yup";

const isRequiredMessage = "This field is required";

export default yup.object().shape({
  firstName: yup.string().required(isRequiredMessage).max(10),
  lastName: yup.string().optional().max(10),
  email: yup.string().required(isRequiredMessage).email(),
});
