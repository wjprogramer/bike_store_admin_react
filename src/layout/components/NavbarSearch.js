import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    NavItem,
    NavLink,
    Input,
    InputGroup,
    InputGroupAddon
} from './../../components';

const NavbarSearch = (props) => (
    <NavItem { ...props }>
        <InputGroup>
            <Input 
                placeholder="Search" 
                addon
                style={{ outline: "none", borderRightWidth: "0px" }}
            />
            <InputGroupAddon addonType="append" style={{ borderLeftWidth: "0px" }}>
                <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroupAddon>
        </InputGroup>
        
    </NavItem>
);
NavbarSearch.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarSearch };
