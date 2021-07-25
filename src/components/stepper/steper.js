import React from 'react';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
export default ({ stepcount, handleStep }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  switch (stepcount) {
    case 1: {
      return <Step1 handleStep={handleStep} />;
    }
    case 2: {
      return <Step2 handleStep={handleStep} />;
    }
    case 3: {
      return <Step3 handleStep={handleStep} />;
    }
    case 4: {
      return <Step4 handleStep={handleStep} />;
    }
    case 5: {
      return <Step5 handleStep={handleStep} />;
    }

    default: {
      return <></>;
    }
  }
};
