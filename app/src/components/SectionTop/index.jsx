import React, { Component } from 'react';

import Section from './../Section/index'
import './styles.css';

class SectionTop extends Component {
    render() {
        return (
            <Section mods={['top']}>
                {this.props.children}
            </Section>
        );
    }
}

export default SectionTop;