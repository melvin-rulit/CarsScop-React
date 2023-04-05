import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel';

export default class carusel_Block extends Component {

    render() {
        return (

            <Carousel>
                <Carousel.Item>
                    <img src="images/Carusel/car_1.jpg"/>

                    <Carousel.Caption>
                        <h3>Dodge Charger </h3>
                        <p>Chrysler LA 360 V8 (5,9 l).</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="images/Carusel/car_3.jpg"/>

                    <Carousel.Caption>
                        <h3>Dodge Charger </h3>
                        <p>Chrysler LA 360 V8 (5,9 l).</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="images/Carusel/car_2.jpg"/>

                    <Carousel.Caption>
                        <h3>Dodge Charger </h3>
                        <p>Chrysler LA 360 V8 (5,9 l).</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
