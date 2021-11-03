import React, { useState } from 'react';

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

import CarouselDemo1 from "./demo/Demo1";
import CarouselDemo2 from "./demo/Demo2";
import CarouselDemo3 from "./demo/Demo3";

const Carousels = (props) => {

  return (
    <React.Fragment>
      <Container>
        <HeaderMain 
          title="Carousel"
          className="mb-5 mt-4"
        />

        <HeaderDemo 
            no={1} 
            title="Basic" 
            className="mt-5"
            subTitle={(
                <React.Fragment>
                    
                </React.Fragment>
            )}
        />
        <CarouselDemo1 />
        <hr />

        <HeaderDemo 
            no={2} 
            title="Uncontrolled" 
            className="mt-5"
            subTitle={(
                <React.Fragment>
                    
                </React.Fragment>
            )}
        />
        <CarouselDemo2 />
        <hr />

        <HeaderDemo 
            no={3} 
            title="Using a tag and classname" 
            className="mt-5"
            subTitle={(
                <React.Fragment>
                    
                </React.Fragment>
            )}
        />
        <CarouselDemo3 />
        <hr />



      </Container>
    </React.Fragment>
  );
}

export default Carousels;