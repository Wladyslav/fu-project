import React from "react"
import styled from "styled-components"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
    <Main>
      <Sidebar />
      <Navbar />

      {children}
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
max-width: var(--max-width);
margin: 0 auto;
min-height: 100vh;

`
export default Layout
