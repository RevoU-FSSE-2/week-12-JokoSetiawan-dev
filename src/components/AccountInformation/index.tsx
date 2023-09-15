import { Input } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";

interface Account {
  username: string;
  password: string;
}

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object({
  username: yup.string().required("Input your username"),
  password: yup
    .string()
    .required("Input your password")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

const FormAccount = () => {
  const handleSubmit = (values: Account) => {
    console.log(values);
  };

  const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return(
    <form onSubmit={formMik.handleSubmit}>
            <div>
                <p>Username</p>
                <Input name={'username'}
                value={formMik.values.username}
                onChange={formMik.handleChange('username')}
                className={formMik.errors.username && 'error'} />
                {formMik.errors.username && (
                    <p>{formMik.errors.username}</p>
                )}
            </div>
            <div>
                <p>Password</p>
                <Input name={'password'} 
                value={formMik.values.password}
                onChange={formMik.handleChange('password')}
                className={formMik.errors.password && 'error'}/>
                {formMik.errors.password && (
                    <p>{formMik.errors.password}</p>
                )}
            </div>
        </form>
  )
};

export default FormAccount