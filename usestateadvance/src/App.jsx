import React, { useState } from 'react'

const App = () => {
  const [num,setNum]=useState({user:'Sarthak',age:20})
 function btnClicked(){
    const newNum={...num};
    newNum.user='Aman';
    newNum.age+=1
    setNum(newNum)
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click me please</button>
    </div>
  )
}

export default App
