import React from 'react';
export default class Product extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div className="Product">
                <div className="Product-wrapImage">
                    <img className="Product-img" src="http://placehold.it/800x600" alt=""/>
                </div>
                <div className="Product-price">
                    $ 5,000
                </div>
                <div className="Product-name">
                    Áo chống nắng Ninja Lead
                </div>
                <div className="Product-add">
                    Thêm vào giỏ
                </div>
            </div>
        )
    }
}