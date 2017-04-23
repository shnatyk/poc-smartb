import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import BounceLoader from './../../components/BounceLoader/index';
import MainNavItem from './../../components/MainNavItem/index';
import Page from './../../components/Page/index';
import TitleBox from './../Overview/components/TitleBox/index';
import './styles.css';

class Support extends Component {
    render() {
        return (
            <Page mods={['support']}>

                <ComponentTitle title="BouncyLoader" />
                <BounceLoader show={true}>
                    <div style={{fontSize: '24px', marginBottom: '60px', textAlign: 'center'}}>
                        Simple div to show loader,
                        <br />
                        which consists of bouncing circle and reducing opacity
                    </div>
                </BounceLoader>

                <ComponentTitle title="TitleBox" />
                <TitleBox titleTxt="Component name" icon="rocket">
                    children
                </TitleBox>

                <ComponentTitle title="MainNavItem" />
                <MainNavItem item={{
                    mods: ['active'],
                    url: '#',
                    icon: 'rocket',
                    txt: 'Active'}} />
                <MainNavItem item={{
                    url: '#',
                    icon: 'rocket',
                    txt: 'Inactive'}} />

            </Page>
        );
    }
}

const ComponentTitle = ({icon = 'cube', title}) => (
    <div style={{
        margin: '40px 0 10px',
        fontSize: '18px'}}>

        <FontAwesome name={icon} style={{
            color: '#f14f6b',
            marginRight: '10px',
            fontSize: '24px'}}/>
        <span>{title}</span>

    </div>
);

export default Support;