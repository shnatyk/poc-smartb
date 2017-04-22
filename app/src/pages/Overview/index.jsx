import React, { Component } from 'react';

import Page from './../../components/Page/index';
import './styles.css';

class Overview extends Component {
    render() {
        return (
            <Page mods={['overview']}>
                OVERVIEW
            </Page>
        );
    }
}

export default Overview;