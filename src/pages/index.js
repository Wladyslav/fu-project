import React from "react"
import Layout from "../components/Layout/layout"
import MainTitle from "../components/Layout/MainTitle"
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import NewestArticles from "../components/NewestArticles"
import Accomplishments from "../components/Accomplishments"
import Issues from "../components/Issues"
import HomeLinks from "../components/HomeLinks"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Instytut Praw Migrantów | Pomagamy migrantom" />
    <HomeLinks/>
    <MainTitle title="instytut praw migrantów" mainPage />
    <Hero />
    <Issues/>
    <Partners/>
    <Accomplishments/>
    <NewestArticles>Najnowsze artykuły</NewestArticles >
  </Layout>
)

export default IndexPage
