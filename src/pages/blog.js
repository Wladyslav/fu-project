import React from "react"
import Layout from "../components/layout"
import MainTitle from "../components/MainTitle"
import Blogs from "../components/Blogs"
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
    allContentfulArticle(sort: { fields: date, order: ASC }) {
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
