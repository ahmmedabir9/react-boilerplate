import { makeStyles } from "@material-ui/core";

export const loaderStyles = makeStyles((theme) => ({
  loading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    verticalAlign: "middle",
  },
  loadingInner: {
    width: "100%",
    textAlign: "center",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -10,
    marginLeft: -10,
  },
}));
