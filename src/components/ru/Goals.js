import React from 'react'
import styled from "styled-components"

const Goals = () => {
    return (
        <GoalsWrapper>
             <PartnersTitle className="sectionTitle">НАШИ ЦЕЛИ</PartnersTitle>
             <TileWrapper>
                 <Tile>Просветить общество о равных возможностях и прав, путем проведения консультационной и учебной деятельности.</Tile>
                 <Tile>Адаптировать правовые акты  относительно потребностей и возможностей мигрантов, а также социально-экономическим интересам.</Tile>
                 <Tile>Установить партнерское сотрудничество между мигрантами и польским обществом  для удовлетворения социально-экономических потребностей сторон</Tile>
                 <Tile>Предоставить возможность равноправного участия мигрантов в жизни местного населения</Tile>
             </TileWrapper>
            
        </GoalsWrapper>
    )
}
const GoalsWrapper = styled.section`

`
const PartnersTitle = styled.h3`
`
const TileWrapper = styled.div`
display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    justify-content: center;

@media (min-width: 860px) {
    grid-template-columns: 1fr 1fr;
  }
  
`
const Tile = styled.div`
display:flex;
align-items:center;
min-height:220px;
margin:24px 16px;
padding: 45px 30px;
box-shadow: 0px 0px 57px #e5edf4;
border-radius: 40px;
@media (min-width: 860px) {
    min-height:0px;
    height:170px;

}

`
export default Goals
