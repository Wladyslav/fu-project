import React from "react"
import Layout from "../components/Layout/layout"
import MainTitle from "../components/Layout/MainTitle"
import Consultations from "../components/Consultation/Consultations"
import ConsultationsForm from "../components/Consultation/ConsultationsForm"
import SEO from "../components/seo"

const Infopoint = () => {
  return (
    <Layout>
      <SEO title="Infopunkt" />

      <MainTitle title="punkt informacyjny dla cudzoziemców" />
      <Consultations />
      <ConsultationsForm />
    </Layout>
  )
}

export default Infopoint
