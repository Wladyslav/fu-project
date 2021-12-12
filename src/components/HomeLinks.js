import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const HomeLinks = () => {
    return (
        <HomeLinksWrapper>
            <Link to={'/'} activeStyle={{ color: "#EF8335" }}>pl</Link>
            <Link to={'/ua/'} activeStyle={{ color: "#EF8335" }}>ua</Link>
            <Link to={'/en/'} activeStyle={{ color: "#EF8335" }}>en</Link>
            <Link to={'/ru/'} activeStyle={{ color: "#EF8335" }}>ru</Link>
        </HomeLinksWrapper>
    )
}

const HomeLinksWrapper=styled.div`
display: flex;
justify-content:right;
a{
    margin: 1rem;
    text-decoration:none;
    font-size:1.3rem;
    color:black;
}
`
export default HomeLinks
