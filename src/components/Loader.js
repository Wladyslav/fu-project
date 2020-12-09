import React from 'react'
import styled from 'styled-components'
const Loader = () => {
    return (
    <LoaderWrapper >
    <div className="blurScreen"></div>
    <div className="lds_facebook"><div></div><div></div><div></div></div>
    </LoaderWrapper>
    )
}
 
 const LoaderWrapper = styled.section`
 .lds_facebook {
  display: inline-block;
  position: fixed;
  width: 80px;
  height: 80px;
  top: 50%;
  left: calc(50% - 40px);
  z-index: 9999999;
}
.lds_facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background-color: var(--clr-primary-1);
  animation: lds_facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds_facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds_facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds_facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}

.blurScreen {
  background-color: black;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

@keyframes lds_facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}

 `
export default Loader