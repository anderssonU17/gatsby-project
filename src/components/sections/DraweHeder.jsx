import React, { useEffect, useState } from "react";
import clsx from "clsx";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PlaceIcon from "@material-ui/icons/Place";
import Help from "@material-ui/icons/Help";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { StaticImage } from "gatsby-plugin-image"

const drawerWidth = 240;
const useStyles = makeStyles(({ palette, ...theme }) => ({
  nested: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(0),
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(4),
    },
  },
  icon: {
    minWidth: "auto",
    marginRight: theme.spacing(10),
  },
  drawerInner: {
    height: '100%',
    position: '',
  },
  drawerHeader: {
    padding: '0',
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(8),
      position: 'relative',
    },
    ...theme.mixins.toolbar,
  },
  profile: {
    height: 10,
    width: '100%',
    display: 'flex',
    fontSize: 14,
    padding: 15,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    margin: `${theme.spacing(2)}px 0`,
    zIndex: 0,
    '& h4': {
      fontSize: 16,
      marginBottom: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: 110,
      textAlign: 'center',
      marginLeft: theme.spacing(1),
    },
    '& button': {
      fontSize: 12,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'block',
      overflow: 'hidden',
      textTransform: 'capitalize',
      padding: 0,
      minHeight: 20,
      marginTop: 4,
      width: '100%'
    }
  },
  menuContainer: {
    overflowY: 'auto',
    overflowX: 'hidden',
    width: drawerWidth,
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      height: `calc(100% - ${theme.spacing(8)}px)`,
    },
    padding: `${theme.spacing(5)}px 0`,
    height: '100%',
    '&$withProfile': {
      paddingTop: theme.spacing(19)
    },
    '&$landingNav': {
      padding: 0,
      [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(5)
      },
      [theme.breakpoints.down('lg')]: {
        height: '100%'
      }
    },
    '&$rounded': {
      '& a': {
        borderRadius: theme.spacing(1),
        paddingTop: 0,
        paddingBottom: theme.spacing(0.5),
        '& > div:first-child': {
          paddingLeft: theme.spacing(7)
        }
      },
      '& $opened': {
        '&:before': {
          background: palette.primary.main
        }
      }
    },
    '&::-webkit-scrollbar': {
      width: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 12,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    '&:hover': {
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.3)',
      }
    }
  },
  rounded: {},
  withProfile: {}
}))

const Drawwer = ({ menuYSubmenu }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [getSegmento, setSegmento] = React.useState("");

  const handleClick2 = (segmento2) => {
    setSegmento(segmento2);
    setOpen(!open);
  };
  const [transform, setTrasmorf] = useState(0);
  const handleScroll = (event) => {
    const scroll = event.target.scrollTop;
    setTrasmorf(scroll);
  };

  useEffect(() => {
    const mainContent = document.getElementById("sidebar");
    mainContent.addEventListener("scroll", handleScroll);

    return () => {
      mainContent.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={clsx(classes.drawerInner)}>
      <div className={clsx(classes.drawerHeader)}>
        <AniLink
          to={"/"}
          paintDrip
          duration={0.3}
          direction="up"
          hex="#075182"
        >
          <div
            className={clsx(classes.profile)}
            style={{ opacity: 1 - transform / 100, marginTop: transform * -0.3 }}
          >
            <div style={{ display: "grid" }}>
              <StaticImage
                src="../../images/iconD.jpg"
                alt="Disdel"
                layout="fixed"
                width={130}
                height={100}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                style={{ color: "white" }}
              />
            </div>
          </div>
        </AniLink>
      </div>

      <div
        id="sidebar"
        className={clsx(
          classes.menuContainer,
          classes.rounded,
          classes.withProfile
        )}
      >
        {menuYSubmenu.map((r) => (
          <div>
            <ListItem
              className={clsx(classes.nested)}
              button
              onClick={() => handleClick2(r.NombreSegmento)}
            >
              <ListItemText
                variant="inset"
                className={classes.icon}
                primary={
                  <Link
                    to={`/${r.SegmentoAux}/`}
                  >
                    <div
                      className={clsx({
                        "px-0 py-0 mb-0 text-center text-15 border-radius-8 hover-bg-primary cursor-pointer": true,
                      })}
                    >
                      {r.NombreSegmento}
                    </div>
                  </Link>
                }
              />

              {open && getSegmento === r.NombreSegmento ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </ListItem>
            {r.Categorias.map((s) => (
              <Collapse
                component="div"
                in={open && getSegmento === r.NombreSegmento}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItem button>
                    <ListItemText
                      primary={
                        <Link
                          to={`/categoria/${s.NombreCategoriaAux}/`}

                        >
                          <div
                            className={clsx({
                              "px-0 py-0 mb-0 text-center text-13 border-radius-8 hover-bg-primary cursor-pointer": true,
                            })}
                          >
                            {s.NombreCategoria}
                          </div>
                        </Link>
                      }
                      secondary={s.SubCategorias.map((s) => (
                        <>
                          <Link
                            to={`/subcategoria/${s.NombreSubCategoriaAux}/`}
                          >
                            <div
                              className={clsx({
                                "px-0 py-0 mb-0 text-center text-12 border-radius-8 hover-bg-primary cursor-pointer": true,
                              })}
                            >
                              {s.NombreSubCategoria}
                            </div>
                          </Link>
                        </>
                      ))}
                    />
                  </ListItem>
                </List>
              </Collapse>
            ))}
          </div>
        ))}
   
      <div>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <SupervisorAccountIcon style={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <AniLink
                  to={"/Conocenos"}
                  fade
                  duration={0.5}
                  hex="#e0e0e0"
                  className={clsx(classes.menuSegmento2)}
                >
                  <Box
                    fontWeight="fontWeightBold"
                    style={{ fontSize: 14, paddingLeft: 5 }}
                  >
                    Conócenos
                  </Box>
                </AniLink>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PlaceIcon style={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <AniLink
                  to={"/Contactanos"}
                  fade
                  duration={0.5}
                  hex="#e0e0e0"
                  className={clsx(classes.menuSegmento2)}
                >
                  <Box
                    fontWeight="fontWeightBold"
                    style={{ fontSize: 14, paddingLeft: 5 }}
                  >
                    Contáctanos
                  </Box>
                </AniLink>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Help style={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <AniLink
                  to={"/Ayuda"}
                  fade
                  duration={0.5}
                  hex="#e0e0e0"
                  className={clsx(classes.menuSegmento2)}
                >
                  <Box
                    fontWeight="fontWeightBold"
                    style={{ fontSize: 14, paddingLeft: 5 }}
                  >
                    Ayuda
                  </Box>
                </AniLink>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Help style={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <AniLink
                  to={"/Politicas"}
                  fade
                  duration={0.5}
                  hex="#e0e0e0"
                  className={clsx(classes.menuSegmento2)}
                >
                  <Box
                    fontWeight="fontWeightBold"
                    style={{ fontSize: 14, paddingLeft: 5 }}
                  >
                    Politicas y Privacidad
                  </Box>
                </AniLink>
              }
            />
          </ListItem>
          
          
        </List>
      </div>
      </div>
    </div>

  );
};

export default Drawwer;