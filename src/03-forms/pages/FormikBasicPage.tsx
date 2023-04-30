import "../styles/styles.css";

import { FormikErrors, useFormik } from "formik";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = "Required";
    } else if (firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!lastName) {
      errors.lastName = "Required";
    } else if (lastName.length >= 10) {
      errors.lastName = "Must be 10 characters or less";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: validate,
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">Primer nombre</label>
        <input
          type="text"
          name="firstName"
          id=""
          onChange={handleChange}
          value={values.firstName}
        />
        <span>El nombre es obligatorio</span>

        <label htmlFor="lastName">Apellido</label>
        <input
          type="text"
          name="lastName"
          id=""
          onChange={handleChange}
          value={values.lastName}
        />
        <span>El apellido es obligatorio</span>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id=""
          onChange={handleChange}
          value={values.email}
        />
        <span>El email es obligatorio</span>
        <span>Debe ser un formato valido de email</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
