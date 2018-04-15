import React from 'react';
import {Product} from '../../components/components.layouts/index'
export default class ListProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    renderProduct = () =>{
       return [1,2,3,4].map(item=>{
            return (
                <div className="ListProduct-item">
                    <Product/>
                </div>
            )
        })
    }
    render(){
        return (
            <div className="ListProduct">
                {
                    this.renderProduct()
                }
            </div>
        )
    }
}