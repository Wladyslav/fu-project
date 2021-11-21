import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image'


const Consulting = () => {
    const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "1.jpg"}) {
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
        backgroundColor={`#0000009c`}><p>konsultujemy</p></BackgroundImage>
    )
}

export default Consulting
