import React from "react"
import { Grid, Card } from "@material-ui/core"
import { Link } from "gatsby"
import ExampleImage from "../DataGatsbyImage"
import ButtonsCarr from "../ButtonCarr/Buttons"
import loadable from '@loadable/component'
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"

const Carousel = loadable(() => import('../common/Carousel'))
const useStyles = makeStyles(({ palette, ...theme }) => ({
  carrusel:{
    border:'1px solid red'
  }
    
}))
const Portfolio2 = ({Recomendados}) => {
  const classes = useStyles();
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <section className="section" id="portfoli2">
      <div className="container">
        <h3 className="mt-0 font-normal text-35 text-primary text-center">
          Productos Recomendados
        </h3>
        <Carousel        
          carouselId="portfolio-2"
          paginationClass="mt-16"
          slidesPerView={isMobile?2:6}          
          spacing={2}
          navigation={false}
        >
          {Recomendados.map((portfolio, index) => (
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
                    {portfolio.IdProducto} <br/>
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
