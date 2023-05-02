import { ErrorMessage, useField } from "formik";

interface Props {
  label: string; //* necesitamos un label
  name: string; //* necesitamos un name si o si
  placeholder?: string; //* podemos recibir un placeholder
  [x: string]: any; //* podemos recibir todo lo que queramos
}

export const MySelect = ({ label, ...props }: Props) => { //* recibimos el label y las demas props les hacemos spread
  const [field] = useField(props);
  //* field se encarga del name , value , onChange , onBlur ,
  
  return (
    <>
      <label htmlFor={label}> {label}</label>
      <select  {...field} {...props} />{/* desestrucuramos lo que venga en field y en las props */}
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
