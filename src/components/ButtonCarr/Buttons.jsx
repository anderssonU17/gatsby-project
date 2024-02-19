import React, { useState } from "react"
import { Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { agregarCarritoActions } from "../../state/reducers/carritoReducers"

const Buttons = ({ ProductData ,title,CantidadNueva}) => {
  const dispatch = useDispatch()
  const { carrito } = useSelector(state => state.carrito)
  const [cantidad, guardarCantidad] = useState(1)
  const [baseProducto, guardarBaseProducto] = useState("Y")

  const estaEnCarrito = carrito.find(
    i => i.IdRelacion === ProductData.IdRelacion
  )
  return (
    <>
      {estaEnCarrito ? (
        <Button className="bg-green rounded text-white px-7">
          En cotizacion
        </Button>
      ) : (
        <Button
          onClick={e =>
            dispatch(
              agregarCarritoActions(
                ProductData,
                CantidadNueva?CantidadNueva:cantidad,
                carrito,
                baseProducto,
                ProductData.BaseDefault !== undefined ? false : true
              )
            )
          }
          className="bg-primary rounded text-white px-7 "
        >
         {title}
        </Button>
      )}
    </>
  )
}

export default Buttons
