import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image'


const CompanySupport = (props) => {
    const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "4.jpg"}) {
        childImageSharp {
          fluid  {
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
        backgroundColor={`#040e18`}><p>{props.children}</p></BackgroundImage>
    )
}

export default CompanySupport
