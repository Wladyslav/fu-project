import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

export const query = graphql`
  {
    allContentfulTeam {
      nodes {
        id
        name
        position
        image {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

const TeamSection = () => {
  const {
    allContentfulTeam: { nodes: team },
  } = useStaticQuery(query)
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const lastIndex = team.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, team])

  return (
    <TeamWrapper>
      <TeamTitle>nasz zespół</TeamTitle>
      <TeamSlider>
        {team.map((member, memberIndex) => {
          const { name, image, position } = member

          let pos = "nextSlide"
          if (memberIndex === index) {
            pos = "activeSlide"
          }
          if (
            memberIndex === index - 1 ||
            (index === 0 && memberIndex === team.length - 1)
          ) {
            pos = "lastSlide"
          }

          return (
            <article key={memberIndex} className={pos}>
              <Image fluid={image.fluid} className="img" />
              <h4 className="name">{name}</h4>
              <p className="position">{position}</p>
            </article>
          )
        })}
        <button
          className="prev"
          onClick={() => {
            setIndex(index - 1)
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(index + 1)
          }}
        >
          <FiChevronRight />
        </button>
      </TeamSlider>
    </TeamWrapper>
  )
}

const TeamWrapper = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
`
const TeamTitle = styled.h2`
  margin-top: 70px;
  text-transform: uppercase;
  color: var(--clr-primary-2);
  font-weight: bold;
  font-size: 38px;
  text-align: center;
  @media (min-width: 860px) {
    font-size: 55px;
    text-align: left;
  }
`
const TeamSlider = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100%;
  height: 350px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
  article {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    color: var(--clr-primary-2);
    transition: var(--transition);

    .name {
      text-transform: uppercase;
      width: 100%;
      font-weight: 700;
      font-size: 25px;
    }
    .position {
      font-weight: 400;
      font-size: 20px;
    }
    .img {
      height: 250px;
      width: 250px;
      picture {
        img {
          height: inherit !important;
        }
      }
    }
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border-color: transparent;
    outline: none;
    cursor: pointer;
    transition: var(--transition);
    svg {
      font-size: 70px;
      color: var(--clr-primary-2);
    }
  }
  .prev:hover,
  .next:hover {
    background: var(--clr-primary-5);
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  @media (min-width: 860px) {
    height: 450px;

    article {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding: 0 130px;
      .name {
        font-size: 35px;
        order: 0;
        margin-bottom: 20px;
        width: 45%;
        text-align: left;
      }
      .position {
        order: 1;
        font-size: 30px;
        width: 45%;
        text-align: left;
      }
      .img {
        width: 400px;
        height: 400px;
        order: 3;
      }
    }

    .prev,
    .next {
    }
  }
`

export default TeamSection
