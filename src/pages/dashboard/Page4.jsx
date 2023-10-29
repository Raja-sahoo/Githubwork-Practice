import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multistepContext } from "./StepContext";

export default function Page4() {
  const { setStep, userData, setUserData, submitData } =
    useContext(multistepContext);
  return (
    <div className="flex flex-col items-center justify-center border border-gray-800">
      <div>
        <TextField
          label="Bulding Name"
          margin="normal"
          color="secondary"
          value={userData["buildingname"]}
          onChange={(e) =>
            setUserData({ ...userData, buildingname: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Colleage Name"
          margin="normal"
          color="secondary"
          value={userData["colleagename"]}
          onChange={(e) =>
            setUserData({ ...userData, colleagename: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="University Name"
          margin="normal"
          color="secondary"
          value={userData["universityname"]}
          onChange={(e) =>
            setUserData({ ...userData, universityname: e.target.value })
          }
        />
      </div>
      <div>
        <Button variant="contained" onClick={() => setStep(3)} color="primary">
          Back
        </Button>
        <Button variant="contained" onClick={submitData} color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
}
