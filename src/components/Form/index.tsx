import React from "react";
import { Formik, Form, Field } from "formik";

import "./styles.css";

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
        <Form className="form">
          <label htmlFor="firstName" className="form__label">
            First Name
          </label>
          <Field name="firstName" type="text" className="form__input" placeholder="First Name"/>

          <label htmlFor="lastName" className="form__label">
            Last Name
          </label>
          <Field name="lastName" type="text" className="form__input" placeholder="Last Name"/>

          <label htmlFor="email" className="form__label">
            Email
          </label>
          <Field name="email" type="text" className="form__input" placeholder="Email"/>

          <button type="submit" className="btn">Submit!</button>
        </Form>
      </Formik>
    </>
  );
};

export default index;
