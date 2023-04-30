import "../styles/styles.css";

import { FormikErrors, useFormik } from "formik";

//* creamos una interface para que FormikErrors sepa de que tipo son los valores del form , esto nos ayuda a nosotros en la legibilidad
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    //* creamos una funcion que valida los datos del form
    const errors: FormikErrors<FormValues> = {}; //* maneja los errores de Formik , cada vez que se hace un submit , se borra y arranca de nuevo el objeto

    if (!firstName) {
      //* si NO existe el primer nombre
      errors.firstName = "El nombre es obligatorio"; //* ponemos el error de primer nombre en requerido
    } else if (firstName.length >= 15) {
      //* si existe pero el nombre es de menos de 15 caracteres
      errors.firstName = "Deben ser 15 caracteres o menos"; //* ponemos el error del primer nombre en el objeto errors
    }

    if (!lastName) {
      errors.lastName = "El apellido es obligatorio";
    } else if (lastName.length >= 10) {
      errors.lastName = "Deben ser 10 caracteres o menos.";
    }

    if (!email) {
      //* si NO existe el mail
      errors.email = "El email es obligatorio."; //* ponemos el error en requerido
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      //* si existe vemos si el email tiene un formato valido
      errors.email = "Direccion de email invalida."; //* ponemos el error en direccion de mail invalida
    }

    return errors; //* devolvemos los errores
  };

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
      validate: validate, //* metodo que valida (validate) , le mandamos la funcion que maneja la validacion ( linea 13 )
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
