import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import * as BEM from './../../helpers/bem';
import './styles.css';

const propTypes = {
    blockName: PropTypes.string,
    blockMods: PropTypes.array,
    url: PropTypes.string,
    icon: PropTypes.string,
    txt: PropTypes.string
};

const defaultProps = {
    blockName: 'main-nav-item',
    url: '#',
    icon: 'rocket',
    txt: 'Rocket',
};

const MainNavItem = (props) => {
    const {
        blockName,
        blockMods,
        url,
        icon,
        txt
    } = props;

    const classes = BEM.classify(blockName, blockMods);

    const mainNavItem = (
        <div className={classes}>
            <div className={blockName + '__fake-txt'}>
                {txt}
            </div>
            <NavLink className={blockName + '__box'} activeClassName={blockName + '__box--active'} to={url}>
                <FontAwesome className={blockName + '__icon'} name={icon}/>
                <div className={blockName + '__txt'}>
                    {txt}
                </div>
            </NavLink>
            <FontAwesome className={blockName + '__caret'} name='caret-up' />
        </div>
    );

    return mainNavItem;
};

MainNavItem.defaultProps = defaultProps;
MainNavItem.propTypes = propTypes;

export default MainNavItem;