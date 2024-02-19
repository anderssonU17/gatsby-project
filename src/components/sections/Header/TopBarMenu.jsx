import React from "react";
import classNames from "classnames";
import { IconButton } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import PlaceIcon from "@material-ui/icons/Place";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Help from "@material-ui/icons/Help";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Divider from "@material-ui/core/Divider";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(({ palette, ...theme }) => ({
  topBar: {
    textDecoration: "none",
    height: 3,
  },
}))

const TopBarMenu = () => {
  const estilos = useStyles();
  return (
    <>
      <IconButton
        variant="extended"
        href="http://disdelsagt.com/MyBusiness/Empleo/FormularioEmpleo"
        target="_blank"
        className={classNames(estilos.topBar)}
      >
        <PersonAddIcon />
        <Box
          fontWeight="fontWeightBold"
          style={{ fontSize: 12, paddingLeft: 5 }}
        >
          Empleo
        </Box>
      </IconButton>
      <Divider
        orientation="vertical"
        flexItem

      />

      <AniLink to={"/Conocenos"} fade duration={0.5} hex="#e0e0e0">
        <IconButton className={classNames(estilos.topBar)}>
          <SupervisorAccountIcon />
          <Box
            fontWeight="fontWeightBold"
            style={{ fontSize: 12, paddingLeft: 5 }}
          >
            Conócenos
          </Box>
        </IconButton>
      </AniLink>

      <Divider
        orientation="vertical"
        flexItem

      />

      <AniLink to={"/Contactanos"} fade duration={0.5} hex="#e0e0e0">
        <IconButton className={classNames(estilos.topBar)}>
          <PlaceIcon />
          <Box
            fontWeight="fontWeightBold"
            style={{ fontSize: 12, paddingLeft: 5 }}
          >
            Contáctanos
          </Box>
        </IconButton>
      </AniLink>

      <Divider
        orientation="vertical"
        flexItem

      />

      <AniLink to={"/Ayuda"} fade duration={0.5} hex="#e0e0e0">
        <IconButton className={classNames(estilos.topBar)}>
          <Help />
          <Box
            fontWeight="fontWeightBold"
            style={{ fontSize: 12, paddingLeft: 5 }}
          >
            Ayuda
          </Box>
        </IconButton>
      </AniLink>

      <Divider
        orientation="vertical"
        flexItem

      />

      <IconButton
        variant="extended"
        href="https://www.facebook.com/Disdelsagt"
        target="_blank"
        className={classNames(estilos.topBar)}
      >
        <FacebookIcon />
      </IconButton>

      <IconButton
        href="https://www.instagram.com/disdelsagt/"
        target="_blank"
        className={classNames(estilos.topBar)}
      >
        <InstagramIcon />
      </IconButton>

      <IconButton
        href="https://twitter.com/disdelsa"
        target="_blank"
        className={classNames(estilos.topBar)}
      >
        <TwitterIcon />
      </IconButton>

      <IconButton
        href="https://www.linkedin.com/company/disdelsa/"
        target="_blank"
        className={classNames(estilos.topBar)}
      >
        <LinkedInIcon />
      </IconButton>
    </>
  );
};

export default TopBarMenu;
