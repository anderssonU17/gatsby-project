import React from "react";
import { Button, Grid, Typography, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "gatsby";
import clsx from "clsx";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { suscripcionClient, IntentarNuevamenteActions } from "../../state/reducers/suscribeteReducers";
import SendIcon from "@material-ui/icons/Send";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    position: "absolute",
    right: 3,
    zIndex: 2,
  },
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    fontSize: "1rem", // Tamaño de fuente para dispositivos móviles
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1rem", // Tamaño de fuente para dispositivos mayores a 600px de ancho
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem", // Tamaño de fuente para dispositivos mayores a 960px de ancho
    },
  },
  checkbox: {
    "& .MuiIconButton-root": {
      padding: 0,
      borderRadius: 6, // Bordes más redondeados
      border: "2px solid #ccc", // Grosor del borde aumentado
      marginRight: theme.spacing(1),
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    },
    "& svg": {
      fontSize: 26, // Tamaño del icono del checkbox aumentado
      color: "#007bff",
    },
    "&$checked .MuiIconButton-root": {
      backgroundColor: "#007bff",
      borderColor: "#007bff",
      "&:hover": {
        backgroundColor: "#0056b3",
      },
    },
    "&$checked svg": {
      color: "#fff",
    },
  },
  checked: {},
  link: {
    fontSize: "inherit", // Tamaño de fuente heredado
    whiteSpace: "nowrap",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center", // Centrar texto en dispositivos móviles
    },
  },
}));

const CallToAction2 = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [Correo, guardarCorreo] = React.useState("");
  const [chekear, guardarcheking] = React.useState(false);
  const correoValido = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
  const suscribirse = useSelector((state) => state.suscribirse);

  const sumitSuscripcion = (e) => {
    e.preventDefault();
    if (Correo === "" || chekear === true) {
      toast.success(
        <div>
          <Grid container item md={12}>
            <Grid item md={2}>
              <SendIcon fontSize="large" />
            </Grid>
            <Grid item md={10} className="iconjustify">
              <Typography>Enviado Solicitud de Suscripción!</Typography>
            </Grid>
          </Grid>
        </div>,
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          title: "ttt",
        }
      );
      dispatch(suscripcionClient(Correo));
      guardarCorreo("");
      guardarcheking(false);
      return;
    }
    //dispatch(suscripcionClientError())
  };

  const AgregarItem = () => {
    if (chekear === true) {
    } else {
      toast.warn(
        <div>
          <Grid container item md={12}>
            <Grid item md={2}>
              <ErrorOutlineIcon fontSize="large" />
            </Grid>
            <Grid item md={10} className="iconjustify">
              <Typography>Acepte los términos y condiciones</Typography>
            </Grid>
          </Grid>
        </div>,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          title: "ttt",
        }
      );
    }
  };

  return (
    <section className="section section-cta2" id="cta2">
      <div className="container text-center">
        <div className="max-w-770 mx-auto">
          <h5 className="mb-8 text-primary">Entérate de los nuevos productos y promociones de Disdel!</h5>
          {suscribirse.error && (
            <Grid style={{ textAlign: "center" }}>
              <Button
                color="primary"
                className={clsx("bg-primary rounded text-13 text-white px-7 py-11px", classes.button)}
                onClick={() => dispatch(IntentarNuevamenteActions())}
              >
                Intentar de nuevo
              </Button>
            </Grid>
          )}
          {!suscribirse.error ? (
            <>
              <ValidatorForm onSubmit={sumitSuscripcion}>
                <TextValidator
                  label="Ingresa tu Email"
                  name="Correo"
                  value={Correo}
                  variant="outlined"
                  size="small"
                  placeholder="Ingresa tu Email:"
                  fullWidth
                  onChange={(e) => guardarCorreo(e.target.value)}
                  validators={["required", "isEmail"]}
                  errorMessages={["Este campo es requerido", "El correo es Inválido"]}
                  InputProps={{
                    style: {
                      borderRadius: 300,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: "0.75rem",
                      background: "rgba(255,255,255,0.87)",
                    },
                    endAdornment: suscribirse.send ? (
                      <Button
                        type="submit"
                        disabled
                        className={clsx("bg-primary rounded text-13 text-white px-7 py-11px", classes.button)}
                      >
                        <span className="ml-2">Enviando</span>
                      </Button>
                    ) : (
                      <Button
                        color="primary"
                        type="submit"
                        variant="contained"
                        className={clsx(" rounded text-13  px-7 py-11px", classes.button)}
                        disabled={!correoValido.test(Correo) || !chekear}
                        onClick={() => AgregarItem()}
                      >
                        <span className="ml-2">Suscríbirme</span>
                      </Button>
                    ),
                  }}
                />
                <div className={classes.checkboxContainer}>
                  <Checkbox
                    className={clsx(classes.checkbox, classes.root)}
                    disableRipple
                    color="default"
                    checked={chekear}
                    onChange={() => guardarcheking(!chekear)}
                  />
                  <Typography variant="body2" className={classes.link}>
                    Acepto que he leído y acepto los términos de
                  </Typography>
                  <Link
                    to={"/Politicas"}
                    style={{ paddingTop: 0, marginLeft: "3px" }}
                    className="event-title m-1 text-primary font-normal"
                  >
                    Políticas de privacidad
                  </Link>
                </div>
              </ValidatorForm>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction2;
