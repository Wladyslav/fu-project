import React from 'react'
import styled from 'styled-components'
const PopUp = ({popupMessage, popup}) => {
    
    return (
        <PopupWrapper popup={popup} >
           {popupMessage === "OK" ? <p>Wysłano wiadomość!</p> : <p>{`Błąd w wysyłaniu wiadomości: ${popupMessage}`}</p>}
        </PopupWrapper>
    )
}
const PopupWrapper = styled.div`
z-index:99999;
width: 100vw;
height: 100px;
background-color: var(--clr-dark);
color: white;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
bottom: 0;
left:0;
text-transform:uppercase;
font-weight:700;
font-size:20px;
transform: ${props =>props.popup?"translateY(0)":"translateY(100%)"};
transition: 0.3s transform linear;
  
`
export default PopUp;