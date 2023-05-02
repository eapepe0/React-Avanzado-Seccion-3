import formJson from '../data/custom-form.json'

import { Formik , Form } from 'formik'
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from '../components'


const initialValues : { [key : string ] : any } = { }; //* le decimos a TS que es un objeto vacio que recibe una key la cual es una string y un valor que pude ser cualquier cosa
const requiredFields : { [key : string ] : any } = { };

//* recorremos cada valor del JSON
for ( const input of formJson ) {
    
    initialValues[ input.name ] = input.value; //* creamos el initialValues

    if( !input.validations) continue; //* si no existe ninguna validacion en el JSON seguimos con el loop sin hacer nada

    let schema;

    if (input.type === 'checkbox'){
        schema = Yup.boolean(); //* si es un checkbox sera booleano y no un string
    } else{
        schema = Yup.string(); //* creamos un Yup string equivale a Yup.string().min(2,'minimo 3 caracteres')
    }

    for (const rule of input.validations ) { //* recorremos el input.validations
        if (rule.type === 'required') { 
             schema = (schema as any).required('Este campo es requerido'); //* es igual al mismo schema por que puede haber varias reglas en el mismo input
        }

        if (rule.type === 'minLength') { 
            schema = (schema as any).min( ( rule as any ).value || 3 ,`Minimo de ${( rule as any ).value || 3 } caracteres.`); 
        }

        if (rule.type === 'maxLength') { 
            schema = (schema as any).max( ( rule as any ).value || 10 ,`Maximo de ${( rule as any ).value || 10 } caracteres.`); 
        }

        if (rule.type === 'email') { 
            schema = (schema as any).email( "El correo electronico debe ser valido." ); 
        }

        if (rule.type === 'password') { 
            schema = schema.oneOf( [ Yup.ref( ( rule as any ).value ) ], 'Las contraseñas deben coincidir')
        }

        if (rule.type === 'boolean'){
            if((rule as any).mustBe === true){
                schema = schema.isTrue("Debemos aceptar los terminos y condiciones");
            }
            if((rule as any).mustBe === false){
                schema = schema.isFalse("No debemos aceptar los terminos y condiciones");
            }
        }

    }
    requiredFields[ input.name ] = schema; //* creamos el objeto para este campo
       
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
                    else if(type === 'checkbox'){
                        return (
                             <MyCheckbox key={name} label={label} name={name}/>
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
