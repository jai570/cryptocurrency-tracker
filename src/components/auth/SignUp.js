import { Box, Button, TextField } from "@material-ui/core";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { CryptoContext } from "../../context/CryptoState";
import { auth } from "../../Firebase";

const SignUp = ({ handleClose }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const { alert, setalert } = CryptoContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpass) {
      setalert({
        open: true,
        msg: "password do not match",
        type: "error",
      });
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
      setalert({
        open: true,
        msg: `Signup successful. Welcome ${result.user.email}`,
      });
      // setuser([...result]);
      // console.log(user);
      handleClose();
    } catch (error) {
      setalert({
        open: true,
        msg: error.message,
        type: "error",
      });
    }
  };
  return (
    <Box
      p={3}
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        required
        onChange={(e) => setemail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        value={password}
        required
        onChange={(e) => setpassword(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Confirm Password"
        type="password"
        value={confirmpass}
        required
        onChange={(e) => setconfirmpass(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#00FFFF" }}
        onClick={(e) => handleSubmit(e)}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
