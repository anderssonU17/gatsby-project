import {
  INICIO_FORM_TIENDA_MEGAX,
  EXITO_FORM_TIENDA_MEGAX,
  ERROR_FORM_TIENDA_MEGAX,
  ARCHIVO_CARGADO_EXITOSAMENTE,
  LEVANTAR_MODAL,
} from "../types/types";
import clienteAxios from "../config/axios";
const initialState = {
  loading: false,
  Mensaje: "",
  enviado: false,
  error: false,
  Archivo: [],
  
  levantarmodal: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INICIO_FORM_TIENDA_MEGAX: {
      return {
        ...state,
        loading: true,
      };
    }

    case EXITO_FORM_TIENDA_MEGAX:
      return {
        ...state,
        loading: false,
        Mensaje: action.payload,
        enviado: true,
      };
    case ERROR_FORM_TIENDA_MEGAX:
      return {
        ...state,
        error: true,
      };
    case LEVANTAR_MODAL:
      return {
        ...state,
        levantarmodal: action.payload,
      };

    default:
      return state;
  }
}

export function EnviarDataTiendaMegax(data, checked, checked2, Anexos) {
  const usuario = {
    EntityID: "",
    IdDivision:2,
    Nombres: data.Nombres,
    Apellidos: data.Apellidos,
    Direccion: data.Direccion,
    TipoCliente: data.TipoCliente,
    Telefono: data.Telefono,
    Correo: data.Correo,
    Departamento: data.Departamento,
    Municipio: data.Municipio,
    Zona: data.Zona,
    AceptoTerminos: (data.AceptoTerminos = checked),
    AceptoPoliticas: (data.AceptoPoliticas = checked2),
    Tipo: data.Tipo,
    Anexos: Anexos,
  };
  return (dispatch) => {
    clienteAxios
      .post(`mywsmobil/api/SolicitudUsuarioWeb/SolicitarInfo`, usuario)
      .then((Respuesta) => {
        if (Respuesta.data.Resultado) {
          dispatch(EnviadoExito(Respuesta.data.Mensaje));
        }
      })
      .catch((error) => {
        dispatch(EnviarError(error));
      });
  };
}

export function LevantarBackdrow(value) {
  return (dispatch) => {
    dispatch(EnviarInicio(value));
  };
}
export const EnviarInicio = (data) => ({
  type: INICIO_FORM_TIENDA_MEGAX,
  payload: data,
});

export const EnviadoExito = (data) => ({
  type: EXITO_FORM_TIENDA_MEGAX,
  payload: data,
});

export const EnviarError = (data) => ({
  type: ERROR_FORM_TIENDA_MEGAX,
  payload: data,
});
export function GuardarArrayArchivos(value) {
  return (dispatch) => {
    dispatch(archivoExito(value));
  };
}

export const archivoExito = (array) => ({
  type: ARCHIVO_CARGADO_EXITOSAMENTE,
  payload: array,
});

export function LavantaModal(value) {
  return (dispatch) => {
    dispatch(LevantarModalExito(value));
  };
}

export const LevantarModalExito = (value) => ({
  type: LEVANTAR_MODAL,
  payload: value,
});
