import { Box, Button, TextField } from "@material-ui/core";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { CryptoContext } from "../../context/CryptoState";
import { auth } from "../../Firebase";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setalert } = CryptoContext();

  const handleSubmit = async () => {
    if (!email || !password) {
      setalert({
        open: true,
        msg: "Please fill all the feilds",
        type: "error",
      });
      return;
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      setalert({
        open: true,
        msg: `Login successful. Welcome ${result.user.email}`,
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
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        style={{ backgroundColor: "#00FFFF" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
