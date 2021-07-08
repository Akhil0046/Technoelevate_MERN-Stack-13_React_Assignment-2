import React, { Component } from 'react'
import './Style.css'
import WithCounter from './WithCounter';
 class Home extends Component {
    
    
    myfunction= ()=> {
    document.body.style.backgroundColor=document.getElementById("background").value;
    document.getElementById("h1").style.color="white"


    }
        

    
    

    render() {
        

        return (
            <React.Fragment>
                <select name="" id="background" onChange={this.myfunction}>
                    <option value="" selected disabled hidden > Select Background Color </option>
                    <option value="orange">Orange</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                </select>
                <h1 id="h1">VOTE YOUR LANGUAGE</h1>
                 
                
            </React.Fragment>
        )
    }
}
export default WithCounter(Home)