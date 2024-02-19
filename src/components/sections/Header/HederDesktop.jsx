import React, { useState, useEffect } from "react"
import { debounce, classList } from "../../utils"
import PersonIcon from "@material-ui/icons/Person"
import { Button, Tooltip, Grid } from "@material-ui/core"
import MenuCategorias from "../CategoriasMenu"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BusinessIcon from "@material-ui/icons/Business"
import Carrito from "../Carrito"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
import loadable from '@loadable/component'
const BuscadorGeneral = loadable(() => import('../BuscadorPrincipal'))

const TopBar2 = ({ menuYSubmenu, index, store }) => {
  const [isTop, setIsTop] = useState(true);

  var Styles1 ={
    margin: '0px',
    width: '1400px',
    display:'flex',
    alignSelf:'center',
    justifyContent:'center',
  };

  let scrollableElement = document.querySelector(".scrollable-content");
  if (!scrollableElement) scrollableElement = window;

  let handleScrollRef = null;

  const handleScroll = () => {
    return debounce(({ target: { scrollTop } }) => {
      let isCurrentTop = scrollTop < 100 || scrollableElement.scrollY < 100;
      setIsTop(isCurrentTop);
    }, 20);
  };

  handleScrollRef = handleScroll();
  useEffect(() => {
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScrollRef);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScrollRef);
      }
    };
  }, [scrollableElement, handleScrollRef]);


  return (
    <section
      className={classList({
        header: true,
        "header-fixed": !isTop
      })}
    >
      <Grid
        container
        lg={12}
        style={{ height: "20px" }}
      >
        <Grid container direction="row" justify="flex-end">
          {/* <TopBarMenu /> TOP BAR QUE ESTA ARRIBA DE EL LOGO DE DISDEL, LA BUSQUEDA Y LINKS*/} 
        </Grid>
      </Grid>
      
      <Grid container direction="row" justify="center" >
        <div className="container2 header-container" style={Styles1} >
          <div className="brand">
            <AniLink
              to={"/"}
              paintDrip
              duration={0.3}
              direction="up"
              hex="#075182"
            >
              <div style={{ display: "grid" }}>
                <StaticImage
                  src="https://disdelsa.com/imagenes/BannerImagen-img2059-4-2-2021-114805.png"
                  alt="Disdel"
                  layout="fixed"
                  width={150}
                  height={80}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  style={{ color: "white" }}
                />
              </div>
            </AniLink>
          </div>

          <ul className="navigation">
            <li>
              <MenuCategorias menuYSubmenu={menuYSubmenu} />
            </li>
          </ul>
          <BuscadorGeneral index={index} store={store} />
          <div className="m-auto" />


          <ul className="navigation">
            <li>
              <Tooltip title="Ingreso A la página Asidelimpio. Clientes">
                <Button
                  href="https://www.asidelimpio.com/login"
                  target="_blank"
                  className={clsx("bg-green rounded-ll text-15 text-white ")}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                >
                  <PersonIcon /> Login
                </Button>
              </Tooltip>
            </li>
          </ul>
          
          <ul className="navigation">
            <li>
              <Tooltip title="Ingreso a La página MyBusiness">
                <Button
                  className={clsx("bg-green rounded-ll text-15 text-white ")}
                  href="https://www.disdelsagt.com/MyBusiness/Home/Login"
                  target="_blank"
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                >
                  <BusinessIcon />
                  MyBusiness
                </Button>
              </Tooltip>
            </li>
          </ul>
          <ul className="navigation">
            <li>
              <Carrito />
            </li>
          </ul>

        </div>
      </Grid>

    </section>

  )
}

export default TopBar2
