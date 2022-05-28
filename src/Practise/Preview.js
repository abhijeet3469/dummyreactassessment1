import React from 'react'
import './Style.css'
import { useState } from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
const Preview = () => {
  const [first, setfirst] = useState(false)
  const [second, setsecond] = useState(false)
  return (
    <>
      <h1 className='head'>Styling using Functional and ClassComponent</h1>
      <button className='but1' onClick={()=>setfirst(true)}>To see Styling in functional component</button>
      <button className='but2' onClick={()=>setsecond(true)}>To see Styling in class component</button>
      {first&&<FunctionalComponent/>}
      {second&&<ClassComponent/>}
    </>
  )
}

export default Preview