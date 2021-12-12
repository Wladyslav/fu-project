import React from "react"
import styled from "styled-components"
import Layout from "../../components/Layout/layout"
import MainTitle from "../../components/Layout/MainTitle"
import TeamSection from "../../components/TeamSection"
import Goals from "../../components/en/Goals"
import Activities from "../../components/en/Activities"
import Gallery from "../../components/en/Gallery"
import AboutUsLinks from "../../components/AboutUsLinks"
import SEO from "../../components/seo"



const AboutUs = () => {
 

  return (
    <Layout>
      <SEO title="About us" />
      <AboutUsLinks/>
      <MainTitle title="About us" />
      <Description>
        <p>Due to the growing number of migrants and their needs in the local community, <strong> the Institute of the Migrants’ Rights was established at ul. Ruska 46a / 202,</strong> Wroclaw. By the decree of 22 of 2020, the IMR continues to develop the activities of the information point for migrants, which has already existed since 2017.</p>
       <p>We comprehensively consider the problems and expectations of migrants in two variations:  <strong>in the Information Room for foreigners,</strong>as well as conducting <strong> professional activities in the field of migration law and social integration. </strong> The mission of information point is to provide information support for migrants in the field of legalization of stay, job search and household issues. We prepare and share expert publications, as well as cooperate with government organizations and the NGO sector dealing with migrants in Poland, is part of our professional activities. The services of the IMR’ information point is free of charge and provided by experts, first of all, by specialists in the field of migration law.</p> 
       <p>The IMR team is made up of experienced lawyers, career advisers and psychologists. Services are provided  <strong> in 4 languages: Polish, Russian, Ukrainian and English.</strong> Moreover, the specialists have their own migration experience, which additionally guarantees a special understanding of the client's needs and expectations.</p>

       </Description>
      <TeamSection /> 
      <Goals/>   
      <Activities/>   
      <Gallery/>   
      
      

    </Layout>
  )
}

const Description = styled .div`
margin:0 16px 0 16px;
line-height:30px;
p{
  margin-bottom: 26px;
}
`


export default AboutUs
