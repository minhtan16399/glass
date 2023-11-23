import React, { Component } from 'react'
import Header from './Header'
import Workshop from './Workshop'

export default class Layouts extends Component {
  render() {
    return (
      <div className='filter'>
        <Header/>
        <Workshop/>
      </div>
    )
  }
}
