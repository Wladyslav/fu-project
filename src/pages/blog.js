import React from "react"
import Layout from "../components/Layout/layout"
import MainTitle from "../components/Layout/MainTitle"
import Blogs from "../components/Blog/Blogs"
import SEO from "../components/seo"

const Blog = ({
  data: {
    allContentfulArticle: { nodes: articles },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <MainTitle title="blog" />
      <Blogs articles={articles} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulArticle(sort: { fields: date, order: DESC }) {
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

export default Blog
