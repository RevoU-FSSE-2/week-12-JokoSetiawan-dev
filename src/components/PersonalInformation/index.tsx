import {Input, DatePicker} from "antd"
import { useFormik } from "formik"
import * as yup from "yup"

interface Personal {
    fullname: string;
    email: string;
    birthdate: string;
}

const initialValues = {
    fullname: '',
    email: '',
    birthdate: '',
}

const validationSchema = yup.object ({
    fullname: yup.string().required('Please input your fullname'),
    email: yup.string().email('Email format invalid').required('Please nput your email'),
    birthdate: yup.string().required('Please nput your birthdate').matches(/^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, 'Invalid birthdate format (DD-MM-YYYY)')
})

const FormPersonal = () => {
    const handleSubmit = (values: Personal) => {
        console.log(values);
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return(
        <form onSubmit={formMik.handleSubmit}>
            <div>
                <p>Fullname</p>
                <Input name={'fullname'}
                value={formMik.values.fullname}
                onChange={formMik.handleChange('fullname')}
                className={formMik.errors.fullname && 'error'} />
                {formMik.errors.fullname && (
                    <p>{formMik.errors.fullname}</p>
                )}
            </div>
            <div>
                <p>Email</p>
                <Input name={'email'} 
                value={formMik.values.email}
                onChange={formMik.handleChange('email')}
                className={formMik.errors.email && 'error'}/>
                {formMik.errors.email && (
                    <p>{formMik.errors.email}</p>
                )}
            </div>
            <div>
                <p>Date of Birth</p>
                <DatePicker/>
            </div>
        </form>
    )
}

export default FormPersonal
