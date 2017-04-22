import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

import BounceLoader from './../../components/BounceLoader/index';
import Page from './../../components/Page/index';
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

                <Table striped>
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

export default Overview;

