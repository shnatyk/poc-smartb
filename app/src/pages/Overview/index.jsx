import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

import Page from './../../components/Page/index';
import TitleBox from './components/TitleBox/index';
import './styles.css';

class Overview extends Component {
    constructor() {
        super();
        this.state = { campaigns: [] }
    }

    componentDidMount() {
        let _this = this;

        setTimeout(() => {
            axios
                .get("http://poc-smartb-api.getsandbox.com/overview")
                .then(function (result) {
                    _this.setState({campaigns: result.data.campaigns});
                });
        }, 2000);
    }

    render() {
        return (
            <Page mods={['overview']}>

                <TitleBox mods={['alone']} name="Active Campaigns" icon="bullhorn">
                    children
                </TitleBox>

                <Table>
                    <thead>
                        <tr>
                            <th>status</th>
                            <th>campaign name</th>
                            <th>impressions</th>
                            <th>clicks</th>
                            <th>spend</th>
                            <th>revenue</th>
                            <th>roi</th>
                            <th>profit</th>
                            <th>daily spend</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.campaigns.map((camp) => (
                            <tr key={camp.id}>
                                <th>{camp.isActive.toString()}</th>
                                <th>{camp.name}</th>
                                <th>{camp.total.impressions}</th>
                                <th>{camp.total.clicks}</th>
                                <th>{camp.total.spend}</th>
                                <th>{camp.total.revenue}</th>
                                <th>{camp.total.roi}</th>
                                <th>{camp.total.profit}</th>
                                <th>{camp.total.dailySpend}</th>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Page>
        );
    }
}

export default Overview;

