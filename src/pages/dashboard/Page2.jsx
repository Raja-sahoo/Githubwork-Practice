import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multistepContext } from "./StepContext";
export default function Page2() {
  const { setStep, userData, setUserData } = useContext(multistepContext);
  return (
    <div className="flex flex-col items-center justify-center border border-gray-800">
      <div>
        <TextField
          label="Email"
          margin="normal"
          color="secondary"
          value={userData["email"]}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>
      <div>
        <TextField
          label="Address"
          margin="normal"
          color="secondary"
          value={userData["address"]}
          onChange={(e) =>
            setUserData({ ...userData, address: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="School"
          margin="normal"
          color="secondary"
          value={userData["school"]}
          onChange={(e) => setUserData({ ...userData, school: e.target.value })}
        />
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => setStep(1)}
          color="secondary"
        >
          Back
        </Button>
        <Button variant="contained" onClick={() => setStep(3)} color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}
