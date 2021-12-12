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
            <PartnersTitle className="sectionTitle">НАШІ ДІЇ</PartnersTitle>
            <ActivitiesList>
            <Activity>
            <img src={icon1} />
                <p>Інформаційні консультації в інформаційному пункті ІПМ з питань інтеграції та повсякденного життя іноземців у Польщі</p>
                </Activity>
            <Activity><img src={icon2} /><p>Консультації спеціалістів (юристи, консультант з питань працевлаштування, психолог)</p></Activity>
            <Activity><img src={icon3} /><p>Публікації експертів</p></Activity>
            <Activity><img src={icon4} /><p>Співпраця з організаціями, що діють на користь мігрантів, включаючи державні органи</p></Activity>
            <Activity><img src={icon5} /><p>Навчальна діяльність, пов'язана з міграцією та третім сектором</p></Activity>
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
