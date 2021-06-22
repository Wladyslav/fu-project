import React from "react"
import styled from "styled-components"

const PageIntroduction = props => {
  return (
    <PageIntroductionWrapper>
      <TextContainer>{props.children}</TextContainer>
    </PageIntroductionWrapper>
  )
}

const PageIntroductionWrapper = styled.section`
  max-width: var(--max-width);
  margin: 0px 10px 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 57px #e5edf4;
  border-radius: 40px;
  @media (min-width: 860px) {
    margin: 45px auto 45px auto;
  }
`

const TextContainer = styled.div`
  margin: 20px;
  text-align: center;
  font-size: 12px;
  line-height: 1.5;
  @media (min-width: 860px) {
    margin: 48px;
    font-size: 20px;
  }
`

export default PageIntroduction
