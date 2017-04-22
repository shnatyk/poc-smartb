import React from 'react';

import MainNavItem from '../MainNavItem/index';
import './styles.css';

const MainNav = ({items}) => (
    <nav className="main-nav">
        {Object.keys(items).map(key => (
            <MainNavItem key={key} item={items[key]} />
        ))}
    </nav>
);

export default MainNav;