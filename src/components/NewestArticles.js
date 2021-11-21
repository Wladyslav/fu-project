import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Articles from "../components/ArticlesList/Articles"

const NewestArticles = () => {
  const {
    newArticles: { nodes: articles },
  } = useStaticQuery(graphql`
    {
      newArticles: allContentfulArticle(limit: 3) {
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
  `)

  return (
    <>
      <NewArticlesTitle className="sectionTitle">Najnowsze artykuły</NewArticlesTitle>
      <Articles articles={articles} blogName={"blogs"} />
    </>
  )
}
const NewArticlesTitle = styled.h2`
  max-width: var(--max-width);

  margin: 64px 10px;
  @media (min-width: 1100px) {
    margin: 64px auto;
  }
`
export default NewestArticles
