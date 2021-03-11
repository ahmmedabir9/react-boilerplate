import { CircularProgress } from "@material-ui/core";
import React from "react";
import { loaderStyles } from "./loader.styles";

const ButtonLoader = (props) => {
  const classes = loaderStyles();
  return (
    <CircularProgress
      className={classes.buttonProgress}
      color="inherit"
      size={18}
      thickness={6}
    />
  );
};

export default ButtonLoader;
