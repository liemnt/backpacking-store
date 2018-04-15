import React from 'react';

export default class SeftIntro extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div className="SelfIntro">
                <div className="SelfIntro-item">
                    <div className="SelfIntro-icon">
                        <img src="http://placehold.it/500x400" alt=""/>
                    </div>
                    <div className="SelfIntro-info">
                        <div className="SelfIntro-title">
                            Lorem ipsum
                        </div>
                        <div className="SelfIntro-description">
                            Lorem ipsum hendrerit finibus justo, a hendrerit massa varius in. Pellentesque sed est sodales, congue sapien
                        </div>
                    </div>
                </div>
                <div className="SelfIntro-item">
                    <div className="SelfIntro-icon">
                        <img src="http://placehold.it/500x400" alt=""/>
                    </div>
                    <div className="SelfIntro-info">
                        <div className="SelfIntro-title">
                            Lorem ipsum
                        </div>
                        <div className="SelfIntro-description">
                            Lorem ipsum hendrerit finibus justo, a hendrerit massa varius in. Pellentesque sed est sodales, congue sapien
                        </div>
                    </div>
                </div>
                <div className="SelfIntro-item">
                    <div className="SelfIntro-icon">
                        <img src="http://placehold.it/500x400" alt=""/>
                    </div>
                    <div className="SelfIntro-info">
                        <div className="SelfIntro-title">
                            Lorem ipsum
                        </div>
                        <div className="SelfIntro-description">
                            Lorem ipsum hendrerit finibus justo, a hendrerit massa varius in. Pellentesque sed est sodales, congue sapien
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}