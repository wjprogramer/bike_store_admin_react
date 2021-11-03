/**
 * Generated by Jay Wu
 */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import faker from 'faker/locale/en_US';

import {
    Container,
    FloatGrid as Grid,
    Card,
    Row,
    Col,
    CardBody,
} from '../../../components';
import { Link } from 'react-router-dom';

import {
    HeaderMain
} from '../../components/HeaderMain';
import {
    HeaderDemo
} from "../../components/HeaderDemo";

export class GridSystem extends React.Component {
    constructor(props) {
        super(props);

        this._lastLayout = this._generateLayout();

        this.state = {
            layouts: this._lastLayout,
            compactType: 'vertical',
            fluid: false,
            texts: this._generateTexts(this._lastLayout)
        }

        this.generateLayoutHandler = this.generateLayoutHandler.bind(this);
        this.resetLayoutHandler = this.resetLayoutHandler.bind(this);
    }

    generateLayoutHandler() {
        this._lastLayout = this._generateLayout();

        this.setState({
            layouts: this._lastLayout,
            texts: this._generateTexts(this._lastLayout)
        });
    }

    resetLayoutHandler() {
        this.setState({
            layouts: this._lastLayout
        });
    }

    selectCompactType(compactType) {
        this.setState({ compactType });
    }

    selectFluid(fluid) {
        this.setState({ fluid });
    }

    render() {
        const { compactType, fluid, texts } = this.state;

        let cardTextStyle = {
            color: "#e83e8c",
        };

        let cardStyle = {
            borderRadius: "12px",
            boxShadow: "0 6px 10px -4px rgba(0,0,0,.15)",
            backgroundColor: "#fff",
            color: "#252422",
            marginBottom: "20px",
            position: "relative",
            border: "0",
            transition: "transform .3s cubic-bezier(.34,2,.6,1),box-shadow .2s ease",
        };

        return (
            <React.Fragment>
                <Container fluid={ fluid }>
                    <HeaderMain title="Grid System" className="mb-4 mt-4" />
                    <p>
                        <strong>Bootstrap 4 Grid Sysyem</strong>
                    </p>
                    <p>
                        用法：<code>xs="6"</code>、<code>xs=&#123;6&#125;</code>
                    </p>
                    { /* START Header 1 */}
                    <Row>
                        <Col lg={ 12 }>
                            <HeaderDemo 
                                no={1} 
                                title="SM Grid" 
                                subTitle="Collapsed at 576px"
                            />
                        </Col>
                    </Row>
                    { /* END Header 1 */}
                    { /* START Section 1 */}
                    <Row>
                        <Col sm={ 4 }>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-sm-4</CardBody>
                            </Card>
                        </Col>
                        <Col sm={ 4 }>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-sm-4</CardBody>
                            </Card>
                        </Col>
                        <Col sm={ 4 }>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-sm-4</CardBody>
                            </Card>
                        </Col>
                    </Row>
                    { /* END Section 1 */}
                    { /* START Header 2 */}
                    <Row>
                        <Col lg={ 12 }>
                            <HeaderDemo 
                                no={2} 
                                title="MD Grid" 
                                subTitle="Collapsed at 768px"
                            />
                        </Col>
                    </Row>
                    { /* END Header 2 */}
                    { /* START Section 2 */}
                    <Row>
                        <Col md={ 4 }>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-md-4</CardBody>
                            </Card>
                        </Col>
                        <Col md={ 4 }>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-md-4</CardBody>
                            </Card>
                        </Col>
                        <Col md={ 4 }>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-md-4</CardBody>
                            </Card>
                        </Col>
                    </Row>
                    { /* END Section 2 */}
                    { /* START Header 3 */}
                    <Row>
                        <Col lg={ 12 }>
                            <HeaderDemo 
                                no={3} 
                                title="LG Grid" 
                                subTitle="Collapsed at 992px"
                            />
                        </Col>
                    </Row>
                    { /* END Header 3 */}
                    { /* START Section 3 */}
                    <Row>
                        <Col lg={ 4 }>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-lg-4</CardBody>
                            </Card>
                        </Col>
                        <Col lg={ 4 }>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-lg-4</CardBody>
                            </Card>
                        </Col>
                        <Col lg={ 4 }>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-lg-4</CardBody>
                            </Card>
                        </Col>
                    </Row>
                    { /* END Section 3 */}
                    { /* START Header 4 */}
                    <Row>
                        <Col lg={ 12 }>
                            <HeaderDemo 
                                no={4} 
                                title="XL Grid" 
                                subTitle="Collapsed at 1200px"
                            />
                        </Col>
                    </Row>
                    { /* END Header 4 */}
                    { /* START Section 4 */}
                    <Row>
                        <Col xl="4">
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-xl-4</CardBody>
                            </Card>
                        </Col>
                        <Col xl="4">
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-xl-4</CardBody>
                            </Card>
                        </Col>
                        <Col xl="4">
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-xl-4</CardBody>
                            </Card>
                        </Col>
                    </Row>
                    { /* END Section 4 */}
                    { /* START Header 5 */}
                    <Row>
                        <Col lg={ 12 }>
                            <HeaderDemo 
                                no={5} 
                                title="Mixed Grid" 
                                subTitle="Showing different sizes on different screens"
                            />
                        </Col>
                    </Row>
                    { /* END Header 5 */}
                    { /* START Section 5 */}
                    <Row>
                        <Col sm={6} lg={3}>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-sm-6 col-lg-3</CardBody>
                            </Card>
                        </Col>
                        <Col sm={6} lg={3}>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-sm-6 col-lg-3</CardBody>
                            </Card>
                        </Col>
                        <Col sm={6} lg={3}>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-sm-6 col-lg-3</CardBody>
                            </Card>
                        </Col>
                        <Col sm={6} lg={3}>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-sm-6 col-lg-3</CardBody>
                            </Card>
                        </Col>
                    </Row>
                    { /* END Section 5 */}
                    { /* START Header 6 */}
                    <Row>
                        <Col lg={ 12 }>
                            <HeaderDemo 
                                no={6} 
                                title="Offset Grid" 
                                subTitle="Adding some space when needed"
                            />
                        </Col>
                    </Row>
                    { /* END Header 6 */}
                    { /* START Section 6 */}
                    <Row>
                        <Col md={ 3 }>
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-md-3</CardBody>
                            </Card>
                        </Col>
                        <Col md={ 3 } className="ml-auto">
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-md-3 ml-auto</CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 4 } className="ml-auto mr-auto">
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>ml-auto mr-auto col-md-4</CardBody>
                            </Card>
                        </Col>
                        <Col md={ 4 } className="ml-auto mr-auto">
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>ml-auto mr-auto col-md-4</CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 } className="ml-auto mr-auto">
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-md-6 ml-auto mr-auto</CardBody>
                            </Card>
                        </Col>
                    </Row>
                    { /* END Section 6 */}


                    <hr />

                    { /* START Other */}
                    <Row>
                        <Col lg={ 12 }>
                            <p>
                                <a href="https://reactstrap.github.io/components/layout/" target="_blank" className="text-primary">Reactstrap 官網範例</a>
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="3">
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-3</CardBody>
                            </Card>
                        </Col>
                        <Col xs="auto">
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-auto - variable width content</CardBody>
                            </Card>
                        </Col>
                        <Col xs="3">
                            <Card type="border" color="dark" className="mb-4" style={cardStyle}>
                                <CardBody style={cardTextStyle}>col-3</CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">col-6</Col>
                        <Col xs="6">col-6</Col>
                    </Row>
                    <Row>
                        <Col xs="6" sm="4">col-6 col-sm-4</Col>
                        <Col xs="6" sm="4">col-6 col-sm-4</Col>
                        <Col sm="4">col-sm-4</Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 6, order: 2, offset: 1 }}>col-sm-6 .order-sm-2 .offset-sm-1</Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>col-sm-12 col-md-6 .offset-md-3</Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>col-sm-auto .offset-sm-1</Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>col-sm-auto .offset-sm-1</Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }

    _generateLayout = (rowsCount = 3) => {
        const TOTAL_ROWS = 12;
        const HEIGHT = 5;
        let output = {};

        for (let i = 0; i < rowsCount; i++) {
            let availableRow = TOTAL_ROWS;
            while (availableRow > 0) {
                const newCol = availableRow < TOTAL_ROWS ? availableRow : 
                    _.random(3, 9);

                availableRow -= newCol;
                output = {
                    ...output,
                    [uuidv4()]: { md: newCol, h: HEIGHT }
                }
            }
        }

        return output;
    }

    _generateTexts = (layouts) =>
        _.mapValues(layouts, () => ({
            title: faker.commerce.productName(),
            desc: faker.lorem.paragraph()
        }))
}