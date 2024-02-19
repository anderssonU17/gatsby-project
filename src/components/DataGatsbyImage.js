import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getExampleImageData } from "./my-image-data"

const ExampleImage = ({ image,width,height}) => {
  const imageData = getExampleImageData({ image, layout: "fixed", width,height })
  return <GatsbyImage image={imageData} alt="Kitten" />
}
export default ExampleImage
