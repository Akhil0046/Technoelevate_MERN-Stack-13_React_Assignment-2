import React, { Component } from 'react'
import WithCounter from './WithCounter'

 class Reacts extends Component {
    
    render() {
        let {count, increment} = this.props
 
         return (
             
             <div className="main-div">
                  <div className="div-column">
                         <span>{count}</span>
                         <span>React</span>
                         <button onClick={increment}>vote here</button>
                 </div>
                 
             </div>
         )
     }
}
export default WithCounter(Reacts)