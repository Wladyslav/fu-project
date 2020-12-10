import React from "react"
import Layout from "../components/layout"
import MainTitle from "../components/MainTitle"
import Hero from "../components/Hero"
import TeamSection from "../components/TeamSection"
// import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Strona główna"/> */}
    <MainTitle title="instytut praw migrantów" mainPage />
    <Hero />
    <TeamSection />
  </Layout>
)

export default IndexPage
