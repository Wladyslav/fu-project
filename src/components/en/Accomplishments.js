import React from 'react'
import styled from "styled-components"

const Accomplishments = () => {
    return (
        <AccomplishmentsWrapper>
            <AccomplishmentsTitle className="sectionTitle">ACHIEVEMENTS</AccomplishmentsTitle>
            <AccomplishmentsList>
            <Accomplishment>
                <AccomplishmentNumber>&gt;15000</AccomplishmentNumber>
                <AccomplishmentText>CONSULTATIONS</AccomplishmentText>
            </Accomplishment>
            <Accomplishment>
                <AccomplishmentNumber>&gt;50</AccomplishmentNumber>
                <AccomplishmentText>TRAININGS</AccomplishmentText>
            </Accomplishment>
            <Accomplishment>
                <AccomplishmentNumber>&gt;30</AccomplishmentNumber>
                <AccomplishmentText>COUNTRIES OF ORIGIN OF OUR CLIENTS</AccomplishmentText>
            </Accomplishment>
            <Accomplishment>
                <AccomplishmentNumber>&gt;50</AccomplishmentNumber>
                <AccomplishmentText>OUTCOME CONSULTATIONS IN 5 CITIES OF LOWER SILESIA</AccomplishmentText>
            </Accomplishment>
            <Accomplishment>
                <AccomplishmentNumber>&gt;45</AccomplishmentNumber>
                <AccomplishmentText>PUBLICATIONS AND EXPERTS’ ARTICLES</AccomplishmentText>
            </Accomplishment>
            </AccomplishmentsList>
        </AccomplishmentsWrapper>
    )
}
const AccomplishmentsWrapper = styled.section``
const AccomplishmentsTitle = styled.h3`
margin-bottom:64px;
`
const AccomplishmentsList = styled.div`
display:grid;
justify-items:center;

@media(min-width:900px){
    grid-template-columns:repeat(5,1fr);
}

`
const Accomplishment = styled.div`
text-align:center;
line-height:30px;
margin: 24px 16px;

`
const AccomplishmentNumber = styled.p`
color: var(--clr-primary-1);
margin-bottom:16px;
font-weight:bold;
`
const AccomplishmentText = styled.p`
text-transform:uppercase;
`


export default Accomplishments


