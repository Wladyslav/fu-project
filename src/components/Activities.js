import React from 'react'
import styled from "styled-components"
import icon1 from "../images/1.svg"
import icon2 from "../images/2.svg"
import icon3 from "../images/3.svg"
import icon4 from "../images/4.svg"
import icon5 from "../images/5.svg"

const Activities = () => {
    return (
        <ActivitiesWrapper>
            <PartnersTitle className="sectionTitle">nasze działania</PartnersTitle>
            <ActivitiesList>
            <Activity>
            <img src={icon1} />
                <p>Konsultacje informacyjne w punkcie informacyjnym IPM z zakresu integracji oraz życia codziennego cudzoziemców w Polsce</p>
                </Activity>
            <Activity><img src={icon2} /><p>Konsultacje specjalistyczne (prawnicy, doradca zawodowy, psycholog)</p></Activity>
            <Activity><img src={icon3} /><p>Publikacje eksperckie</p></Activity>
            <Activity><img src={icon4} /><p>Współpraca z podmiotami działającymi na rzecz migrantów, w tym organami publicznymi</p></Activity>
            <Activity><img src={icon5} /><p>Działalność szkoleniowa dotycząca tematyki migracji i trzeciego sektora</p></Activity>
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
