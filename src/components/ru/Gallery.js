import React from 'react'
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

const Gallery = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulAboutUs {
        nodes {
          gallery {
            fluid(quality: 100) {
                ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  `)
  const images = data.allContentfulAboutUs.nodes[0].gallery
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const lastIndex = images.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, images])

    return (
        <GalleryWrapper>
            <GalleryTitle className="sectionTitle">ГАЛЕРЕЯ</GalleryTitle>
<GalleryImgs>
  {images.map((img,imgIndex)=>{
     let pos = "nextSlide"
     if (imgIndex === index) {
       pos = "activeSlide"
     }
     if (
      imgIndex === index - 1 ||
       (index === 0 && imgIndex === images.length - 1)
     ) {
       pos = "lastSlide"
     }
return(
  <article key={imgIndex} className={pos}>
  <Image objectFit="none"  className="img"  fluid={img.fluid} />
  </article>
)
  }
  )}
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
</GalleryImgs>
            
        </GalleryWrapper>
    )
}

const GalleryWrapper = styled.section``
const GalleryTitle = styled.h3``
const GalleryImgs = styled.div`
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
    height: 650px;

    article {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding: 0 130px;
      
      .img {
        width: 100%;
        height:100%;
      }
    }

    .prev,
    .next {
    }
  }
`


export default Gallery

