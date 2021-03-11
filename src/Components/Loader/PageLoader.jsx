import { Backdrop, CircularProgress } from "@material-ui/core";
import React from "react";
import { loaderStyles } from "./loader.styles";

const PageLoading = () => {
  const classes = loaderStyles();
  return (
    <Backdrop className={classes.backdrop} open>
      <div className={classes.loading}>
        <div className={classes.loadingInner}>
          <CircularProgress color="inherit" size={25} thickness={6} />
        </div>
      </div>
    </Backdrop>
  );
};

export default PageLoading;
