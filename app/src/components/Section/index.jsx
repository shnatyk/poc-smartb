import React, { PropTypes } from 'react';
import { Container } from 'reactstrap';

import * as BEM from './../../helpers/bem';
import './styles.css';

const propTypes = {
    className: PropTypes.string,
    blockName: PropTypes.string,
    blockMods: PropTypes.array,
    children: PropTypes.node
};

const defaultProps = {
    blockName: 'section',
};

const Section = (props) => {
    const {
        className,
        blockName,
        blockMods,
        children
    } = props;

    const bemClasses = BEM.classify(blockName, blockMods);
    const classes = className ? className + ' ' + bemClasses : bemClasses;

    const section = (
        <section className={classes}>
            <Container className={blockName + '__content'}>
                {children}
            </Container>
        </section>
    );

    return section;
}

Section.defaultProps = defaultProps;
Section.propTypes = propTypes;

export default Section;