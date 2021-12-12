import React from "react"
import Layout from "../../components/Layout/layout"
import MainTitle from "../../components/Layout/MainTitle"
import Hero from "../../components/en/Hero"
import Partners from "../../components/en/Partners"
import NewestArticles from "../../components/NewestArticles"
import Accomplishments from "../../components/en/Accomplishments"
import Issues from "../../components/en/Issues"
import HomeLinks from "../../components/HomeLinks"

import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Institute of Migrant Rights" />
    <HomeLinks/>
    <MainTitle title="Institute of Migrant Rights" mainPage />
    <Hero />
    <Issues/>
    <Partners/>
    <Accomplishments/>
    <NewestArticles>The Latest Articles</NewestArticles >
  </Layout>
)

export default IndexPage
