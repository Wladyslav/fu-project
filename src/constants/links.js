import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Główna",
    url: "/",
  },
  {
    id: 2,
    text: "Infopunkt",
    url: "/infopoint/",
  },
  {
    id: 3,
    text: "Blog",
    url: "/blog/",
  },
  {
    id: 4,
    text: "Konstytucja",
    url: "/constitution/",
  },
  {
    id: 4,
    text: "Biblioteczka",
    url: "/biblioteczka/",
  },
  
  {
    id: 5,
    text: "O nas",
    url: "/about-us/",
  },
]

const TempLinks = () => {
  return (
    <ul>
      {data.map(link => {
        return (
          <li key={link.id}>
            <Link to={link.url} activeStyle={{ color: "#EF8335" }}>
              {link.text}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
export default TempLinks
