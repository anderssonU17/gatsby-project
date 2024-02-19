import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { Grid, Card, useMediaQuery } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import ExampleImage from "../components/DataGatsbyImage"
import Layout from "../components/layout"
import Seo from "../components/SEO/seo"
import Buscador from "../components/sections/BuscadorCS"
import CardContent from "@material-ui/core/CardContent"
import clsx from "clsx"
import Breadcrums from "../components/Breadcrumbs/Breadcrumbs"
import MostrarSubcategorias from "../components/Breadcrumbs/MostrarSubcategorias"
import ButtonsCarr from "../components/ButtonCarr/Buttons"


const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    position: "relative",
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,0.17)",
    transition: "border 250ms ease-in-out",
    "&:hover": {
      // margin: "-1px !important",
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

const SubCategoria = ({ data }) => {
  const classes = useStyles()
  const theme = useTheme()
  let { allAllproductosJson, segmentosFilter } = data
  let { subcategoriaLista, Segmento, Categoria, SeoSubcategoria, SeoImagen } = allAllproductosJson
  const productSubCategory = allAllproductosJson.edges.map(e => e.node)
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
                "https://www.disdelsa.com/subcategoria/" +
                subcategoriaLista[0] +
                "/"
              }
              description={
                "Disdelsa Guatemala " +
                SeoSubcategoria[0]
              }
              keywords={
                "Disdelsa " + SeoSubcategoria[0]
              }
              title={
                SeoSubcategoria[0] + " | Disdelsa "
              }
              image={
                "https://disdelsa.com/imagenes/productos/" +
                SeoImagen[0]
              }
            />
            <div className="mb-4 text-center mx-auto">
              <Breadcrums title="Inicio" seccion={Segmento[0]} SeccionCategoriaLink={Categoria[0]} SeccionSubCategoria={subcategoriaLista[0]} />
            </div>
            <div className="mb-8 text-center mx-auto">
              <Buscador handleProducto={handleProducto} products={productSubCategory} />
              <div className="mb-16">
                <Grid container spacing={1}>
                  <Grid container md={3} sm={4} xs={12}>
                    {isMobile ? null : <MostrarSubcategorias RecorrerSegmentos={RecorrerSegmentos} />}
                  </Grid>
                  <Grid container md={9} sm={8} xs={12} spacing={1}>
                    {productFiltrado.length > 0 ?
                      productFiltrado.map((item, ind) => (
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
                      )) : productSubCategory.map((item, ind) => (
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

export default SubCategoria

export const pageQuery = graphql`
  query($subcategoria: String!) {
    allAllproductosJson(filter: { SubCategoriaAux: { eq: $subcategoria } }) {
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
          Empaque
          Unidad
          Fardo
        }
      }
      subcategoriaLista: distinct(field: SubCategoriaAux)
      Segmento:distinct(field: SegmentoAux)
      Categoria:distinct(field: CategoriaAux)
      SeoSubcategoria:distinct(field: SubCategoria)
      SeoImagen:distinct(field: Imagen)
    }
    segmentosFilter: allMenuJsonJson {
      edges {
        node {
          SegmentoAux
          Categorias {
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
