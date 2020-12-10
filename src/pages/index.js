import React from "react"
import Layout from "../components/layout"
import MainTitle from "../components/MainTitle"
import Hero from "../components/Hero"
import TeamSection from "../components/TeamSection"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Instytut Praw Migrantów - Home"/>
    <MainTitle title="instytut praw migrantów" mainPage />
    <Hero />
    <TeamSection />
  </Layout>
)

export default IndexPage
