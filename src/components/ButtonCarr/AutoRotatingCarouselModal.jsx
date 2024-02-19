import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { EjecutarAutoRating } from "../../state/reducers/autoratingReducers"
import ExampleImage from "../../components/DataGatsbyImage"
import { useDispatch } from "react-redux"
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
import { makeStyles } from '@material-ui/core/styles'
import { Card } from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        height: "100%",
        width: "100%"
    },
});

const AutoRotatingCarouselModal = ({ isMobile, handleOpen, imagen }) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    return (
        <div>
            <AutoRotatingCarousel
                open={handleOpen}
                onClose={() => dispatch(EjecutarAutoRating(false))}
                onStart={() => dispatch(EjecutarAutoRating(false))}
                autoplay={false}
                style={{ position: "absolute" }}
            >
                {imagen.Imagenes.map((item, index) => (
                    <Card className={classes.root} key={index} >
                        <ExampleImage
                            image={item.Imagen}
                            width={isMobile ? 250 : 560}
                            height={isMobile ? 400 : 560}
                        />
                    </Card>
                ))}
            </AutoRotatingCarousel>
        </div>
    );
};

const FunctionAutoRotatingCarouselModal = ({ loading, imagenes }) => {
    const matches = useMediaQuery("(max-width:600px)");
    return (
        <>
            <AutoRotatingCarouselModal
                isMobile={matches}
                handleOpen={loading}
                imagen={imagenes}
            />
        </>
    );
}

export default FunctionAutoRotatingCarouselModal

