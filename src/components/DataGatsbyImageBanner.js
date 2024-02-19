import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getExampleImageDataBanner } from "./my-image-dataBanner"

const ExampleImage = ({ image, width,height }) => {
  const imageData = getExampleImageDataBanner({ image, layout: "fixed", width,height })
  return <GatsbyImage image={imageData} alt="Kitten" />
}
export default ExampleImage
