// Style your elements here
import styled from 'styled-components'

export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  backgrounf-size: cover;
  height: 50vh;
  width: 45vw;
  border-radius: 20px;
  position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 15px;
`

export const Main = styled.div`
  display: flex;
  flex-direction;row;
  padding: 10px;
  box-sizing: content-box;
`

export const Left = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: #3b4b69;
  padding; 10px;
`
export const Right = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: white;
  padding; 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
