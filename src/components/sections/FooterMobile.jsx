import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, useMediaQuery, Typography, Link, Paper } from "@material-ui/core";
import FacebookIcon from "../common/icons/FacebookIcon";
import TwitterIcon from "../common/icons/TwitterIcon";
import InstagramIcon from "../common/icons/InstagramIcon";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const useStyles = makeStyles((theme) => ({
  section: {
    background: "#fff",
    color: theme.palette.text.primary,
    padding: "40px 0",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: theme.palette.background.paper,
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  aboutUs: {
    flex: 1,
    maxWidth: 300,
  },
  socialIcons: {
    display: "flex",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  contact: {
    flex: 1,
    maxWidth: 300,
  },
  companyInfo: {
    flex: 1,
    maxWidth: 300,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  icon: {
    fontSize: 36,
    marginRight: theme.spacing(1),
  },
}));

const FooterTest = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
        <section className={classes.section} id="contact4">
          <div className={classes.container}>
            <Paper elevation={3} className={classes.paper}>
              <Grid container spacing={3} className={classes.footerContent}>
                <Grid item xs={12} sm={6} md={3} className={classes.aboutUs}>
                  <Typography variant="h4" className={classes.link}>
                    Disdel, SA
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Somos una empresa dedicada a...
                  </Typography>
                  <div className={classes.socialIcons}>
                    <Link href="https://www.facebook.com/Disdelsagt" target="_blank" rel="noopener noreferrer" className={classes.link}>
                      <FacebookIcon className={classes.icon} />
                    </Link>
                    <Link href="https://twitter.com/disdelsa" target="_blank" rel="noopener noreferrer" className={classes.link}>
                      <TwitterIcon className={classes.icon} />
                    </Link>
                    <Link href="https://www.instagram.com/disdelsagt/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                      <InstagramIcon className={classes.icon} />
                    </Link>
                    <Link href="https://www.linkedin.com/company/disdelsa/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                      <LinkedInIcon className={classes.icon} />
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.contact}>
                  <Typography variant="h5" className={classes.link}>
                    Contactanos
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Teléfono: +502 XXXX XXXX
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <WhatsAppIcon className={classes.icon} />{" "}
                    <Link href="https://wa.me/502XXXXXXXX" target="_blank" rel="noopener noreferrer" className={classes.link}>
                      Envíanos un mensaje por WhatsApp
                    </Link>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <EmailIcon className={classes.icon} />{" "}
                    <Link href="mailto:info@disdelsa.com" className={classes.link}>
                      info@disdelsa.com
                    </Link>
                  </Typography>
                  <Typography variant="body1">
                    <EmailIcon className={classes.icon} />{" "}
                    <Link href="mailto:sales@disdelsa.com" className={classes.link}>
                      sales@disdelsa.com
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.companyInfo}>
                  <Typography variant="h5" className={classes.link}>
                    Enlaces útiles
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <AniLink hex="#f50057" to="/Conocenos" paintDrip duration={0.8} direction="up" className={classes.link}>
                      Sobre nosotros
                    </AniLink>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <AniLink hex="#f50057" to="/Contactanos" paintDrip duration={0.8} direction="up" className={classes.link}>
                      Contactanos
                    </AniLink>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <a
                      href="https://disdelsagt.com/MyBusiness/Empleo/FormularioEmpleo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.link}
                    >
                      Empleo
                    </a>
                  </Typography>
                  <Typography variant="body1">
                    <AniLink hex="#f50057" to="/Ayuda" paintDrip duration={0.8} direction="up" className={classes.link}>
                      Ayuda
                    </AniLink>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.contact}>
                  <Typography variant="h5" className={classes.link}>
                    Sucursales
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <AniLink to="/Sucursales" paintDrip duration={0.8} direction="up" className={classes.link}>
                      Ubicaciones y Horarios
                    </AniLink>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </section>
    </>
  );
};

export default FooterTest;
