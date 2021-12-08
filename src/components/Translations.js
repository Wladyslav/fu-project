import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image'


const Translations = () => {
    const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "2.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.file.childImageSharp.fluid
    return (
        <BackgroundImage 
        Tag="section"
        fluid={imageData}
        backgroundColor={`#040e18`}><p>tłumaczymy</p></BackgroundImage>
    )
}

export default Translations
