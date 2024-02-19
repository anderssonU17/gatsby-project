import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography, Button, useMediaQuery, makeStyles } from "@material-ui/core";
import { Phone as PhoneIcon, Room as LocationIcon, Schedule as ScheduleIcon } from "@material-ui/icons";
import HorariosImagen from "../../images/DisdelCentral.jpg";

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    },
  },
  locationIcon: {
    fontSize: theme.spacing(3),
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  phoneButton: {
    textTransform: "none",
    padding: theme.spacing(0.5, 1.5),
    fontSize: theme.spacing(1.5),
    backgroundColor: "#103251",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#081c2d",
    },
  },
  scheduleText: {
    marginBottom: theme.spacing(1),
    color: theme.palette.grey[500],
    display: "flex",
    alignItems: "center",
  },
  iconText: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    cursor: "pointer",
    "&:hover": {
      cursor: "pointer",
    },
  },
  phoneContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(1),
  },
  mapButton: {
    backgroundColor: "#103251",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#081c2d",
    },
  },
}));

const MapDisdelCentral = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleMapButtonClick = () => {
    window.open("https://maps.app.goo.gl/H4Dnvv12Gb3piEWq8", "_blank");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Box className={classes.boxContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={5}>
            <img src={HorariosImagen} alt="Horarios" className={classes.image} onClick={handleMapButtonClick} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography variant="h4" component="h2" gutterBottom align="left">
              Oficinas Centrales
            </Typography>
          <br/>
            <Typography variant="body1" className={classes.scheduleText} align="left">
              <span className={classes.iconText}>
                <LocationIcon className={classes.locationIcon} /> 15 calle 16-30, Zona 1 <br /> Ciudad de Guatemala
              </span>
            </Typography>
            <Typography variant="body1" className={classes.scheduleText} align="left">
              <span className={classes.iconText}>
                <ScheduleIcon className={classes.locationIcon} /><br />
                Lunes a viernes de 7:00am - 1:00pm <br /> y 2:00pm - 5:00pm. <br />
                Sábado de 7:00 am - 10:00 am.
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3} className={classes.phoneContainer}>
            <Button
              variant="contained"
              color="primary"
              href="tel:+50224226120"
              className={classes.phoneButton}
              startIcon={<PhoneIcon color="inherit" />}
            >
              +502 2422 - 6120
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleMapButtonClick}
            className={classes.mapButton}
          >
            Ir al mapa
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default MapDisdelCentral;
