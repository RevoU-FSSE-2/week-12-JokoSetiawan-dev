import { Input } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";

interface Address {
  address: string;
  city: string;
  state: string;
  zipcode: number;
}

const initialValues = {
  address: "",
  city: "",
  state: "",
  zipcode: 0,
};

const validationSchema = yup.object({
  address: yup.string().required("Please input your address"),
  city: yup.string().required("Input your city name"),
  state: yup.string().required("Input your state"),
  zipcode: yup
    .string()
    .matches(/^\d{5}$/, "Invalid zipcode")
    .required("Input your zipcode"),
});

const AddressForm = () => {
  const handleSubmit = (values: Address) => {
    console.log(values);
  };

  const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <form onSubmit={formMik.handleSubmit}>
      <div>
        <p>Address</p>
        <Input
          name={"address"}
          value={formMik.values.address}
          onChange={formMik.handleChange("address")}
          className={formMik.errors.address && "error"}
        />
        {formMik.errors.address && <p>{formMik.errors.address}</p>}
      </div>
      <div>
        <p>City</p>
        <Input
          name={"city"}
          value={formMik.values.city}
          onChange={formMik.handleChange("city")}
          className={formMik.errors.city && "error"}
        />
        {formMik.errors.city && <p>{formMik.errors.city}</p>}
      </div>
      <div>
        <p>State</p>
        <Input
          name={"state"}
          value={formMik.values.state}
          onChange={formMik.handleChange("state")}
          className={formMik.errors.state && "error"}
        />
        {formMik.errors.state && <p>{formMik.errors.state}</p>}
      </div>
      <div>
        <p>Zipcode</p>
        <Input
          name={"zipcode"}
          value={formMik.values.zipcode}
          onChange={formMik.handleChange("zipcode")}
          className={formMik.errors.zipcode && "error"}
        />
        {formMik.errors.zipcode && <p>{formMik.errors.zipcode}</p>}
      </div>
    </form>
  );
};

export default AddressForm