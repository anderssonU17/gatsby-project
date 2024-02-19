import * as React from "react"
import Menu from "material-ui-popup-state/HoverMenu"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import { makeStyles, darken } from "@material-ui/core/styles"
import { Link } from "gatsby"
import { Grid, Button } from "@material-ui/core"
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks"
import clsx from "clsx"
const useStyles = makeStyles(({ palette, ...theme }) => ({
  menu: {
    paddingLeft: 20,
  },
  link: {
    borderRadius: 4,
    "&:hover": {
      background: darken("#1e88e5", 0.2),
    },
  },
  link1: {
    borderRadius: 4,
    "&:hover": {
      background: darken("#1e88e5", 0.2),
    },
  },
}))

const MenuPopupState = ({ menuYSubmenu }) => {
  const classes = useStyles()
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" })
  const [opcionAbrir, setOpcionAbrir] = React.useState(null)
  const [opcionAbrirSubcategoria, setOpcionAbrirSubcategoria] = React.useState(
    null
  )

  return (
    <React.Fragment>
      <Button
        className="box-shadow-none px-8 rounded-Buttons hover-bg-primary capitalize navigation"
        variant="outlined"
        color="primary"
        {...bindHover(popupState)}
      >
        Categorias <ArrowDropDownIcon />
      </Button>
      <Menu
        {...bindMenu(popupState)}
        classes={{ paper: classes.menu }}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Grid container>
          <div className="mt-0 mb-6 ml--4">
            {menuYSubmenu.map((s, index) => (
              <Grid item lg={5} md={6} sm={12} xs={12} key={index}>
                <Link to={`/${s.SegmentoAux}/`}>
                  <div
                    className={clsx(
                      "flex items-center py-2 text-12 cursor-pointer px-6 w-full icon hover-bg-primary rounded-l",
                    )}
                    onMouseOver={event => setOpcionAbrir(s.NombreSegmento)}
                  >
                    {s.NombreSegmento}
                  </div>
                </Link>
              </Grid>
            ))}
          </div>
          <div className="mt-0 mb-12 ml--0">
            {menuYSubmenu.map((s, index) => (
              <div key={index}>
                {opcionAbrir === s.NombreSegmento
                  ? s.Categorias.map((s, index1) => (
                    <Grid item lg={8} md={6} sm={12} xs={12} key={index1}>
                      <Link to={`/categoria/${s.NombreCategoriaAux}/`}>
                        <div
                          className={clsx(
                            "flex items-center py-2 text-11 cursor-pointer px-6 w-full icon hover-bg-primary rounded-ll",
                            classes.link1
                          )}
                          onMouseOver={event =>
                            setOpcionAbrirSubcategoria(s.NombreCategoria)
                          }
                        >
                          {s.NombreCategoria}
                        </div>
                      </Link>
                    </Grid>
                  ))
                  : ""}
              </div>
            ))}
          </div>
          {opcionAbrirSubcategoria ? (
            <div className="mt-0 mb-3 ml--0">
              {menuYSubmenu.map((s, index) => (
                <div key={index}>
                  {s.Categorias.map((sub, index1) => (
                    <div key={index1}>
                      {opcionAbrirSubcategoria === sub.NombreCategoria
                        ? sub.SubCategorias.map((SubCategoria, index2) => (
                          <Grid
                            item
                            lg={8}
                            md={6}
                            sm={12}
                            xs={12}
                            key={index2}
                          >
                            <Link
                              to={`/subcategoria/${SubCategoria.NombreSubCategoriaAux}/`}
                            >
                              <div
                                className={clsx(
                                  "flex items-center text-11 py-2 cursor-pointer px-6 w-full icon hover-bg-primary rounded-lFin",
                                  classes.link1
                                )}
                              >
                                {SubCategoria.NombreSubCategoria}
                              </div>
                            </Link>
                          </Grid>
                        ))
                        : ""}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </Grid>
      </Menu>
    </React.Fragment>
  )
}

export default MenuPopupState
