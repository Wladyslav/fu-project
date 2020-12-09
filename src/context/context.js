import React, { useState } from "react"
const defaultValue = {
  showSidebar: () => {},
  hideSidebar: () => {},
  isOpen: false,
}

const GatsbyContext = React.createContext(defaultValue)

//provider
//consumer

const GatsbyProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false)

  const showSidebar = () => {
    setOpen(true)
  }
  const hideSidebar = () => {
    setOpen(false)
  }
  return (
    <GatsbyContext.Provider value={{ hideSidebar, showSidebar, isOpen }}>
      {children}
    </GatsbyContext.Provider>
  )
}
export { GatsbyContext, GatsbyProvider }
