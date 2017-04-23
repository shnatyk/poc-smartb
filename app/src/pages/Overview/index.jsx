import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';

import './components/ListGroupItem/styles.css'

import BounceLoader from './../../components/BounceLoader/index';
import Page from './../../components/Page/index';
import CampRow from './components/CampRow/index';
import CampBtn from './components/CampBtn/index';
import TitleBox from './components/TitleBox/index';

import * as CAMP from './../../services/helpers/campaign';
import './styles.css';

class Overview extends Component {
    constructor() {
        super();
        this.state = {
            campaigns: [],
            total: []
        };
    }

    componentDidMount() {
        let _this = this;

        setTimeout(() => {
            axios
                .get("http://poc-smartb-api.getsandbox.com/overview")
                .then(function (result) {
                    _this.setState({campaigns: result.data.items});
                    _this.setState({total: result.data.total});
                });
        }, 2000);
    }

    render() {
        return (
            <Page mods={['overview']}>

                <BounceLoader show={true} message={'loading'}>
                    <ListGroup>
                        <TitleBox  tag="li"
                                   className="list-group-item"
                                   icon="bar-chart"
                                   titleTxt="Performance snapshot">
                        </TitleBox>
                        <ListGroupItem>
                            loading...
                        </ListGroupItem>
                    </ListGroup>
                </BounceLoader>

                <br />
                <br />

                <ListGroup>
                    <TitleBox tag="li"
                              className="list-group-item"
                              icon="bullhorn"
                              titleTxt="Active Campaigns"
                    />
                    <CampRow tag="li"
                             className="list-group-item"
                             blockMods={['header']}
                             data={{
                                 status: 'status',
                                 name: 'campaign name',
                                 clicks: 'clicks',
                                 dailySpend: 'daily spend',
                                 impressions: 'impressions',
                                 profit: 'profit',
                                 revenue: 'revenue',
                                 roi: 'roi',
                                 spend: 'spend'
                             }}
                    />
                    {this.state.campaigns.map((camp, index) => (
                        <CampRow key={camp.id}
                                 tag="li"
                                 className="list-group-item"
                                 blockMods={CAMP.blockMods(camp, [index % 2 !== 0 ? 'odd' : 'even'])}
                                 data={CAMP.dataForCampRow(camp)}
                                 btn1={<CampBtn icon="align-left" />}
                                 btn2={<CampBtn icon="sliders" />}
                        />
                    ))}
                    <CampRow tag="li"
                             className="list-group-item"
                             blockMods={['header']}
                             data={{
                                 status: 'totals',
                                 name: '',
                                 clicks: this.state.total.clicks,
                                 dailySpend: '',
                                 impressions: this.state.total.impressions,
                                 profit: this.state.total.profit,
                                 revenue: this.state.total.revenue,
                                 roi: '',
                                 spend: this.state.total.spend
                             }}
                    />
                </ListGroup>

            </Page>
        );
    }
}

export default Overview;

