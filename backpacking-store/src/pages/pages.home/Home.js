import React from 'react';
import {BackgroundSlider, IntroCategory, Label,ListProduct,SelfIntro} from '../../components/components.layouts/index'
import {getStaticImage} from "../../utils/utils";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
           <div>
               <div className="Home">
                   <img className="Home-coverImg" src={getStaticImage("Artboard.png")} alt=""/>
                   <div className="Home-content">
                       <div className=" container">
                           <IntroCategory/>
                           <Label title={"Sản phẩm mới"}/>
                           <ListProduct/>
                           <SelfIntro/>
                           <Label title={"Sản phẩm bán chạy"}/>
                           <ListProduct/>
                           <Label title={"Sản phẩm đặc biệt"}/>
                           <ListProduct/>

                       </div>

                   </div>

               </div>
               <BackgroundSlider/>
           </div>

        )
    }
}