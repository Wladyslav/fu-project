import React, { useContext } from "react"
import styled from "styled-components"
import NavbarLinks from "../constants/links"
import { RiMenu3Fill } from "react-icons/ri"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { GatsbyContext } from "../context/context"
export const query = graphql`
  {
    file(name: { eq: "Logo IPM colour" }) {
      childImageSharp {
        fixed(height: 65) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Navbar = () => {
  const { showSidebar } = useContext(GatsbyContext)
  const {
    file: {
      childImageSharp: { fixed: logoImage },
    },
  } = useStaticQuery(query)
  return (
    <NavbarWrapper>
      <Logo to={"/"}>
        <Image fixed={logoImage} />
      </Logo>

      <NavbarLinks />

      <NavButton onClick={showSidebar}>
        <RiMenu3Fill />
      </NavButton>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  z-index: 999;
  position: relative;
  display: flex;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
  ul {
    display: none;

    li {
      list-style: none;
      margin: 15px;
      font-size: 20px;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }

  @media (min-width: 860px) {
    justify-content: center;
    align-items: center;
    ul {
      display: flex;
    }
  }
`
const Logo = styled(Link)`
  margin: 10px;
  margin-top: 20px;
  height: 100%;

  @media (min-width: 860px) {
     margin-top: 4px;
      display: none;
  
  }
`
const NavButton = styled.button`
  margin-right: 10px;

  width: 4.5rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  outline: none;
  border: transparent;
  color: black;
  background: transparent;
  cursor: pointer;

  @media (min-width: 860px) {
    display: none;
  }
`

export default Navbar
