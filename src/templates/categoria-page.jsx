import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { Grid, Card, CardContent, useMediaQuery } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import ExampleImage from "../components/DataGatsbyImage"
import Layout from "../components/layout"
import clsx from "clsx"
import Seo from "../components/SEO/seo"
import Buscador from "../components/sections/BuscadorCS"
import Breadcrums from "../components/Breadcrumbs/Breadcrumbs"
import MostrarCategoria from "../components/Breadcrumbs/MostrarCategorias"
import ButtonsCarr from "../components/ButtonCarr/Buttons"
import CategotiaMovil from '../components/sections/Categoria-pageMovil'
const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    position: "relative",
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,0.17)",
    transition: "border 250ms ease-in-out",
    "&:hover": {
      border: "1px solid rgba(var(--primary), 1)",
    },
  },
  cardSubcategorias: {
    transition: "all 400ms ease-in-out",
    borderTop: "2px solid black",
    "& .icon": {
      fontSize: 64,
    },

    "&:hover": {
      transform: "translateY(-8px)",

      borderTop: "2px solid rgba(var(--primary), 1)",
      "& .icon": {
        color: "rgba(var(--primary),1)",
      },
    },
  },
  intro: {
    padding: "160px 0 0 !important",
    overflow: "visible !important",

    [theme.breakpoints.down("sm")]: {
      padding: "60px 0 0 !important",
    },
  },
}))

const Categoria = ({ data }) => {
  const classes = useStyles()
  const theme = useTheme()
  let { allAllproductosJson, segmentosFilter } = data
  let { subcategoriaLista, Segmento, Categoria, SeoCategoria, SeoImagen } = allAllproductosJson
  const productCategory = allAllproductosJson.edges.map(e => e.node)
  const [productFiltrado, setproductFiltrado] = useState([])
  const SegmentosFilterCategoria = segmentosFilter.edges.map(e => e.node)

  const RecorrerSegmentos = SegmentosFilterCategoria.filter((filtrar) => {
    return filtrar.SegmentoAux === Segmento[0];
  });

  const handleProducto = (prod) => {
    setproductFiltrado(prod)
  }
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <>
      <Layout>
        <section className={clsx("section ", classes.intro)} id="courseList1">
          <div className="container">
            <Seo
              link={
                "https://www.disdelsa.com/categoria/" +
                Categoria[0] +
                "/"
              }
              description={
                "Disdelsa Guatemala " +
                SeoCategoria[0]
              }
              keywords={
                "Disdelsa " + SeoCategoria[0]
              }
              title={
                SeoCategoria[0] + " | Disdelsa "
              }
              image={
                "https://disdelsa.com/imagenes/productos/" +
                SeoImagen[0]
              }
            />
            <div className="mb-4 text-center mx-auto">
              <Breadcrums title="Inicio" seccion={Segmento[0]} SeccionCategoria={Categoria[0]} />
            </div>
            <div className="mb-8 text-center mx-auto">
              <Buscador handleProducto={handleProducto} products={productCategory} />
              <div className="mb-16">             
                <Grid container spacing={1}>
                  <Grid container md={3} sm={4} xs={12}>
                    {isMobile ? <CategotiaMovil RecorrerSegmentos={RecorrerSegmentos} /> : <MostrarCategoria RecorrerSegmentos={RecorrerSegmentos} />}
                  </Grid>
                  <Grid container md={9} sm={8} xs={12} spacing={1}>
                    {productFiltrado.length > 0 ? productFiltrado.map((item, ind) => (
                      <Grid key={ind} item md={3} sm={6} xs={6}>
                        <Card className={`relative h-full card ${classes.card}`}>
                          <Link
                            to={`/producto/${item.ItemCodeAux}/`}
                            style={{
                              cursor: "hand",
                              background: "white",
                              textDecoration: "none",
                            }}
                          >
                            <ExampleImage
                              image={item.Imagen}
                              width={190}
                              height={190}
                            />
                            <div className="text-left p-4">
                              <p className="mt-0 mb-0 text-12 font-semibold text-gray">
                                {item.IdProducto} <br />
                                {item.Descripcion}
                              </p>
                            </div>
                          </Link>
                          <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                          >
                            <ButtonsCarr ProductData={item} title="Cotizar" />
                          </Grid>
                        </Card>
                      </Grid>
                    )) : productCategory.map((item, ind) => (
                      <Grid key={ind} item md={3} sm={6} xs={6}>
                        <Card className={`relative h-full card ${classes.card}`}>
                          <Link
                            to={`/producto/${item.ItemCodeAux}/`}
                            style={{
                              cursor: "hand",
                              background: "white",
                              textDecoration: "none",
                            }}
                          >
                            <ExampleImage
                              image={item.Imagen}
                              width={190}
                              height={190}
                            />
                            <div className="text-left p-4">
                              <p className="mt-0 mb-0 text-12 font-semibold text-gray">
                                {item.IdProducto} <br />
                                {item.Descripcion}
                              </p>
                            </div>
                          </Link>
                          <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                          >
                            <ButtonsCarr ProductData={item} title="Cotizar" />
                          </Grid>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Categoria

export const pageQuery = graphql`
  query($categoria: String!) {
    allAllproductosJson(filter: { CategoriaAux: { eq: $categoria } }) {
      edges {
        node {
          id
          IdRelacion
          BaseFardo
          BaseUnidad
          BaseDefault
          ItemCodeAux
          IdProducto
          Descripcion
          Categoria
          Imagen
          Marca
          Unidad
          Fardo
          IdCategoria
        }
      }
      subcategoriaLista: distinct(field: SubCategoriaAux)
      Segmento:distinct(field: SegmentoAux)
      Categoria:distinct(field: CategoriaAux)
      SeoCategoria:distinct(field: Categoria)
      SeoImagen:distinct(field: Imagen)
    }
    segmentosFilter: allMenuJsonJson {
      edges {
        node {
          SegmentoAux
          Categorias {
            NombreCategoria
            NombreCategoriaAux
          }
        }
      }
    }    
  }
`
