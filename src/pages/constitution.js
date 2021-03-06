import React from "react"
import Layout from "../components/Layout/layout"
import MainTitle from "../components/Layout/MainTitle"
import Articles from "../components/ArticlesList/Articles"
import PageIntroduction from "../components/PageIntroduction"
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
      <PageIntroduction>
        Wybrane, szczególnie przydatne obcokrajowcom artykuły z Konstytucji RP –
        aktu prawnego określającego prawa i swobody obywateli. Artykuły dostępne
        w języku ukraińskim, z komentarzami radców prawnych.
      </PageIntroduction>
      <Articles articles={constitutionArticles} blogName={"constitutions"} />
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
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default Constitution
