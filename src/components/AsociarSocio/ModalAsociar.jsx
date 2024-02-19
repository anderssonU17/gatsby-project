import React, { useState } from "react"
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { enviarPAraAsociarActions, LevantarLoadingAsociarActions, LevantarDialogActionsASociar } from "../../state/reducers/enviarDatosReducers";
import { useDispatch, useSelector } from "react-redux";

const ModalAsociar = ({ open }) => {
    const dispatch = useDispatch();
    const { carrito } = useSelector((state) => state.carrito);
    const [showPassword, setValues] = useState(false);
    const handleClose = () => {
        dispatch(LevantarDialogActionsASociar(false));
        setDatosAsociar([]);
    };
    const handleClickShowPassword = () => {
        setValues(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [DatosAsociar, setDatosAsociar] = useState({
        CardCode: "",
        Contraseña: "",
        ComentarioAutorizacion: "",
        Log: {
            DBSAP: "SBO_DISDELSA_2013",
        },
    });
    const { CardCode, Contraseña, ComentarioAutorizacion } = DatosAsociar;
    const onChangeFormularioParaAsociar = (e) => {
        console.log(e.target.value);
        setDatosAsociar({
            ...DatosAsociar,
            [e.target.name]: e.target.value,
        });
    };

    const enviarDatosParaAsociar = (e) => {
        e.preventDefault();
        const Data = {
            Encabezado: DatosAsociar,
            Detalle: carrito,
        };
        dispatch(LevantarLoadingAsociarActions(true));
        dispatch(LevantarDialogActionsASociar(false));
        dispatch(enviarPAraAsociarActions(Data));

        setDatosAsociar([]);
    };


    return (

        <Dialog
            open={open}
            //onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >

            <ValidatorForm onSubmit={enviarDatosParaAsociar}>
                <DialogTitle id="alert-dialog-title">
                    {"Ingrese sus Datos ?"}
                </DialogTitle>
                <DialogContent>
                    <Grid item xs={12} md={12}>
                        <TextValidator
                            fullWidth
                            label="Socio"
                            name="CardCode"
                            value={CardCode}
                            onChange={onChangeFormularioParaAsociar}
                            validators={["required"]}
                            errorMessages={["este campo es obligatorio"]}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextValidator
                            name="empresa"
                            label="Usuario"
                            name="ComentarioAutorizacion"
                            value={ComentarioAutorizacion}
                            onChange={onChangeFormularioParaAsociar}
                            fullWidth
                            autoFocus
                            validators={["required"]}
                            errorMessages={["este campo es obligatorio"]}
                            margin="dense"
                            // variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextValidator
                            fullWidth
                            // id="filled-password-input"
                            label="password"
                            onChange={onChangeFormularioParaAsociar}
                            name="Contraseña"
                            type={showPassword ? "text" : "password"}
                            value={Contraseña}
                            margin="dense"
                            //variant=""
                            validators={["required"]}
                            errorMessages={["este campo es obligatorio"]}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cerrar
                </Button>
                    <Button type="submit" color="primary" autoFocus >
                        Guardar
                </Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog>

    )


}




export default ModalAsociar;