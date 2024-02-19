import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({
  description,
  title,
  image,
  keywords,
  link,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            descripcionLarga
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const descripcionLarga = site.siteMetadata.descripcionLarga;
 
  const baseSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Store",
      "@id": "https://www.disdelsa.com/",
      name: "Disdel, S.A.",
      url: "https://www.disdelsa.com/Conocenos",
      telephone:"(502) 2422-6120",
      email:"info@disdelsa.com",
      logo:"https://www.disdelsa.com/imagesFooder/icon.png",
      logo:"https://www.disdelsa.com/imagesFooder/icon.png",
      logo:"https://www.disdelsa.com/imagesFooder/icon.png",
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Disdelsa",
        },
      },
    },
  ];
  return (
    <Helmet title={`${title} | ${metaDescription}`}>
      <meta charSet="utf-8" />
      <link rel="canonical" href={link} />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
        rel="stylesheet"
      />
      <meta
        id="meta-description"
        name="description"
        content={descripcionLarga}
      />
      <meta http-equiv="Content-Language" content="es" />
      <meta name="keywords" content={keywords} />

      <meta id="og-title" property="og:title" content={title} />
      {/* <meta property="og:type" content="product" /> */}
      <meta property="og:type" content="website" />
      <meta property="og:image" itemProp="image" content={image} />
      <meta property="og:url" content={link} />
      <meta property="og:description" content={descripcionLarga} />

      <link rel="icon" type="image/png" href={image} sizes="300x300" />
      <link itemProp="thumbnailUrl" href={image} />
      <meta property="og:image:type" content="image/jpeg" />

      <meta property="og:image:width" content="428" />
      <meta property="og:image:height" content="250" />

      <meta property="og:site_name" content="www.disdelsa.com" />
      <meta property="og:locale" content="es_la" />
      <meta name="twitter: card" content="summary" />
      <meta name="twitter: site" content="@DISDELSA" />
      <meta name="p:domain_verify" content="d773a9cf9410054dc1d50b4a7e54fc3f"/>
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Helmet>
  );
}
export default SEO;
