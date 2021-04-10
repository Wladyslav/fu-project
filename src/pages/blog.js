import React from "react"
import Layout from "../components/Layout/layout"
import MainTitle from "../components/Layout/MainTitle"
import Articles from "../components/ArticlesList/Articles"
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
      <Articles articles={articles} blogName={"blogs"} />
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
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default Blog
