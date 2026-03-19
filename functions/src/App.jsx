import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('button is clicked')
  }
   function inputChanging(){
    console.log('User is Typing');
  }
  return (
    <div>
      {/* <h1 className='text-4xl ml-25 mt-25 font-bold '>Hello, Payal</h1>
      <button onClick={btnClicked} className='text-4xl bg-red-600 px-5 py-5 ml-22 mt-9 rounded-3xl text-white'>change user </button>
      <button onClick={()=>{
        console.log('Button Clicked');
      }}></button> */}
      <div>
      <input onChange={inputChanging}type="text" placeholder='Enter Name '/>    
      </div>
    
    </div>
  )
}

export default App
