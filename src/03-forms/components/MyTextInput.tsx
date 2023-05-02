import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={label}> {label}</label>
      <input className={props.className || ""} {...field} {...props} />
      {
        meta.touched && meta.error &&
        (
            <span className="error">{meta.error}</span>
        )
      }
    </>
  );
};
