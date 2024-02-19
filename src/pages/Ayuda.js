import React from "react";
import clsx from "clsx"
import { makeStyles, lighten } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Seo from "../components/SEO/seo";
import Layout from "../components/layout"
import BuildIcon from "@material-ui/icons/Build";
import PhoneIphone from "@material-ui/icons/PhoneIphone";

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
    padding: "1.5rem 3rem",
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
    padding: "200px 0 0 !important",
    overflow: "visible !important",

    [theme.breakpoints.down("sm")]: {
      padding: "60px 0 0 !important",
    },
  },
}));

const EventSchedule1 = () => {
  const classes = useStyles();

  return (
    <Layout>
      <section className={clsx("section ", classes.intro)} id="schedule1">
        <div className="container">
        <Seo title={"Ayuda |Disdel"}
      link={"https://www.disdelsa.com/Ayuda/"}
      description={"Disdelsa, distribucion y comercializacion de productos de limpieza " }         
      keywords={"Disdelsa, Productos de limpieza, suministros de limpieza " }  
      
      title={ " Ayuda | Disdelsa "}
      image="https://disdelsa.com/imagenes/BannerImagen-img2059-19-8-2020-84427.png"
 />
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <div className={classes.evenetCard}>
                <div>
                  <div className="p-2px inline-block rounded circle-holder">
                    <div className="w-76 h-76 rounded bg-light-primary flex-column justify-center items-center text-primary">
                      <BuildIcon />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="event-title m-0 text-primary font-normal">
                    Soporte
                    </h4>
                  <div className="mt-4 mb-8 relative">
                    <Grid container spacing={0}>
                      <Grid item xs={6}>
                        <span className="font-medium">+ 502 2422 - 6199</span>
                      </Grid>
                      <Grid item xs={3}>
                        <span className="font-medium"> infotec@disdelsa.com</span>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.evenetCard}>
                <div>
                  <div className="p-2px inline-block rounded circle-holder">
                    <div className="w-76 h-76 rounded bg-light-primary flex-column justify-center items-center text-primary">
                      <PhoneIphone />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="event-title m-0 text-primary font-normal">
                    Mercadeo
                    </h4>
                  <div className="mt-4 mb-8 relative">
                    <Grid container spacing={0}>
                      <Grid item xs={6}>
                        <span className="font-medium">+ 502 2422 - 6120</span>
                      </Grid>

                      <Grid item xs={3}>
                        <span className="font-medium">   mercadeo@disdelsa.com</span>
                      </Grid>

                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <br/> <br/>  <br/> <br/>
        </div>
      </section>
    </Layout>
  );
};

export default EventSchedule1;
