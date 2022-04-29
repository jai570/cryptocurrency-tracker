import { makeStyles } from "@material-ui/core";
import React from "react";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles((theme) => ({
    selectbutton: {
      border: "1px solid #00FFFF",
      borderRadius: 5,
      padding: 10,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "#00FFFF" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#00FFFF",
        color: "black",
      },
      width: "22%",
      //   margin: 5,
    },
  }));
  const classes = useStyles();
  return (
    <span className={classes.selectbutton} onClick={onClick}>
      {children}
    </span>
  );
};

export default SelectButton;
