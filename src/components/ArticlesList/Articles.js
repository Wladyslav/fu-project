import React from "react"
import Blog from "./Article"
import styled from "styled-components"

const Articles = ({ articles, blogName }) => {
  return (
    <BlogsWrapper articlesLength={articles.length}>
      {articles.map(article => {
        return <Blog key={article.id} {...article} blogName={blogName} />
      })}
    </BlogsWrapper>
  )
}
const BlogsWrapper = styled.section`
  position: relative;
  margin: 0 10px 30px 10px;
  max-width: var(--max-width);
  display: grid;
  grid-template-columns: ${props =>
    props.articlesLength === 3 ? " 1fr 1fr 1fr" : "1fr 1fr"};

  grid-gap: 20px;
  grid-auto-flow: dense;
  @media (min-width: 1100px) {
    height: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: ${props => (props.articlesLength === 3 ? "80px" : "62px")};
  }
`
export default Articles
