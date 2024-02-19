import React from "react"
import { useTheme } from "@material-ui/core/styles"
import ContactMap1 from "../components/GoogleMaps/MapDisdelCentral"
import ContactMap2 from "../components/GoogleMaps/MapDisdelCentralMobil"
import MapCentralDistribucion from "../components/GoogleMaps/MapCentralDistribucion"
import MapCentralDistribucionMobil from "../components/GoogleMaps/MapCentralDistribucionMobil"
import { useMediaQuery } from "@material-ui/core"
import Layout from "../components/layout"

const Contact2 = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <Layout>
      <section className="section" id="contact2" style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div className="container text-center">
          <h1 className="mt-0 mb-8 font-normal text-44 mx-auto">&nbsp;</h1> {/* Espacio para mantener el margen superior */}
          <ContactMap1/>
          <MapCentralDistribucion/>
          <MapCentralDistribucionMobil/>
        </div>
      </section>
    </Layout>
  )
}

export default Contact2
