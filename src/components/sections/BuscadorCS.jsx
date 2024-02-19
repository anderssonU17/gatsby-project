import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { TextField, IconButton } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import * as JsSearch from "js-search";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    padding: "0rem 0rem",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
}))

const Buscador = ({ products,handleProducto }) => {
  const classes = useStyles()
  const [productos,setProductos]=useState([])

  const ValorBuscador = (e) => {
    // e.preventDefault();
    const dataToSearch = new JsSearch.Search("IdProducto");
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();

    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();

    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("IdProducto");
    dataToSearch.addIndex("Descripcion"); // sets the index attribute for the data
    dataToSearch.addIndex("IdProducto"); // sets the index attribute for the data
    dataToSearch.addDocuments(products); // adds the data to be searched
    const queryResult = dataToSearch.search(e);
    setProductos(queryResult)
  };
  useEffect(()=>{
    handleProducto(productos);
  },[productos])

  return (
    <section className="section" id="intro12">
      <div className={classes.introWrapper}>
        <div className="container">
          <div className="flex justify-center">
            <TextField
              variant="outlined"
              size="small"
              onChange={(e)=>ValorBuscador(e.target.value)}
              placeholder="Busque su producto aqui"
              InputProps={{
                style: {
                  borderRadius: "300px",
                  padding: "0.25rem",
                },
                endAdornment: (
                  <IconButton className="bg-primary p-2 ml-1px" size="small">
                    <SearchIcon className="text-white" />
                  </IconButton>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Buscador
