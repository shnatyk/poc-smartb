import React, { PropTypes } from 'react';
import { Container } from 'reactstrap';

import * as BEM from '../../services/helpers/bem';
import './styles.css';

const blockName = 'section';

const Section = ({mods, children}) => (
    <section className={BEM.namify(blockName, mods)}>
        <Container className={blockName + '__content'}>
            {children}
        </Container>
    </section>
);

Section.propTypes = {
    mods: PropTypes.array
};

export default Section;