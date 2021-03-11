import { Container, Typography } from "@material-ui/core";
import React from "react";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <div className="d-flex flex-column justify-content-center text-center vh-80">
        <Typography variant="h2">react.js is awesome</Typography>
      </div>
    </Container>
  );
};

export default HomePage;
