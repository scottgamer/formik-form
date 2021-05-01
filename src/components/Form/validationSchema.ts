import * as yup from "yup";

const isRequiredMessage = "This field is required";
const maxCharMessage = "Must be less than 255 characters";

export default yup.object().shape({
  firstName: yup.string().required(isRequiredMessage).max(10),
  lastName: yup.string().optional().max(10),
  email: yup.string().required(isRequiredMessage).email(),
  bio: yup.string().optional().max(255, maxCharMessage),
});
