import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./validationSchema";

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
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form">
          <label htmlFor="firstName" className="form__label">
            First Name
          </label>
          <Field
            name="firstName"
            type="text"
            className="form__input"
            placeholder="First Name"
          />
          <ErrorMessage
            name="firstName"
            component="span"
            className="form__error"
          />

          <label htmlFor="lastName" className="form__label">
            Last Name
          </label>
          <Field
            name="lastName"
            type="text"
            className="form__input"
            placeholder="Last Name"
          />
          <ErrorMessage
            name="lastName"
            component="span"
            className="form__error"
          />

          <label htmlFor="email" className="form__label">
            Email
          </label>
          <Field
            name="email"
            type="text"
            className="form__input"
            placeholder="Email"
          />
          <ErrorMessage name="email" component="span" className="form__error" />

          <button type="submit" className="btn">
            Submit!
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default index;
