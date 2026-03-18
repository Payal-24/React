import React from 'react'
import {MoveUpRight} from 'lucide-react'
const RightCardContent = (props) => {
  return (
   
      <div className='absolute top-0 left-0 h-full w-full p-8'>
      
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center absolute top-8 left-8'>{props.id+1}</h2>

        <p className='text-shadow-2xs text-xl leading-relaxed text-white absolute left-8 right-8 bottom-30'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate sunt reiciendis labore necessitatibus est?
        </p>
        
        <button style={{backgroundColor:props.color}} className='text-white font-medium px-5 py-2 rounded-full absolute bottom-8 left-8'>{props.tag}</button>
        <button className='text-white font-medium px-2 py-2 rounded-full absolute bottom-8 right-8'>
          <MoveUpRight/>
        </button>
     </div>
    
  )
}

export default RightCardContent
