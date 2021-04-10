import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import SEO from "../../components/seo"
import Layout from "../../components/Layout/layout"
import MainTitle from "../../components/Layout/MainTitle"
import NewestArticles from "../../components/NewestArticles"
import ShareArticle from "../../components/ShareArticle"

const ConstitutionTemplate = ({
  data: {
    constitutionArticle: {
      author,
      authorBio: { authorBio },
      authorSectionTitile,
      photoOfAuthor: { fluid },
      title,
      slug,
      date,
      mainText,
      childContentfulConstitutionDescriptionTextNode: { description },
    },
  },
}) => {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        return <a href={node.data.uri}>{children}</a>
      },
      [BLOCKS.DOCUMENT]: (node, children) => {
        return <div> {children}</div>
      },

      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (
          <img
            src={`https:${node.data.target.fields.file["en-US"].url}`}
            alt={node.data.target.fields.title}
          />
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={title} />
      <MainTitle title={title} />
      <BlogWrapper>
        <div className="articleAuthor">
          <span>{author}</span>
          <span>{date}</span>
        </div>

        <p className="articleSubtitle">{description}</p>
        <RichTextWrapper>
          {documentToReactComponents(mainText.json, options)}
        </RichTextWrapper>
        <AuthorBio>
          <hr />
          <h3>{authorSectionTitile}</h3>
          <div className="authorBioContainer">
            <Image fluid={fluid} imgStyle={{ objectFit: "contain" }} />
            <div className="authorBio">
              <p>{author}</p>
              <p>{authorBio}</p>
            </div>
          </div>
        </AuthorBio>
        <ShareArticle title={title} slug={slug} articleType="constitutions" />
      </BlogWrapper>
      <NewestArticles />
    </Layout>
  )
}
const BlogWrapper = styled.article`
  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 10px 16px;
  @media (min-width: 860px) {
    padding: 0;
    width: 825px;
  }

  .articleAuthor {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 16px 0;
    font-size: 10px;
    color: var(--clr-dark);
    @media (min-width: 860px) {
      margin-bottom: 62px;
      font-size: 18px;
      line-height: 130%;
      justify-content: flex-start;
      span:nth-child(2) {
        position: absolute;
        left: -180px;
      }
    }
  }
  .articleSubtitle {
    margin-bottom: 26px;
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 10px;
    @media (min-width: 860px) {
      max-width: 682px;
      margin-bottom: 62px;
      font-family: Roboto;
      font-style: italic;
      font-weight: normal;
      font-size: 18px;
      line-height: 149.5%;
    }
  }
  h3 {
    position: relative;
    color: var(--clr-primary-2);
    margin: 26px 0;
    padding: 15px 0;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    @media (min-width: 860px) {
      padding: 45px 0;
      margin: 62px 0;
      font-size: 25px;
      line-height: 29px;
    }
  }
  p {
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    margin: 6px 0;

    @media (min-width: 860px) {
      margin: 26px 0;
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
    }
  }
  hr {
    border: 1px solid #0c539c;
    background-color: #0c539c;

    @media (min-width: 860px) {
      width: 216px;
      margin: 62px 0;
    }
  }
`
const RichTextWrapper = styled.div`
  @media (min-width: 860px) {
    width: 100%;
  }
  h1 {
    color: var(--clr-primary-2);
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;

    @media (min-width: 860px) {
      font-size: 50px;
    }
  }
  h2 {
    color: var(--clr-primary-2);
    font-family: Ubuntu;
    font-style: normal;
    font-size: 16px;
    @media (min-width: 860px) {
      font-weight: 500;
      font-size: 35px;
      margin-bottom: 26px;
    }
  }
  h3 {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      border: 1px solid #0c539c;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border: 1px solid #0c539c;
    }
    @media (min-width: 860px) {
      padding: 45px 0;
      margin: 62px 0;
      font-size: 25px;
      line-height: 29px;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 216px;
        border: 1px solid #0c539c;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 216px;
        border: 1px solid #0c539c;
      }
    }
  }

  ul,
  ol {
    @media (min-width: 860px) {
      margin-left: 64px;
    }
    li::marker {
      color: var(--clr-primary-2);
      @media (min-width: 860px) {
        font-size: 20px;
      }
    }
  }
  img {
    width: 100%;
    margin: 14px 0 26px 0;
    @media (min-width: 860px) {
      margin: 34px 0 62px 0;
    }
  }
`
const AuthorBio = styled.section`
  margin-top: 26px;
  .authorBioContainer {
    @media (min-width: 860px) {
      display: grid;
      grid-template-columns: 373px 1fr;
    }
    .gatsby-image-wrapper {
      max-height: 412px;

      margin: 26px auto;
      @media (min-width: 860px) {
        margin: 0 39px;
      }
    }
    .authorBio {
      p:first-child {
        color: var(--clr-primary-2);
      }
    }
  }
`

export const query = graphql`
  query MyConstitutionQuery($slug: String) {
    constitutionArticle: contentfulConstitution(slug: { eq: $slug }) {
      title
      author
      authorSectionTitile
      slug
      authorBio {
        authorBio
      }
      photoOfAuthor {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      date(formatString: "D/M/Y")
      childContentfulConstitutionDescriptionTextNode {
        description
      }
      mainText {
        json
      }
    }
  }
`

export default ConstitutionTemplate
