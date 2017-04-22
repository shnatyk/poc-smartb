import React, { Component } from 'react';

import Page from './../../components/Page/index';
import './styles.css';

class Home extends Component {
    render() {
        return (
            <Page mods={['home']}>
                HOME
            </Page>
        );
    }
}

export default Home;