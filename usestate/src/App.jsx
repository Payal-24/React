import React, {useState} from 'react'
const App = () => {
  const [count,setCount]=useState(2);
  function changeincrease(){
    setCount(count+1)
  }
   function changedecrease(){
    setCount(count-1);
  }
  function jumpfive(){
    setCount(count+5);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={changeincrease}>Increases</button>
      <button onClick={changedecrease}>Decreases</button>
      <button onClick={jumpfive}>jump by five</button>
    </div>
  )
}
export default App
