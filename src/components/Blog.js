import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const Blog = ({ date, id, slug, title, media }) => {
  
  return (
    <ArticleWrapperLink key={id} to={`/blogs/${slug}`}>
      <article>
        <Image fluid={media.fluid} />
        <div className="date">{date}</div>
        <h3>{title}</h3>
      </article>
    </ArticleWrapperLink>
  )
}

const ArticleWrapperLink = styled(Link)`
  overflow: hidden;
  box-shadow: 0px 0px 57px #e5edf4;
  border-radius: 25px;
  text-decoration: none;
  
    height: 164px;
  color: inherit;
  @media (min-width: 500px) {
    height: 300px;
  }
  @media (min-width: 1100px) {
    position: relative;
    border-radius: 40px;
    width: 300px;
    height: 446px;
  }
  article {
    height: 100%;
    @media (min-width: 1100px) {
    }
    .gatsby-image-wrapper {
      height: 40%;
      @media(min-width:1100px){
        height: 50%;
      }
    }
    h3 {
      margin: 0px 12px;
      font-family: Ubuntu;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      color: var(--clr-primary-2);
      @media (min-width: 1100px) {
        font-weight: 700;
        font-size: 20px;
        margin: 0 39px 49px 31px;
      }
    }
    .date {
      margin: 5px 8px 5px 12px;
      font-weight: 500;
      font-size: 10px;
      color: var(--clr-primary-1);
      @media (min-width: 1100px) {
        font-size: 18px;
        margin: 75px auto 9px 31px;
      }
    }
  }
`

export default Blog
