import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Facebook, Twitter, Instagram, LinkedIn, Email, WhatsApp } from "@material-ui/icons";
import LogoDisdel from "../../images/logoDisdel.png";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#f6f6f6",
    padding: "70px 0",
    textAlign: "center",
  },
  container: {
    maxWidth: 1170,
    margin: "auto",
  },
  footerCol: {
    width: "25%",
    padding: "0 15px",
  },
  footerTitle: {
    fontSize: "18px",
    color: "#333333",
    textTransform: "capitalize",
    marginBottom: "35px",
    fontWeight: "bold",
    position: "relative",
    textDecoration: "none",
    textAlign: "center", //Alinear el titulo al centro
  },
  titleLine: {
    content: "''",
    position: "absolute",
    left: "50%",
    bottom: "-10px",
    backgroundColor: "#97c93e",
    height: "2px",
    boxSizing: "border-box",
    width: "35%",
    transform: "translateX(-50%)",
  },
  footerLink: {
    fontSize: "16px",
    textTransform: "capitalize",
    color: "#333333",
    textDecoration: "none",
    fontWeight: "300",
    display: "block",
    transition: "color 0.5s ease",
    cursor: "pointer",
    listStyle: "none",
    textAlign: "left",
    marginBottom: "8px",
    "&:hover": {
      color: "#1f66ad",
      paddingLeft: "8px",
    },
  },
  socialIconsContainer: {
    display: "flex",
    justifyContent: "center", 
    backgroundColor: "#011C3A", 
    padding: "10px", 
    borderRadius: "5px", 
    "@media (min-width: 600px)": {
      justifyContent: "flex-end"
    },
  },
  socialIcon: {
    fontSize: "30px",
    color: "#97c93e",
    marginRight: "10px", 
    cursor: "pointer",
    transition: "color 0.3s ease",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    textDecoration: "none",
    "&:hover": {
      color: "#1f66ad",
      backgroundColor: "#ffffff",
    },
  },
  logoDisdel: {
    width: "40px",
    height: "40px",
    marginLeft: "10px", 
    float: "left", 
  },
  copyrightContainer: {
    backgroundColor: "#ffffff", 
    color: "#333333",
    padding: "5px 0", 
    textAlign: "center",
    borderRadius: "5px", 
  },
}));

const FooterTest = () => {
  const classes = useStyles();

  return (
    <div>
      {/* Redes sociales */}
      <div className={classes.socialIconsContainer}>
        <a href="https://www.facebook.com/Disdelsagt" className={classes.socialIcon}>
          <Facebook />
        </a>
        <a href="https://twitter.com/disdelsa" className={classes.socialIcon}>
          <Twitter />
        </a>
        <a href="https://www.instagram.com/disdelsagt/" className={classes.socialIcon}>
          <Instagram />
        </a>
        <a href="https://www.linkedin.com/company/disdelsa/" className={classes.socialIcon}>
          <LinkedIn />
        </a>
      </div>

      {/* Footer */}
      <footer className={classes.footer}>
        <div className={classes.container}>
          <Grid container spacing={3} justify="center">
            <Grid item lg={3} md={3} sm={6} xs={12} className={classes.footerCol}>
              <div>
                <h4 className={classes.footerTitle}>
                  Contactanos
                  <span className={classes.titleLine}></span>
                </h4>
                <ul>
                  <li style={{ listStyle: "none" }}>
                    <a href="https://wa.me/50231094985" className={classes.footerLink}>
                      <WhatsApp /> +502 3109-4985
                    </a>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <a href="mailto:info@disdelsa.com" className={classes.footerLink}>
                      <Email /> info@disdelsa.com
                    </a>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <a href="mailto:cmdisdel@disdelsa.com" className={classes.footerLink}>
                      <Email /> cmdisdel@disdelsa.com
                    </a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12} className={classes.footerCol}>
              <div>
                <h4 className={classes.footerTitle}>
                  Sobre Nosotros
                  <span className={classes.titleLine}></span>
                </h4>
                <ul>
                  <li style={{ listStyle: "none" }}>
                    <a href="/Conocenos" className={classes.footerLink}>Quiénes Somos</a>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <a href="http://disdelsagt.com/MyBusiness/Empleo/FormularioEmpleo" className={classes.footerLink}>Empleos Disdel</a>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <a href="/Ayuda" className={classes.footerLink}>Ayuda</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12} className={classes.footerCol}>
              <div>
                <h4 className={classes.footerTitle}>
                  Sucursales
                  <span className={classes.titleLine}></span>
                </h4>
                <ul>
                  <li style={{ listStyle: "none" }}>
                    <a href="/Contactanos" className={classes.footerLink}>Ubicaciones y Teléfonos</a>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
      </footer>

      {/* Copyright */}
      <div className={classes.copyrightContainer}>
        <p>© 2024 Copyright Disdel S.A</p>
      </div>
    </div>
  );
};

export default FooterTest;
