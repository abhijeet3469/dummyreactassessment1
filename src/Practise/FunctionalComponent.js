// import React from 'react'
// import './Style.css'
// import { useState } from 'react'
//   // useState is replacement for state in class component.
// const FunctionalComponent = () => {
//   const [first, setfirst] = useState('Abhijeet')
//   //    variable, function   var first = 'Abhijeet'
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//         <h1>Styling using Functional and Class Component</h1>
//         <button className='but1' onClick={()=>{setfirst('January')}}>{first}</button>
//         <button className='button' onClick={()=>{setCount(count+1)}}>Increment</button>
//         <button className='button' onClick={()=>{setCount(count-1)}}>Decreament</button>
//         <button className='button' onClick={()=>{setCount(0)}}>Reset</button>
//         <h1 className='count'>Numbering = {count}</h1>
//     </div>
//   )
// }

// export default FunctionalComponent
// To see styling in functional component

// -----------------------------Conditional rendering---------------------------------------------------------------

// now we are learning conditional rendering

import React from 'react'
import './Style.css'
const FunctionalComponent = () => {
    
  return (
    <div className='container'>
    <h1>This is created using functional Component</h1>
    <p>This is done using external CSS</p>
    <p>This is done using inline CSS</p>
    </div>
  )
}

export default FunctionalComponent