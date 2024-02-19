import React, { useEffect, useState } from "react"
import loadable from '@loadable/component'
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { makeStyles, useTheme, lighten } from "@material-ui/core/styles"
import { Grid, Divider } from "@material-ui/core"
import clsx from "clsx"
import ReactHtmlParser from "react-html-parser"
import ExampleImage from "../components/DataGatsbyImage"
import ButtonsCarr from "../components/ButtonCarr/BotonCotizarInterno"
import AutoRotatingCarouselModal from "../components/ButtonCarr/AutoRotatingCarouselModal"
import { useDispatch, useSelector } from "react-redux"
import Seo from "../components/SEO/seo"
import { EjecutarAutoRating } from "../state/reducers/autoratingReducers"
import Breadcrums from "../components/Breadcrumbs/Breadcrumbs"
import SideBySideMagnifier from "../components/Breadcrumbs/SideBySideMagnifier"
import ContextMenu from "../components/sections/useContextMenu"
import HistorialProductosVisitados from "../components/ProductosVistos/HistorialProductosVisitados"
const Carousel = loadable(() => import('../components/common/CarouselBanner'))
const ProductosVistos = loadable(() => import('../components/ProductosVistos/vistosRecientemente'))

const useStyles = makeStyles(({ palette, ...theme }) => ({
  borderedIcon: {
    //  border: "2px solid rgba(var(--secondary),0.8)",
  },
  intro: {
    padding: "160px 0 0 !important",
    overflow: "visible !important",

    [theme.breakpoints.down("sm")]: {
      padding: "60px 0 0 !important",
    },
  },
  card: {
    "& .card-icon": {
      fontSize: "2em",
      transition: "all 350ms ease-in-out",
    },
  },
  evenetCard: {
    display: "flex",
    padding: "1.5rem 3rem",
    borderRadius: 12,
    border: `1px solid rgba(0,0,0,0.14)`,
    transition: "all 250ms ease",
    "&:hover": {
      border: `1px solid rgba(var(--primary),1)`,
      background: "rgba(var(--primary),0.075)",
      "& .buy-ticket-button": {
        background: palette.primary.main,
        color: palette.primary.contrastText,
      },
    },
    "& .circle-holder": {
      marginRight: "3rem",
      border: "2px solid rgba(var(--primary),0.15)",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
      flexDirection: "column",

      "& .circle-holder": {
        margin: 0,
        marginBottom: "1rem",
      },
    },
  },
  buttonGroupBG: {
    background: lighten(palette.primary.light, 0.9),
    "&>div": {
      transition: "all 250ms ease",
      "&:hover": {
        background: palette.primary.main,
        color: palette.primary.contrastText,
        borderRadius: 8,
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        width: "30%",
      },
    },
  },
}))

const Producto = ({ data }) => {
  const classes = useStyles()
  const { xPos, yPos, showMenu } = ContextMenu()
  const theme = useTheme()
  const dispatch = useDispatch()
  let { allproductosJson } = data
  const [cantidad, guardarCantidad] = useState(1)
  const [baseProducto, guardarBaseProducto] = useState("Y")
  const [tabIndex, setTabIndex] = useState(0)
  ///levantar Autorarting 
  const Autorartingbool = useSelector(state => state.rating)
  useEffect(() => {
    allproductosJson.Cantidad = cantidad;
  }, [cantidad])

  return (
    <Layout>
      <section className={clsx("section ", classes.intro)} id="services11">
        <div className="container text-center"  style={{ top: showMenu ? yPos : null, left: showMenu ? xPos : null }}>
          <Seo
            title={allproductosJson.Descripcion}
            link={
              "https://www.disdelsa.com/producto/" +
              allproductosJson.ItemCodeAux +
              "/"
            }
            description={allproductosJson.Descripcion}
            descripcionlarga={allproductosJson.DescripcionLarga}
            keywords={allproductosJson.Seo.keywords}
            image={allproductosJson.Seo.imagePage}
            id={allproductosJson.IdProducto}
            marca={allproductosJson.Marca}
            CodigoBarra={allproductosJson.CodigoBarras}
            Catalogo={allproductosJson.Catalogo}
            Categorias={allproductosJson.Seo.Categorias}
            Relacionados={allproductosJson.ProductosRelacionados}
            Model={allproductosJson.Seo.LinkSubCategoria}
            MultiploUnidad={allproductosJson.MultiploUnidad}
            Unidad={allproductosJson.Unidad}
            Fardo={allproductosJson.Fardo}
            Tags={allproductosJson.Seo.Tags}
            descripcionAux={allproductosJson.DescripcionAux}
            Altura={allproductosJson.Altura}
            Ancho={allproductosJson.Ancho}
            ImagenMarca={allproductosJson.ImagenMarca}
            Peso={allproductosJson.Peso}
          />

          {<HistorialProductosVisitados producto={allproductosJson} />}
          <div className="mb-4 text-center mx-auto">
            <Breadcrums title="Inicio" seccion={allproductosJson.SegmentoAux} SeccionCategoriaLink={allproductosJson.CategoriaAux} SeccionSubCategoriaLink={allproductosJson.SubCategoriaAux} />
          </div>
          {Autorartingbool.cargando ? <AutoRotatingCarouselModal loading={Autorartingbool.cargando} imagenes={allproductosJson} /> : null}
          <Grid container spacing={2} alignItems="center">
            <Grid item lg={6} md={6} sm={12}>
              <Grid container spacing={0}>
                <Carousel
                  bulletColor={theme.palette.primary.main}
                  slidesPerView={1}
                  spacing={0}
                  navigation={false}
                  paginationClass="mt-16"
                  carouselId="carousel-9"
                >
                  {allproductosJson.Imagenes.map((item, index) => (
                    <Grid key={index} onClick={() => dispatch(EjecutarAutoRating(true))}>
                      <ExampleImage
                        image={item.Imagen}
                        width={400}
                        height={400}
                      />
                    </Grid>
                  ))}
                </Carousel>

                <Grid>
                  <SideBySideMagnifier
                    allproductosJson={allproductosJson}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <h3 className=""> {allproductosJson.Descripcion}</h3>
              <p>
                <span>
                  <b>Disdel # </b>
                </span>
                {allproductosJson.ItemCodeAux}

                {ReactHtmlParser(
                  allproductosJson.DescripcionLarga
                    ? allproductosJson.DescripcionLarga
                    : ""
                )}
                <br />
                <span>
                  <b>Categoria : </b>
                </span>
                {allproductosJson.Seo.Categorias}
                <br />
                {allproductosJson.Seo.Tags}
                <br />
                {allproductosJson.Seo.keywords}
              </p>
              <div className={classes.evenetCard}>
                <div>
                  <ButtonsCarr
                    producto={allproductosJson}
                    title="Lo necesito"
                  />
                </div>
              </div>
              <br />
            </Grid>
          </Grid>
          <div className="inline-block mb-10">
            <div
              className={`flex flex-wrap items-center border-radius-8 ${classes.buttonGroupBG}`}
            >
              <div
                className="px-6 py-2 cursor-pointer"
                onClick={() => setTabIndex(0)}
              >
                Especificaciones
              </div>
              <div
                className="px-6 py-2 cursor-pointer"
                onClick={() => setTabIndex(1)}
              >
                Descripcion
              </div>
            </div>
          </div>
          <Divider className="bg-light-primary" />
          {tabIndex === 0 ? (
            <div className="mt-4 mb-8 relative">
              <Grid item md={12} xs={12}>
                <Grid container>
                  <Grid item md={4} xs={12}>
                    <Grid container>
                      <Grid item md={5} xs={5}>
                        <span>
                          <b> Empaque Individual: </b>
                        </span>
                      </Grid>
                      <Grid item md={7} xs={7}>
                        {allproductosJson.Empaque
                          ? allproductosJson.Empaque
                          : "Sin Definir"}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <Grid container>
                      <Grid item md={5} xs={5}>
                        <span>
                          <b> Marca: </b>
                        </span>
                      </Grid>
                      <Grid item md={7} xs={7}>
                        {allproductosJson.Marca
                          ? allproductosJson.Marca
                          : "N/A"}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <Grid container>
                      <Grid item md={5} xs={5}>
                        <span>
                          <b> Peso:</b>
                        </span>
                      </Grid>
                      <Grid item md={7} xs={7}>
                        {allproductosJson.Peso
                          ? allproductosJson.Peso
                          : "Sin Definir"}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider />
              <Grid item md={12} xs={12}>
                <Grid container>
                  <Grid item md={4} xs={12}>
                    <Grid container>
                      <Grid item md={5} xs={5}>
                        <span>
                          <b> Empaque por caja:</b>
                        </span>
                      </Grid>
                      <Grid item md={7} xs={7}>
                        {allproductosJson.EmpaqueCaja
                          ? allproductosJson.EmpaqueCaja
                          : "Sin Definir"}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <Grid container>
                      <Grid item md={5} xs={5}>
                        <span>
                          <b> Ancho:</b>
                        </span>
                      </Grid>
                      <Grid item md={7} xs={7}>
                        {allproductosJson.Ancho
                          ? allproductosJson.Ancho
                          : "Sin Definir"}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <Grid container>
                      <Grid item md={5} xs={5}>
                        <span>
                          <b> Volumen:</b>
                        </span>
                      </Grid>
                      <Grid item md={7} xs={7}>
                        {allproductosJson.Volumen
                          ? allproductosJson.Volumen
                          : "Sin Definir"}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider />

              <Grid item md={12} xs={12}>
                <Grid container>
                  <Grid item md={4} xs={12}>
                    <Grid container>
                      <Grid item md={5} xs={5}>
                        <span>
                          <b> Venta por Unidad:</b>
                        </span>
                      </Grid>
                      <Grid item md={7} xs={7}>
                        {`${parseInt(allproductosJson.MultiploUnidad, 0)} ${allproductosJson.Unidad
                          }`}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <Grid container>
                      <Grid item md={5} xs={5}>
                        <span>
                          <b> Venta por Fardo:</b>
                        </span>
                      </Grid>
                      <Grid item md={7} xs={7}>
                        {allproductosJson.Fardo
                          ? allproductosJson.Fardo
                          : "Sin Definir"}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <Grid container>
                      <Grid item md={5} xs={5}>
                        <span>
                          <b>Catalogo del Fabricante:</b>
                        </span>
                      </Grid>
                      <Grid item md={7} xs={7}>
                        {allproductosJson.Catalogo
                          ? allproductosJson.Catalogo
                          : "Sin Definir"}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ) : (
            <div className="mt-4 mb-8 relative">
              <Grid container spacing={2} alignItems="center">
                {ReactHtmlParser(
                  allproductosJson.DescripcionLarga
                    ? allproductosJson.DescripcionLarga
                    : "Sin Descripción"
                )}
              </Grid>
            </div>
          )}
          <Divider className="bg-light-primary" />
          <ProductosVistos />
        </div>
      </section>
    </Layout>
  )
}

export default Producto

export const pageQuery = graphql`
  query($id: String!) {
    allproductosJson(ItemCodeAux: { eq: $id }) {
      id
      IdRelacion
      BaseFardo
      BaseUnidad
      BaseDefault
      ItemCodeAux
      IdProducto
      Descripcion
      Imagen
      Marca
      Empaque
      EmpaqueCaja
      Ancho
      Peso
      Volumen
      Segmento
      Categoria
      Division
      SegmentoAux
      DivisionAux
      CategoriaAux
      SubCategoriaAux
      SubCategoria
      MultiploUnidad
      MultiploFardo
      Fardo
      Unidad
      CodigoBarras
      Catalogo
      Imagenes {
        Imagen
      }
      DescripcionLarga
      DescripcionAux
      ProductosRelacionados
      Seo {
        itemcode
        descripcion
        typePage
        titlePage
        urlPage
        imagePage
        keywords
        Tags
        Categorias
        LinkSubCategoria
      }
    }
  }
`
