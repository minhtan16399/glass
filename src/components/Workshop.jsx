import React, { Component, useState } from 'react';

import customData from './../data/dataGlasses.json';


export default class Workshop extends Component {
  state = {
    id: '',
    name: '',
    url: '',
    desc: '',
  };
  renderListButton = () => {
    let createButton = customData.map((product, index) => {
      let newItem = {
        id: product.id,
        name: product.name,
        url: product.url,
        desc: product.desc,
      };
      // console.log(state);
      return <button key={index} className='btn btn-outline-dark mx-2 my-2'>
        <div className='btn-icon' style={{ backgroundImage: `url(${product.url})` }} onClick={() => {
          this.setState(newItem);
        }}></div>
      </button>
    });
    return createButton;
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div classname='pt-3'>
          <div className='row justify-content-evenly'>
            <div className='model col-9 col-sm-5 col-lg-3 p-0'>
              <div className='demo-glasses' style={{ backgroundImage: `url(${this.state.url})` }}></div>
              <div className='contents-title px-1 w-100'>
                <h5 className='card-title text-primary pt-3'>{this.state.name}</h5>
                <p className='card-text text-white py-3'>{this.state.desc}</p>
              </div>
            </div>
            <div className='model col-9 col-sm-5 col-lg-3'>
              <div className='test-glasses' style={{ backgroundImage: `url(${this.state.url})` }}></div>
            </div>
          </div>
        </div>        <div className='py-5'>
          <div className='show-glasses bg-white mx-auto w-75'>
            <div className='container text-start mx-auto'>
              {this.renderListButton()}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

