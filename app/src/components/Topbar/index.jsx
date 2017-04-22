import React from 'react';
import { Row, Col } from 'reactstrap';

import MainNav from '../MainNav/index';
import './styles.css';

const mainNavItems = {
    overview: {
        mods: ['overview', 'first'],
        url: '/overview',
        icon: 'tachometer',
        txt: 'Overview'
    },
    campaigns: {
        mods: ['campaigns'],
        url: '/campaigns',
        icon: 'bullhorn',
        txt: 'Campaigns'
    },
    intelligence: {
        mods: ['intelligence'],
        url: '/intelligence',
        icon: 'eye',
        txt: 'Intelligence'
    },
    support: {
        mods: ['support', 'last'],
        url: '/support',
        icon: 'life-ring',
        txt: 'Support'
    }
};

const Topbar = () => (
    <Row className="topbar">
        <Col xs="2" />
        <Col xs="8">
            <MainNav items={mainNavItems} />
        </Col>
        <Col xs="2" />
    </Row>
);

export default Topbar;