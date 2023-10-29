import React, { useContext, useState } from "react";

import { Stepper, Step, StepLabel } from "@mui/material";
import { multistepContext } from "./StepContext";
// import DisplayData from "./Components/DisplayData";
import { Form } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page4 from "./Page4";
import Page3 from "./Page3";
import Header from "./header";

function Mainform() {
  console.log("mainform");
  const { currentStep, finalData } = useContext(multistepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      case 4:
        return <Page4 />;
    }
  }
  const activeStep = 1;
  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <h1>Multi Level Form</h1>
          <div className="center-stepper">
            <Stepper
              style={{ width: "50%" }}
              activeStep={currentStep - 1}
              orientation="horizontal"
            >
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
          </div>
          {showStep(currentStep)}
          {/* <DisplayData /> */}
        </header>
      </div>
    </>
  );
}

export default Mainform;
