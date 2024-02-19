import "swiper/dist/css/swiper.min.css";
import React, { Children, useEffect } from "react";
import Swiper from "swiper";
import PropTypes from "prop-types";
import { Fab, useMediaQuery } from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";

let globalBulletColor = "red";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  bulletClass: {
    opacity: 1,
    background: globalBulletColor,
    transition: "transform 400ms cubic-bezier(0.17, 0.67, 0.83, 0.67)",
    width: 8,
    height: 8,
    display: "inline-block",
    borderRadius: "100%",
    cursor: "pointer",
    margin: "0 4px",
  },
  bulletActiveClass: {
    transform: "scale(1.8)",
  },
  prevButton: {
    left: 5,
    marginLeft: "-24px !important",
  },
  nextButton: {
    right: 5,
    marginRight: "-24px !important",
  },
  navButton: {
    position: "absolute !important",
    top: "65%",
    transform: "translateY(calc(-50% - 50px))",
    zIndex: 1,
    opacity: '0.9',
    [theme.breakpoints.down("sm")]: {
      display: "none", // Ocultar en dispositivos móviles
    },
  },
}));

const Carousel = (props) => {    
  let theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  let {
    slidesPerView = 1,
    spacing = 32,
    allowSlideNext = true,
    allowSlidePrev = true,
    delay = 5000,
    navigation =true? true:false,
    bulletColor = theme.palette.primary.main,
    paginationClass = "mt-6",
    carouselId = "swiper-1",
    children,
  } = props;

  globalBulletColor = bulletColor;

  let {
    bulletClass,
    bulletActiveClass,
    nextButton,
    prevButton,
    navButton,
  } = useStyles();

  const swiperOptions = {
    direction: "horizontal",
    allowSlideNext,
    allowSlidePrev,
    slidesPerView,
    spaceBetween: spacing,

    autoplay: {
      delay,
      disableOnInteraction: false,
    },

    breakpoints: {
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is <= 640px
      768: {
        slidesPerView: 1,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      bulletClass,
      bulletActiveClass,
      clickable: true,
    },

    navigation: {
      nextEl: ".carousel__button-next",
      prevEl: ".carousel__button-prev",
    },
  };

  useEffect(() => {
    new Swiper(`#${carouselId}`, swiperOptions);
  }, [swiperOptions]);

  return (
    <div className="relative w-full">
      <div className="swiper-container" id={carouselId}>
        <div className="swiper-wrapper">
          {Children.map(children, (child, index) => (
            <div className="swiper-slide h-auto p-1 pb-6">{child}</div>
          ))}
        </div>

        {/* pagination */}
        {navigation && (
          <div className={clsx("swiper-pagination relative", paginationClass)} />
        )}
        
      </div>

      {/* navigation */}
      {navigation && !isMobile && (
        <Fab
          className={clsx(
            "carousel__button-prev bg-white",
            prevButton,
            navButton
          )}
        >
          <NavigateBeforeIcon />
        </Fab>
      )}
      {navigation && !isMobile && (
        <Fab
          className={clsx(
            "carousel__button-next bg-white",
            nextButton,
            navButton
          )}
        >
          <NavigateNextIcon />
        </Fab>
      )}
    </div>
  );
};

Carousel.propTypes = {
  carouselId: PropTypes.string.isRequired,
};

export default Carousel;
