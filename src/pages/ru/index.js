import React from "react"
import Layout from "../../components/Layout/layout"
import MainTitle from "../../components/Layout/MainTitle"
import Hero from "../../components/ru/Hero"
import Partners from "../../components/ru/Partners"
import NewestArticles from "../../components/NewestArticles"
import Accomplishments from "../../components/ru/Accomplishments"
import Issues from "../../components/ru/Issues"
import HomeLinks from "../../components/HomeLinks"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Институт прав мигрантов" />
    <HomeLinks/>
    <MainTitle title="Институт прав мигрантов" mainPage />
    <Hero />
    <Issues/>
    <Partners/>
    <Accomplishments/>
    <NewestArticles>Последние статьи</NewestArticles >
  </Layout>
)

export default IndexPage
