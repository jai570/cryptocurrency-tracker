import { Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { CryptoContext } from "../context/CryptoState";

const Alert = () => {
  const { alert, setalert } = CryptoContext();

  //   const handleClick = () => {
  //     setOpen(true);
  //   };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setalert({ open: false });
  };
  return (
    <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert
        onClose={handleClose}
        severity={alert.type}
        elevation={10}
        variant="filled"
      >
        {alert.msg}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
