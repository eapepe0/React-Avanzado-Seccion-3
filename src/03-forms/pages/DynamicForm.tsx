import formJson from '../data/custom-form.json'

import { Formik , Form } from 'formik'
import * as Yup from "yup";
import { MySelect, MyTextInput } from '../components'


const initialValues : { [key : string ] : any } = { }; //* le decimos a TS que es un objeto vacio que recibe una key la cual es una string y un valor que pude ser cualquier cosa
const requiredFields : { [key : string ] : any } = { };

//* recorremos cada valor del JSON
for ( const input of formJson ) {
    initialValues[ input.name ] = input.value; //* creamos el initialValues

    if( !input.validations) continue; //* si no existe ninguna validacion en el JSON seguimos con el loop sin hacer nada

    let schema = Yup.string(); //* creamos un Yup string no un objeto

    for (const rule of input.validations ) { //* recorremos el input.validations
        if (rule.type === 'required') { 
             schema = schema.required('Este campo es requerido'); //* es igual al mismo schema por que puede haber varias reglas en el mismo input
        }
    }
    requiredFields[ input.name ] = schema; //* creamos el objeto para este campo
    console.log(typeof(requiredFields))    
}

const validationSchema = Yup.object( { ...requiredFields } ) //* creamos el objeto de Yup haciendo un spread del objeto que creamos antes

export const DynamicForm = () => {
    
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
        initialValues={initialValues}
        onSubmit={ (values) =>
            console.log(values)
        }
        validationSchema = { validationSchema }

        >
            {(formik)=>(
                <Form noValidate>
                {formJson.map(({type, name , label , placeholder , options}) => {
                    if(type ==='input' || type === "password" || type === 'email'){
                        return <MyTextInput  key={name}
                                            label={label} 
                                            name={name} 
                                            placeholder={placeholder}  
                                            type={(type as any)} 
                                            />
                    }else if(type === 'select'){
                        return (
                             <MySelect key={name} label={label} name={name}>
                                <option value="" >Elija una opcion</option>
                               {/*  { //* si las opciones las enviamos como un array ["opc 1","opc2"]
                                    options?.map((opt) => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))
                                } */
                                }
                                {
                                    options?.map(({id , label}) => (
                                        <option key={id} value={label}>{label}</option>
                                    ))
                                }
                            </MySelect>
                                
                        )
                    }
                    return <span>Type : {type} no es soportado</span>                   
                })
            }
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}
