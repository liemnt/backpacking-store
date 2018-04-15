import React from 'react';
import Swiper from 'react-id-swiper';
export default class BackgroundSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <Swiper
                    // slideClass="BackgroundSlider-slide "
                    containerClass="BackgroundSlider">
                    <div>

                        <img className="BackgroundSlider-img" src="https://www.rei.com/adventures/assets/adventures/images/trip/core/northamerica/gsb_hero" alt=""/>
                    </div>
                    <div>

                        <img className="BackgroundSlider-img"  src="https://www.rei.com/adventures/assets/adventures/images/trip/core/northamerica/whb_hero" alt=""/>
                    </div>
                    {/*<div>Slide 1</div>*/}
                    {/*<div>Slide 2</div>*/}
                    {/*<div>Slide 3</div>*/}
                    {/*<div>Slide 4</div>*/}
                    {/*<div>Slide 5</div>*/}
                </Swiper>

        )
    }
}