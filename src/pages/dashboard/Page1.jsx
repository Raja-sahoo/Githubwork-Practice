import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multistepContext } from "./StepContext";

export default function Page1() {
  const { setStep, userData, setUserData } = useContext(multistepContext);
  return (
    <div className="flex flex-col items-center justify-center ">
      <div>
        <TextField
          label="First Name"
          margin="normal"
          color="secondary"
          value={userData["firstname"]}
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Last Name"
          margin="normal"
          color="secondary"
          value={userData["lastname"]}
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Contact Number"
          margin="normal"
          color="secondary"
          value={userData["contact"]}
          onChange={(e) =>
            setUserData({ ...userData, contact: e.target.value })
          }
        />
      </div>
      <div>
        <Button variant="contained" onClick={() => setStep(2)} color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}
