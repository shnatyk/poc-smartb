import React, { Component } from 'react';

import Page from './../../components/Page/index';
import SectionTop from './../../components/SectionTop/index';
import SectionMain from './../../components/SectionMain/index';
import './styles.css';

class Overview extends Component {
    render() {
        return (
            <Page mods={['overview']}>
                <SectionTop>
                    section top
                </SectionTop>
                <SectionMain>
                    section main
                </SectionMain>
            </Page>
        );
    }
}

export default Overview;