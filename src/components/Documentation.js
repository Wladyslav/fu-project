import React from 'react'
import styled from "styled-components"

const Documentation = () => {
    return (
        <DocumentationWrapper>
            <DocumentationTitle className="sectionTitle">dokumetacja</DocumentationTitle>
            <DocumentLink>
                <a rel="nofollow" rel="noopener" target="_blank"  href="https://assets.ctfassets.net/2r1w6igwi4b0/LpcFZgnkCAIClQqFa4iwe/c300443aa1470e6648c9f20d6b2a8d30/UCHWA__A_IPM.pdf"  >uchwała powstania ipm</a>
            </DocumentLink>

        </DocumentationWrapper>
    )
}
const DocumentationWrapper = styled.section``
const DocumentationTitle = styled.h3``
const DocumentLink = styled.div`
margin:  64px 0;
text-transform:uppercase;
`


export default Documentation

