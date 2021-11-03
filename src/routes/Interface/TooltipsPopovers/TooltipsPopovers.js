import React from 'react';
import faker from 'faker/locale/en_US';

import { 
    Container,
    Row,
    Col,
    Button,
    Card,
    CardTitle,
    CardBody,
    CardText,
    UncontrolledTooltip,
    UncontrolledPopover,
    PopoverHeader,
    PopoverBody
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";

import RepositioningTooltipDemo1 from "./demo/RepositioningTooltipDemo1";

const TooltipsPopovers = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Tooltips & Popovers"
                className="mb-5 mt-4"
            />
            { /* START Header 1 */}
            <Row> 
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Tooltips Examples" 
                        subTitle={(
                            <React.Fragment>
                                A rendered modal with header, body, and set of actions in the footer.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                           <CardText>
                                Tight pants next level keffiyeh <a href="#" id="UncontrolledTooltip1">you probably</a> haven't heard of them. 
                                Photo booth beard raw denim letterpress vegan messenger bag stumptown. 
                                Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american 
                                apparel <a href="#" id="UncontrolledTooltip2">have a</a> terry richardson vinyl chambray. Beard stumptown, cardigans 
                                banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko 
                                mcsweeney's cleanse vegan chambray. A really ironic artisan <a href="#" id="UncontrolledTooltip3">whatever keytar</a>, 
                                scenester farm-to-table banksy Austin <a href="#" id="UncontrolledTooltip4">twitter handle</a> freegan cred raw denim 
                                single-origin coffee viral.
                           </CardText>
                        </CardBody>
                    </Card>
                    <UncontrolledTooltip placement="top" target="UncontrolledTooltip1">
                        Default Tooltip
                    </UncontrolledTooltip>
                    <UncontrolledTooltip placement="top" target="UncontrolledTooltip2">
                        Another Tooltip
                    </UncontrolledTooltip>
                    <UncontrolledTooltip placement="top" target="UncontrolledTooltip3">
                        Another one here too
                    </UncontrolledTooltip>
                    <UncontrolledTooltip placement="top" target="UncontrolledTooltip4">
                        The last tip!
                    </UncontrolledTooltip>
                </Col>
            </Row>
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardText>
                                <code>autohide={'{'}false{'}'}</code><br />
                                Sometimes you need to allow users to select text within a <a href="#" id="UncontrolledTooltip5">tooltip</a>.
                            </CardText>
                        </CardBody>
                    </Card>
                    <UncontrolledTooltip autohide={false} placement="top" target="UncontrolledTooltip5">
                        The last tip!
                    </UncontrolledTooltip>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="text-center mb-3">
                                Repositioning Tooltips
                                <span className="small ml-1 text-muted">
                                    #1.03
                                </span>
                            </CardTitle>
                            <CardText>
                                If you need to reposition a tooltip due to content changes or target placement changes, use the <code>scheduleUpdate</code> function to manually reposition it. This function is exposed as a render prop for <code>children</code>.
                            </CardText>
                            <RepositioningTooltipDemo1 />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 1 */}
            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Tooltips Demos" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Four options are available: <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code> aligned.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 3 }>
                    <Card className="mb-3">
                        <CardBody className="text-center">
                            <CardTitle tag="h6" className="text-center mb-3">
                                Tooltip: Top
                                <span className="small ml-1 text-muted">
                                    #2.01
                                </span>
                            </CardTitle>
                            <Button className="text-center" outline color="secondary" id="UncontrolledTooltipTop">
                                Show
                            </Button>
                            <UncontrolledTooltip placement="top" target="UncontrolledTooltipTop">
                                Tooltip Top
                            </UncontrolledTooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 3 }>
                    <Card className="mb-3">
                        <CardBody className="text-center">
                            <CardTitle tag="h6" className="text-center mb-3">
                                Tooltip: Right
                                <span className="small ml-1 text-muted">
                                    #2.02
                                </span>
                            </CardTitle>
                            <Button className="text-center" outline color="secondary" id="UncontrolledTooltipRight">
                                Show
                            </Button>
                            <UncontrolledTooltip placement="right" target="UncontrolledTooltipRight">
                                Tooltip Right
                            </UncontrolledTooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 3 }>
                    <Card className="mb-3">
                        <CardBody className="text-center">
                            <CardTitle tag="h6" className="text-center mb-3">
                                Tooltip: Bottom
                                <span className="small ml-1 text-muted">
                                    #2.03
                                </span>
                            </CardTitle>
                            <Button className="text-center" outline color="secondary" id="UncontrolledTooltipBottom">
                                Show
                            </Button>
                            <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipBottom">
                                Tooltip Bottom
                            </UncontrolledTooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 3 }>
                    <Card className="mb-3">
                        <CardBody className="text-center">
                            <CardTitle tag="h6" className="text-center mb-3">
                                Tooltip: Left
                                <span className="small ml-1 text-muted">
                                    #2.03
                                </span>
                            </CardTitle>
                            <Button className="text-center" outline color="secondary" id="UncontrolledTooltipLeft">
                                Show
                            </Button>
                            <UncontrolledTooltip placement="left" target="UncontrolledTooltipLeft">
                                Tooltip Left
                            </UncontrolledTooltip>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 2 */}
            { /* START Header 3 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={3} 
                        title="Popovers Examples" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Four options are available: <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code> aligned.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                <Col lg={ 3 }>
                    <Card className="mb-3">
                        <CardBody className="text-center">
                            <CardTitle tag="h6" className="text-center mb-3">
                                Popover: Top
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            <Button className="text-center" outline color="secondary" id="UncontrolledPopoverTop">
                                Show
                            </Button>
                            <UncontrolledPopover placement="top" target="UncontrolledPopoverTop">
                                <PopoverHeader>
                                    Top Popover
                                </PopoverHeader>
                                <PopoverBody>
                                    { faker.lorem.paragraph() }
                                </PopoverBody>
                            </UncontrolledPopover>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 3 }>
                    <Card className="mb-3">
                        <CardBody className="text-center">
                            <CardTitle tag="h6" className="text-center mb-3">
                                Popover: Right
                                <span className="small ml-1 text-muted">
                                    #3.02
                                </span>
                            </CardTitle>
                            <Button className="text-center" outline color="secondary" id="UncontrolledPopoverRight">
                                Show
                            </Button>
                            <UncontrolledPopover placement="right" target="UncontrolledPopoverRight">
                                <PopoverHeader>
                                    Right Popover
                                </PopoverHeader>
                                <PopoverBody>
                                    { faker.lorem.paragraph() }
                                </PopoverBody>
                            </UncontrolledPopover>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 3 }>
                    <Card className="mb-3">
                        <CardBody className="text-center">
                            <CardTitle tag="h6" className="text-center mb-3">
                                Popover: Bottom
                                <span className="small ml-1 text-muted">
                                    #3.03
                                </span>
                            </CardTitle>
                            <Button className="text-center" outline color="secondary" id="UncontrolledPopoverBottom">
                                Show
                            </Button>
                            <UncontrolledPopover placement="bottom" target="UncontrolledPopoverBottom">
                                <PopoverHeader>
                                    Bottom Popover
                                </PopoverHeader>
                                <PopoverBody>
                                    { faker.lorem.paragraph() }
                                </PopoverBody>
                            </UncontrolledPopover>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 3 }>
                    <Card className="mb-3">
                        <CardBody className="text-center">
                            <CardTitle tag="h6" className="text-center mb-3">
                                Popover: Left
                                <span className="small ml-1 text-muted">
                                    #3.03
                                </span>
                            </CardTitle>
                            <Button className="text-center" outline color="secondary" id="UncontrolledPopoverLeft">
                                Show
                            </Button>
                            <UncontrolledPopover placement="left" target="UncontrolledPopoverLeft">
                                <PopoverHeader>
                                    Left Popover
                                </PopoverHeader>
                                <PopoverBody>
                                    { faker.lorem.paragraph() }
                                </PopoverBody>
                            </UncontrolledPopover>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 3 */}
            { /* START Header 4 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={4} 
                        title="Popovers: Trigger" 
                        className="mt-5"
                        subTitle={(
                            <React.Fragment>
                                Four options are available: <code>focus</code>, <code>click</code>, <code>legacy</code><br />
                                寫法是這樣沒錯，但可能是專案的 reactstrap 的版本仍不支援 
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>
            { /* END Header 4 */}
            { /* START Section 4 */}
            <Row>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody className="text-center">
                            <CardTitle tag="h6" className="text-center mb-3">
                                Popover: Focus
                                <span className="small ml-1 text-muted">
                                    #4.01
                                </span>
                            </CardTitle>
                            <Button className="text-center" outline color="secondary" id="UncontrolledPopoverFocus">
                                Show
                            </Button>
                            <UncontrolledPopover trigger="focus" placement="top" target="UncontrolledPopoverFocus">
                                <PopoverHeader>
                                    Top Popover
                                </PopoverHeader>
                                <PopoverBody>
                                    { faker.lorem.paragraph() }
                                </PopoverBody>
                            </UncontrolledPopover>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody className="text-center">
                            <CardTitle tag="h6" className="text-center mb-3">
                                Popover: Click
                                <span className="small ml-1 text-muted">
                                    #4.02
                                </span>
                            </CardTitle>
                            <Button className="text-center" outline color="secondary" id="UncontrolledPopoverClick">
                                Show
                            </Button>
                            <UncontrolledPopover trigger="focus" placement="top" target="UncontrolledPopoverClick">
                                <PopoverHeader>
                                    Right Popover
                                </PopoverHeader>
                                <PopoverBody>
                                    { faker.lorem.paragraph() }
                                </PopoverBody>
                            </UncontrolledPopover>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 4 }>
                    <Card className="mb-3">
                        <CardBody className="text-center">
                            <CardTitle tag="h6" className="text-center mb-3">
                                Popover: Legacy
                                <span className="small ml-1 text-muted">
                                    #4.03
                                </span>
                            </CardTitle>
                            <Button className="text-center" outline color="secondary" id="UncontrolledPopoverLegacy">
                                Show
                            </Button>
                            <UncontrolledPopover trigger="legacy" placement="top" target="UncontrolledPopoverLegacy">
                                <PopoverHeader>
                                    Bottom Popover
                                </PopoverHeader>
                                <PopoverBody>
                                    { faker.lorem.paragraph() }
                                </PopoverBody>
                            </UncontrolledPopover>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            { /* END Section 4 */}
        </Container>
    </React.Fragment>
);

export default TooltipsPopovers;