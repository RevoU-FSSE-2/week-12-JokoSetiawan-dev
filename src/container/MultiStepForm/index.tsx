import { Button } from "antd";
import { useState } from "react";
import { FormPersonal, AddressForm, FormAccount } from "../../components";

const MultistepForm = () => {
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    if (step === 1) {
      setStep((prevStep) => prevStep + 1);
    }
    if (step === 2) {
      setStep((prevStep) => prevStep + 1);
    }
    return;
  };

  const handlePrev = () => {
    if (step === 2) {
      setStep((prevStep) => prevStep - 1);
    }
    if (step === 3) {
      setStep((prevStep) => prevStep - 1);
    }
    return;
  };

  return (
    <>
      {step === 1 && <FormPersonal />}
      {step === 2 && <AddressForm />}
      {step === 3 && <FormAccount />}

      {step === 1 && (
        <Button type={"primary"} htmlType={"submit"} onClick={handleNext}>
          Next
        </Button>
      )}
      {step === 2 && (
        <div>
          <Button onClick={handlePrev}>Back</Button>
          <Button type={"primary"} htmlType={"submit"} onClick={handleNext}>
            Next
          </Button>
        </div>
      )}
      {step === 3 && (
        <Button type={"primary"} htmlType={"submit"} onClick={handleNext}>
          Submit
        </Button>
      )}
    </>
  );
};

export default MultistepForm;
