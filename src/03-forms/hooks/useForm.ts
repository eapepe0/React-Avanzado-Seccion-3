import { ChangeEvent, useState } from "react";

export const useForm = <T>(initState : T) =>{

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password1: "",
        password2: "",
      });
    
      const { name, email, password1, password2 } = formData; //* extraemos desde registerData
    
      const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
          ...prev, //* hacemos un spread a lo anterior , le agregamos el cambio
          [event.target.name]: event.target.value, //* el name es igual al objeto name o email o password1 , le agregamos el valor ingresado
        }));
      };
    


    return {
        ...formData,
        //* props
        formData,

        //* metodos
        onChange 
    }
}