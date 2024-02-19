import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import clsx from "clsx"
import { useMediaQuery, Grid } from "@material-ui/core"
import Img from "gatsby-image"
import BottonNav from "../ButtonCarr/BottomNavigation"
import loadable from '@loadable/component'
const Carousel = loadable(() => import('../common/CarouselBanner'))

const useStyles = makeStyles(({ palette, ...theme }) => ({  
  intro: {
    padding: "5px 0 0 !important",
    overflow: "visible !important",    

    [theme.breakpoints.down("sm")]: {
      padding: "120px 0 0 !important",
    },  
  },
  product: {
    textAlign: "center",
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    margin: "auto",
    bottom: -80,
    maxWidth: 780,
    marginBottom: "5rem",
    "& img": {
      borderRadius: "0.5rem",
      boxShadow: "0 10px 16px rgba(0, 0, 0, 0.2)",
    },

    [theme.breakpoints.down("sm")]: {
      bottom: -63,
    },

    [theme.breakpoints.down("xs")]: {
      bottom: -39,
    },
    border:'5px solid green'
  },
  title: {
    textShadow: "0 4px 4px rgba(0, 0, 0, 0.22)",
  },
  styleGrid:{
    backgroundColor:"#FFFF",
  },
  CarouselContainer:{
    padding:'0',
  },
  imagenSubContainer:{    
    width:'100vw',
    display:'flex',
    justifyContent:'center',
    height:'100%',    
    '@media (max-width: 431px)' : {
      height:'37vh ',         
    },
    '@media (max-width: 400px)' : {
      height:'45vh ',         
    },
    '@media (max-width: 377px)' : {
      height:'37vh ',         
    },
    '@media (max-width: 326px)' : {
      height:'37vh', 
    }, 
  },
  imagenContenedor:{
    width:'100vw',
    height:'40vh',
    maxHeight:'40vh',
    '@media (max-width: 431px)' : {
      height:'35vh ',         
    },
    '@media (max-width: 400px)' : {
      height:'40vh ',         
    },
    '@media (max-width: 377px)' : {
      height:'35vh ',         
    },
    '@media (max-width: 326px)' : {
      height:'32vh', 
    },
    


  },
  imageCarrusel:{
    width:'100vw', 
    maxHeight:'390px',
    height:'40vh',
   // minHeight:'40vh',
    '@media (max-width: 431px)' : {
      height:'35vh ',         
    },
    '@media (max-width: 400px)' : {
      height:'40vh ',         
    },
    '@media (max-width: 377px)' : {
      height:'35vh ',         
    },
    '@media (max-width: 326px)' : {
      height:'32vh', 
    },

  }


}))

const Intro2 = ({ banner }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <section className={clsx("section ", classes.intro)} id="intro2">
      <div className={isMobile?"":"container2"}>
        {/* <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={clsx(classes.styleGrid)}
        >
          <BottonNav />
        </Grid> */}
        <div className='container'  >
        <Carousel   carouselId="services-2">
          
          {banner.map((service, index) => (
            <div   key={index.toString()}>
              <Img
                
                src={`https://disdelsa.com/imagenes/${isMobile ? service.BannerImagenMovil : service.Imagen}`}
                sizes={{
                  src: `https://disdelsa.com/imagenes/${isMobile ? service.BannerImagenMovil : service.Imagen}`,
                  aspectRatio: isMobile ? 1.4: 5,
                  sizes: "",
                  srcSet: "",                  
                }}
                //className={isMobile?classes.imageCarrusel:''}
              />
            </div>
          ))}
          
        </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Intro2
