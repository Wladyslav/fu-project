import React from "react"
import Blog from "./Blog"
import styled from "styled-components"

const Blogs = ({ articles }) => {
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
  a:nth-child(1) {
    grid-column-start: span 2;

    @media (min-width: 1100px) {
      grid-column: span 4;
      grid-row: span 2;
      /* width: 477px; */
      height: 957px;
    }

    h3 {
      z-index: 999;
      position: absolute;
      margin: 0;
      padding: 1px 5px;
      top: 39px;
      left: 11px;
      font-weight: bold;
      font-size: 16px;
      text-transform: uppercase;
      color: white;
      background: var(--clr-primary-2);
      @media (min-width: 1100px) {
        font-weight: 500;
        font-size: 35px;
        top: inherit;
        bottom: 110px;
      }
    }
    .date {
      position: absolute;
      margin: 0;
      padding: 1px;
      top: 20px;
      left: 11px;
      font-size: 10px;
      background: var(--clr-primary-1);
      color: white;
      @media (min-width: 1100px) {
        font-size: 18px;
        top: inherit;
        bottom: 210px;
      }
    }
    .gatsby-image-wrapper {
      height: 100%;
    }
    @media (min-width: 1100px) {
      .gatsby-image-wrapper > img {
        position: relative !important;
      }
      .gatsby-image-wrapper {
        position: inherit !important;
        div {
          padding-bottom: 100% !important;
        }
      }
    }
  }
`
export default Blogs
