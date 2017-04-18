import React, { Component } from 'react';

import Section from './../Section/index'
import './styles.css';

class SectionMain extends Component {
    render() {
        return (
            <Section mods={['main']}>
                {this.props.children}
            </Section>
        );
    }
}

export default SectionMain;