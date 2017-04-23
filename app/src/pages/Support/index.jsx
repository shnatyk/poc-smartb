import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome';

import Page from './../../components/Page/index';
import './styles.css';

class Support extends Component {
    render() {
        return (
            <Page mods={['support']}>

                SUPPORT

            </Page>
        );
    }
}

// const ComponentTitle = ({icon = 'cube', title}) => (
//     <div style={{
//         margin: '40px 0 10px',
//         fontSize: '18px'}}>
//
//         <FontAwesome name={icon} style={{
//             color: '#f14f6b',
//             marginRight: '10px',
//             fontSize: '24px'}}/>
//         <span>{title}</span>
//
//     </div>
// );

export default Support;