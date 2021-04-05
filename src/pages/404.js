import React from "react"
import Layout from "../components/Layout/layout"
import styled from "styled-components"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <ErrorWrapper>
      <h1>404 Not Found</h1>
      <p>Ta strona nie istnieje</p>
      <Link to="/">Strona główna</Link>
    </ErrorWrapper>
  </Layout>
)
const ErrorWrapper = styled.section`
  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 3;
`
export default NotFoundPage
