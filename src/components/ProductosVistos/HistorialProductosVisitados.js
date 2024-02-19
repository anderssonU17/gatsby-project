import React from "react"


const HistorialProductosVisitados = ({producto}) => {
    let siExiste = false;
    let ArrayVisitados = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("Items_Vistos")) {
        ArrayVisitados = JSON.parse(localStorage.getItem("Items_Vistos"));
      } else {
        localStorage.setItem("Items_Vistos", []);
      }
    } else {
      console.log("we are running on the server");
    }

   
    if (ArrayVisitados) {
      if (producto) {
        ArrayVisitados.forEach((item) => {
          if (item.IdProducto === producto.IdProducto) {
            siExiste = true;
          }
        });

        if (!siExiste) {
          ArrayVisitados.push(producto);
        }
        if (typeof window !== "undefined") {
          localStorage.setItem("Items_Vistos", JSON.stringify(ArrayVisitados));
        } else {
          console.log("we are running on the server");
        }
      }
    } else {
      var arrayVistos = [];
      if (producto) {
        arrayVistos.push(producto);
        if (typeof window !== "undefined") {
          localStorage.setItem("Items_Vistos", JSON.stringify(arrayVistos));
        } else {
          console.log("we are running on the server");
        }
      }
    }
    return ""
  };

  export default HistorialProductosVisitados