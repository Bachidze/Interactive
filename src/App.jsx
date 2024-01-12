import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { data } from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {data.map((el,i) =>(
      <Card
      key = {i}
      imgUrl={el.imgUrl}
      desc ={el.desc}
      button ={el.button}
      name={el.name}
      hover = {el.hover}
      number1 = {el.number1}
      number2 = {el.number2}
      number3 = {el.number3}
      number4 = {el.number4} 
       number5 = {el.number5}
      />
    ))}       
    </>
  )
}

export default App
