import {
  ENVIAR_PRODUCTO_INICIO,
  ENVIAR_PRODUCTO_EXITO,
  ENVIAR_PRODUCTO_ERROR,
  BOTON_DIALOG_ENVIAR,
  VALIDANDO_fORMULARIO,
  BOTON_LEVANTAR_PARA_ASOCIAR,
  BOTON_LEVANTAR_PARA_ASOCIAR_BACKDROP,
  AGREGAR_PRODUCTO_EXITO
} from "../types/types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

const initialState = {
  formulario: [],
  cargando: null,
  error: null,
  enviado: null,
  buttonDialog: false,
  buttonDialogEnviar: false,
  stepp: 0,
  cargandoAsociar: false,
  cargandoAsociar_Backdrop: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ENVIAR_PRODUCTO_INICIO:
      return {
        ...state,
        formulario: [],
        cargando: true,
        error: null,
        enviado: null,
      };

    case ENVIAR_PRODUCTO_EXITO:
      return {
        ...state,
        formulario: action.payload,
        enviado: true,
        cargando: false,
        error: null,
      };
    case ENVIAR_PRODUCTO_ERROR:
      return {
        ...state,
        formulario: [],
        cargando: null,
        error: true,
        enviado: null,
      };
    case BOTON_DIALOG_ENVIAR:
      return {
        ...state,
        cargando: false,
        buttonDialog: action.payload,
        stepp: 3,
      };

    case VALIDANDO_fORMULARIO:
      return {
        ...state,
        cargando: false,
        enviado: null,
        formulario:[]
      };

    case BOTON_LEVANTAR_PARA_ASOCIAR:
      return {
        ...state,
        cargandoAsociar: action.payload,
      };

    case BOTON_LEVANTAR_PARA_ASOCIAR_BACKDROP:
      return {
        ...state,
        cargandoAsociar_Backdrop: action.payload,
      };

    default:
      return state;
  }
}

export function enviarDataActions(data) {
  return (dispatch) => {
    dispatch(enviarDataInicio());

    clienteAxios
      .post(`MyWsOneVenta/api/doc/SolicitarCotizador/`, data)

      .then((respuesta) => {
        if (respuesta.data.Resultado) {
          dispatch(enviarDataExito(respuesta.data));
          localStorage.removeItem("carrito");
         
        } else {
          dispatch(enviarDataError(true));
          Swal.fire("Exepcion", `${respuesta.data.Mensaje}`, "warning");
          dispatch(LevantarDialog(false));
        }
      })
      .catch((error) => {
        dispatch(enviarDataError(error));
        dispatch(LevantarDialog(false));
        Swal.fire("Exepcion", `${error}`, "warning");
      });
  };
}

export const enviarDataInicio = () => ({
  type: ENVIAR_PRODUCTO_INICIO,
});

export const enviarDataExito = (datos) => ({
  type: ENVIAR_PRODUCTO_EXITO,
  payload: datos,
});

export const enviarDataError = (error) => ({
  type: ENVIAR_PRODUCTO_ERROR,
  payload: error,
});
export function LevantarDialogActions(value) {
  return (dispatch) => {
    dispatch(LevantarDialog(value));
  };
}
export const LevantarDialog = (value) => ({
  type: BOTON_DIALOG_ENVIAR,
  payload: value,
});

export function ColocarEnfalsoEnviado() {
  return (dispatch) => {
    dispatch(ColocarEnfalso());
    dispatch(LevantarDialog(false));
  };
}

export const ColocarEnfalso = () => ({
  type: VALIDANDO_fORMULARIO,
});

export function enviarPAraAsociarActions(data) {
  return (dispatch) => {
    clienteAxios
      .post(`MyWsOneVenta//FocalizarCatalogoDisdelsa`, data)
      .then((respuesta) => {
        console.log(respuesta.data);
        if (respuesta.data.Resultado) {
          Swal.fire("", `${respuesta.data.Mensaje}`, "success");
          localStorage.removeItem("carrito");
          dispatch(LoadingAsociarActions(false));
          dispatch(LevantarDialogASociar(false));
          dispatch(agregarCarritoExitoBackdr());
        } else {
          dispatch(enviarDataError(true));
          Swal.fire("Exepcion", `${respuesta.data.Mensaje}`, "warning");
          dispatch(LoadingAsociarActions(false));
        }
      })
      .catch((error) => {
        //  dispatch(enviarDataError(error));
        dispatch(LoadingAsociarActions(false));
        Swal.fire("Exepcion", `${error}`, "warning");
      });
  };
}

export function LevantarDialogActionsASociar(value) {
  return (dispatch) => {
    dispatch(LevantarDialogASociar(value));
  };
}
export const LevantarDialogASociar = (value) => ({
  type: BOTON_LEVANTAR_PARA_ASOCIAR,
  payload: value,
});

export function LevantarLoadingAsociarActions(value) {
  return (dispatch) => {
    dispatch(LoadingAsociarActions(value));
  };
}
export const LoadingAsociarActions = (value) => ({
  type: BOTON_LEVANTAR_PARA_ASOCIAR_BACKDROP,
  payload: value,
});

export const agregarCarritoExitoBackdr = () => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: [],
});