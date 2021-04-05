import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const MainTitle = ({ title, mainPage }) => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "Logo IPM colour" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <MainTitleWrapper>
      <Logo fluid={data.file.childImageSharp.fluid} mainPage={mainPage} />
      <Title>{title}</Title>
    </MainTitleWrapper>
  )
}

const MainTitleWrapper = styled.section`
  margin: 20px;
  display: flex;
  margin: 0 auto;

  @media (min-width: 400px) {
    align-items: flex-end;
  }
  @media (min-width: 600px) {
    justify-content: space-around;
  }
  @media (min-width: 860px) {
    justify-content: flex-start;
    align-items: center;
    max-width: var(--max-width);
  }
`

const Title = styled.h1`
  position: relative;
  top: 0px;
  margin: 16px;
  font-weight: 700;
  line-height: 1.3;
  font-size: 22px;
  color: #0c539c;
  text-transform: uppercase;
  @media (min-width: 400px) {
    font-size: 30px;
    margin-left: 50px;
  }
  @media (min-width: 600px) {
    font-size: 40px;
    margin: 0;
    margin-left: 70px;
  }
  @media (min-width: 860px) {
    font-size: 66px;
  }
`

const Logo = styled(Image)`
  position: relative;
  top: -60px;
  flex-shrink: 0;
  display: none;
  @media (min-width: 860px) {
    display: block;
    width: ${props => (props.mainPage ? "331px" : "243px")};
  }
  img {
    object-fit: fill !important;
  }
`

export default MainTitle
