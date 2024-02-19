import React from "react"
import { Grid, Card, useMediaQuery } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import ExampleImage from "../DataGatsbyImageBanner"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import clsx from "clsx"

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    transition: "all 400ms ease-in-out",
    borderRadius: 8,
    textAlign: "center",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    },
  },
  cardContent: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 120, // Reducir la altura de las tarjetas
  },
  cardImage: {
    maxWidth: "70%", // Reducir el tamaño máximo de la imagen dentro de la tarjeta
    height: "auto", // Ajustar la altura de la imagen automáticamente
    borderRadius: 8, // Reducir el radio de borde para que la imagen tenga esquinas redondeadas
  },
  cardTitle: {
    marginTop: theme.spacing(2), // Añadir un poco de espacio entre la imagen y el título
    fontWeight: "bold",
    color: palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
    },
  },
}))

const ImagenesSegmentos = ({ SegmentosImagen }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <div className="section section-service4" id="service4">
      <div className="container5">
        <Grid container spacing={isMobile ? 2 : 4} justify="center">
          {SegmentosImagen.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <AniLink
                ip
                hex="#075182"
                to={`/${card.SegmentoAux}/`}
                paintDrip
                duration={0.3}
                direction="up"
              >
                <Card
                  elevation={0}
                  className={clsx("relative overflow-hidden card", classes.card)}
                >
                  <div className={classes.cardContent}>
                    <ExampleImage image={card.Imagen} width={isMobile ? 150 : 160} height={isMobile ? 150 : 160 } />
                  </div>
                </Card>
              </AniLink>
              <div className="max-w-10 mb-1 mx-auto text-center">
                <h4 className={clsx(classes.cardTitle)}>
                  {card.NombreSegmento}
                </h4>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default ImagenesSegmentos
