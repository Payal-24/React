import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-4 p-2'>
     {props.users.map(function(elem,idx){
        return <RightCard key={idx} color={elem.color}id={idx} img={elem.img} tag={elem.tag}/>
     })}
    </div>
  )
}

export default RightContent
