import React from 'react'
import styled from 'styled-components'
import Consulting from '../Consulting'
import Translations from '../Translations'
import Trainings from '../Trainings'
import CompanySupport from '../CompanySupport'

const Issues = () => {
 
    return (
        <IssuesWrapper>
            <IssuesTitle className="sectionTitle">OUR ACTIVITY</IssuesTitle>
            <IssuesList >
            <Consulting>WE CONSULT</Consulting>
            <Translations>WE TRANSLATE</Translations>
            <Trainings>WE TRAIN MIGRANTS</Trainings>
            <CompanySupport>WE ADVISE INSTITUTIONS AND COMPANIES</CompanySupport>
            </IssuesList>
            
            
        </IssuesWrapper>
    )
}

const IssuesWrapper  = styled.section`
position:relative;
`
const IssuesList = styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows: repeat(4, 320px);
text-transform:uppercase;
color: var(--clr-primary-1);
font-weight:600;
font-size:21px;
section{
    p{
        // position:absolute
        // width100%;
        // height:100%;
        margin:10px;
        background: rgba(0,0,0,.5);
    }
}
@media (min-width:1000px){
    grid-template-columns:1fr 1fr 1fr 1fr;
    grid-template-rows:320px
}

`

const IssuesTitle = styled.h2`
margin:64px 0;

` 
export default Issues
