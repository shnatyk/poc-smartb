import React, { PropTypes } from 'react';
import { Route, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import * as BEM from '../../services/helpers/bem';
import './styles.css';

const blockName = 'main-nav-item';

const MainNavItem = ({item}) => (
    <Route path={item.url} children={({ match }) => (
        <div className={match ? BEM.namify(blockName, item.mods) + ' ' + blockName + '--active' : BEM.namify(blockName, item.mods)}>
            <div className={blockName + '__fake-txt'}>{item.txt}</div>
            <Link to={item.url} className={blockName + '__box'}>
                <FontAwesome className={blockName + '__icon'} name={item.icon} />
                <div className={blockName + '__txt'}>{item.txt}</div>
            </Link>
            <FontAwesome className={blockName + '__caret'} name='caret-up' />
        </div>
    )}/>
);

MainNavItem.propTypes = {
    item: PropTypes.shape({
        mods: PropTypes.array,
        url: PropTypes.string,
        icon: PropTypes.string,
        txt: PropTypes.string
    })
};

export default MainNavItem;