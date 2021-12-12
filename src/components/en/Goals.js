import React from 'react'
import styled from "styled-components"

const Goals = () => {
    return (
        <GoalsWrapper>
             <PartnersTitle className="sectionTitle">OUR GOALS</PartnersTitle>
             <TileWrapper>
                 <Tile>Education society about equal opportunities and rights through consulting and training activities</Tile>
                 <Tile>Adaption of legal acts according to the needs and opportunities of migrants, as well as socio-economic interests</Tile>
                 <Tile>Establishing partnership cooperation between migrants and Polish society to meet the socio-economic needs of the parties</Tile>
                 <Tile>Provision of opportunities for an equal participation of migrants in the life of local community</Tile>
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
