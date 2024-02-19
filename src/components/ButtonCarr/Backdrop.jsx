import React from "react"
import Backdrop from "@material-ui/core/Backdrop"
import CircularProgress from "@material-ui/core/CircularProgress"
import CheckCircle from "@material-ui/icons/CheckCircle"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "gatsby"
import { ColocarEnfalsoEnviado } from "../../state/reducers/enviarDatosReducers"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const useStyles = makeStyles(theme => ({
  backdrop: {
    color: "#fff",
    position: "fixed",
    width: "100%",
    top: "0",
    left: "0",
    right: "0",
    padding: "20px 0",
    transition: "padding 0.3s linear",
    zIndex: "999999",
  },
  finishMessage: {
    textAlign: "center",
    maxWidth: 600,
    margin: "0 auto",
    "& h4": {
      "& span": {
        textAlign: "center",
        display: "block",
        "& svg": {
          color: theme.palette.primary.main,
          height: "auto",
          width: 148,
        },
      },
    },
  },
}))

export default function SimpleBackdrop({ title }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const enviarDatos = useSelector(state => state.enviarDatos)
  return (
    <div>
      {enviarDatos.buttonDialog ?
        <Backdrop className={classes.backdrop} open={enviarDatos.buttonDialog}>
          {enviarDatos.enviado ? (
            <h4 className={classes.finishMessage}>
              <Typography variant="h4" gutterBottom>
                <span>
                  <CheckCircle />
                </span>
                {enviarDatos.formulario.Mensaje}
              </Typography>
              <Link to={`/`}>
                <AniLink
                  to={"/"}
                  paintDrip
                  duration={0.5}
                  direction="up"
                  hex="#075182"
                >
                  <h2
                    className="font-normal text-44 mt-0 mx-auto mb-16  bg-green rounded text-white px-7"
                    onClick={() => dispatch(ColocarEnfalsoEnviado())}
                  >
                    Cotizar de nuevo
                </h2>
                </AniLink>
              </Link>
            </h4>
          ) : (
            <h4 className="font-normal text-44 mt-0 mx-auto mb-16">
              <CircularProgress color="inherit" />
              {title}
            </h4>
          )}
        </Backdrop>
        : null}
    </div>
  )
}
