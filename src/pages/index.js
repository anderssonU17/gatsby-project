import * as React from "react"
import { graphql } from "gatsby"
import { useMediaQuery, useTheme } from "@material-ui/core"
const Layout = React.lazy(() => import("../components/layout"))
const Intro2 = React.lazy(() => import("../components/sections/Intro2"))
const Intro5 = React.lazy(() => import("../components/sections/BanerPrueba"))
const CProductosRecomendados = React.lazy(() => import("../components/sections/ProductosRecomendados"))
const CProductosPromociones = React.lazy(() => import("../components/sections/ProductosPromociones"))
const CProductosMasVendidos = React.lazy(() => import("../components/sections/ProductosMasVendidos"))
const Anuncios = React.lazy(() => import("../components/sections/Anuncios"))
const ImagenesSegmentos = React.lazy(() =>import("../components/sections/ImagenesSegmentos"))
const Marcas = React.lazy(() => import("../components/sections/Marcas"))
const BnewCategorias = React.lazy(() =>import("../components/sections/BannerCategorias"))
const Testimonial2 = React.lazy(() =>import("../components/sections/Testimonial2"))
const Videos = React.lazy(() => import("../components/sections/Videos"))
const ProductosVistos = React.lazy(() =>import("../components/ProductosVistos/vistosRecientemente"))
const SeoEmpresa = React.lazy(() => import("../components/SEO/seoEmpresa"))
const Suscribete = React.lazy(() => import("../components/sections/Suscribete"))
const ModaLEmmailR = React.lazy(() =>import("../components/ModalTiendamegax/ModalFormulario"))

const IndexPage = ({ data }) => {
  let {
    allBannerTipo4,
    landingPage,
    allBannerAnuncios,
    SegmentosImagenes,
    allBannerMarcas,
    allBannerNewCategorias,
    ProductosRecomendados,
    ProductosPromociones,
    ProductosMasVendidos,
  } = data
  const banner = allBannerTipo4.edges.map(e => e.node)
  const bannerAnuncios = allBannerAnuncios.edges.map(e => e.node)
  const BannerMarcas = allBannerMarcas.edges.map(e => e.node)
  const BannerNewCategorias = allBannerNewCategorias.edges.map(e => e.node)
  const PProductosRecomendados = ProductosRecomendados.edges.map(e => e.node)
  const PProductosPromociones = ProductosPromociones.edges.map(e => e.node)
  const PProductosMasVendidos = ProductosMasVendidos.edges.map(e => e.node)
  const SegmentosImagen = SegmentosImagenes.edges.map(e => e.node)
  const landingPages = landingPage.edges.map(e => e.node.Paginas)
  const [LandingPages] = landingPages.map(e => e.LandingPages)
  const isSSR = typeof window === "undefined"

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <Layout>
            <div className="landing">
              <SeoEmpresa
                title="Disdel, S.A. "
                keywords={[
                  "Suministros",
                  "Limpieza",
                  "distribuidora",
                  "producto de limpieza",
                  "venta de producto de limpieza",
                  "productos de limpieza",
                  "productos de limpieza industrial",
                  "venta de tapetes ",
                  "venta de cloro por mayor ",
                  "venta de papel de baño ",
                  "venta de trapeadores",
                ]}
                image={
                  "https://disdelsa.com/imagenes/BannerImagen-img2059-19-8-2020-84427.png"
                }
                // Marcas={BannerMarcas}
              />
              {!isMobile && <Intro5/>}
              <Intro2 banner={banner} />
              <BnewCategorias bannerC={BannerNewCategorias} />
               <Anuncios bannerAnuncios={bannerAnuncios} /> 
              <Marcas BannerMarcas={BannerMarcas} />
              <ImagenesSegmentos SegmentosImagen={SegmentosImagen} />
              {/* <CProductosRecomendados Recomendados={PProductosRecomendados} /> */}
              <CProductosMasVendidos Vendidos={PProductosMasVendidos} />
              {/* <CProductosPromociones Promociones={PProductosPromociones} /> */}
              <ProductosVistos />
              <Testimonial2 LandingPages={LandingPages} />
              {/* <Videos /> */}
              <Suscribete />
              {/* <ModaLEmmailR /> */}
            </div>
          </Layout>
        </React.Suspense>
      )}
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allBannerTipo4: allBannersJsonJson(filter: { IdTipoBanner: { in: 4 } }) {
      edges {
        node {
          Imagen
          ImagenBanner
          BannerImagenMovil
        }
      }
    }
   
    allBannerAnuncios: allBannersJsonJson(filter: { IdTipoBanner: { eq: 3 } }) {
      edges {
        node {
          Imagen
          ImagenBanner
          BannerImagenMovil
          Subtitulo
        }
      }
    }
    allBannerMarcas: allBannersJsonJson(filter: { IdTipoBanner: { eq: 14 } }) {
      edges {
        node {
          Imagen
          ImagenBanner
          BannerImagenMovil
          Titulo
          Subtitulo
        }
      }
    }
    allBannerNewCategorias: allBannersJsonJson(
      filter: { IdTipoBanner: { eq: 15 } }
    ) {
      edges {
        node {
          Imagen
          ImagenBanner
          BannerImagenMovil
          Titulo
          Subtitulo
        }
      }
    }
    landingPage: allDataJson {
      edges {
        node {
          Paginas {
            LandingPages {
              EntityID
              IdDivision
              Division
              IdLandingPage
              IdCompania
              TipoLanding
              Titulo
              Subtitulo
              CuerpoPagina
              CuerpoPajinaMovil
            }
          }
        }
      }
    }
    SegmentosImagenes: allMenuJsonJson {
      edges {
        node {
          NombreSegmento
          Imagen
          SegmentoAux
        }
      }
    }
    ProductosRecomendados: allProductosRecomendadosJson(
      filter: { Tipo: { in: 1 } }
    ) {
      edges {
        node {
          id
          IdProducto
          IdRelacion
          Descripcion
          Imagen
          BaseUnidad
          ItemCodeAux
          BaseDefault
          BaseFardo
          Fardo
          Categoria
          IdCategoria
          Unidad
        }
      }
    }
    ProductosPromociones: allProductosRecomendadosJson(
      filter: { Tipo: { in: 5 } }
    ) {
      edges {
        node {
          id
          IdProducto
          IdRelacion
          Descripcion
          Imagen
          BaseUnidad
          ItemCodeAux
          BaseDefault
          BaseFardo
          Fardo
          Categoria
          IdCategoria
          Unidad
        }
      }
    }
    ProductosMasVendidos: allProductosRecomendadosJson(
      filter: { Tipo: { in: 4 } }
    ) {
      edges {
        node {
          id
          IdProducto
          IdRelacion
          Descripcion
          Imagen
          BaseUnidad
          ItemCodeAux
          BaseDefault
          BaseFardo
          Fardo
          Categoria
          IdCategoria
          Unidad
        }
      }
    }
  }
`
