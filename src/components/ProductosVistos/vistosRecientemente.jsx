import React from "react";
import clsx from "clsx";
import { Button } from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import { Link } from "gatsby";
import ExampleImage from "../DataGatsbyImage"
import loadable from '@loadable/component'
const Carousel = loadable(() => import('../common/Carousel'))

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
    "&:hover $cardOverlay": {
      opacity: 1,
    },
  },
  cardOverlay: {
    padding: "0px 1rem",
    transition: "all 250ms ease-in-out",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute",
    borderRadius: 8,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    color: palette.primary.contrastText,
    background: "rgba(0,0,0,0.67)",
    zIndex: 5,
  },
  cardTitle: {
    borderBottom: "1px solid rgba(255,255,255,0.87)",
  },
}));

const Testimonial10 = () => {
  const classes = useStyles();
  let ItemsVistos = [];

  if (typeof window !== "undefined") {
    if (localStorage.getItem("Items_Vistos")) {
      ItemsVistos = JSON.parse(localStorage.getItem("Items_Vistos"));
    } else {
      localStorage.setItem("Items_Vistos", []);
    }
  } else {
    //console.log("we are running on the server");
  }

  const eliminarVisitado = (id) => {
    const ItemsVistos2 = JSON.parse(localStorage.getItem("Items_Vistos"));
    var a = document.querySelector(`#visto${id}`).parentNode;
    a.setAttribute("style", "display:none");

    if (ItemsVistos2) {
      if (ItemsVistos2.length === 1) {
        localStorage.removeItem("Items_Vistos");
      } else {
        var datos1 = ItemsVistos2.filter((d) => {
          return d.IdRelacion !== id;
        });
        let set = new Set(datos1.map(JSON.stringify));
        let arrSinDuplicaciones = Array.from(set).map(JSON.parse);
        localStorage.setItem(
          "Items_Vistos",
          JSON.stringify(arrSinDuplicaciones)
        );
      }
    }
  };

  return (
    <div className="section" id="testimonial10">
      <div className="container">
        <div className="mb-0 text-center mx-auto">
          <h1 className="mt-0 font-normal text-35 text-primary">
            Vistos recientemente
          </h1>
        </div>
        <Carousel
          carouselId="swiper-10"
          paginationClass="mt-16"
          slidesPerView={5}
          spacing={2}
          navigation={false}
        >
          {ItemsVistos.map((item, index) => (
            <div className="pt-13" key={index}   id={`visto${item.IdRelacion}`}>
              <div className={classes.cardHolder}>
                <ExampleImage
                  className="w-full block"
                  image={item.Imagen}
                  width={200}
                  height={200}
                />
                <div className={classes.cardOverlay}>
                  <div>
                    <h5
                      className={clsx(
                        "m-0 mb-2 pb-2 font-medium inline-block",
                        classes.cardTitle
                      )}
                    >
                      {item.Descripcion}
                    </h5>
                  </div>
                  <div className="flex items-center mb-2">
                    <Button
                      className="text-inherit"
                      onClick={(e) => eliminarVisitado(item.IdRelacion)}
                      size="small"
                    >
                      <span className="ml-2 mr-4">Eliminar</span>
                    </Button>

                    <Link to={`/subcategoria/${item.SubCategoriaAux}/`}>
                      <span className="ml-2 mr-4">Ver mas</span>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial10;
