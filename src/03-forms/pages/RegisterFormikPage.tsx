import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
 
  return (
    <div>
      <h1>Register Formik Page</h1>
     <Formik initialValues={{
       name :"",
       email:"",
       password1:"",
       password2:"",
     }}
     onSubmit={(values)=>{
      console.log(values)
     }}
    validationSchema ={Yup.object({
      name : Yup.string().min(2,'Debe de tener como minimo 3 caracteres').max(15,'Deber de tener como maximo 15 caracteres').required('Necesito un nombre'),
      email: Yup.string().email('El correo electronico debe de ser valido.').required('Necesito un correo electronico'),
      password1: Yup.string()
                    .min(6,'El password debe de tener como minimo 6 caracteres , letras ,numeros o simbolos')
                    .max(15, "Debe de tener como maximo 15 caracteres").required("Necesito un password"),
      password2: Yup.string().oneOf([Yup.ref('password1')], 'Las contraseñas deben coincidir').required('Necesito que repitas la contraseña')
      })
    }
    > 

    {(formik) =>(
      <Form>
        <MyTextInput label="Nombre" name="name" placeholder="Nombre" />

        <MyTextInput label="Email" name='email' type="email" placeholder="Correo electronico"/>

        <MyTextInput label='Password' name='password1' type="password" placeholder="Contraseña"/>
        <MyTextInput label='Password' name='password2' type="password" placeholder="Repite la contraseña"/>

        <button type="submit">Crear usuario</button>
        <button type="reset" >Resetear formulario</button>
      </Form>
    )}


     </Formik>



    </div>
  );
};
