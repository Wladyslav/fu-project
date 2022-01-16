import React from "react"
import styled from "styled-components"

import PageIntroduction from "../PageIntroduction"

const Consultations = () => {
  return (
    <ConsultationsWrapper>
      <ConsultationsTitle>Konsultacje ogólne</ConsultationsTitle>
      <PageIntroduction>
        Bezpłatne wsparcie informacyjne dla migrantów z Dolnego Śląska w
        zakresie między innymi: legalizacji pobytu i pracy, ochrony zdrowia i
        ubezpieczenia, codziennego funkcjonowania w Polsce. Konsultacje
        prowadzone są w czterech językach – ukraińskim, polskim, rosyjskim oraz
        angielskim. Do skorzystania ze wsparcia niezbędne jest przedstawienie
        paszportu i karty pobytu (jeśli została wydana).
      </PageIntroduction>
      <TilesWrapper>
        <Tile>
          <TileTitle className="title">stacjonarnie</TileTitle>
          <TileDescription className="description">
            Konsultacje prowadzone są przez konsultantów w godzinach pracy
          </TileDescription>
          <TileRemark className="remark">(​obowiązują zapisy)</TileRemark>
          <TileAdress className="adress">ul. Ruska 46a/201</TileAdress>
        </Tile>
        <Tile>
          <TileTitle className="title">przez maila</TileTitle>
          <TileDescription className="description">
            Prosimy wysłać Pana/Pani pytanie na pocztę
          </TileDescription>

          <TileAdress className="adress">
            <a href="mailto:info@instytutpm.eu">info@instytutpm.eu</a>
          </TileAdress>
        </Tile>
        <Tile>
          <TileTitle className="title">przez telefon</TileTitle>
          <TileDescription className="description">
            Prosimy zadzwonić
            <br /> na numer <a href="tel:510-011-846">
              510-011-846
            </a> <br /> w godzinach pracy <br />
            Instytutu Praw Migrantów: poniedziałek: 10:00 - 18:00, wtorek, środa, czwartek, piątek: 10:00 - 17:00
            
          </TileDescription>
        </Tile>
      </TilesWrapper>
      <PageIntroduction>
        Dodatkowo prowadzimy konsultacje ekspertów w zakresie prawa pracy,
        administracyjnego, rodzinnego (prawnik), poszukiwania pracy,
        przygotowania CV (doradca zawodowy), adaptacji w Polsce, przezwyciężania
        trudności (psycholog). Konieczne zapisy. Do skorzystania ze wsparcia
        niezbędne jest przedstawienie paszportu i karty pobytu (jeśli została
        wydana).
      </PageIntroduction>
    </ConsultationsWrapper>
  )
}

const ConsultationsWrapper = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: var(--max-width);
  margin: 0 auto;
`
const ConsultationsTitle = styled.h2`
  width: 100%;
  margin: 16px;
  font-size: 16px;
  color: var(--clr-primary-2);
  font-weight: bold;
  @media (min-width: 860px) {
    font-weight: 500;
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 45px;
  }
`
const TilesWrapper = styled.div`
  margin: 0 auto;
  @media (min-width: 860px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
  @media (min-width: 1200px) {
    justify-content: space-between;
    div:nth-last-child(1) {
      margin-right: 0px;
    }
  }
`
const Tile = styled.div`
  max-width: 320px;
  margin: 10px 16px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  a {
    color: inherit;
    text-decoration: none;
  }
  @media (min-width: 860px) {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: initial;
    padding: 63px 48px 61px 61px;
    width: 365px;
    height: 327px;
    background: #ffffff;
    box-shadow: 0px 0px 57px #e5edf4;
    border-radius: 40px;
    margin-right: 20px;
  }
  @media (min-width: 1200px) {
    margin: 0;
    margin-right: 40px;
  }
`
const TileTitle = styled.h4`
  grid-column: 1;
  grid-row: 1/4;
  width: 109px;
  margin-right: 33px;
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  color: var(--clr-primary-2);
  text-transform: uppercase;
  @media (min-width: 860px) {
    font-weight: normal;
    font-size: 25px;
    width: 100%;
    margin-bottom: 33px;
    margin-right: 0;
  }
`
const TileDescription = styled.div`
  grid-column: 2;
  grid-row: 1;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  br {
    display: none;
  }
  @media (min-width: 860px) {
    font-size: 20px;
    br {
      display: block;
    }
  }
`
const TileRemark = styled.div`
  grid-column: 2;
  grid-row: 2;
  font-weight: 300;
  font-style: italic;
  font-size: 8px;
  margin: 6px 0;
  @media (min-width: 860px) {
    font-size: 13px;
  }
`
const TileAdress = styled.div`
  grid-column: 2;
  grid-row: 3;
  font-weight: 400;
  color: var(--clr-primary-1);
  font-size: 12px;
  @media (min-width: 860px) {
    position: absolute;
    bottom: 0;
    padding-bottom: 71px;
    font-size: 20px;
  }
`
export default Consultations
