import React, { useState } from "react"
import styled from "styled-components"
import emailjs from "emailjs-com"
import { TiArrowSortedDown } from "react-icons/ti"
import Loader from "./Loader"
import ConsultationPopup from "./ConsultationPopup"



const ConsultationsForm = () => {
  
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [consultation, setConsultation] = useState("")
  const [message, setMessage] = useState("")
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const [loader, setLoader] = useState(false)
  const [popup, setPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState("")

  const timeOutPopUp = () => {
    setTimeout(() => {
      setPopup(false)
    }, 3000)
  }
  const formReset = () => {
    setName("")
    setSurname("")
    setEmail("")
    setPhoneNumber("")
    setConsultation("")
    setMessage("")
  }
  const handleChange = e => {
    if (e.target.name === "name") {
      setName(e.target.value)
    }
    if (e.target.name === "surname") {
      setSurname(e.target.value)
    }
    if (e.target.name === "email") {
      setEmail(e.target.value)
    }
    if (e.target.name === "phoneNumber") {
      setPhoneNumber(e.target.value)
    }
    if (e.target.name === "message") {
      setMessage(e.target.value)
    }
  }
  const handleSelectChange = e => {
    setConsultation(e.target.value)
    setIsSelectOpen(false)
  }
  const handleOpen = () => {
    setIsSelectOpen(!isSelectOpen)
  }
  
  const sendEmail = e => {
    e.preventDefault()
    setLoader(true)
    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        e.target,
        process.env.GATSBY_USER_ID
      )
      .then(
        result => {
          console.log(result.text)
          timeOutPopUp()
          setPopup(true)
          setPopupMessage(result.text)
          setLoader(false)
          formReset()
        },
        error => {
          console.log(error.text)
          timeOutPopUp()
          setPopup(true)
          setPopupMessage(error.text)
          setLoader(false)
        }
      )
  }

  return (
    <FormWrapper>
      <FormTitle>Konsultacje specjalistów</FormTitle>
      <Form onSubmit={sendEmail}>
        <input
          name="name"
          type="text"
          placeholder="Imię*"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          name="surname"
          type="text"
          placeholder="Nazwisko*"
          value={surname}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email*"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Telefon"
          value={phoneNumber}
          onChange={handleChange}
        />

        <SelectBox isSelectOpen={isSelectOpen}>
          <div className="selected" onClick={handleOpen}>
            <input
              type="text"
              className="text"
              placeholder="Specjalista*"
              name="expert"
              defaultValue={consultation}
              required
            />
            <span className="icon">{<TiArrowSortedDown />}</span>
          </div>
          <OptionsContainer isSelectOpen={isSelectOpen}>
            <div className="option">
              <input
                type="radio"
                id="general"
                defaultValue="Ogólna konsultacja"
                onClick={handleSelectChange}
              />
              <label htmlFor="general">Ogólna konsultacja</label>
            </div>

            <div className="option">
              <input
                type="radio"
                id="potocki"
                defaultValue="Prawnik Bartłomiej Potocki"
                onClick={handleSelectChange}
              />
              <label htmlFor="potocki">Prawnik Bartłomiej Potocki</label>
            </div>

            <div className="option">
              <input
                type="radio"
                id="trylinska"
                defaultValue="Prawniczka Anna Trylińska"
                onClick={handleSelectChange}
              />
              <label htmlFor="trylinska">Prawniczka Anna Trylińska</label>
            </div>

            <div className="option">
              <input
                type="radio"
                id="buczko"
                defaultValue="Doradczyni zawodowa Joanna Handziak-Buczko"
                onClick={handleSelectChange}
              />
              <label htmlFor="buczko">
                Doradczyni zawodowa <br /> Joanna Handziak-Buczko
              </label>
            </div>

            <div className="option">
              <input
                type="radio"
                id="raczynska"
                defaultValue="Psyholożka Wiktoria Raczyńska"
                onClick={handleSelectChange}
              />
              <label htmlFor="raczynska">Psyholożka Wiktoria Raczyńska</label>
            </div>
          </OptionsContainer>
        </SelectBox>

        <textarea
          name="message"
          value={message}
          placeholder="Wiadomość*"
          onChange={handleChange}
          required
        />

        <button type="submit">zapisz się</button>
      </Form>
      {loader ? <Loader loader={loader} /> : null}
      <ConsultationPopup popupMessage={popupMessage} popup={popup} />
    </FormWrapper>
  )
}

const FormWrapper = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: var(--max-width);
  margin: 16px 10px 24px 10px;
  background: var(--clr-primary-2);
  border-radius: 25px;
  @media (min-width: 860px) {
    margin: 62px auto 101px auto;
  }
`
const FormTitle = styled.h3`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  color: white;
  margin: 16px 20px;
  @media (min-width: 860px) {
    margin: 85px 0px 65px 90px;
    font-weight: 500;
    font-size: 35px;
    line-height: 40px;
    display: flex;
    align-items: center;
  }
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 860px) {
    max-width: 1000px;
  }
  @media (min-width: 1100px) {
    max-width: inherit;
    input[name="name"] {
      order: 1;
    }
    input[name="surname"] {
      order: 4;
    }
    input[name="email"] {
      order: 2;
    }
    input[name="phoneNumber"] {
      order: 5;
    }
    textarea[name="message"] {
      order: 6;
    }
  }

  input[type="text"],
  input[type="email"],
  input[type="number"],
  input[type="text"],
  input[type="tel"],
  select,
  textarea {
    width: 100%;
    max-width: 300px;
    border-radius: 40px;
    border: none;
    border-color: white;
    margin: 6px 10px;
    height: 44px;
    padding-left: 20px;
    resize: none;
    font-family: Ubuntu, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 13px;
    @media (min-width: 860px) {
      padding-left: 33px;
    }
    &::placeholder {
      font-family: Ubuntu, Helvetica, sans-serif;
      font-weight: 400;
      font-size: 13px;

      @media (min-width: 860px) {
        font-weight: 300;
        font-size: 20px;
      }
    }
    &:focus {
      border-color: transparent;
      border: none;
      outline: none;
    }
    @media (min-width: 860px) {
      height: 58px;
      margin: 0 28px 45px 28px;
      font-weight: 300;
      font-size: 20px;
    }
  }

  textarea {
    height: 92px;
    border-radius: 25px;
    padding-top: 10px;
    @media (min-width: 860px) {
      height: 159px;
      margin-bottom: 0;
      padding-top: 15px;
    }
  }
  button[type="submit"] {
    width: 100%;
    margin: 6px 10px;
    margin-bottom: 43px;
    max-width: 300px;
    height: 44px;
    text-transform: uppercase;
    background: var(--clr-primary-1);
    border-radius: 40px;
    border: none;
    font-family: Ubuntu;
    line-height: 18px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    @media (min-width: 860px) {
      height: 56px;
      font-weight: 500;
      font-size: 20px;
      line-height: 130%;
      margin-bottom: 40px;
      margin-top: 20px;
    }
    @media (min-width: 1100px) {
      margin-top: 0;
      position: relative;
      top: -56px;
      order: 7;
    }
  }
  input[name="expert"] {
    margin: 0;
    padding: 0;
  }
`

const SelectBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 44px;
  margin: 6px 10px;
  border-radius: ${props => (props.isSelectOpen ? "40px 40px 0 0" : "40px")};
  background: ${props => (props.isSelectOpen ? "white" : "none")};
  font-size: 13px;
  overflow: ${props => (props.isSelectOpen ? "inherit" : "hidden")};

  @media (min-width: 860px) {
    font-size: 20px;
    margin: 0 28px 45px 28px;
    height: 58px;
  }
  @media (min-width: 1100px) {
    order: 3;
  }
  .selected {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 44px;
    padding-left: 20px;
    border-radius: 40px;
    background: ${props => (props.isSelectOpen ? "#f3f3f4" : "white")};
    color: var(--clr-dark);
    cursor: pointer;

    @media (min-width: 860px) {
      height: 58px;
      padding-left: 33px;
    }
    .text {
      background: transparent;

      @media (min-width: 860px) {
        width: 80%;
      }
    }
    .icon {
      position: absolute;
      color: var(--clr-primary-1);
      width: 25px;
      vertical-align: middle;
      right: 14px;
      top: ${props => (props.isSelectOpen ? "8px  " : "10px;  ")};
      transform: ${props =>
        props.isSelectOpen ? "rotate(180deg)  " : "rotate(0deg)   "};
      @media (min-width: 860px) {
        right: 22px;
        top: ${props => (props.isSelectOpen ? "10px  " : "15px;  ")};
      }
      svg {
        font-size: 25px;
      }
    }
  }
`
const OptionsContainer = styled.div`
  height: 200px;
  background: ${props => (props.isSelectOpen ? "white" : "transparent")};
  opacity: ${props => (props.isSelectOpen ? "1" : "0")};
  border-radius: 0 0 40px 40px;

  @media (min-width: 860px) {
    height: 297px;
  }
  div:nth-child(even) {
    background: #f3f3f4;
  }
  .option {
    position: relative;
    font-size: 12px;
    height: 38px;

    cursor: pointer;
    @media (min-width: 860px) {
      font-size: 18px;
      height: 58px;
    }

    label {
      cursor: pointer;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 20px;
      @media (min-width: 860px) {
        padding-left: 33px;
      }
    }
    input[type="radio"] {
      display: none;
    }
  }
`
export default ConsultationsForm
