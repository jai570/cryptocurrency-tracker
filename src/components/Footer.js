import { Container, Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <Container>
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <hr style={{ marginBottom: "15px" }} />
        <Typography
          style={{
            fontFamily: "Montserrat",
            marginTop: "10px",
          }}
        >
          Made By Jai Kishan Sharma, 2022
        </Typography>
      </div>
    </Container>
  );
};

export default Footer;
