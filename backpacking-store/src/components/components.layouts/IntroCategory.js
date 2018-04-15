import React from 'react';

export default class  extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div className="IntroCategory">
                <div className="IntroCategory-item">
                    <img src="http://placehold.it/500x300" alt=""/>
                </div>
                <div className="IntroCategory-item">
                    <img src="http://placehold.it/500x300" alt=""/>
                </div>
                <div className="IntroCategory-item">
                    <img src="http://placehold.it/500x300" alt=""/>
                </div>
            </div>
            
        )
    }
}