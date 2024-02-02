// Write your code here
import {useState} from 'react'

import {Card, Main, Left, Right} from './styledComponents'

const CreditCard = () => {
  const [num, setNum] = useState('')
  const [name, setName] = useState('')
  const changeName = event => {
    setName(event.target.value)
  }

  const changeNum = event => {
    setNum(event.target.value)
  }
  return (
    <Main>
      <Left>
        <h1>Credit Card</h1>
        <Card data-testid="creditCard">
          <p>{num}</p>
          <p>CARDHOLDER NAME</p>
          <p>{name}</p>
        </Card>
      </Left>
      <Right>
        <div>
          <h1>Payment Method</h1>
          <input
            type="text"
            value={num}
            onChange={changeNum}
            placeHolder="Card Number"
          />
          <br />
          <input
            type="text"
            value={name}
            onChange={changeName}
            placeHolder="Cardholder Name"
          />
        </div>
      </Right>
    </Main>
  )
}

export default CreditCard
