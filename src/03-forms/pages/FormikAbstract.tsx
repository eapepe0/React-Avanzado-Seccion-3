import "../styles/styles.css";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>FormikAbstract Tutorial</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Necesito un Nombre"),
          lastName: Yup.string()
            .max(10, "Debe de tener como maximo 10 caracteres")
            .required("Necesito tu Apellido"),
          email: Yup.string()
            .email("El correo no tiene un formato valido")
            .required("Necesito un mail."),
          terms: Yup.boolean().isTrue("Debe de aceptar Terminos y Condiciones"),
          jobType: Yup.string()
            .notOneOf(["IT Jr."], "Esta opcion no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="Nombre" name="firstName" placeholder="Nombre"/>
            
            <MyTextInput label="Apellido" name="lastName" placeholder="Apellido" />
            
            <MyTextInput label="Email" name="email" placeholder="Corre Electronico" type="email" /> 
           

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="IT Jr.">IT Jr.</option>
              <option value="IT Senior">IT Senior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              Terminos y condiciones
              <Field name="terms" type="checkbox" />
              <ErrorMessage name="terms" component="span" />
            </label>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
