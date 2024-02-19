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
  parentCard:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignContent:'center',
    alignItems:'center',
  },
  cardContainer:{    
    padding:'4px',        
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    margin:'10px 0 '
    // marginTop:'5px',
    //zoom:'2.2'
    // border:'1px solid red'
  },
  imagenAnuncio:{
    width:'100%',        
    height:'100%'     
  },
  seccionContainer:{
    padding:'0'
  }
}))

const Service4 = ({ bannerAnuncios }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <div className={isMobile?classes.seccionContainer: "section section-service4"} id="service4">
      <div className="container">
        {isMobile?
             <div  container spacing={3}>
             {bannerAnuncios.map((card, index) => (
               <div className={classes.cardContainer}  key={index}>
                     <Img
                          sizes={{
                            src:`https://disdelsa.com/imagenes/${card.Imagen}`,
                            aspectRatio: isMobile ? 4.7: 5,
                            sizes: "",
                            srcSet: "",                                              
                          }} 
                                                                                                         
                     />
               </div>
             ))}
           </div>        
        : <Grid container spacing={3}>
        {bannerAnuncios.map((card, index) => (
          <Grid item lg={4} md={6} sm={12} xs={6} key={index}>
            
              <Card
                className={clsx(
                  "relative overflow-hidden card",
                  classes.card
                )}
              >
                <Img
                  sizes={{
                    src: `https://disdelsa.com/imagenes/${card.BannerImagenMovil}`,
                    aspectRatio: 1.7,
                    sizes: "",
                    srcSet: "",
                  }}
                />
              </Card>
          </Grid>
        ))}
      </Grid>}
   
      </div>
    </div>
  )
}

export default Service4
