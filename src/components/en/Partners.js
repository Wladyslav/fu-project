import React from 'react'
import styled from "styled-components"
import logo1 from "../../images/about/unnamed (1).png"
import logo2 from "../../images/about/logo2.png"
import logo3 from "../../images/about/logo3.png"
import logo4 from "../../images/about/logo4.png"
import logo5 from "../../images/about/logo5.png"
import logo6 from "../../images/about/logo6.png"
import logo7 from "../../images/about/logo7.png"
import logo8 from "../../images/about/logo8.png"



const Partners = () => {
    
  
    return (
        <PartnersWrapper >
            <PartnersTitle className="sectionTitle">OUR PARTNERS</PartnersTitle>
            <PartnersLogos>
            <img loading="lazy" src={logo1}></img>
            <img loading="lazy" src={logo2}></img>
            <img loading="lazy" src={logo3}></img>
            <img loading="lazy" src={logo4}></img>
            <img loading="lazy" src={logo5}></img>
            <img loading="lazy" src={logo6}></img>
            <img loading="lazy" src={logo7}></img>
            <img loading="lazy" src={logo8}></img>
            </PartnersLogos>
            
        </PartnersWrapper>
    )
}
const PartnersWrapper = styled.section`
position:relative;

`
const PartnersTitle = styled.h3`
margin-bottom:62px;
`
const PartnersLogos = styled.div`
display:grid;

justify-items:center;
align-items:center;
@media (min-width:500px){
grid-template-columns: 1fr 1fr;

}
@media (min-width:1000px){
    grid-template-columns:1fr 1fr 1fr 1fr;
}

img{
    object-fit:none;
    margin: 20px;
    
    
}

`

export default Partners
