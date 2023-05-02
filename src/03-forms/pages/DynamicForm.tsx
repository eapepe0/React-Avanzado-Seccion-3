import formJson from '../data/custom-form.json'

import { Formik , Form } from 'formik'
import { MyTextInput } from '../components'


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
                {formJson.map(({type, name , label , placeholder}) => {
                    return <MyTextInput  key={name}
                                        label={label} 
                                        name={name} 
                                        placeholder={placeholder}  
                                        type={(type as any)} 
                                        />
                })}
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}
