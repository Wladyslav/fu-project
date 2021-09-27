import React from 'react'
import styled from "styled-components"

const Goals = () => {
    return (
        <GoalsWrapper>
             <PartnersTitle className="sectionTitle">nasze cele</PartnersTitle>
             <TileWrapper>
                 <Tile>Kształcenie społeczeństwa równych szans świadomego swoich praw, poprzez prowadzenie działalności konsultacyjnej i szkoleniowej</Tile>
                 <Tile>Dostosowanie aktów prawnych do potrzeb i możliwości migrantów, społecznych i gospodarczych interesów państwa</Tile>
                 <Tile>Nawiązanie partnerskiej współpracy między migrantami a społeczeństwem przyjmującym w celu zaspokojenia potrzeb społeczno-gospodarczych stron</Tile>
                 <Tile>Zapewnienie możliwości równego udziału migrantów w życiu społeczności lokalnej</Tile>
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
