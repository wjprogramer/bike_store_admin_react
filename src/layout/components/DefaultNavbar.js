import React from 'react';
import { Link } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem,
    SidebarTrigger
} from './../../components';

import { NavbarSearch } from './NavbarSearch';
import { NavbarActivityFeed } from './NavbarActivityFeed';
import { NavbarMessages } from './NavbarMessages';
import { NavbarUser } from './NavbarUser';
import { LogoThemed } from './../../routes/components/LogoThemed/LogoThemed';
import { LanguageSelector } from './LanguageSelector';

export const DefaultNavbar = () => (
    <Navbar light expand="xs" fluid>
        <Nav navbar>
            <NavItem className="mr-3">
                <SidebarTrigger/>
            </NavItem>
            <NavItem className="navbar-brand d-lg-none">
                <Link to="/">
                    <LogoThemed />
                </Link>
            </NavItem>
            <NavItem className="d-none d-md-block">
                <span className="navbar-text">
                    <Link to="/">
                        <i className="fa fa-home"></i>
                    </Link>
                </span>
                <span className="navbar-text px-2">
                    <i className="fa fa-angle-right"></i>
                </span>
                <span className="navbar-text">
                    <Link to="/">Start</Link>
                </span>
                <span className="navbar-text px-2">
                    <i className="fa fa-angle-right"></i>
                </span>
                <span className="navbar-text">
                    Page Link
                </span>
            </NavItem>
            <LanguageSelector className="mr-3 nav-item" />
        </Nav>
        <Nav navbar className="ml-auto">
            <NavbarSearch className="d-none d-md-block" />
            <NavbarActivityFeed className="ml-2 d-none d-md-block" />
            <NavbarMessages className="ml-2 d-none d-md-block" />
            <NavbarUser className="ml-2 d-none d-md-block" />

            <NavItem className="d-block d-md-none">
                <i className="fa fa-fw fa-ellipsis-v" aria-hidden="true"></i>
            </NavItem>
        </Nav>
    </Navbar>
);
