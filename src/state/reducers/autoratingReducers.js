import {
    LEVANTAR_AUTORATING,
    GUARDAR_NOMBRECATEGORIA_SELECCIONADO
} from "../types/types";

const initialState = {
    cargando: false,
    NombreSegmento:''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LEVANTAR_AUTORATING:
            return {
                ...state,
                cargando: action.payload,
            };
        case GUARDAR_NOMBRECATEGORIA_SELECCIONADO:
            return {
                ...state,
                NombreSegmento:action.payload
            }    
        default:
            return state;
    }
}


export function EjecutarAutoRating(value) {
    return (dispatch) => {
      dispatch(Ejecutarme(value));
    };
  }
  
  export const Ejecutarme = (value) => ({
    type: LEVANTAR_AUTORATING,
    payload: value,
  });
  export const GuardarNombreSegmento = (datos) => ({
    type: GUARDAR_NOMBRECATEGORIA_SELECCIONADO,
    payload: datos,
  });
  