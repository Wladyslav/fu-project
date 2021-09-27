import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import MediaLinks from "./MediaLinks"
import { IoMdMail, IoIosCall } from "react-icons/io"
import { MdLocationOn } from "react-icons/md"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "hero" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  
  return (
    <HeroWrapper>
      <HeroContainer>
        <MediaLinks linksColor="var(--clr-dark)" flexDirection="column" />
        <HeroImage fluid={data.file.childImageSharp.fluid}></HeroImage>

        <HeroHours>
          <h4>godziny pracy</h4>
          <ul>
            <li>
              PN
              <span /> 14:00 - 20:00
            </li>
            <li>
              WT
              <span /> 10:00 - 14:00
            </li>
            <li>
              ŚR
              <span /> 14:00 - 20:00
            </li>
            <li>
              CZW <span />
              10:00 - 14:00
            </li>
            <li>
              PT <span />
              14:00 - 20:00
            </li>
          </ul>
        </HeroHours>
        <HeroContact>
          <h4>kontakt</h4>
          <div>pytania dotyczące współpracy:</div>
          <div className="contact-container">
            <div>
              <span>
                <IoMdMail />
              </span>
              <a href="mailto:biuro@instytutpm.eu">biuro@instytutpm.eu</a>
            </div>
            <div>
              <span>
                <IoIosCall />
              </span>
              <a href="tel:+48 510 011 846">+48 510 011 846</a>
            </div>
            <div>
              <span>
                <MdLocationOn />
              </span>
              <p>
                ul.Ruska 46a/202
                <br /> 50-079, Wrocław
              </p>
            </div>
          </div>
        </HeroContact>
      </HeroContainer>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  position: relative;
  min-height: 440px;
  background-image: linear-gradient(to top, #e6e9f0 0%, #fff 100%);
  margin-bottom: 25px;
  div > a > svg {
    margin-left: 10px;

    @media (min-width: 860px) {
      margin-right: 37px;
      margin-left: inherit;
    }
  }
`
const HeroContainer = styled.div`
  position: relative;
  display: flex;
  max-width: var(--max-width);
  margin: 0 auto;
`
const HeroImage = styled(Image)`
  z-index: 2;
  left: -100px;
  width: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180.38deg,
      #f4f4f4 0.33%,
      rgba(255, 255, 255, 0) 16.89%
    );
  }

  @media (min-width: 860px) {
    width: 953px;
    left: 0;
    margin-bottom: 200px;
  }
  @media (min-width: 1000px) {
    margin-bottom: 100px;
  }
`

const HeroHours = styled.div`
  position: absolute;
  z-index: 3;
  width: 180px;
  height: 220px;
  right: 0px;
  border-radius: 25px;
  background: var(--clr-primary-1);
  box-shadow: -5px 4px 44px rgba(12, 83, 156, 0.34);
  padding: 15px 10px;
  display: flex;
  flex-wrap: wrap;
  color: white;
  text-align: center;
  @media (min-width: 860px) {
    padding: 0;
    left: 685px;
    height: 488px;
    width: 414px;
  }

  h4 {
    width: 100%;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 40px;
    @media (min-width: 860px) {
      font-size: 35px;
      margin-top: 49px;
    }
  }
  ul {
    list-style: none;
    color: white;
    line-height: 2.2;
    margin: 0 auto;

    @media (min-width: 860px) {
      margin: 47px 47px 56px 48px;
      width: 100%;
      line-height: 2.4;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;

      span {
        border: 1px solid #ffcbcb;
        width: 25px;
      }
      @media (min-width: 860px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 25px;
        letter-spacing: 0.05em;
        span {
          border: 1px solid #ffcbcb;
          width: 90px;
        }
      }
    }
  }
`
const HeroContact = styled.div`
  position: absolute;
  z-index: 3;
  width: 164px;
  height: 175px;
  right: 100px;
  top: 205px;
  border-radius: 40px;
  background: white;
  box-shadow: -5px 4px 44px rgba(12, 83, 156, 0.34);
  color: var(--clr-primary-2);
  padding: 21px 15px;

  @media (min-width: 860px) {
    padding: 38px 32px;
    height: 287px;
    width: 281px;
    top: 450px;
    right: 187px;
  }
  @media (min-width: 1000px) {
    right: 0px;
  }
  h4 {
    width: 100%;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    @media (min-width: 860px) {
      font-size: 25px;
      margin-bottom: 21px;
    }
  }
  & > div {
    margin-top: 12px;
    font-size: 12px;
    @media (min-width: 860px) {
      font-size: 18px;
      margin-bottom: 19px;
    }
  }
  .contact-container {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    @media (min-width: 860px) {
      font-size: 18px;
    }
    & > div {
      display: flex;
      margin-bottom: 6px;
      span {
        margin-right: 5px;
        @media (min-width: 860px) {
          margin-right: 20px;
        }
      }
    }

    a {
      text-decoration: none;
      color: var(--clr-primary-2);
    }
    p {
    }
    svg {
      font-size: 18px;
    }
  }
`
export default Hero
