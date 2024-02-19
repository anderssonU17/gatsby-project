import {
  MOSTRAR_SEGMENTOS,
  MOSTRAR_PRODUCTOS,
  MOSTRAR_PRODUCTO,
  MOSTRAR_CATEGORIAS,
  MOSTRAR_BUSQUEDA,
  MOSTRAR_BUSQUEDAS,
  MOSTRAR_CATALOGO,
  MOSTRAR_CATALOGOPRODUCTOS,
  MOSTRAR_RESPUESTA,
  MOSTRAR_BUSQUEDAS_COMPLETO_EXITO,
  MOSTRAR_BUSQUEDAS_COMPLETO_INICIO,
  PRODUCTOS_MAS_VENDIDOS,
  PRODUCTOS_DESTACADOS,
  PRODUCTOS_NUEVOS,
  PAGINA_BANNER,
  PRODUCTO_OFERTA,
  GUARDAR_PRODUCTO_SEARCH,
} from "../types/types";
const initialState = {
  productos: [],
  buscando: true,
  busquedascompleta: [],
  productosdestacados: [],
  productosmasvendidos: [],
  productosnuevos: [],
  catalogoproductos: {
    cargando: true,
    ProductosDestacados: [],
    ProductosNuevos: [],
    ProductosMasVendidos: [],
  },
  guardarProductosBusqueda: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_SEGMENTOS:
      return {
        ...state,
        segmentos: action.payload,
      };
    case MOSTRAR_BUSQUEDA:
      return {
        ...state,
        busqueda: action.payload,
      };
    case MOSTRAR_PRODUCTO:
      return {
        ...state,
        producto: action.payload,
      };
    case MOSTRAR_CATEGORIAS:
      return {
        ...state,
        categorias: action.payload,
      };
    case MOSTRAR_BUSQUEDAS:
      return {
        ...state,
        busquedas: action.payload,
      };
    case MOSTRAR_BUSQUEDAS_COMPLETO_INICIO:
      return {
        ...state,
        buscando: true,
        busquedascompleta: [],
      };
    case MOSTRAR_BUSQUEDAS_COMPLETO_EXITO:
      let datosresultado = action.payload.resultado;
      let newArray = [];

      datosresultado.forEach((i) => {
        if (i.IdRelacion) {
          newArray.push(i);
        }
      });

      return {
        ...state,
        buscando: false,
        busquedascompleta: newArray,
      };

    case MOSTRAR_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };
    case MOSTRAR_CATALOGO:
      return {
        ...state,
        catalogo: action.payload,
      };

    case MOSTRAR_CATALOGOPRODUCTOS:
      return {
        ...state,
        catalogoproductos: action.payload,
      };

    case PRODUCTOS_DESTACADOS:
      return {
        ...state,
        productosdestacados: action.payload,
      };
    case PRODUCTOS_MAS_VENDIDOS:
      return {
        ...state,
        productosmasvendidos: action.payload,
      };
    case PRODUCTOS_NUEVOS:
      return {
        ...state,
        productosnuevos: action.payload,
      };
    case PRODUCTO_OFERTA:
      return {
        ...state,
        productooferta: action.payload,
      };
    case PAGINA_BANNER:
      return {
        ...state,
        Banner: action.payload,
      };

    case MOSTRAR_RESPUESTA:
      return {
        ...state,
        respuesta: action.payload,
      };

    case GUARDAR_PRODUCTO_SEARCH:
      return {
        ...state,
        guardarProductosBusqueda: action.payload,
      };

    default:
      return state;
  }
}

export function guardarProductosBusquedaAction(value) {
  return (dispatch) => {
    dispatch(ExitoSearh(value));
  };
}

export const ExitoSearh = (value) => ({
  type: GUARDAR_PRODUCTO_SEARCH,
  payload: value,
});
