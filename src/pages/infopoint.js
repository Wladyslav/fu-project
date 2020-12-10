import React from "react"
import Layout from "../components/layout"
import MainTitle from "../components/MainTitle"
import Consultations from "../components/Consultations"
import ConsultationsForm from "../components/ConsultationsForm"
import SEO from "../components/seo"

const Infopoint = () => {
  return (
    <Layout>
      <SEO title="Infopunkt"/>
      
      <MainTitle title="punkt informacyjny dla cudzoziemców" />
      <Consultations />
      <ConsultationsForm />
    </Layout>
  )
}

export default Infopoint
