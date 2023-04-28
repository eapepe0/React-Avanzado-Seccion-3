import { ChangeEvent, useState } from "react";

export const useForm = <T>(initState : T) =>{

    const [formData, setFormData] = useState(initState);
    
          
      const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
          ...prev, //* hacemos un spread a lo anterior , le agregamos el cambio
          [event.target.name]: event.target.value, //* el name es igual al objeto name o email o password1 , le agregamos el valor ingresado
        }));
      };

      const resetForm = () =>{
        setFormData({...initState})
      }

      const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...formData,
        //* props
        formData,

        //* metodos
        onChange, 
        resetForm,
        isValidEmail
    }
}