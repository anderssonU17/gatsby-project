import React from "react"
import clsx from "clsx"
import ReactHtmlParser from "react-html-parser";
import { graphql } from "gatsby"
import { useMediaQuery, Grid } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Seo from "../components/SEO/seo";
import Layout from "../components/layout"

const useStyles = makeStyles(({ palette, ...theme }) => ({
  intro: {
    padding: "70px 0 0 !important",
    overflow: "visible !important",

    [theme.breakpoints.down("sm")]: {
      padding: "60px 0 0 !important",
    },
  },
}))

const Testimonial9 = ({ data }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
  let {
    dataJson: { Paginas }
  } = data
  const recorrerConocenos = Paginas.LandingPages.find((filtrar) => {
    return filtrar.TipoLanding === 6;
  });
  return (
    <Layout>
      <div className={clsx("section ", classes.intro)} id="testimonial25">
        <Seo title={"Conocenos |Disdelsa"}
          description={"Disdelsa, distribucion y comercializacion de productos de limpieza "}
          keywords={"Disdelsa, Productos de limpieza, suministros de limpieza "}
          link={"https://disdelsa.com/Conocenos"}
          title={" Conocenos | Disdelsa "}
          image="https://disdelsa.com/imagenes/BannerImagen-img2059-19-8-2020-84427.png"
        />
        <div className="container">
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {ReactHtmlParser(isMobile ? recorrerConocenos.CuerpoPajinaMovil : recorrerConocenos.CuerpoPagina)}
          </Grid>
        </div>
      </div>
    </Layout>
  )
}
export default Testimonial9
export const pageQuery = graphql`
query{
  dataJson {
    Paginas {
      LandingPages {
              EntityID
              IdDivision
              Division
              IdLandingPage
              IdCompania
              TipoLanding
              Titulo
              Subtitulo
              CuerpoPagina
              CuerpoPajinaMovil
      }
    }
  }
}
`