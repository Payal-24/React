import React from 'react'
import { useState } from 'react';

const App = () => {
    const [title,setTitle]=useState('');
    const [details,setdetails]=useState('');
    const [task,setTask]=useState([]);

    const submitHandler=(e)=>{
    e.preventDefault();
   const cptask=[...task];
    cptask.push({title,details})
   setTask(cptask)
    setTitle('')
     setdetails('')
  }


  return (
    <div className='min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-200'>
      <div className='flex flex-col w-full'>
        <h1 className='font-mono italic font-extrabold text-6xl underline mt-10 mb-8 ml-40 drop-shadow-lg text-yellow-700 tracking-wide'>Notes Application</h1>
        <div className='flex flex-row justify-center items-start gap-16 w-full'>
          {/* Editor Form */}
          <form onSubmit={(e)=>{
            submitHandler(e);
          }} className='flex flex-col items-center bg-white/80 border-4 border-yellow-400 shadow-2xl p-10 rounded-3xl w-full max-w-xl'>
            <input className='h-12 w-full text-center border-2 border-yellow-400 rounded-xl font-bold mt-5 mb-6 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition' value={title} onChange={(e)=>{
              setTitle(e.target.value)
            }} type="text" placeholder='Enter Notes Heading'/>
            <textarea className='border-2 border-yellow-400 rounded-xl font-bold w-full h-32 p-3 text-base mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition' value={details} onChange={(e)=>{
              setdetails(e.target.value)
            }} placeholder='Enter Details' name="" id=""/>
            <button className='bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-5 py-3 rounded-xl w-full mt-2 shadow-md transition'>Add Note</button>
          </form>
       
          <div className='flex flex-col items-start w-full max-w-5xl'>
            <h1 className='text-yellow-700 font-extrabold text-3xl px-5 py-2 mb-6 text-left tracking-wide drop-shadow'>Your Notes</h1>
            <div className='w-full flex flex-wrap gap-10 justify-start'>
                {task.map(function(elem, idx) {
                  return (
                    <div
                      key={idx}
                      className='relative rounded-3xl min-h-[470px] min-w-[270px] max-w-xs p-0 flex flex-col items-start justify-start shadow-2xl border-2 border-yellow-300 overflow-hidden hover:scale-105 transition-transform duration-200'
                      style={{
                        backgroundImage: 'url(https://i.pinimg.com/1200x/8e/a7/90/8ea790c6bed10041df99821cc1f06970.jpg)',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }}
                    >
                      <button
                        className='absolute top-3 right-3 bg-red-500 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10 transition'
                        title='Delete Note'
                        onClick={() => {
                          const newTasks = [...task];
                          newTasks.splice(idx, 1);
                          setTask(newTasks);
                        }}
                      >
                        &times;
                      </button>
                      <div className='w-full px-10 pb-8' style={{paddingTop: '110px'}}>
                        <h3 className='font-extrabold text-2xl mt-1 text-yellow-900 drop-shadow mb-2 break-words'>{elem.title}</h3>
                        <p className='text-yellow-900 font-semibold drop-shadow break-words'>{elem.details}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
            </div>
          </div>
        </div>
      </div>
  
  )
}

export default App
