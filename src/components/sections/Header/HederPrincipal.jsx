
import React from "react"
import { useMediaQuery } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import HeaderD from "./HederDesktop"
import HeaderM from "./HederMovil"
const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
      menu: allMenuJsonJson {
        edges {
          node {
            NombreSegmento
            Imagen
            SegmentoAux
            Categorias {
              SubCategorias {
                NombreSubCategoriaAux
                NombreSubCategoria
              }
              NombreCategoriaAux
              NombreCategoria
            }
          }
        }
      }
    }
  `)

  const {
    localSearchPages: { index, store },
  } = data

  const menuYSubmenu = data.menu.edges.map(r => r.node)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
  return  isMobile ? <HeaderM menuYSubmenu={menuYSubmenu} index={index} store={store} /> : <HeaderD menuYSubmenu={menuYSubmenu} index={index} store={store}/>
}
export default Header