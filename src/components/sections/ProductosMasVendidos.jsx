import React from "react"
import { Grid, Card } from "@material-ui/core"
import { Link } from "gatsby"
import ExampleImage from "../DataGatsbyImage"
import ButtonsCarr from "../ButtonCarr/Buttons"
import loadable from '@loadable/component'
const Carousel = loadable(() => import('../common/Carousel'))

const Portfolio2 = ({ Vendidos }) => {
  return (
    <section className="section" id="ProductosMasVendidos">
      <div className="container">
        <h3 className="mt-0 font-normal text-35 text-primary text-center">
          Recomendados
        </h3>
        <Carousel
          carouselId="portfolio-4"
          paginationClass="mt-16"
          slidesPerView={6}
          spacing={2}
          navigation={false}
        >
          {Vendidos.map((portfolio, index) => (
            <Card className="relative h-full card" key={index}>
              <Link
                to={`/producto/${portfolio.ItemCodeAux}/`}
                style={{
                  cursor: "hand",
                  background: "white",
                  textDecoration: "none",
                }}
              >
                <ExampleImage
                  image={portfolio.Imagen}
                  width={160}
                  height={160}
                />
                <div className="text-left p-4">
                  <p className="mt-0 mb-0 text-11 font-semibold text-gray">
                    {portfolio.IdProducto} <br />
                    {portfolio.Descripcion}</p>
                </div>
              </Link>
              <div className="px-4 py-2">
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <ButtonsCarr ProductData={portfolio} title="Cotizar" />
                </Grid>
              </div>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Portfolio2
