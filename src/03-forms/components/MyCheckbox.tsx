import { useField } from "formik";

interface Props {
  label: string; //* necesitamos un label
  name: string; //* necesitamos un name si o si
  [x: string]: any; //* podemos recibir todo lo que queramos
}

export const MyCheckbox = ({ label, ...props }: Props) => { //* recibimos el label y las demas props les hacemos spread
  const [field, meta] = useField({...props , type: 'checkbox'});
  //* field se encarga del name , value , onChange , onBlur ,
  //* meta se encarga de los errores y si fue tocado (touched)

  return (
    <>
      <label> 
        <input type = 'checkbox' {...field} {...props} />
          {label}
        </label>  
      
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
