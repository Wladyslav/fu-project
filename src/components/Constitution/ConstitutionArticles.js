import React from "react"
import Blog from "./ConstitutionArticle"
import styled from "styled-components"

const ConstitutionArticles = ({ articles }) => {
  return (
    <BlogsWrapper>
      {articles.map(article => {
        return <Blog key={article.id} {...article} />
      })}
    </BlogsWrapper>
  )
}
const BlogsWrapper = styled.section`
  position: relative;
  margin: 0 10px 30px 10px;
  max-width: var(--max-width);
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 20px;
  grid-auto-flow: dense;
  @media (min-width: 1100px) {
    height: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 62px;
  }
`
export default ConstitutionArticles
