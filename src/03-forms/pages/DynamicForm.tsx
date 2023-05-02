import formJson from '../data/custom-form.json'

import { Formik , Form } from 'formik'
import { MySelect, MyTextInput } from '../components'


const initialValues : {[key : string ] : any}= {};

for (const input of formJson) {
    initialValues[ input.name ] = input.value;
}

export const DynamicForm = () => {
    
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
        initialValues={initialValues}
        onSubmit={ (values) =>
            console.log(values)
        }

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
                               {/*  {
                                    options?.map((opt) => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))
                                } */}
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
