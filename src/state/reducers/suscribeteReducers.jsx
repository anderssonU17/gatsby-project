import {
  SUSCRIBIRSE_INICIO,
  SUSCRIBIRSE_EXITO,
  SUSCRIBIRSE_ERROR,
  SUSCRIBIRSE_NUEVAMENTE,
} from "../types/types";
import clienteAxios from "../config/axios";
import { toast } from "react-toastify";


const initialState = {
  error: null,
  respuesta: "",
  send: null,
  enviado: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUSCRIBIRSE_INICIO:
      return {
        ...state,
        send: true,
      };
    case SUSCRIBIRSE_EXITO:
      return {
        ...state,
        error: false,
        enviado: true,
        send:false
      };
    case SUSCRIBIRSE_ERROR:
      return {
        ...state,
        error: true,
        enviado: null,
      };
    case SUSCRIBIRSE_NUEVAMENTE:
      return {
        ...state,
        error: null,
        respuesta: "",
        send: null,
        enviado: null,
      };
    default:
      return state;
  }
}

export function suscripcionClient(Solicitud) {
  let datos = {
    Nombres: "",
    Apellidos: "",
    Correo: Solicitud,
    Telefono: "",
    NombreEmpresa: "",
    Tipo: "Suscripcion",
    Log: { IdHostCreacion: "192.168.16.7" },
  };

  return (dispatch) => {
    dispatch(suscripcionClientInicio());
    clienteAxios
      .post(`mywsmobil/api/SolicitudUsuarioWeb/SolicitarInfo`, datos)
      .then((respuesta) => {
        if (respuesta.data.Resultado) {
          dispatch(suscripcionClientExito(respuesta.data.Mensaje));
          toast.success(
            respuesta.data.Mensaje,
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        } else {
          dispatch(suscripcionClientError(respuesta.data.Mensaje));
          toast.error(respuesta.data.Mensaje);
        }
      })
      .catch((respuesta) => {
        console.log(respuesta);
        dispatch(suscripcionClientError("error"));
        toast.error(
          " no se envio Intente de nuevo"
          ,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      });
  };
}

export const suscripcionClientInicio = () => ({
  type: SUSCRIBIRSE_INICIO,
});

export const suscripcionClientExito = (datos) => ({
  type: SUSCRIBIRSE_EXITO,
  payload: datos,
});

export const suscripcionClientError = (error) => ({
  type: SUSCRIBIRSE_ERROR,
  payload: error,
});

export function IntentarNuevamenteActions(Solicitud) {
  return (dispatch) => {
    dispatch(IntentarNuevamente());
  };
}
export const IntentarNuevamente = () => ({
  type: SUSCRIBIRSE_NUEVAMENTE,
});
