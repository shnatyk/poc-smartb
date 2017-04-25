import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from './../../actions';
import { getCampaigns, getCampaignsChart, getIsFetching } from './../../reducers';

import BounceLoader from '../../components/BounceLoader/index';
import CampaignsChart from './components/CampaignsChart/index';
import CampaignsTable from './components/CampaignsTable/index';
import CampaignsTotal from './components/CampaignsTotal/index';

import './styles.css';

class OverviewPage extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
      const { fetchCampaigns } = this.props;
      fetchCampaigns();
  }

  render() {
    const { isFetching, campaigns, campaignsChart } = this.props;

    if (isFetching && !campaigns.length && !campaignsChart.length) {
        return (
            <div className="page page--campaigns">

                <BounceLoader show={true}>
                    <CampaignsTotal isLoading />
                </BounceLoader>
                <br />
                <br />
                <BounceLoader show={true}>
                    <CampaignsChart data={campaignsChart} isLoading />
                </BounceLoader>
                <br />
                <br />
                <BounceLoader show={true} >
                    <CampaignsTable campaigns={campaigns} isLoading/>
                </BounceLoader>

            </div>
        )
    }
    return (
        <div className="page page--campaigns">

            <CampaignsTotal />
            <br />
            <br />
            <CampaignsChart data={campaignsChart} />
            <br />
            <br />
            <CampaignsTable campaigns={campaigns} />

        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      campaigns: getCampaigns(state),
      campaignsChart: getCampaignsChart(state),
      isFetching: getIsFetching(state)
  }
};

OverviewPage = withRouter(connect(
  mapStateToProps,
  actions
)(OverviewPage));

export default OverviewPage;
