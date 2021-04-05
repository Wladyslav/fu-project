import React from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Navbar />

      {children}
      <Footer />
    </>
  )
}

export default Layout
