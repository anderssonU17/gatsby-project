import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
//redux
import { useDispatch, useSelector } from "react-redux";
import { agregarCarritoActions } from "../../state/reducers/carritoReducers";

import IconButton from "@material-ui/core/IconButton";


const BotonCotizarInterno = ({ producto, title }) => {
    const dispatch = useDispatch();

    const { carrito } = useSelector((state) => state.carrito);

    const [cantidad, guardarCantidad] = useState(1);

    const [baseProducto, guardarBaseProducto] = useState("Y");

    const estaEnCarrito = carrito.find(
        (i) => i.IdRelacion === producto.IdRelacion
    );

    return (
        <>
            <div>
                <div className="mt-4 mb-8 relative">
                    Cantidad :
        <IconButton
                        onClick={(e) =>
                            guardarCantidad(cantidad > 1 ? cantidad - 1 : cantidad)
                        }
                        variant="contained"
                        color="primary"
                        size="medium"
                    >
                        <RemoveCircleIcon />
                    </IconButton>
                    <span>{cantidad}</span>
                    <IconButton
                        size="medium"
                        variant="contained"
                        color="primary"
                        onClick={(e) => guardarCantidad(cantidad + 1)}
                    >
                        <AddCircleIcon />
                    </IconButton>
                    {producto.BaseDefault !== undefined && (
                        <>
                            <div> Seleccione Empaque </div>

                            {producto.BaseFardo === producto.BaseUnidad ? (
                                <RadioGroup
                                    name="radio group"
                                    onChange={(e) => guardarBaseProducto(e.target.value)}
                                    value={"Y"}
                                >
                                    <FormControlLabel
                                        value="Y"
                                        control={<Radio />}
                                        label={`${parseInt(producto.MultiploUnidad, 0)} ${producto.Unidad
                                            }`}
                                    />
                                </RadioGroup>
                            ) : (
                                <RadioGroup
                                    name="radio group"
                                    onChange={(e) => guardarBaseProducto(e.target.value)}
                                    value={baseProducto}
                                >
                                    <FormControlLabel
                                        value="Y"
                                        control={<Radio />}
                                        label={`${parseInt(producto.MultiploUnidad, 0)} ${producto.Unidad
                                            }`}
                                    />

                                    <FormControlLabel
                                        value="N"
                                        control={<Radio />}
                                        label={producto.Fardo}
                                    />
                                </RadioGroup>
                            )}
                        </>
                    )}
                </div>

                <div>
                    {estaEnCarrito ? (
                        <Button className="bg-green rounded text-white px-7">
                            En cotizacion
                        </Button>
                    ) : (
                        <Button
                            onClick={e =>
                                dispatch(
                                    agregarCarritoActions(
                                        producto,
                                        cantidad,
                                        carrito,
                                        baseProducto,
                                        producto.BaseDefault !== undefined ? false : true
                                    )
                                )
                            }
                            className="bg-primary rounded text-white px-7 "
                        >
                            {title}
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};
export default BotonCotizarInterno;
