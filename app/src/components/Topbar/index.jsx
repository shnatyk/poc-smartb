import React from 'react';
import { Row, Col } from 'reactstrap';

import MainNavItem from './../MainNavItem';
import './styles.css';

const mainNavItems = [
    {
        blockMods: ['overview', 'first'],
        url: '/overview',
        icon: 'tachometer',
        txt: 'Overview'
    },
    {
        blockMods: ['campaigns'],
        url: '/campaigns',
        icon: 'bullhorn',
        txt: 'Campaigns'
    },
    {
        blockMods: ['intelligence'],
        url: '/intelligence',
        icon: 'eye',
        txt: 'Intelligence'
    },
    {
        blockMods: ['support', 'last'],
        url: '/support',
        icon: 'life-ring',
        txt: 'Support'
    }
];

const Topbar = () => (
    <Row className="topbar">
        <Col xs="12" md="2" className="topbar__logo">
            <Logo />
        </Col>
        <Col xs="12" md="8" className="topbar__menu">
            {mainNavItems.map((item, index) => (
                <MainNavItem
                    key={index}
                    blockMods={item.blockMods}
                    url={item.url}
                    icon={item.icon}
                    txt={item.txt}/>
            ))}
        </Col>
        <Col md="2" className="topbar__profile" />
    </Row>
);

const Logo = () => (
    <a href="http://smrtb.com/" className="topbar__logo-txt">
        smartb
    </a>
);

export default Topbar;