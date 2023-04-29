import "../styles/styles.css";

import { useFormik } from "formik";

export const FormikBasicPage = () => {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
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
