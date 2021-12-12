
import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const AboutUsLinks = () => {
    return (
        <AboutUsLinksWrapper>
            <Link to={'/about-us'} activeStyle={{ color: "#EF8335" }}>pl</Link>
            <Link to={'/ua/o-nas'} activeStyle={{ color: "#EF8335" }}>ua</Link>
            <Link to={'/en/about-us'} activeStyle={{ color: "#EF8335" }}>en</Link>
            <Link to={'/ru/o-nas'} activeStyle={{ color: "#EF8335" }}>ru</Link>
        </AboutUsLinksWrapper>
    )
}

const AboutUsLinksWrapper=styled.div`
display: flex;
justify-content:right;
a{
    margin: 1rem;
    text-decoration:none;
    font-size:1.3rem;
    color:black;
}
`
export default AboutUsLinks
