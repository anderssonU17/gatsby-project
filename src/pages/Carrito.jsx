import React, { forwardRef, useState } from "react"
import clsx from "clsx"
import { makeStyles, lighten } from "@material-ui/core/styles"
import { Grid, Button, TextField, Typography, CircularProgress, Backdrop } from "@material-ui/core"
import {
  Search,
  Clear,
  ChevronRight,
  FirstPage,
  LastPage,
  ChevronLeft,
  ArrowDownward,
} from "@material-ui/icons"
import {
  eliminarCarritoActions,
  cambioEmpaqueActions,
  cambioCantidadActions,
  vaciarCarritoActions,
} from "../state/reducers/carritoReducers"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "gatsby"
import ExampleImage from "../components/DataGatsbyImage"
import MaterialTable from "material-table"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import {
  enviarDataActions,
  LevantarDialogActions, LevantarDialogActionsASociar
} from "../state/reducers/enviarDatosReducers"
import BackdropCotizar from "../components/ButtonCarr/Backdrop"
import ModalAsociar from "../components/AsociarSocio/ModalAsociar"
import Layout from "../components/layout"
import ReCAPTCHA from "react-google-recaptcha";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  buttonGroupBG: {
    background: lighten(palette.primary.light, 0.9),
    "&>div": {
      transition: "all 250ms ease",
      "&:hover": {
        background: palette.primary.main,
        color: palette.primary.contrastText,
        borderRadius: 8,
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        width: "100%",
      },
    },
  },

  evenetCard: {
    display: "flex",
    padding: "1rem 1rem",
    borderRadius: 12,
    border: `1px solid rgba(0,0,0,0.14)`,
    transition: "all 250ms ease",
    "&:hover": {
      border: `1px solid rgba(var(--primary),1)`,
      background: "rgba(var(--primary),0.075)",
      "& .buy-ticket-button": {
        background: palette.primary.main,
        color: palette.primary.contrastText,
      },
    },
    "& .circle-holder": {
      marginRight: "3rem",
      border: "2px solid rgba(var(--primary),0.15)",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
      flexDirection: "column",

      "& .circle-holder": {
        margin: 0,
        marginBottom: "1rem",
      },
    },
  },
  intro: {
    padding: "130px 0 0 !important",
    overflow: "visible !important",

    [theme.breakpoints.down("sm")]: {
      padding: "80px 0 0 !important",
    },
  },
  backdropModal: {
    color: "#fff",
    position: "fixed",
    width: "100%",
    top: "0",
    left: "0",
    right: "0",
    padding: "20px 0",
    transition: "padding 0.3s linear",
    zIndex: "999999",
  },
}))

const EventSchedule1 = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { carrito } = useSelector(state => state.carrito)
  const enviarDatos = useSelector(state => state.enviarDatos)
  ////icons table
  const tableIcons = {
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
  }
  ////

  const cambiarEmpaque = (item, carrito, Empaque) => {
    item.Base = Empaque

    dispatch(cambioEmpaqueActions(item, carrito))
  }
  const cambioCantidad = value => {
    const UpdateCantidadItemA = e => {
      if (e.target.value > 0) {
        value.Cantidad = e.target.value
        dispatch(cambioCantidadActions(value, carrito))
      }
    }
    return (
      <TextField
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ min: 1 }}
        margin="none"
        value={value.Cantidad}
        onChange={UpdateCantidadItemA}
      />
    )
  }
  //Encabezado
  const correoValido = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
  const [Datos, setDatos] = useState({
    nit: "",
    empresa: "",
    telefono: "",
    nombre: "",
    apellido: "",
    correo: "",
  })
  const { nit, empresa, telefono, nombre, apellido, correo } = Datos
  const [boolTelefono, setTelefono] = useState(false)
  const TEST_SITE_KEY = "6Ld3bzMaAAAAAIltQOveH3MeaJ1TJ38QDTZUXItd";

  const [stateGeneral, setState] = useState({
    callback: "not fired",
    value: "empty",
    load: false,
    expired: "false",
  });

  const asyncScriptOnLoad = () => {
    setState({ callback: "called!" });
  };
  const handleChangeRecaptcha = (value) => {
    setState({ value });
    if (value === null || value == undefined || value === "") {
      setState({ expired: "true" });
    }
  }

  const onChangeFormulario = e => {
    setDatos({
      ...Datos,
      [e.target.name]: e.target.value,
    })
    if ((telefono, nombre, correo)) {
    }
  }
  const boolCaracteres = () => {
    ValidatorForm.addValidationRule("boolC", value => {
      const numeroValido = RegExp(
        /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}$/
      )
      setTelefono(numeroValido.test(value))
      if (numeroValido.test(value)) {
        return true
      } else {
        return false
      }
    })
  }
  boolCaracteres()

  const enviarFormulario = e => {
    e.preventDefault()


    const Data = {
      Encabezado: {
        nombre,
        apellido,
        u_DoctoNIT: nit,
        correo,
        autor: `${nombre} ${apellido}`,
        nombreCliente: empresa,
        telefono,
        TipoCliente: "",
        comentario: `${correo} tel: ${telefono}`,
        Empresa: "Disdel, S.A.",
        Recaptcha_key: stateGeneral.value,
        PaginaProvenienteRecaptcha: "reCaptchaPublicKeyDisdelsa"
      },
      Detalle: carrito,
    }
    dispatch(LevantarDialogActions(true))
    dispatch(enviarDataActions(Data));
  }
  const handleClickOpen = () => {
    dispatch(LevantarDialogActionsASociar(true));
  };
  return (
    <Layout>
      <section className={clsx("section ", classes.intro)} id="schedule1">
        <div className="container">
          <div className="mb-4  mx-auto">
            {enviarDatos.cargandoAsociar ? <ModalAsociar open={enviarDatos.cargandoAsociar} /> : null}
            {enviarDatos.cargandoAsociar_Backdrop ? (<Backdrop className={classes.backdropModal} open={enviarDatos.cargandoAsociar_Backdrop}>
              <CircularProgress color="inherit" />
              Enviando
            </Backdrop>
            ) : null}
            <Button style={{ marginTop: '50px' }} className="bg-green rounded text-white px-7 text-12" onClick={handleClickOpen}>
              ¿ Quieres Asociar a un socio ?
            </Button>
          </div>
          <Grid container spacing={1}>
            <Grid item sm={8} xs={12}>
              <div className={classes.evenetCard}>
                <MaterialTable
                  title={
                    <h4 className="event-title m-0 text-primary font-normal">
                      Detalle Carrito
                    </h4>
                  }
                  icons={tableIcons}
                  columns={[
                    {
                      title: "",
                      render: rowData => {
                        return (
                          <div className="p-1px inline-block rounded circle-holder">
                            <div className="w-80 h-80 rounded bg-light-primary flex-column justify-center items-center text-primary">
                              <Link to={`/producto/${rowData.ItemCodeAux}/`}>
                                <ExampleImage
                                  image={rowData.Imagen}
                                  width={80}
                                  height={80}
                                />
                              </Link>
                            </div>
                          </div>
                        )
                      },
                    },
                    {
                      title: "Descripcion",
                      field: "Descripcion",
                    },
                    {
                      title: "Cantidad",
                      render: rowData => {
                        return cambioCantidad(rowData)
                      },
                    },
                    {
                      title: "Empaque",
                      render: rowData => {
                        return rowData.Base === "Y"
                          ? rowData.Unidad
                          : rowData.Fardo
                      },
                    },
                    {
                      render: rowData => {
                        return (
                          rowData.BaseFardo !== rowData.BaseUnidad && (
                            <Button
                              color="primary"
                              onClick={() =>
                                cambiarEmpaque(
                                  rowData,
                                  carrito,
                                  rowData.Base === "Y" ? "N" : "Y"
                                )
                              }
                              className={rowData.Base === "Y" ? "bg-green rounded text-white px-4  text-11" : "bg-primary rounded text-white px-4 text-11"}
                            >
                              cambiar Empaque
                            </Button>
                          )
                        )
                      },
                    },
                    {
                      tooltip: "Eliminar",
                      render: rowData => {
                        return (
                          <Button
                            className="bg-error rounded text-white px-4 text-11 "
                            onClick={() =>
                              dispatch(
                                eliminarCarritoActions(
                                  rowData.Descripcion,
                                  rowData.CodProducto,
                                  carrito
                                )
                              )
                            }
                          >
                            X
                          </Button>
                        )
                      },
                    },
                  ]}
                  onRowClick={togglePanel => togglePanel}
                  data={carrito}
                  options={{
                    actionsColumnIndex: -1,
                    tableLayout: "auto",
                    headerStyle: {
                      fontSize: "12px",
                    },
                    cellStyle: {
                      fontSize: "11px",
                    },
                  }}
                  localization={{
                    header: {
                      actions: "Accion",
                    },
                  }}
                />
              </div>
            </Grid>

            <Grid item sm={4} xs={12}>
              <div className={classes.evenetCard}>
                <div>
                  <h4 className="event-title m-0 text-primary font-normal">
                    Encabezado
                  </h4>
                  <ValidatorForm onSubmit={enviarFormulario}>
                    <Typography
                      variant="subtitle2"
                      className="bg-error rounded text-white  text-11 "
                    >
                      ( * Requeridos)
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12}>
                        <TextValidator
                          helperText="Empresa"
                          name="empresa"
                          value={empresa}
                          onChange={onChangeFormulario}
                          fullWidth
                          autoFocus
                        />
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <TextValidator
                          helperText="*Nombre"
                          name="nombre"
                          value={nombre}
                          onChange={onChangeFormulario}
                          validators={["required"]}
                          errorMessages={["este campo es obligatorio"]}
                          fullWidth
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextValidator
                          helperText="Apellido"
                          name="apellido"
                          value={apellido}
                          onChange={onChangeFormulario}
                          fullWidth
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextValidator
                          helperText="*Telefono"
                          value={telefono}
                          name="telefono"
                          onChange={onChangeFormulario}
                          validators={["boolC", "required"]}
                          errorMessages={[
                            "Numero no valido",
                            "este campo es obligatorio",
                          ]}
                          fullWidth
                          autoFocus
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextValidator
                          fullWidth
                          helperText="Nit"
                          name="nit"
                          value={nit}
                          onChange={onChangeFormulario}
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextValidator
                          helperText="*Correo"
                          name="correo"
                          value={correo}
                          onChange={onChangeFormulario}
                          validators={["required", "isEmail"]}
                          errorMessages={[
                            " este campo es obligatorio ",
                            "el correo electrónico no es válido ",
                          ]}
                          fullWidth
                          autoFocus
                        />
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <ReCAPTCHA
                          style={{ display: "inline-block", paddingBottom: 20 }}
                          theme="light"

                          sitekey={TEST_SITE_KEY}
                          onChange={handleChangeRecaptcha}
                          asyncScriptOnLoad={asyncScriptOnLoad}
                        />
                      </Grid>

                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{ paddingBottom: 20 }}
                      >
                        {enviarDatos.buttonDialog ? (
                          <BackdropCotizar title="Enviando Cotizacion" />
                        ) : null}
                        {carrito.length > 0 ? (
                          <>
                            <Button
                              className="bg-error rounded text-white px-4 text-11 "
                              onClick={() => dispatch(vaciarCarritoActions())}
                            >
                              vaciar Carrito
                            </Button>
                            <Button
                              color="primary"
                              type="submit"
                              variant="contained"
                              disabled={
                                !nombre ||
                                !boolTelefono ||
                                !correoValido.test(correo) ||
                                !stateGeneral.value

                              }
                              className=" rounded px-4 text-11"
                            >
                              Finalizar Cotización
                            </Button>
                          </>
                        ) : null}
                      </Grid>
                    </Grid>
                  </ValidatorForm>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </Layout>
  )
}

export default EventSchedule1
