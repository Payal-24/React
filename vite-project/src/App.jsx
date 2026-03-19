import React from 'react'
import Cards from './components/cards.jsx'

const App = () => {
  return (
    <>
    {/* <div id='parent'>
      <h1 id='child1'>hello hie my name is payal</h1>
      <h1 id='child2'>hie kaise ho app </h1>
    </div>
    <div id='chacha'>
      <h1 id='child1'>hello hie my name is payal</h1>
      <h1 id='child2'>hie kaise ho app </h1>
    </div> */}
    <Cards user='Aman' age ={18}/>
    <Cards user='payal' age={5}/>  
    </>
    
    
  )
}

export default App
