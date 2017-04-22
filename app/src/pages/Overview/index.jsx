import React, { Component } from 'react';
import axios from 'axios';

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
                OVERVIEW

                <ul>
                    {Object.keys(this.state.campaigns).map(key => (
                        <Campaign key={key} campaign={this.state.campaigns[key]} />
                    ))}
                </ul>
            </Page>
        );
    }
}

const Campaign = ({campaign}) => (
    <li>{campaign.title}</li>
);

export default Overview;