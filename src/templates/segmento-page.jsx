import React, { Fragment } from "react"
import { graphql,Link } from "gatsby"
import Layout from "../components/layout"
import ExampleImage from "../components/DataGatsbyImageBanner"
import { Grid } from "@material-ui/core"
import { makeStyles,useTheme } from "@material-ui/core/styles"
import Seo from "../components/SEO/seo"
import MostrarCategoriaSubcategoria from "../components/Breadcrumbs/MostrarCategoriasYsubcategoria"
import Breadcrums from "../components/Breadcrumbs/Breadcrumbs"
import {useMediaQuery } from "@material-ui/core"
import clsx from "clsx"
import AnuncioCompra from '../components/sections/AnuncioCompra'

const useStyles = makeStyles(({ palette, ...theme }) => ({
  intro: {
    padding: "160px 0 0 !important",
    overflow: "visible !important",

    [theme.breakpoints.down("sm")]: {
      padding: "60px 0 0 !important",
    },
  },
}))

const Segmento = ({ data }) => {
  const classes = useStyles()
  const theme = useTheme()
  let { segmentos } = data
  const Segmento = segmentos.edges.map(e => e.node)
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <Layout>
      <div className={clsx("section ", classes.intro)} id="service6">
      <AnuncioCompra />
      <div>
        <br />
      </div>

        <div className="container">
        <Seo
              link={
                "http://www.disdelsa.com/" +
                Segmento[0].SegmentoAux +
                "/"
              }
              description={
                "Disdelsa Guatemala " +
                Segmento[0].NombreSegmento
              }
              keywords={
                "Disdelsa " + Segmento[0].NombreSegmento
              }
              title={
                Segmento[0].NombreSegmento + " | Disdelsa "
              }
              image={
                "https://disdelsa.com/imagenes/" +
                Segmento[0].Imagen
              }
            />
        <div className="mb-8">
          <Breadcrums title="Inicio" seccionSeg={Segmento[0].NombreSegmento}/>
          </div>
          <div className="mb-16">

          <Grid container spacing={1}>
          <Grid container md={3} sm={4} xs={12}>
          {isMobile?null: <MostrarCategoriaSubcategoria RecorrerSegmentos={Segmento} />}
          </Grid>
          <Grid container md={9} sm={8} xs={12} spacing={1}>
            {Segmento.map((card,index )=> (
              <Fragment key={index}>
                {card.Categorias.map((cat, index) => (
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={12}
                    xs={6}
                    key={index}
                    className="text-center"
                  >
                     <Link to={`/categoria/${cat.NombreCategoriaAux}/`}>
                    <div
                      className={clsx({
                        "h-200 w-200 rounded overflow-hidden mx-auto p-6 card":!isMobile,
                        "h-100 w-100 rounded overflow-hidden mx-auto p-2 card": isMobile,
                       } )}
                    >
                      <ExampleImage
                        image={cat.Imagen}
                        width={isMobile?100:200}
                        height={isMobile?100:200}
                      />
                    </div>
                    </Link>
                    <p className="uppercase">{cat.NombreCategoria}</p>
                  </Grid>
                ))}
              </Fragment>
            ))}
          </Grid>
          </Grid>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Segmento

export const pageQuery = graphql`
  query($segmento: String!) {
    segmentos: allMenuJsonJson(filter: { SegmentoAux: { eq: $segmento } }) {
      edges {
        node {
          Banner
          Imagen
          SegmentoAux
          NombreSegmento
          Categorias {
            IdCategoria
            NombreCategoria
            NombreCategoriaAux
            Imagen
            Descripcion
            Banner
            SubCategorias {
              NombreSubCategoria
              NombreSubCategoriaAux
            }
          }
        }
      }
    }
  }
`
