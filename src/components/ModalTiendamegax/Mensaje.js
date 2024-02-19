import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  finishMessage: {
    textAlign: "center",
    maxWidth: 600,
    background: "white",
    borderRadius: 15,
    margin: "0 auto",
    "& h4": {
      "& span": {
        textAlign: "center",
        display: "block",
        "& svg": {
          color: "#3E8F41",
          height: "auto",
          width: 148,
        },
      },
    },
  },
  button: {
    display: "inline-block",
    textDecoration: "none",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const Mensaje = () => {
  const classes = useStyles();
  const loading = useSelector((state) => state.formMegax);
  return (
    <div className={classes.finishMessage}>
      <Typography variant="h4" gutterBottom>
        <span>
          <CheckCircle />
        </span>
        Gracias
      </Typography>
      <Typography variant="subtitle1">
        &nbsp;
        <strong>{loading.enviado ? loading.Mensaje:""}</strong>
        .&nbsp;
      </Typography>
    </div>
  );
};

export default Mensaje;
