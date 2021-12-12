import React from 'react'
import styled from "styled-components"

const Goals = () => {
    return (
        <GoalsWrapper>
             <PartnersTitle className="sectionTitle">НАШІ ЦІЛІ</PartnersTitle>
             <TileWrapper>
                 <Tile>Просвітити суспільство про рівні можливості та права, шляхом проведення консультаційної та навчальної діяльності.</Tile>
                 <Tile>Просвітити суспільство про рівні можливості та права, шляхом проведення консультаційної та навчальної діяльності.</Tile>
                 <Tile>Встановити партнерське співробітництво між мігрантами та польським суспільством, аби задовольнити соціально-економічні потреби сторін</Tile>
                 <Tile>Надати можливість рівноправної участі мігрантів у житті місцевої громади</Tile>
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
