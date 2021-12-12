import React from 'react'
import styled from "styled-components"
import icon1 from "../../images/1.svg"
import icon2 from "../../images/2.svg"
import icon3 from "../../images/3.svg"
import icon4 from "../../images/4.svg"
import icon5 from "../../images/5.svg"

const Activities = () => {
    return (
        <ActivitiesWrapper>
            <PartnersTitle className="sectionTitle">НАШИ ДЕЙСТВИЯ</PartnersTitle>
            <ActivitiesList>
            <Activity>
            <img src={icon1} />
                <p>Информационные консультации в информационном пункте ИПМ по вопросам интеграции и повседневной жизни иностранцев в Польше</p>
                </Activity>
            <Activity><img src={icon2} /><p>Консультации специалистов (юристы, консультант по вопросам трудоустройства, психолог)</p></Activity>
            <Activity><img src={icon3} /><p>Публикации экспертов</p></Activity>
            <Activity><img src={icon4} /><p>Сотрудничество с организациями, действующими в интересах мигрантов, включая государственные органы</p></Activity>
            <Activity><img src={icon5} /><p>Учебная деятельность, связанная с миграцией и третьим сектором</p></Activity>
            </ActivitiesList>
            
        </ActivitiesWrapper>
    )
}

const ActivitiesWrapper = styled.section``
const PartnersTitle = styled.h3``
const ActivitiesList = styled.div`
`
const Activity = styled.div`
margin: 24px 16px;
display:grid;
grid-template-columns: 75px 1fr;

img{
    justify-self:center;
}

`

export default Activities
