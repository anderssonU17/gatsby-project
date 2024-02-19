import React from "react"
import { Grid, useMediaQuery } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
import ReactHtmlParser from "react-html-parser"
import { makeStyles } from "@material-ui/core/styles"
import Videos from "./Videos"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

const AnuncioCompra = ({ LandingPages }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
  return (
          <Grid 
            container spacing={1}
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            >
              {isMobile?<div><br /><br /><br /></div>:null}
              {isMobile?<img src="https://disdelsa.com/imagenes/BannerCompra.jpg" width={400} />:<img src="https://disdelsa.com/imagenes/BannerCompra.jpg" width={1200} />}
          </Grid>
  )
}

export default AnuncioCompra
