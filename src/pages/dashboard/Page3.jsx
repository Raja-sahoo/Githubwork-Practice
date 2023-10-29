import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multistepContext } from "./StepContext";

export default function Page3() {
  const { setStep, userData, setUserData } = useContext(multistepContext);
  return (
    <div className="flex flex-col items-center justify-center border border-gray-800">
      <div>
        <TextField
          label="Language"
          margin="normal"
          color="secondary"
          value={userData["language"]}
          onChange={(e) =>
            setUserData({ ...userData, language: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Area"
          margin="normal"
          color="secondary"
          value={userData["area"]}
          onChange={(e) => setUserData({ ...userData, area: e.target.value })}
        />
      </div>
      <div>
        <TextField
          label="Street Name"
          margin="normal"
          color="secondary"
          value={userData["streetname"]}
          onChange={(e) =>
            setUserData({ ...userData, streetname: e.target.value })
          }
        />
      </div>
      <div>
        <Button variant="contained" onClick={() => setStep(2)} color="primary">
          Back
        </Button>
        <Button variant="contained" onClick={() => setStep(4)} color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}
