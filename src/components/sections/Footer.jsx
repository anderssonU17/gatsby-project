import React from "react"
import { makeStyles,useTheme } from "@material-ui/core/styles"
import { Grid,useMediaQuery } from "@material-ui/core"
import { darken } from "@material-ui/core/styles"
import FacebookIcon from "../common/icons/FacebookIcon"
import TwitterIcon from "../common/icons/TwitterIcon"
import InstagramIcon from "../common/icons/InstagramIcon"
import DomainIcon from "@material-ui/icons/Domain"
import StorefrontIcon from "@material-ui/icons/Storefront"
import BallotIcon from "@material-ui/icons/Ballot"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import EmailIcon from "@material-ui/icons/Email"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import clsx from "clsx"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FooterMobil from '../../components/sections/FooterMobile'

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    background: "#011C3A",
    color: palette.primary.contrastText,
  },
  iconWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderRadius: 4,
    marginRight: 12,
    border: `1px solid ${palette.primary.contrastText}`,
    cursor: "pointer",
  },
  link: {
    borderRadius: 4,
    "&:hover": {
      background: darken("#011C3A", 0.2),
    },
  },
}))

const companyOption = [
  {
    name: "Oficinas Centrales",
    descripcion: <text> 15 calle 16-30, Zona 1 <br/>Ciudad de Guatemala <br/><br/> PBX: +502 2422 - 6120</text>,
    icons: <DomainIcon />,
  },
  {
    name: "Centro de Distribucion y Tienda",
    descripcion:<text>
      27 calle 1-41, Zona 3 <br/>Ciudad de Guatemala <br/><br/> PBX: +502 2247 - 1620</text>,
    icons: <StorefrontIcon />,
  },
]
const companyOption1 = [
  {
    name: "Planta",
    descripcion: <text>15 calle 18-08 , Zona 1 <br/><br/> Ciudad de Guatemala</text>,
    icons: <BallotIcon />,
  },
  {
    name: "Horarios",
    descripcion:<text>Lunes a viernes<br/> de 7:00am - 1:00pm 2:00pm - 5:00pm <br/><br/>Sábado de 7:00 am - 10:00 am.</text>,
    icons: <WatchLaterIcon />,
  },
]
const companyOption2 = [
  {
    name: "Correo",
    descripcion:<text> Información : info@disdelsa.com <br/><br/>  Sala de ventas : cmdisdel@disdelsa.com</text> ,
    icons: <EmailIcon />,
  },
  { name: "whatsApp", descripcion: " +502 3109 4985", icons: <WhatsAppIcon /> },
]

const userfulLink = [
  {
    name: "Sobre nosotros",
    link: "/Conocenos",
  },
  { name: "Contactanos", link: "/Contactanos" },
  {
    name: "Empleo",
    link: "https://disdelsagt.com/MyBusiness/Empleo/FormularioEmpleo",
  },
  { name: "Ayuda", link: "/Ayuda" },
]

const Footer2 = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <>
    {isMobile ?
      <FooterMobil></FooterMobil>
      :
      
    
    <section className={`section ${classes.section}`} id="contact4">
      <div className="container">
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">Disdel ,SA</h4>
              <div className="mt-4 mb-6 ml--4">
                {userfulLink.map((item, ind) => (
                  <div
                    key={ind}
                    className={clsx(
                      "flex items-center py-2 cursor-pointer px-4 w-full",
                      classes.link
                    )}
                  >
                    <AniLink
                      ip
                      hex="#075182"
                      to={`${item.link}`}
                      paintDrip
                      duration={0.8}
                      direction="up"
                    >
                      <span>{item.name}</span>
                    </AniLink>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap">
                <div className={classes.iconWrapper}>
                  <a
                    href="https://www.facebook.com/Disdelsagt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon className="text-16" fontSize="small" />
                  </a>
                </div>
                <div className={classes.iconWrapper}>
                  <a
                    href="https://twitter.com/disdelsa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon className="text-16" fontSize="small" />
                  </a>
                </div>
                <div className={classes.iconWrapper}>
                  <a
                    href="https://www.instagram.com/disdelsagt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="text-16" fontSize="small" />
                  </a>
                </div>
                <div className={classes.iconWrapper}>
                  <a
                    href="https://www.linkedin.com/company/disdelsa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className="text-16" fontSize="small" />
                  </a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <div className="mt-4 mb-6 ml--4">
                {companyOption.map((item, ind) => (
                  <div key={ind} className={clsx(classes.link)}>
                    <br />
                    <h6>
                      {item.icons} {" " + item.name}
                    </h6>
                    <h6>{item.descripcion}</h6>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <div className="mt-4 mb-6 ml--4">
                {companyOption1.map((item, ind) => (
                  <div key={ind} className={clsx(classes.link)}>
                    <br />
                    <h6>
                      {item.icons} {" " + item.name}
                    </h6>
                    <h6>{item.descripcion}</h6>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <div className="mt-4 mb-6 ml--4">
                {companyOption2.map((item, ind) => (
                  <div key={ind} className={clsx(classes.link)}>
                    <br />
                    <h6>
                      {item.icons} {" " + item.name}
                    </h6>
                    <h6>{item.descripcion}</h6>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
    }
    </>
  )
}
export default Footer2
