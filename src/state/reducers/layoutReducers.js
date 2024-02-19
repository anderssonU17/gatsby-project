import { VER_CARRITO, LAYOUT_MOBIL } from "../types/types";

const initialState = {
  visible: false,
  desktop: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case VER_CARRITO:
      return {
        ...state,
        visible: action.payload,
      };
    case LAYOUT_MOBIL:
      return {
        ...state,
        desktop: action.payload,
      };
    default:
      return state;
  }
}

export function VerCarritoActions(ver) {
  return (dispatch) => {
    dispatch(verCarrito(ver));
  };
}
export const verCarrito = (ver) => ({
  type: VER_CARRITO,
  payload: ver,
});

export function layoutMobilActions(valor) {
  return (dispatch) => {
    dispatch(layoutmobil(valor));
  };
}
export const layoutmobil = (valor) => ({
  type: LAYOUT_MOBIL,
  payload: valor,
});
