import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  background-size: cover;
  height: 130vh;
  display: flex;
  flex-direction: column;
`

export const ScoreCard = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  align-self: center;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  width: 50vw;
  justify-content: space-between;
`
export const HeadingRock = styled.h1`
  color: white;
  font-size: 25px;
`
export const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const Name = styled.p`
  color: white;
  font-family: 'Roboto';
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: none;
  border-radius: 5px;
  margin-right: 20px;
  margin-top: 20px;
  width: 120px;
  height: 120px;
`

export const Heading = styled.h1`
  color: #223a5f;
  font-family: 'Roboto';
  align-self: center;
  font-size: 20px;
`

export const Score = styled.p`
  color: black;
  font-size: 25px;
  align-self: center;
  margin-bottom: 20px;
`

export const ImagesContainer = styled.ul`
  width: 50vw;
  height: 70vh;
  align-self: center;

  margin-top: 60px;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const RulesButton = styled.button`
  background-color: white;
  color: #223a5f;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 100px;
  align-self: flex-end;
  margin-right: 30px;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 50vh;
  align-self: center;
`

export const CheckingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50vw;
  height: 30vh;
`
export const OutputName = styled.p`
  font-size: 20px;
  color: white;
  align-self: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  align-self: center;
`
export default BgContainer
