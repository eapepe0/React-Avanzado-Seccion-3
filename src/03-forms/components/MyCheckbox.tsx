import { ErrorMessage, useField } from "formik";

interface Props {
  label: string; //* necesitamos un label
  name: string; //* necesitamos un name si o si
  [x: string]: any; //* podemos recibir todo lo que queramos
}

export const MyCheckbox = ({ label, ...props }: Props) => { //* recibimos el label y las demas props les hacemos spread
  const [field] = useField({...props , type: 'checkbox'});
  //* field se encarga del name , value , onChange , onBlur ,
  
  return (
    <>
      <label> 
        <input type = 'checkbox' {...field} {...props} />
          {label}
        </label>  
      <ErrorMessage name={props.name} component="span" className="custom-span-error-class"/>
      {/* el componente error Message , nos permite sacar la parte de meta , haciendolo mas legible */}
    </>
  );
};
