import React, { Component } from 'react'
import BgColor from './components/BgColor'
import Reacts from './components/Reacts'
import Phython from './components/Phython'
import Php from './components/Php'
import Java from './components/Java'




export default class App extends Component {
  render() {
    return (
      <div>

      <BgColor />
      <Reacts />
      <Phython />
      <Php/>
      <Java />
      </div>
    )
  }
}