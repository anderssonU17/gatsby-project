import React from "react"
import { useMediaQuery, Grid, Typography } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Seo from "../components/SEO/seo"
import Layout from "../components/layout"
import disdelImage from "../images/Security.jpg"; 

const useStyles = makeStyles(({ palette, ...theme }) => ({
  intro: {
    padding: "70px 0 0 !important",
    overflow: "visible !important",

    [theme.breakpoints.down("sm")]: {
      padding: "60px 0 0 !important",
    },
  },
  content: {
    marginTop: theme.spacing(4),
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  paragraph: {
    marginBottom: theme.spacing(2),
  },
}))

const Politicas = ({ data }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <Layout>
      <div className={classes.intro}>
        <Seo
          title="Políticas de Privacidad | Disdelsa"
          description="Conozca nuestras políticas de privacidad en Disdelsa."
          keywords="políticas de privacidad, privacidad, Disdelsa"
          link="https://disdelsa.com/politicas"
          image="https://disdelsa.com/images/politicas_image.jpg"
        />
        <div className="container">
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.content}
          >
            <Grid item xs={12} sm={6}>
              {/* Contenido de las políticas de privacidad */}
              <Typography variant="h4" gutterBottom className={classes.title}>
                Políticas de Privacidad
              </Typography>
              <Typography paragraph className={classes.paragraph}>
                En Disdelsa, nos comprometemos a proteger la privacidad de
                nuestros clientes y usuarios. Por lo tanto, garantizamos que la
                información que nos ha confiado será utilizada únicamente para
                propósitos de mercadeo o promocionales. Estamos comprometidos a mantener la confidencialidad de la información y a no compartirla con terceros sin su consentimiento.
              </Typography>
              <Typography paragraph className={classes.paragraph}>
                En ningún momento, Disdelsa venderá o proporcionará a ninguna
                compañía o interesado la información total o parcial que nos ha
                proporcionado. Nos esforzamos por mantener la integridad de nuestros clientes y proteger su información en todo momento.
              </Typography>
              <Typography paragraph className={classes.paragraph}>
                Si en cualquier momento desea que borremos su información de
                nuestros registros, puede comunicarse con nosotros a través de
                nuestro correo electrónico{" "}
                <strong>info@disdelsa.com</strong>, indicando sus nombres y
                apellidos, así como las razones por las que desea ser excluido
                de nuestros registros. Estamos comprometidos a responder a sus solicitudes de manera oportuna y a asegurar que su información sea eliminada de manera segura y completa.
              </Typography>
              <Typography paragraph className={classes.paragraph}>
                Según nuestros Términos Legales: Disdelsa se compromete a
                mantener la privacidad de toda la información proporcionada por
                un usuario del sitio de Internet y solamente revelarla si fuese
                requerida por una autoridad judicial competente. Nos esforzamos por cumplir con todas las leyes y regulaciones de privacidad aplicables para garantizar la protección de los datos de nuestros clientes.
              </Typography>
              <Typography paragraph className={classes.paragraph}>
                En Disdelsa, nos esforzamos por mantenernos actualizados con las mejores prácticas de seguridad y privacidad de datos para garantizar que su información esté protegida en todo momento. Contamos con un equipo dedicado para revisar y mejorar continuamente nuestras políticas de privacidad y para abordar cualquier inquietud o pregunta que pueda tener sobre cómo manejamos sus datos personales.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Imagen representativa */}
              <img
                src={disdelImage}
                alt="Políticas de Privacidad"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  )
}

export default Politicas
