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
  receive_notifications: "";
  coding_frequency: string;
}

const index = (): JSX.Element => {
  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    technologies: [],
    receive_notifications: "",
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

          <span className="form__label">Choose your technologies:</span>
          <div role="group" className="form__group">
            <label className="form__group-item">
              Node.js
              <Field type="checkbox" name="technologies" value="node" />
            </label>
            <label className="form__group-item">
              React
              <Field type="checkbox" name="technologies" value="react" />
            </label>
            <label className="form__group-item">
              PHP
              <Field type="checkbox" name="technologies" value="php" />
            </label>
            <label className="form__group-item">
              Firebase
              <Field type="checkbox" name="technologies" value="firebase" />
            </label>
            <ErrorMessage
              name="technologies"
              component="span"
              className="form__error"
            />
          </div>

          <label className="form__label">
            Coding Frequency
            <Field as="select" name="coding_frequency" className="form__input">
              <option value="">Select</option>
              <option value="once_a_week">Once a week</option>
              <option value="twice_a_week">Twice a week</option>
              <option value="three_times_a_week">Three times a week</option>
              <option value="everyday">Everyday</option>
            </Field>
            <ErrorMessage
              name="coding_frequency"
              component="span"
              className="form__error"
            />
          </label>

          <div role="group">
            <span className="form__label">
              Do you want to receive notifications?
            </span>
            <label>
              Yes
              <Field type="radio" name="receive_notifications" value="yes" />
            </label>
            <label>
              No
              <Field type="radio" name="receive_notifications" value="no" />
            </label>
            <ErrorMessage
              name="receive_notifications"
              component="span"
              className="form__error"
            />
          </div>

          <button type="submit" className="btn">
            Submit!
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default index;
