import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';

import './components/ListGroupItem/styles.css'

import BounceLoader from './../../components/BounceLoader/index';
import Page from './../../components/Page/index';
import CampRow from './components/CampRow/index';
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
                    _this.setState({campaigns: result.data.items});
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
                            extra buttons/inputs
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
                              titleTxt="Active Campaigns">
                        extra buttons/inputs
                    </TitleBox>
                    {this.state.campaigns.map((camp, index) => (
                        <CampRow key={camp.id}
                                 tag="li"
                                 className="list-group-item"
                                 blockMods={[index % 2 !== 0 ? 'odd' : 'even']}
                                 camp={camp} />
                    ))}
                </ListGroup>

            </Page>
        );
    }
}

export default Overview;

