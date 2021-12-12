import React from "react"
import Layout from "../../components/Layout/layout"
import MainTitle from "../../components/Layout/MainTitle"
import Hero from "../../components/ua/Hero"
import Partners from "../../components/ua/Partners"
import NewestArticles from "../../components/NewestArticles"
import Accomplishments from "../../components/ua/Accomplishments"
import Issues from "../../components/ua/Issues"
import HomeLinks from "../../components/HomeLinks"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Інститут прав мігрантів" />
    <HomeLinks/>
    <MainTitle title="Інститут прав мігрантів" mainPage />
    <Hero />
    <Issues/>
    <Partners/>
    <Accomplishments/>
    <NewestArticles>Останні статті</NewestArticles >
  </Layout>
)

export default IndexPage
