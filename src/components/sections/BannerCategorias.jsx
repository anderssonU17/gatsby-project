import React from "react"
import clsx from "clsx"
import { Grid, Card, useMediaQuery } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Link } from "gatsby";
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
  cardOverlay: {
    padding: "0px 1rem",
    transition: "all 250ms ease-in-out",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute",
    borderRadius: 8,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    color: palette.primary.contrastText,
    background: "rgba(0,0,0,0.67)",
    zIndex: 5,
  },
  cardTitle: {
    borderBottom: "1px solid rgba(255,255,255,0.87)",
  },
  cardHolder: {
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
    "&:hover $cardOverlay": {
      opacity: 1,
    },
  },
}))

const Service4 = ({ bannerC }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <div className="section section-service4" id="service4">
      <div className="container">
        <Grid container spacing={3}>
          {bannerC.map((card, index) => (
            <Grid item lg={3} md={6} sm={12} xs={6} key={index}>
              <Link to={`${card.Subtitulo}`}>
              <div className={classes.cardHolder}>
                <Card
                  className={clsx(
                    "relative overflow-hidden card",
                    classes.card
                  )}
                >
                  <Img
                    sizes={{
                      src: `https://disdelsa.com/imagenes/${card.Imagen}`,
                      aspectRatio: 1,
                      sizes: "",
                      srcSet: "",
                    }}
                  />
                  <div className={classes.cardOverlay}>
                    <div>
                      <h5
                        className={clsx(
                          "m-0 mb-2 pb-2 font-medium inline-block",
                          classes.cardTitle
                        )}
                      >
                        {card.Titulo}
                      </h5>
                    </div>
                  </div>
                </Card>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Service4
