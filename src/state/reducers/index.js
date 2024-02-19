import { combineReducers } from "redux";
import countReducer from "./countReducers";
import carrito from "./carritoReducers";
import layout from "./layoutReducers";
import enviarDatos from "./enviarDatosReducers";
import suscribirse from "./suscribeteReducers";
import productos from "./productoReducers";
import rating from "./autoratingReducers";
import formMegax from "./FormsTiendaMegaxReducers";

export default combineReducers({
  count: countReducer,
  carrito,
  layout,
  enviarDatos,
  suscribirse,
  productos,
  rating,
  formMegax
});
