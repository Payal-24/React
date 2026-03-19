import React from 'react'

const Cards = (props) => {
  return (
    <div className="Cards">
      <div className="Cards">
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, excepturi? Nihil magnam in modi, consectetur alias corporis! Recusandae, beatae. Deserunt porro iure tempore sequi quaerat necessitatibus sed quidem, laudantium facilis!</p>
        <button>view profile</button>
      </div>
    </div>
  )
}

export default Cards
