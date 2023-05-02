import { useField } from "formik";

interface Props {
  label: string; //* necesitamos un label
  name: string; //* necesitamos un name si o si
  type?: "text" | "email" | "password"; //* el type es opcional pero debe ser un text un email o un password
  placeholder?: string; //* podemos recibir un placeholder
  [x: string]: any; //* podemos recibir todo lo que queramos
}

export const MyTextInput = ({ label, ...props }: Props) => { //* recibimos el label y las demas props les hacemos spread
  const [field, meta] = useField(props);
  //* field se encarga del name , value , onChange , onBlur ,
  //* meta se encarga de los errores y si fue tocado (touched)

  return (
    <>
      <label htmlFor={label}> {label}</label>
      <input className={props.className || ""} {...field} {...props} />{/* desestrucuramos lo que venga en field y en las props */}
      {
        /* si fue tocado y si hay un error mostramos el span con el mensaje de error */
        meta.touched && meta.error &&
        (
            <span className="error">{meta.error}</span>
        )
      }
    </>
  );
};
