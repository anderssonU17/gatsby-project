import { getImageData } from "gatsby-plugin-image"

function urlBuilder({ baseUrl, width, height, format, options }) {
  return `https://disdelsa.com/imagenes/productos/${baseUrl}?w=${width}&h=${height}`
}

export function getExampleImageData({ image, ...props }) {
  return getImageData({
    baseUrl: image,
    sourceWidth: 400,
    sourceHeight: 400,
    urlBuilder,
    pluginName: "gatsby-source-example",
    // If your host supports auto-format/content negotiation, pass this as the formats array
    formats: ["auto"],
    ...props,
  })
}
