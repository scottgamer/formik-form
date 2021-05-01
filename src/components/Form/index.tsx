import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./validationSchema";

import "./styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  technologies: [];
  receive_notifications: boolean;
  coding_frequency: string;
}

const index = (): JSX.Element => {
  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    technologies: [],
    receive_notifications: false,
    coding_frequency: "",
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
          <label className="form__label">
            First Name
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
          </label>

          <label className="form__label">
            Last Name
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
          </label>

          <label className="form__label">
            Email
            <Field
              name="email"
              type="text"
              className="form__input"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="span"
              className="form__error"
            />
          </label>

          <label htmlFor="bio" className="form__label">
            Bio
            <Field
              name="bio"
              as="textarea"
              className="form__input"
              placeholder="Bio..."
            />
            <ErrorMessage name="bio" component="span" className="form__error" />
          </label>

          {/* <label htmlFor="hobby" className="form__label">
            Hobby
          </label>
          <Field name="hobby" as="select" className="form__input">
            <option value="hiking">Hiking</option>
            <option value="biking">Biking</option>
            <option value="running">Running</option>
          </Field>
          <ErrorMessage name="hobby" component="span" className="form__error" /> */}

          <button type="submit" className="btn">
            Submit!
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default index;
