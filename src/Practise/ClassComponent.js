// import React, { Component } from 'react'
// import './Style.css'

// export default class ClassComponent extends Component {

// state = {
//   name: 'Abhijeet'
// }

//   render() {
//     return (
//           <button className='but2'>To see styling in class component</button>
//           // {/* <button className='but2'>{this.state.name}</button>  */}
//           // using state in class component
          
//     )
//   }
// }

// ----------------------------Conditional Rendering-------------------------------------------------------

// now we are learning conditional rendering

import React, { Component } from 'react'
import './Style.css'

export default class ClassComponent extends Component {

  render() {
    return (
        <div className='container2'>
    <h1>This is created using functional Component</h1>
    <p>This is done using external CSS</p>
    <p>This is done using inline CSS</p>
    </div>
    )
  }
}