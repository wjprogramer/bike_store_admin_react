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

import JayDemo1Container2 from '../../../containers/JayDemo/JayDemo1Container2';

const cardText = ({ cardNo, description }) => (
  <CardText>
      <span className="mr-2 text-muted">
        #{ cardNo }
      </span> 
      <br /> 
      { description }
  </CardText>
);

const JayDemo1 = (props) => {
    const { data, user } = props;
    useEffect(() => {
      props.actions.getUser();
      props.actions.getData();
    }, []);
  
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col lg={ 12 }>
              <Card className="mb-3">
                <CardHeader tag="h6">
                  Demo1
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    使用 Container
                  </CardTitle>
                  <hr />
                  { 
                    cardText({ 
                      cardNo: "1.01", 
                      description: JSON.stringify(data) + "\n" + JSON.stringify(user)
                    }) 
                  } 
                </CardBody>
              </Card>
            </Col>
            <Col lg={ 12 }>
              <Card className="mb-3">
                <CardHeader tag="h6" className="bg-warning text-white">
                  Demo2
                </CardHeader>
                <CardBody>
                  <JayDemo1Container2 />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  };

export default JayDemo1;
