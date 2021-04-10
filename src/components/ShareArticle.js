import React from "react"
import styled from "styled-components"
import { FacebookShareButton, TwitterShareButton } from "react-share"
import { FacebookIcon, TwitterIcon } from "react-share"

const ShareArticle = ({ title, slug, articleType }) => {
  return (
    <ShareArticleWrapper>
      <h4>Udostępnij: </h4>
      <FacebookShareButton
        url={`https://www.instytutpm.eu/${articleType}/${slug}`}
        quote={title}
        hashtag="#InstytutPM"
      >
        <FacebookIcon round={true} size="50"></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton
        title={title}
        url={`https://www.instytutpm.eu/${articleType}/${slug}`}
        via="Instytutipm"
      >
        <TwitterIcon round={true} size="50"></TwitterIcon>
      </TwitterShareButton>
    </ShareArticleWrapper>
  )
}

const ShareArticleWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-top: 26px;
  .react-share__ShareButton {
    margin-left: 15px;
  }
`

export default ShareArticle
