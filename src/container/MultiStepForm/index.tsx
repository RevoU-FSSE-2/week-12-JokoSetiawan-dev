import { Button } from "antd";
import { useState } from "react";
import { FormAccount } from "../../components";

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

  return <>{step === 1 && <FormAccount />}</>;
};

export default MultistepForm;
