import React, { PropTypes } from 'react';

import * as BEM from '../../services/helpers/bem';
import Section from './../../components/Section/index';
import Topbar from './../../components/Topbar/index';
import './styles.css';

const blockName = 'page';

const Page = ({mods, children}) => (
    <div className={BEM.namify(blockName, mods)}>
        <Section mods={['top']}>
            <Topbar />
        </Section>
        <Section mods={['main']}>
            {children}
        </Section>
    </div>
);

Page.propTypes = {
    mods: PropTypes.array
}

export default Page;