import React from "react"
import clsx from "clsx"
import { Grid, Card,useMediaQuery } from "@material-ui/core"
import { makeStyles,useTheme } from "@material-ui/core/styles"
import ExampleImage from "../DataGatsbyImageBanner"
import Img from "gatsby-image"

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    transition: "all 400ms ease-in-out",

    "& .card-icon": {
      position: "absolute",
      fontSize: 200,
      height: 200,
      width: 200,
      left: -80,
      bottom: -80,
      zIndex: 1,
      opacity: 0.24,
      transition: "all 400ms ease-in-out",
    },

    "&:hover": {
      transform: "translateY(-8px)",

      "& .card-icon": {
        transform: "translateY(-8px)",
        color: palette.secondary.main,
        opacity: 0.6,
      },
    },
  },
}))

const Service4 = ({ BannerMarcas }) => {
  const classes = useStyles()
    const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <div className="section section-service4" id="service4">
      <div className="container">
      <h3 className="mt-0 font-normal text-35 text-primary text-center">
          Marcas
        </h3>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {BannerMarcas.map((card, index) => (
            <Grid item lg={3} md={6} sm={12} xs={6} key={index}>
              <Card
                className={clsx("relative overflow-hidden card", classes.card)}
              >
                 <a href={card.Subtitulo} target="_blank">
                <Img
                    sizes={{
                      src: `https://disdelsa.com/imagenes/${card.Imagen}`,
                      aspectRatio: 1.6,
                      sizes: "",
                      srcSet: "",
                    }}
                  />
                </a>
              </Card>
              <div className="max-w-10 mb-1 mx-auto text-center">
                <h4 className={clsx({
                  "mt-0 font-normal text-2 text-primary": !isMobile,
                  "mt-0 font-normal text-12 text-primary": isMobile,
                })}>
                  {/*card.Titulo para titulo de la marca*/ }
                </h4>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Service4
