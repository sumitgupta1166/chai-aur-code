import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(15);
  // let counter=5
  const addValue=()=>{
    console.log('value added',Math.random())
    // counter+=1
    if(counter<20)
    setCounter(counter+1);
    else
    setCounter(counter)
  }
  const removeCounter=()=>{
    // counter=counter-1;
    if(counter>0)
    setCounter(counter-1)
    else
    setCounter(counter)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeCounter}>remove value {counter}</button>
    </>
  )
}

export default App
