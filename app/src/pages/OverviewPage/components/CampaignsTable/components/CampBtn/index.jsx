import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

import * as BEM from './../../../../../../helpers/bem';
import './styles.css';

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    blockName: PropTypes.string,
    blockMods: PropTypes.array,
    icon: PropTypes.string,
    url: PropTypes.string
};

const defaultProps = {
    tag: 'a',
    blockName: 'camp-btn',
    url: '#'
};

const CampBtn = (props) => {
    const {
        tag: Tag,
        className,
        blockName,
        blockMods,
        icon,
        url,
        ...attributes
    } = props;

    const bemClasses = BEM.classify(blockName, blockMods);
    const classes = className ? className + ' ' + bemClasses : bemClasses;

    const campBtn = (
        <Tag href={url} className={classes} {...attributes}>
            <FontAwesome className={blockName + '__icon'} name={icon} />
        </Tag>
    );

    return campBtn;
};

CampBtn.propTypes = propTypes;
CampBtn.defaultProps = defaultProps;

export default CampBtn;