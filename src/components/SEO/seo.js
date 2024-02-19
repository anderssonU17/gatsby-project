import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description,
  title,
  image,
  keywords,
  link,
  marca,
  id,
  CodigoBarra,
  Catalogo,
  Categorias,
  Relacionados,
  Model,
  descripcionAux,
  Altura,
  ImagenMarca,
  Peso,
  Ancho,
  descripcionlarga,
  Tags, }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metadataTitulo = site.siteMetadata.title;
  const baseSchema = [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: title === null ? description : title,
      image: image === null ? image : image,
      description: descripcionAux ? descripcionAux : descripcionlarga,
      brand: {
        "@type": "Brand",
        name: marca,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "5",
        ratingCount: "2",
      },
      sku: Catalogo ? Catalogo : "",
      gtin8: "3",
      gtin13: CodigoBarra ? CodigoBarra : "3", // codigo de barras
      gtin14: "4",
      productID: id,
      category: Categorias ? Categorias !== keywords ? Categorias + " ," + keywords + ", " + Tags : Categorias + ", " + Tags : "Product",
      isSimilarTo: Relacionados ? Relacionados : "",
      Logo: "https://www.disdelsa.com/imagesFooder/icon.png",
      model: Model,
      offers: {
        "@type": "Offer",
        url: link,
        priceCurrency: "QTZ",
        price: "0",
        priceValidUntil: "2020-06-02",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    },
  ];

  return (
    <Helmet title={`${title} | ${metadataTitulo} `}>
      <meta charSet="utf-8" />
      <link rel="canonical" href={link} />
      <meta
        id="meta-description"
        name="description"
        content={`${description}, ${metadataTitulo}`}
      />
      <meta name="keywords" content={`${metadataTitulo}, ${keywords}`} />
      <meta property="og:url" content={link} />
      <meta property="og:type" content="product" />
      <meta
        property="og:description"
        content={` ${description}, ${metadataTitulo}`}
      />
      <meta id="og-title" property="og:title" content={title} />

      <meta property="og:image" itemProp="image" content={image} />
      <link rel="icon" type="image/jpeg" href={image} sizes="300x300" />
      <link itemProp="thumbnailUrl" href={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:type" content="website" />

      <meta property="og:image:width" content="828" />
      <meta property="og:image:height" content="450" />

      <meta property="og:site_name" content="Disdelsa.com" />
      <meta property="og:locale" content="es_la" />
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Helmet>
  );
}
export default Seo

