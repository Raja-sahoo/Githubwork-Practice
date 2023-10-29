import React, { useState } from "react";

export const multistepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  function submitData() {
    setFinalData((finalData) => [...finalData, userData]);
    console.log(finalData);
  }
  return (
    <div>
      <multistepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        <App />
      </multistepContext.Provider>
    </div>
  );
};

export default StepContext;
