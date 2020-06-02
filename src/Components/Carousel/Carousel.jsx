import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
 
class GYFOCarousel extends Component {
    render() {
        return (
            <Carousel>
                 <div>
                    <img src="https://i.imgur.com/RCeJlTo.jpg" alt='gyfo0'/>
                    <p className="legend">Legend 0</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/v9HnMLO.jpg" alt='gyfo1'/>
                    <img src='https://i.imgur.com/95ByChg.jpg' alt='gyfo2'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/Lw6lxUe.jpg" alt='gyfo3'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src='https://i.imgur.com/95ByChg.jpg' alt='gyfo1'/>
                    <img src="https://i.imgur.com/v9HnMLO.jpg" alt='gyfo2'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default GYFOCarousel;

