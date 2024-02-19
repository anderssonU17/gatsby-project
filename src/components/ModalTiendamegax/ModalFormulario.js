import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import Slide from "@material-ui/core/Slide"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import { useSelector, useDispatch } from "react-redux"
import { LavantaModal } from "../../state/reducers/FormsTiendaMegaxReducers"
import Suscribete from "../sections/Suscribete"

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  // button: {
  //   marginTop: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   color: "white",
  //   background: "#075182",
  // },
  buttonMovil: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: "10px",
  },
  radioButonsModal: {
    borderRadius: 10,
    color: "red",
  },
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(2),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function AlertDialogSlide() {
  const dispatch = useDispatch()

  const loading = useSelector(state => state.formMegax)

  const handleClose = () => {
    dispatch(LavantaModal(false))
  }

  let TiempoModal = localStorage.getItem("模态时间")
  React.useEffect(() => {
    if (TiempoModal) {
      return
    }
    const timer = setTimeout(() => {
      dispatch(LavantaModal(true))
      localStorage.setItem("模态时间", true)
      console.log("Me ejecutare despues de 3 Segundos")
    }, 2000)
    return () => clearTimeout(timer)
  }, [dispatch])
  return (
    <>
      <Dialog
        open={loading.levantarmodal}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Box fontWeight="bold" marginTop={-1}>
          {/* <DialogTitle id="alert-dialog-slide-title"> */}
          <img
            src="https://disdelsa.com/imagenes/correoImagen.jpg"
            width={520}
          />

          <DialogContent>
            <Suscribete />
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="outlined" onClick={handleClose}>
              X
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  )
}
