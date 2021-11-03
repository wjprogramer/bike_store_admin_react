import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand
} from 'reactstrap';

const LayoutContentFooter = (props) => (
    <footer className="footer">
        <Container fluid>
            <Row>
                <nav className="footer-nav">
                    <ul>
                        <li>
                            <a href="https://github.com/wjprogramer" target="_blank">Github</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/WJProgramer" target="_blank">Blog</a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target="_blank">Licenses</a>
                        </li>
                    </ul>
                </nav>
                <div className="ml-auto credits">
                    <div className="copyright">
                        @2020, made with by Jay
                    </div>
                </div>
            </Row>
        </Container>
    </footer>
);

LayoutContentFooter.layoutPartName = "content-footer";

export {
    LayoutContentFooter
};
