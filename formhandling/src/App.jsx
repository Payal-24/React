import React from 'react'

const App = () => {
  // Arrowfunction
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("form is submit");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter you name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App