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
            <PartnersTitle className="sectionTitle">OUR ACTIONS</PartnersTitle>
            <ActivitiesList>
            <Activity>
            <img src={icon1} />
                <p>Informational consultations at the IMR information point on integration and daily life of foreigners in Poland</p>
                </Activity>
            <Activity><img src={icon2} /><p>Professional consultancy (lawyers, career adviser, psychologist)</p></Activity>
            <Activity><img src={icon3} /><p>Publications by experts</p></Activity>
            <Activity><img src={icon4} /><p>Collaboration with organizations service on behalf of migrants, including public administrationi</p></Activity>
            <Activity><img src={icon5} /><p>Training activities related to migration and the third sector</p></Activity>
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
