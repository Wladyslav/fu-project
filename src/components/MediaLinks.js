import React from "react"
import styled from "styled-components"

import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai"

const MediaLinks = ({ linksColor, flexDirection }) => {
  return (
    <FooterMedia linksColor={linksColor} flexDirection={flexDirection}>
      <a
        target="_blank"
        href="https://www.instagram.com/ipm_wroclaw/?fbclid=IwAR063ZxpEi2qvXqW8xMpokMKtTpdvcABw6hpOMJcHSKPxG3t5Wyeyg74P10"
      >
        <AiFillInstagram />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/Instytutpm"
      >
        <AiFillFacebook />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/Instytutipm?fbclid=IwAR3f4D-Hs4djOhu1cklTqixQENiR2Hz4ppmrQ5H3wXsu0AzQvfrWBMiucrw"
      >
        <AiFillTwitterSquare />
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCS9Afcq5gYybQwMTOvfeGXg"
      >
        <AiFillYoutube />
      </a>
    </FooterMedia>
  )
}

const FooterMedia = styled.div`
  z-index: 3;
  position: absolute;
  left: -5px;
  top: 11px;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  font-size: 35px;

  @media (min-width: 500px) {
    flex-direction: row;
  }
  svg {
    
    color: ${props => props.linksColor};
    cursor: pointer;
    &:hover {
      color: var(--clr-primary-2);
    }
    @media (min-width: 500px) {
      font-size: 50px;
    }
    @media (min-width: 900px) {
      font-size: 50px;
    }
  }
`
export default MediaLinks
