import React, { Component } from 'react';
import { Container } from 'reactstrap';

import * as BEM from './../../services/bem';
import './styles.css';

class Section extends Component {
    render() {
        const name = "section";
        return (
            <section className={ BEM.namify(name, this.props.mods) }>
                <Container className={name + '__content'}>
                    {this.props.children}
                </Container>
            </section>
        );
    }
}

export default Section;