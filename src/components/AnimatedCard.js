import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const AnimatedCard = (node) => {
    console.log(node.bgi.fluid)
    return (
        <CardWrapper>
            <BackgroundImage
            fluid={node.bgi.fluid}
            >
            <CardContent className="card-content">
                <CardTitle className="card-title">{node.title}</CardTitle>
                <CardDescription>{node.description}</CardDescription>
                <CardButton  href={node.link}>Idź do strony</CardButton>
            </CardContent>
            </BackgroundImage>
        </CardWrapper>
        
    )
}

const CardWrapper = styled.div`
color:white;
margin: 0 16px 30px 16px;
max-width: 20rem;
border-radius: 0.5rem;
overflow: hidden;
transition: transform 400ms ease;
@media(hover){
    &:hover, :focus-within{
        transform: scale(1.05);
        & .card-title::after{
        transform: scaleX(1)
        }
        & .card-content{
        transform: translateY(0);
        }
        & .card-content > *:not(.card-title){
        opacity: 1;
        transition: opacity 300ms linear;
        transition-delay: 600ms;
        }
}
}
@media(min-width:800px){
    margin: 0 16px 50px 16px;
}
`
const CardContent = styled.div`

position: relative;
--padding:1.3rem;
height: 400px;
padding: var(--padding);
background: linear-gradient(
    hsl(0 0% 0% / 0 ),
    hsl(0 0% 0% / 0.4 ) 8%,
    hsl(0 0% 0% / 1 )
);

transition-delay: 300ms;
@media(hover){
    transform: translateY(55%);
    transition: transform 400ms ease;
    & > *:not(.card-title){
    opacity: 0;
    transition: transform 400ms ease;
}
}


`
const CardTitle = styled.h3 `
position: relative;
max-width:90%;
margin-bottom:1.2rem;
&::after{
    content: "";
    position: absolute;
    height: 4px;
    left:calc(var(--padding) * -1);
    bottom:-10px;
    background: var(--clr-primary-2) ;
    width: calc(100% + var(--padding));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms ease;

}
@media(min-width:1000px){
    font-size:28px;
}
`
const CardDescription = styled.p`
line-height: 1.5;
`
const CardButton = styled.a`
color:white !important;
position: absolute;
bottom:2rem;
cursor: pointer;
display: inline-block;
text-decoration: none;
color: hsl(207, 19%, 9%);
background-color: var(--clr-primary-2);
padding:0.5em 1.25em;
border-radius: .25em;
    &:hover,:focus{
background-color:var(--clr-primary-1)
}
`

export default AnimatedCard
