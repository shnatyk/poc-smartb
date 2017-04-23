import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, Table } from 'reactstrap';

import Page from './../../components/Page/index';
import ListGroupTitle from './components/ListGroupTitle/index';
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

                <ListGroup>
                    <ListGroupTitle
                        titleTxt="Active Campaigns"
                        icon="bullhorn">
                        some actions
                    </ListGroupTitle>
                </ListGroup>

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
                                <td>{camp.isActive.toString()}</td>
                                <td>{camp.name}</td>
                                <td>{camp.total.impressions}</td>
                                <td>{camp.total.clicks}</td>
                                <td>{camp.total.spend}</td>
                                <td>{camp.total.revenue}</td>
                                <td>{camp.total.roi}</td>
                                <td>{camp.total.profit}</td>
                                <td>{camp.total.dailySpend}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Page>
        );
    }
}

export default Overview;

