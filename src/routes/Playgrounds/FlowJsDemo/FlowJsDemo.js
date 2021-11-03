import React, { useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

import {
  HeaderDemo
} from "../../components/HeaderDemo";

// @flow
function foo(x: number | boolean): number | string {
  if (typeof x === 'number') {
    return x + 10
  }
  return 'x is boolean'
}
/* @flow */

const FlowJsDemo = (props) => {
  return <React.Fragment>
    <Container>
        <Row>
        <Col lg={ 12 }>
          <HeaderDemo 
            no={1} 
            title="Flow.js" 
            subTitle="Flow.js demo 請看程式碼"
          />
        </Col>
      </Row>
    </Container>
  </React.Fragment>;
}

export default FlowJsDemo;