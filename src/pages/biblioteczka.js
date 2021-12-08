import React from 'react'
import { graphql } from "gatsby"
import styled from "styled-components"
import AnimatedCard from '../components/AnimatedCard'
import Layout from "../components/Layout/layout"
import MainTitle from "../components/Layout/MainTitle"
import SEO from "../components/seo"

const Biblioteczka = ({
  data:{allContentfulBiblioteczka : {nodes}}}) => {
    return (
    <Layout>
    <SEO title="Biblioteczka" />
    <MainTitle title="Biblioteczka" mainPage />
    <BibCards>
    {nodes.sort((a, b) => a.contentfulid > b.contentfulid ? 1 : -1).sort((a,b)=>a.contentfulid<b.contentfulid).map(node => {
        return <AnimatedCard key={node.id} {...node} />
      })}
  </BibCards>
  </Layout>
    
    )
}
export const query = graphql`
  {
    allContentfulBiblioteczka {
      nodes {
        link
        contentfulid
        title
        description
        bgi {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`
const BibCards = styled.section`
width: 100%;
display:grid;
justify-content: center;

margin-bottom: 30px;
@media(min-width:700px){
  grid-template-columns: 1fr 1fr;
}
@media(min-width:1200px){
grid-template-columns: 1fr 1fr 1fr;

}
`
export default Biblioteczka
