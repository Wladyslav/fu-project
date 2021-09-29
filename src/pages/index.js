import React from "react"
import Layout from "../components/Layout/layout"
import MainTitle from "../components/Layout/MainTitle"
import Hero from "../components/Hero"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Instytut Praw Migrantów - Home" />
    <MainTitle title="instytut praw migrantów" mainPage />
    <Hero />
    
  </Layout>
)

export default IndexPage
