import React from "react"
import { Grid, useMediaQuery } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
import ReactHtmlParser from "react-html-parser"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Videos from "./Videos"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
   height:500
  },
}))

const Testimonial1 = ({ LandingPages }) => {
  const classes = useStyles()
  const theme = useTheme()
  const recorrerLandingNuestaE = LandingPages.find(filtrar => {
    return filtrar.TipoLanding === 8
  })
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <div className="section" id="testimonial2">
      <div className="container">
        <Grid container spacing={1}>
          <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="center"
              >
                {ReactHtmlParser(
                  
                  isMobile?recorrerLandingNuestaE.CuerpoPajinaMovil :recorrerLandingNuestaE.CuerpoPagina
                   
                )}
              </Grid>
          </Grid>
          {/* <Grid item xs={6}>
            <Paper className={classes.paper} elevation="0">
            {ReactHtmlParser(
                  recorrerLandingNuestaE.CuerpoPagina
               )}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation="0">
              <img src="https://disdelsa.com/imagenes/BannerExperiencia.png" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation="0">
                <img src="https://disdelsa.com/imagenes/BannerExperiencia2.png" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation="0">
            <Videos />
              </Paper>
          </Grid> */}
        </Grid>
      </div>
    </div>
  )
}

export default Testimonial1;
