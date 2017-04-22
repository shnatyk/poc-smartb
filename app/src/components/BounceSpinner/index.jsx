import React from 'react';

import './styles.css';

const blockName = 'bounce-spinner';

const BounceSpinner = () => (
    <div className={blockName}>
        <div className={blockName + '__circle1'}></div>
        <div className={blockName + '__circle2'}></div>
    </div>
);

export default BounceSpinner;