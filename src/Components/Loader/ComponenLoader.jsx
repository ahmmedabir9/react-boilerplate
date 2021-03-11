import { CircularProgress } from "@material-ui/core";
import React from "react";
import { loaderStyles } from "./loader.styles";

const ComponentLoader = ({ height }) => {
  const classes = loaderStyles();
  return (
    <div className={classes.loading} style={{ minHeight: height }}>
      <div className={classes.loadingInner}>
        <CircularProgress color="inherit" size={25} thickness={6} />
      </div>
    </div>
  );
};

export default ComponentLoader;
