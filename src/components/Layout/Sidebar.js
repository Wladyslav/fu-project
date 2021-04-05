import React, { useContext } from "react"
import Links from "../../constants/links"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { GatsbyContext } from "../../context/context"

const Sidebar = () => {
  const { hideSidebar, isOpen } = useContext(GatsbyContext)
  return (
    <Wrapper isOpen={isOpen}>
      <button className="close-btn" onClick={hideSidebar}>
        <FaTimes />
      </button>
      <div
        className={`${isOpen ? "side-container" : ""}`}
        onClick={hideSidebar}
      >
        <Links />
      </div>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: grid;
  place-items: center;
  background: rgb(173, 173, 173);
  background: linear-gradient(
    0deg,
    rgba(173, 173, 173, 1) 22%,
    rgba(199, 199, 199, 1) 50%,
    rgba(240, 240, 240, 1) 90%,
    rgba(255, 255, 255, 1) 100%
  );
  opacity: ${props => (props.isOpen ? "1" : "0")};
  transition: var(--transition);
  transform: ${props =>
    props.isOpen ? "translateX(0%)" : "translateX(-100%)"};

  li {
    opacity: 0;
    list-style: none;
  }
  li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    text-decoration: none;
    color: var(--clr-primary-2);
    margin-bottom: 0.8rem;
    font-size: 2rem;
    transition: var(--transition);
  }

  .close-btn {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;

    cursor: pointer;
  }
  @media (min-width: 860px) {
    display: none;
  }

  /*
  ===============
  Sidebar Animation
  ===============
  */
  .side-container li {
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
  }
  .side-container li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .side-container li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .side-container li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .side-container li:nth-of-type(4) {
    animation-delay: 1s;
  }

  @keyframes slideRight {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`
