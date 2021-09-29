import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout/layout"
import MainTitle from "../components/Layout/MainTitle"
import TeamSection from "../components/TeamSection"
import Partners from "../components/Partners"
import Goals from "../components/Goals"
import Activities from "../components/Activities"
import Gallery from "../components/Gallery"
import Accomplishments from "../components/Accomplishments"
import SEO from "../components/seo"


const AboutUs = () => {
 

  return (
    <Layout>
      <SEO title="O nas" />
      <MainTitle title="O nas" />
      <Description>
        <p>W odpowiedzi na coraz większy odsetek migrantów w społeczności lokalnej oraz ich zdiagnozowane potrzeby został powołany do życia <strong> Instytut Praw Migrantów z siedzibą przy ul. Ruskiej 46a/202</strong> we Wrocławiu. Uchwałą z dnia 22 grudnia 2020 r. IPM kontynuuje rozwijać działalność już istniejącego od 2017 r. punktu informacyjnego dla migrantów.</p>
       <p>Na problemy i oczekiwania migrantów patrzymy w sposób kompleksowy w dwóch płaszczyznach: <strong>Punktu Informacyjnego dla cudzoziemców</strong> oraz prowadząc <strong> działalność profesjonalną w sferze prawa migracyjnego i integracji społecznej. </strong> Działania infopunktu polegają na udzielaniu wsparcia informacyjnego dla migrantów z zakresu legalizacji pobytu, poszukiwania pracy, spraw życia codziennego. W ramach profesjonalnej działalności przygotowujemy i udostępniamy publikacje eksperckie oraz współpracujemy z podmiotami publicznymi i z sektora NGO zajmującymi się migrantami w Polsce. Usługi punktu informacyjnego IPM są bezpłatne i świadczone przez ekspertów w swojej dziedzinie, w tym przede wszystkim specjalistów z zakresu prawa migracyjnego.</p> 
       <p>Zespół IPM składa się z doświadczonych prawników, specjalistów z zakresu doradztwa zawodowego oraz psychologów. Usługi udzielane są w <strong> 4 językach: polskim, rosyjskim, ukraińskim oraz angielskim.</strong> Ponadto, eksperci posiadają własne doświadczenia migracyjne, co dodatkowo gwarantuje szczególne zrozumienie potrzeb i oczekiwań klienta.</p>

       </Description>
      <TeamSection /> 
      <Goals/>   
      <Activities/>   
      <Gallery/>   
      <Partners/>
      <Accomplishments/>
      

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
