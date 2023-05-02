import formJson from '../data/custom-form.json'

import { Formik , Form } from 'formik'
import { MyTextInput } from '../components'

export const DynamicForm = () => {
    console.log(formJson)
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
        initialValues={{
            name:""
        }}
        onSubmit={ (values) =>
            console.log(values)
        }

        >
            {(formik)=>(
                <Form>
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
