import React, { Component } from 'react'



export default class Model extends Component {
    render() {
        let item = this.props;
        console.log(item);
        return (
            <div classname='pt-3'>
                <div className='row justify-content-evenly'>
                    <div className='model col-9 col-sm-5 col-lg-3 p-0'>
                        <div className='demo-glasses' style={{backgroundImage:`url(${item.url})`}}></div>
                        <div className='contents-title px-1 w-100'>
                            <h5 className='card-title text-primary pt-3'>{this.props.name}</h5>
                            <p className='card-text text-white py-3'>{item.desc}</p>
                        </div>
                    </div>
                    <div className='model col-9 col-sm-5 col-lg-3'>
                        <div className='test-glasses' style={{backgroundImage:`url(${item.url})`}}></div>
                    </div>
                </div>
            </div>
        )
    }
}
