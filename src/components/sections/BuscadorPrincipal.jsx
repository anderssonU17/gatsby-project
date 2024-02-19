import React, { useState} from "react"
import { useFlexSearch } from "react-use-flexsearch"
import { useDispatch } from "react-redux"
import SearchIcon from "@material-ui/icons/Search"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import classNames from "classnames"
import { navigate } from "gatsby"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { guardarProductosBusquedaAction } from "../../state/reducers/productoReducers"
import Button from "@material-ui/core/Button"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(({ palette, ...theme }) => ({
  intro: {
    padding: "100px 0 0 !important",
    overflow: "visible !important",

    [theme.breakpoints.down("sm")]: {
      padding: "100px 0 0 !important",
    },
  },
  paperSearch: {
    backgroundColor: "white",
    paddingLeft: 5,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    width: "120%",
    height: 35,
    margin: 0,
    borderRadius: "5px",
  },
  inputShearch: {
    marginLeft: theme.spacing(1),
    flex: 1,
    border: "1px",
    whiteSpace: "normal",
    "&:focus": {
      outline: 0,
    },
  },
}))

const BuscadorGeneral = ({ index, store }) => {
  const estilos = useStyles()
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState("")
  const results = useFlexSearch(searchQuery, index, store)
  const MostrarBusquedaCatalogo = e => {
    if (e.keyCode === 13 || e.keyCode === 9) {
      e.preventDefault()
      dispatch(guardarProductosBusquedaAction(results))
      navigate(`/buscador/`)
    }
  }
  const BusquedaCatalogoClick = e => {
    e.preventDefault()
    navigate(`/buscador/`)
    dispatch(guardarProductosBusquedaAction(results))
  }

  return (
    <React.Fragment>
      <ButtonGroup
        color="primary"
        aria-label="split button"
        style={{ width: "120%" }}
      >
        <Paper component="form" className={classNames(estilos.paperSearch)}>
          <InputBase
            className={classNames(estilos.inputShearch)}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Busqueda de Productos"
            onKeyDown={MostrarBusquedaCatalogo}
          />
        </Paper>
        <Button
          className={clsx("bg-blue  text-13 text-white ")}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={BusquedaCatalogoClick}
        >
          <SearchIcon style={{ color: "white" }} />
        </Button>
      </ButtonGroup>
    </React.Fragment>
  )
}

export default BuscadorGeneral
