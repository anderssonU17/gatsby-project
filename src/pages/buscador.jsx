import React from "react"
import { graphql, Link } from "gatsby"
import { useSelector } from "react-redux"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import ExampleImage from "../components/DataGatsbyImage"
import ExampleImageBanner from "../components/DataGatsbyImageBanner"
import { Grid, Card, useMediaQuery } from "@material-ui/core"
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
    padding: "150px 0 0 !important",
    overflow: "visible !important",

    [theme.breakpoints.down("sm")]: {
      padding: "70px 0 0 !important",
    },
  },
  card2: {
    "& .card-icon": {
      fontSize: "2em",
      transition: "all 350ms ease-in-out",
    },
    "&:hover": {
      "& .card-icon": {
        color: palette.primary.main,
      },
    },
  },
  "&:hover": {
    transform: "translateY(-8px)",

    "& .card-icon": {
      transform: "translateY(-8px)",
      color: palette.secondary.main,
      opacity: 0.6,
    },
  },
}))

const Buscador = ({ data }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
  const ArraydeBusquedas = useSelector(
    state => state.productos.guardarProductosBusqueda
  )

  return (
    <Layout>
      <section className={clsx("section ", classes.intro)} id="courseList1">
        <div className="container">
          {ArraydeBusquedas.length > 0 ? (
            <div className="mb-8 text-center mx-auto">
              <div className="mb-16">
                <strong>
                  Resultados de busqueda: {ArraydeBusquedas.length} elemento(s){" "}
                </strong>

                <Grid container spacing={1}>
                  {ArraydeBusquedas.map((item, ind) => (
                    <Grid key={ind} item md={2} sm={6} xs={6}>
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
                              {item.IdProducto}<br/> 
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
              </div>
            </div>
          ) : (
            <Grid container justify="center" alignItems="center" spacing={2}>
              <h3 className={clsx({
                "mt-0 font-normal text-1 ": !isMobile,
                "mt-0 font-normal text-13 ": isMobile,
              })}
              >
                ¡ Lo sentimos ! no encontramos coincidencias de busqueda, pero
                quizás puedan interesarte las siguientes secciones{" "}
              </h3>

              {data.lineasSegmentos.edges.map((item, index) => (
                <Grid
                  item
                  lg={3}
                  md={6}
                  sm={12}
                  xs={6}
                  key={index}
                  className="text-center"
                >
                  <AniLink
                    ip
                    hex="#075182"
                    to={`/${item.node.SegmentoAux}/`}
                    paintDrip
                    duration={0.8}
                    direction="up"
                  >
                    <div
                      className={clsx({
                        "h-200 w-200 rounded overflow-hidden mx-auto p-6 card": !isMobile,
                        "h-100 w-100 rounded overflow-hidden mx-auto p-2 card": isMobile,
                      })}
                    >
                      <ExampleImageBanner
                        image={item.node.Imagen}
                        width={isMobile ? 100 : 200}
                        height={isMobile ? 100 : 200}
                      />
                    </div>
                  </AniLink>
                  <div className="max-w-10 mb-1 mx-auto text-center">
                    <h4 className="mt-0 font-normal text-1 text-primary">
                      {item.node.NombreSegmento}
                    </h4>
                  </div>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Buscador

export const pageQuery = graphql`
  query {
    lineasSegmentos: allMenuJsonJson {
      edges {
        node {
          NombreSegmento
          Imagen
          SegmentoAux
        }
      }
    }
  }
`
