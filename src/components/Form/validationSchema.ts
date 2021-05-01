import * as yup from "yup";

const isRequiredMessage = "This field is required";
const maxCharMessage = "Must be less than 255 characters";
const minTechnologyMessage = "Select at least one";

export default yup.object().shape({
  firstName: yup.string().required(isRequiredMessage).max(10),
  lastName: yup.string().optional().max(10),
  email: yup.string().required(isRequiredMessage).email(),
  bio: yup.string().optional().max(255, maxCharMessage),
  technologies: yup
    .array()
    .required(isRequiredMessage)
    .min(1, minTechnologyMessage),
  coding_frequency: yup.string().required(isRequiredMessage),
  receive_notifications: yup.string().required(isRequiredMessage),
});
