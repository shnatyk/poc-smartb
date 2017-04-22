import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import BounceLoader from './../../components/BounceLoader/index';
import Page from './../../components/Page/index';
import TitleBox from './components/TitleBox/index';
import './styles.css';

class Overview extends Component {
    constructor() {
        super();
        this.state = { campaigns: []}
    }

    componentDidMount() {
        let _this = this;

        setTimeout(() => {
            axios
                .get("http://poc-smartb-api.getsandbox.com/campaigns/active")
                .then(function (result) {
                    _this.setState({campaigns: result.data});
                });
        }, 2000);
    }

    render() {
        return (
            <Page mods={['overview']}>

                <ComponentTitle title="BouncyLoader" />
                <BounceLoader show={true} message={'loading'}>
                    <div style={{fontSize: '24px', marginBottom: '60px', textAlign: 'center'}}>
                        <br />
                        Simple div
                        <br />
                        to show loader example
                        <br />
                        blablalbllasva daldasld lasdl alsdlasdlas
                    </div>
                </BounceLoader>

                <ComponentTitle title="TitleBox" />
                <TitleBox name="Performance snapshot" icon="bar-chart">
                    children
                </TitleBox>

                <ComponentTitle title="TitleBox --alone" />
                <TitleBox mods={['alone']} name="Active Campaigns" icon="bullhorn">
                    children
                </TitleBox>

                <Table striped style={{marginTop: '30px'}}>
                    <thead>
                    <tr>
                        <th>status</th>
                        <th>campaign name</th>
                    </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.state.campaigns).map(key => (
                            <tr key={key}>
                                <th>{this.state.campaigns[key].id}</th>
                                <th>{this.state.campaigns[key].title}</th>
                            </tr>
                        ))}
                    </tbody>
                </Table>


                {/*<ul>*/}
                    {/*{Object.keys(this.state.campaigns).map(key => (*/}
                        {/*<Campaign key={key} campaign={this.state.campaigns[key]} />*/}
                    {/*))}*/}
                {/*</ul>*/}


            </Page>
        );
    }
}

// const Campaign = ({campaign}) => (
//     <li>{campaign.title}</li>
// );

const ComponentTitle = ({icon = 'cubes', title}) => (
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

export default Overview;

