import React from "react"
import { createGlobalStyle } from "styled-components"
import { GatsbyProvider } from "./src/context/context"
import CookieConsent from "react-cookie-consent";

const GlobalStyle = createGlobalStyle`

:root {
  /* dark shades of primary color*/
  --clr-primary-1: #EF8335;
  --clr-primary-2: #0C539C;
  --clr-dark: #3E3E3E;
  --transition: all 0.6s linear;
  
  --max-width: 1193px;
  
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Ubuntu'
}


`
export const wrapRootElement = ({ element }) => {
  return (
    <>
     <CookieConsent
      location="bottom"
      buttonText="Akceptuje"
      cookieName="AllCookiesAccepted"
      style={{ background: "black", opacity: "0.85", display: 'flex', justifyContent: "center", textAlign: "center" }}
      buttonStyle={{ color: "black", fontSize: "14px", backgroundColor: "#bfa67a", padding: "16px"}}
      expires={150}
      >
      Strona do poprawnego działania potrzebuje wykorzystywać pliki cookies. Zaakceptuj je, by móc w pełni korzystać z funkcjonalności naszej strony.
      </CookieConsent>
      <GlobalStyle />
      <GatsbyProvider>{element}</GatsbyProvider>
    </>
  )
}
