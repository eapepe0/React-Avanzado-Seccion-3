import "../styles/styles.css";

import { FormikErrors, useFormik } from "formik";
import * as Yup from "yup";

//* creamos una interface para que FormikErrors sepa de que tipo son los valores del form , esto nos ayuda a nosotros en la legibilidad
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPage = () => {
  //* extraermos del hook de formik , una funcion que maneja el onChange (handleChange) , los values (valores del form) , una funcion que maneja el submit (handleSubmit)
  //* extraemos los errores tambien del formulario , touched sirve para saber si el campo fue tocado , onBlur se dispara si hay un cambio de foco , para eso usamos el handleBlur
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      }, //* valores iniciales
      onSubmit: (values) => {
        //* funcion que maneja el submit , por el momento los mostramos en consola
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "Debe de tener 15 caracteres o menos")
          .required("Necesito un Nombre"),
        lastName: Yup.string()
          .max(10, "Debe de tener como maximo 10 caracteres")
          .required("Necesito tu Apellido"),
        email: Yup.string()
          .email("El correo no tiene un formato valido")
          .required("Necesito un mail."),
      }),
    });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">Primer nombre</label>
        <input
          type="text"
          name="firstName"
          id=""
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Apellido</label>
        <input
          type="text"
          name="lastName"
          id=""
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id=""
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        {/* si el campo fue tocado y hay un error en email mostramos el error */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
