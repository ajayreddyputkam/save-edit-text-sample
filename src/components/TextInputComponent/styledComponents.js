import styled from 'styled-components'

export const BgMainContainer = styled.div`
  background-color: #f5d0fe;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputElementCard = styled.div`
  background-color: #ffffff;
  min-height: 200px;
  min-width: 460px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

export const Heading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  margin-top: 0px;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`

export const InputElement = styled.input`
  width: 200px;
  height: 50px;
  border: 2px solid #cbd2d9;
  border-radius: 5px;
  background: transparent;
  outline: none;
  margin-right: 7px;
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 18px;
  padding: 10px;
`

export const SaveButton = styled.button`
  width: 80px;
  height: 50px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: #d946ef;
  outline: none;
  cursor: pointer;
  margin-left: 7px;
`

export const TextSaved = styled.p`
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 18px;
  margin-right: 7px;
`
