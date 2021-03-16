import React from "react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const index = (): JSX.Element => {
  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const onSubmit = (values: FormValues) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };

  return (
    <>
      <h2>My first Formik form</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />

          <label htmlFor="email">Email</label>
          <Field name="email" type="text" />

          <button type="submit">Submit!</button>
        </Form>
      </Formik>
    </>
  );
};

export default index;
