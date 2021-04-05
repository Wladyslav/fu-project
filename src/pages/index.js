import React from "react"
import Layout from "../components/Layout/layout"
import MainTitle from "../components/Layout/MainTitle"
import Hero from "../components/Hero"
import TeamSection from "../components/TeamSection"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Instytut Praw Migrantów - Home" />
    <MainTitle title="instytut praw migrantów" mainPage />
    <Hero />
    <TeamSection />
  </Layout>
)

export default IndexPage
