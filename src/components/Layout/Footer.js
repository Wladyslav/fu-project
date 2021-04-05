import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import MediaLinks from "../MediaLinks"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "Logo IPM white" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterContact>
        <FooterLogo fluid={data.file.childImageSharp.fluid} />
        <MediaLinks linksColor="white" flexDirection="row" />
        <div>
          <p>50-079, Wrocław</p>
          <p>ul. Ruska 46a/201</p>
          <p>biuro@instytutpm.eu</p>
        </div>
      </FooterContact>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: absolute;
  width: 100%;
  height: 100px;
  padding: 0 10px;
  background-color: var(--clr-dark);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const FooterLogo = styled(Image)`
  flex-grow: 0;
  margin-bottom: 10px 0;
  width: 70px;
  img {
    object-fit: fill !important;
  }
`
const FooterContact = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 100;
    margin-left: 10px;
  }
  svg {
    font-size: 40px;
    margin: 20px;
  }
  div:nth-child(2) {
    left: 50%;
    transform: translateX(-50%);
    display: none;

    @media (min-width: 800px) {
      display: block;
    }
  }
  @media (min-width: 860px) {
    display: flex;
    justify-content: space-between;
  }
`

export default Footer
