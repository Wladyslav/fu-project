import React from "react"
import Layout from "../components/Layout/layout"
import MainTitle from "../components/Layout/MainTitle"
import ConstitutionArticles from "../components/Constitution/ConstitutionArticles"
import SEO from "../components/seo"

const Constitution = ({
  data: {
    allContentfulConstitution: { nodes: constitutionArticles },
  },
}) => {
  return (
    <Layout>
      <SEO title="Konstytucja" />
      <MainTitle title="domowy kurs konstytucji" />
      <ConstitutionArticles articles={constitutionArticles} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulConstitution(sort: { fields: date, order: DESC }) {
      nodes {
        date(formatString: "D/M/Y")
        id
        slug
        title
        media {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Constitution
