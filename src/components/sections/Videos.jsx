import React from "react";
import { useMediaQuery, Grid } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
const Links = [
    {
        link: "https://www.youtube.com/embed/6MPDFoVxi38",
    },
    { link: "https://www.youtube.com/embed/pVgtIfRC4qo" },
    {
        link: "https://www.youtube.com/embed/gepPe3DrzgQ",
    },
];
const useStyles = makeStyles(({ palette, ...theme }) => ({
    videoContainer:{        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: theme.spacing(2), // Espacio inferior entre los videos
    },
    video:{
        width:'100%', // Ancho completo para ocupar todo el espacio disponible
        height:'auto', // Altura automática para mantener la proporción original del video
        borderRadius: theme.spacing(1), // Bordes redondeados para un aspecto más atractivo
    }
}))

const Videos = () => {
    const classes = useStyles();
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

    return (
        <div className="section" id="testimonial15">
            <div className="container">
                <Grid container spacing={2}> {/* Aumentamos el espacio entre los elementos */}
                    {Links.map((items, ind) => (
                        <Grid  item md={4} sm={6} xs={12} key={ind} >
                            <div className={classes.videoContainer}>
                                <iframe
                                    className={classes.video}
                                    src={items.link}
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}
export default Videos;
