import React from "react"
import styled from "styled-components"
import Layout from "../../components/Layout/layout"
import MainTitle from "../../components/Layout/MainTitle"
import TeamSection from "../../components/TeamSection"
import Goals from "../../components/ru/Goals"
import Activities from "../../components/ru/Activities"
import Gallery from "../../components/ru/Gallery"
import AboutUsLinks from "../../components/AboutUsLinks"
import SEO from "../../components/seo"


const AboutUs = () => {
 

  return (
    <Layout>
      <SEO title="О нас" />
      <AboutUsLinks/>
      <MainTitle title="О нас" />
      <Description>
        <p>Вследствие растущего количества мигрантов в местном сообществе и их потребностей, был создан <strong> Институт Прав Мигрантов на ул. Ruska 46a / 202 </strong> во Вроцлаве. Постановлением от 22 декабря 2020 года ИПМ продолжает развивать деятельность информационного пункта для мигрантов, уже существующего с 2017 года.</p>
       <p>Проблемы и ожидания мигрантов мы комплексно рассматриваем в двух вариациях:  <strong>Информационного Пункта для иностранцев, </strong> а также ведя  <strong> профессиональную деятельность в сфере миграционного права и общественной интеграции. </strong> Деятельность инфопункта заключается в предоставление информационной поддержки мигрантам в сфере легализации пребывания, поиска работы и бытовых вопросов. В рамках нашей профессиональной деятельности мы готовим и делимся экспертными публикациями, а также сотрудничаем с государственными организациями и сектором НПО, занимающимися мигрантами в Польше. Услуги информационного пункта ИПМ бесплатны и предоставляются экспертами в своей сфере, прежде всего, специалистами в области миграционного права.</p> 
       <p>Команда ИПМ состоит из опытных юристов, специалистов в области профориентации и психологов. Услуги предоставляются <strong> на 4 языках: польском, русском, украинском и английском. </strong> Более того, специалисты имеют собственный опыт миграции, что дополнительно гарантирует особое понимание потребностей и ожиданий клиента.</p>

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
