import React, { PropTypes } from 'react';

import * as BEM from './../../../../../../helpers/bem';
import './styles.css';

const propTypes = {
    blockName: PropTypes.string,
    blockMods: PropTypes.array,
    val: PropTypes.string,
    label: PropTypes.string,
    isLoading: PropTypes.bool
};

const defaultProps = {
    blockName: 'total',
    isLoading: false
};

const Total = (props) => {
    const {
        blockName,
        blockMods,
        val,
        label,
        isLoading
    } = props;

    const classes = BEM.classify(blockName, blockMods);

    const total = (
        <div className={classes}>
            <div className={blockName + '__val'}>{!isLoading? val : ''}</div>
            <div className={blockName + '__label'}>{label}</div>
        </div>
    );

    return total;
};

Total.propTypes = propTypes;
Total.defaultProps = defaultProps;

export default Total;