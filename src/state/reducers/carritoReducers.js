import {
  AGREGAR_PRODUCTO_INICIO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  ENVIAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO_INICIO,
  ELIMINAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO_ERROR,
  CAMBIO_CANTIDAD_INICIO,
  CAMBIO_CANTIDAD_EXITO,
  CAMBIO_CANTIDAD_ERROR,
  VACIAR_CARRITO_INICIO,
  VACIAR_CARRITO_EXITO,
  VACIAR_CARRITO_ERROR,
  CAMBIO_EMPAQUE_INICIO,
  CAMBIO_EMPAQUE_EXITO,
  CAMBIO_EMPAQUE_ERROR,
  AGREGAR_ITEM_VARIOS_INICIO,
  AGREGADO_ITEM_VARIOS_EXITO,
} from "../types/types";
import clienteAxios from "../config/axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
let carrito = [];
// let carrito = localStorage.getItem('JSON.parse(localStorage.getItem('carrito'))')?JSON.parse(localStorage.getItem('carrito')):localStorage.setItem('carrito',[]);
// if (localStorage.getItem('carrito')) {
// 	carrito = JSON.parse(localStorage.getItem('carrito'));
// } else {
// 	localStorage.setItem('carrito', []);
// }
// let carrito =[]
if (typeof window !== "undefined") {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  } else {
    localStorage.setItem("carrito", []);
  }
} else {
  console.log("we are running on the server");
}
const initialState = carrito
  ? {
      carrito,
      cargando: false,
      error: null,
      varios: [],
      producto: {},
      cargarProducto: true,
      errorProducto: null,
    }
  : {
      carrito: [],
      cargando: true,
      error: null,
      varios: [],
      producto: {},
      cargarProducto: true,
      errorProducto: null,
    };

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO_INICIO:
      return {
        ...state,
        carrito: [],
        cargando: true,
        error: null,
      };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        carrito: action.payload,
        cargando: false,
        error: null,
      };
    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        carrito: [],
        cargando: false,
        error: true,
      };
    case ENVIAR_PRODUCTO_EXITO:
      return {
        ...state,
        carrito: [],
        cargando: false,
        error: null,
      };
    case ELIMINAR_PRODUCTO_INICIO:
      return {
        ...state,
        carrito: [],
      };
    case ELIMINAR_PRODUCTO_EXITO:
      return {
        ...state,
        carrito: action.payload,
        cargando: false,
        error: null,
      };
    case ELIMINAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CAMBIO_CANTIDAD_INICIO:
      return {
        ...state,
      };
    case CAMBIO_CANTIDAD_EXITO:
      return {
        ...state,
        carrito: action.payload,
      };
    case CAMBIO_CANTIDAD_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case CAMBIO_EMPAQUE_INICIO:
      return {
        ...state,
      };
    case CAMBIO_EMPAQUE_EXITO:
      return {
        ...state,
        carrito: action.payload,
      };
    case CAMBIO_EMPAQUE_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case VACIAR_CARRITO_INICIO:
      return {
        ...state,
      };
    case VACIAR_CARRITO_EXITO:
      return {
        ...state,
        carrito: action.payload,
      };
    case VACIAR_CARRITO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case AGREGAR_ITEM_VARIOS_INICIO:
      let array = [...state.varios];

      let item = { ...action.payload };
      // const product = array.find((p) => p.IdRelacion === item.IdRelacion);

      let i = array.findIndex((i) => i.IdRelacion === item.IdRelacion);

      if (i >= 0) {
        array.splice(i, 1);
      } else {
        array.push(item);
      }

      return {
        ...state,
        varios: array,
      };
    case AGREGADO_ITEM_VARIOS_EXITO:
      return {
        ...state,
        varios: [],
      };

    default:
      return state;
  }
}

export function agregarCarritoActions(item, cantidad, carrito, base, Dowload) {
  let productAlreadyInCart = false;

  return (dispatch) => {
    dispatch(agregarCarritoInicio());
    if (Dowload) {
      clienteAxios
        .get(
          `mywsmobil/api/CatalogoWeb/GetBuscadorItem/1007/${item.IdProducto}/`
        )
        .then((respuesta) => {
          const { IdRelacion } = respuesta.data;
          if (IdRelacion > 0) {
            const producto = respuesta.data;
            producto.Cantidad = cantidad;
            producto.CodProducto = producto.IdProducto;
            producto.Base = base;
            carrito.forEach((cp) => {
              if (cp.CodProducto === producto.CodProducto) {
                cp.Cantidad += producto.Cantidad;
                cp.Base = base;
                productAlreadyInCart = true;
              }
            });

            if (!productAlreadyInCart) {
              carrito.push(producto);
            }
            localStorage.setItem("carrito", JSON.stringify(carrito));

            dispatch(agregarCarritoExito(carrito));
            toast.success(`Agregado ${item.Descripcion}`, { autoClose: 800 });
          } else {
            dispatch(agregarCarritoError(true));
            toast.warning(`No se agrego ${item.Descripcion}`, {
              autoClose: 900,
            });
          }
        })
        .catch((error) => {
          dispatch(agregarCarritoError(error));
        });
    } else {
      const { IdRelacion } = item;
      if (IdRelacion > 0) {
        const producto = item;
        producto.Cantidad = cantidad;
        producto.CodProducto = producto.IdProducto;
        producto.Base = base;
        carrito.forEach((cp) => {
          if (cp.CodProducto === producto.CodProducto) {
            cp.Cantidad += producto.Cantidad;
            cp.Base = base;
            productAlreadyInCart = true;
          }
        });

        if (!productAlreadyInCart) {
          carrito.push(producto);
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
        toast.success(` Agregado ${item.Descripcion}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(agregarCarritoExito(carrito));
      } else {
        dispatch(agregarCarritoError(true));
        toast.warning(`No agregado ${item.Descripcion}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };
}

export const agregarCarritoInicio = () => ({
  type: AGREGAR_PRODUCTO_INICIO,
});

export const agregarCarritoExito = (datos) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: datos,
});

export const agregarCarritoError = (error) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: error,
});

export function eliminarCarritoActions(Descripcion, CodProducto, carrito) {
  return (dispatch) => {
    Swal.fire({
      title: `Eliminar ${Descripcion} `,
      text: "Si lo eliminas puedes agregarlo nuevamente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0077C6",
      cancelButtonColor: "##8d8d8d",
      confirmButtonText: "Si Eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        dispatch(eliminarCarritoInicio());
        const index = carrito.findIndex((p) => p.CodProducto === CodProducto);
        if (index >= 0) {
          carrito.splice(index, 1);
          toast.info(`Eliminado ${Descripcion} `, { autoClose: 800 });

          dispatch(eliminarCarritoExito(carrito));
        } else {
          toast.warning(`No se elimino ${Descripcion}} `, {
            autoClose: 900,
          });

          dispatch(
            eliminarCarritoError(`No se elimino error ${Descripcion}`, {
              autoClose: 900,
            })
          );
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
        toast.success(`Eliminado Correctamente.`, { autoClose: 1000 });
      }
    });

    // console.log(respuesta.data);
  };
}

export const eliminarCarritoInicio = () => ({
  type: ELIMINAR_PRODUCTO_INICIO,
});

export const eliminarCarritoExito = (datos) => ({
  type: ELIMINAR_PRODUCTO_EXITO,
  payload: datos,
});

export const eliminarCarritoError = (error) => ({
  type: ELIMINAR_PRODUCTO_ERROR,
  payload: error,
});

export function cambioCantidadActions(item, carrito) {
  return (dispatch) => {
    dispatch(cambioCantidadInicio());
    const product = carrito.find((p) => p.CodProducto === item.IdProducto);

    carrito.find((p) => {
      if (p.CodProducto === item.IdProducto) {
        p.Cantidad = item.Cantidad;
      }
    });

    try {
      product.Cantidad = item.Cantidad;
      if (product.Cantidad <= 0) {
        dispatch(eliminarCarritoActions(product, carrito));
      } else {
        localStorage.setItem("carrito", JSON.stringify(carrito));
        dispatch(cambioCantidadExito(carrito));
        toast.success("Cantidad actualizada correctamente", {
          autoClose: 1000,
        });
      }
    } catch (error) {
      dispatch(cambioCantidadError(true));
      toast.error("Error al actualizar ", { autoClose: 900 });
    }
  };
}

export const cambioCantidadInicio = () => ({
  type: CAMBIO_CANTIDAD_INICIO,
});

export const cambioCantidadExito = (datos) => ({
  type: CAMBIO_CANTIDAD_EXITO,
  payload: datos,
});

export const cambioCantidadError = (error) => ({
  type: CAMBIO_CANTIDAD_ERROR,
  payload: error,
});

export function cambioEmpaqueActions(item, carrito) {
  return (dispatch) => {
    dispatch(cambioEmpaqueInicio());
    const product = carrito.find((p) => p.CodProducto === item.CodProducto);
    try {
      product.Base = item.Base;
      toast.success(" Empaque actualizado correctamente", { autoClose: 800 });
      localStorage.setItem("carrito", JSON.stringify(carrito));
      dispatch(cambioEmpaqueExito(carrito));
    } catch (error) {
      toast.error("Error al actualizar el empaque", { autoClose: 800 });
      dispatch(cambioEmpaqueError(true));
    }
  };
}

export const cambioEmpaqueInicio = () => ({
  type: CAMBIO_EMPAQUE_INICIO,
});

export const cambioEmpaqueExito = (datos) => ({
  type: CAMBIO_EMPAQUE_EXITO,
  payload: datos,
});

export const cambioEmpaqueError = (error) => ({
  type: CAMBIO_EMPAQUE_ERROR,
  payload: error,
});

export function vaciarCarritoActions() {
  return (dispatch) => {
    dispatch(vaciarCarritoInicio());
    Swal.fire({
      title: `Eliminar Cotización `,
      text: "Puedes volver a gregregar nuevos productos",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d80909",
      cancelButtonColor: "##8d8d8d",
      confirmButtonText: "Si Eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        try {
          localStorage.removeItem("carrito");
          dispatch(vaciarCarritoExito([]));
          return;
        } catch (error) {
          dispatch(vaciarCarritoError(true));
        }
      }
    });
  };
}

export const vaciarCarritoInicio = () => ({
  type: VACIAR_CARRITO_INICIO,
});

export const vaciarCarritoExito = (datos) => ({
  type: VACIAR_CARRITO_EXITO,
  payload: datos,
});

export const vaciarCarritoError = (error) => ({
  type: VACIAR_CARRITO_ERROR,
  payload: error,
});

export function agregarVariosProductosAction(data) {
  return (dispatch) => {
    dispatch(agregarVarios(data));
  };
}
export const agregarVarios = (data) => ({
  type: AGREGAR_ITEM_VARIOS_INICIO,
  payload: data,
});

export function agregarVariosListoActions() {
  return (dispatch) => {
    dispatch(agregarVariosListoExito());
  };
}

export const agregarVariosListoExito = () => ({
  type: AGREGADO_ITEM_VARIOS_EXITO,
});

export function enviarVariosItemsActions(varios, carrito) {
  return (dispatch) => {
    varios.forEach((item) => {
      const base = "Y";
      const cantidad = 1;
      let productAlreadyInCart = false;
      const { IdRelacion } = item;
      if (IdRelacion > 0) {
        const producto = item;
        producto.Cantidad = cantidad;
        producto.CodProducto = producto.IdProducto;
        producto.Base = base;
        carrito.forEach((cp) => {
          if (cp.CodProducto === producto.CodProducto) {
            cp.Cantidad += producto.Cantidad;
            cp.Base = base;
            productAlreadyInCart = true;
          }
        });

        if (!productAlreadyInCart) {
          carrito.push(producto);
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
        // Swal.fire('Agregado', `${item.Descripcion}`, 'success');
        dispatch(agregarCarritoExito(carrito));
      } else {
        dispatch(agregarCarritoError(true));
        // Swal.fire('No se agrego', `${item.Descripcion}`, 'warning');
      }
    });
    toast.info(`Agregado ${varios.length} itmes`, { autoClose: 800 });

    // Swal.fire('Agregado ', `${varios.length} items`, 'success');
    dispatch(agregarVariosListoExito());
  };
}

export function obtenerProductoActions(id) {
  return (dispatch) => {
    dispatch(obtnerProducto());

    clienteAxios
      .get(`Mywsmobil/api/CatalogoWeb/GetBuscadorItemCode/1007/${id}/`)
      //   .post(`http://localhost:60839/api/doc/SolicitarCotizador/`, data)
      .then((respuesta) => {
        //   if (respuesta.data.Resultado) {
        if (respuesta.data.IdRelacion !== "") {
          dispatch(ObtenerProductoExito(respuesta.data));
        } else {
          dispatch(ObtenerProductoExito("error"));
        }
        // 	//
        // 	localStorage.removeItem("carrito");
        // 	//   history.push("/");
        // 	Swal.fire("Enviado", `${respuesta.data.Mensaje}`, "success");
        // 	setTimeout("location.reload(true);", 2000);
        //   } else {
        // 	dispatch(enviarDataError(true));
        // 	Swal.fire("Exepcion", `${respuesta.data.Mensaje}`, "warning");
        //   }
        //   console.log(respuesta.data);
      })
      .catch((error) => {
        dispatch(ObtenerProductoExito(error));
        //   Swal.fire("Exepcion", `${error}`, "warning");
      });
  };
}

export function InicioObtenerproducto() {
  return (dispatch) => {
    dispatch(obtnerProducto());
  };
}

export const obtnerProducto = () => ({
  //type: OBTENER_PRODUCTO_INICIO,
});

export const ObtenerProductoExito = (datos) => ({
  //type: OBTENER_PRODUCTO_EXITO,
  payload: datos,
});

export const obtenerProdutoErro = (error) => ({
  //type: OBTENER_PRODUCTO_ERROR,
  payload: error,
});
