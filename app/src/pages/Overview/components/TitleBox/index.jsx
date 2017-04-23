import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

import * as BEM from '../../../../services/helpers/bem';
import './styles.css';

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    blockName: PropTypes.string,
    blockMods: PropTypes.array,
    icon: PropTypes.string,
    titleTxt: PropTypes.string,
    children: PropTypes.node,
};

const defaultProps = {
    tag: 'div',
    blockName: 'title-box'
};

const TitleBox = (props) => {
    const {
        tag: Tag,
        className,
        blockName,
        blockMods,
        icon,
        titleTxt,
        children,
        ...attributes
    } = props;

    const bemClasses = BEM.namify(blockName, blockMods);
    const classes = className ? className + ' ' + bemClasses : bemClasses;

    const titleBoxIcon = <FontAwesome className={blockName + '__icon'} name={icon} />;
    const titleBoxName = <div className={blockName + '__name'}>{titleTxt}</div>;

    const titleBox = (
        <Tag className={classes} {...attributes}>
            {titleBoxIcon}
            {titleBoxName}
            <div className={blockName + '__actions'}>
                {children}
            </div>
        </Tag>
    );

    return titleBox;
};

TitleBox.propTypes = propTypes;
TitleBox.defaultProps = defaultProps;

export default TitleBox;