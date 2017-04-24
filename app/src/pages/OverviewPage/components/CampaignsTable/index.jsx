import React, { PropTypes } from 'react';
import { ListGroup } from 'reactstrap';

import CampRow from './components/CampRow/index';
import CampBtn from './components/CampBtn/index';
import TitleBox from './../TitleBox/index';

const propTypes = {
    campaigns: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isActive: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        total: PropTypes.object.isRequired,
    }).isRequired).isRequired,
    isLoading: PropTypes.bool
};

const defaultProps = {
    isLoading: false
};

const CampaignsTable = (props) => {
    const {
        campaigns,
        isLoading
    } = props;

    const tableHeaderData = {
        status: 'status',
        name: 'campaign name',
        clicks: 'clicks',
        dailySpend: 'daily spend',
        impressions: 'impressions',
        profit: 'profit',
        revenue: 'revenue',
        roi: 'roi',
        spend: 'spend'
    };

    const tableSummaryData = {
        status: 'totals',
        name: '',
        clicks: '132758',
        dailySpend: '',
        impressions: '97.21M',
        profit: '110.12',
        revenue: '3016',
        roi: '',
        spend: '12654'
    };

    const campaignsTable = (
        <ListGroup>
            <TitleBox tag="li"
                      className="list-group-item"
                      icon="bullhorn"
                      titleTxt="Active Campaigns"
            />
            <CampRow tag="li"
                     className="list-group-item"
                     blockMods={['header']}
                     data={tableHeaderData}
            />
            {!isLoading ? campaigns.map((campaign, index) => (
                <CampRow key={campaign.id}
                         tag="li"
                         className="list-group-item"
                         blockMods={blockModsFromCampaign(campaign, [index % 2 !== 0 ? 'odd' : 'even'])}
                         data={campaignToCampRow(campaign)}
                         btn1={<CampBtn icon="align-left" />}
                         btn2={<CampBtn icon="sliders" />}
                />
            )) : ''}
            <CampRow tag="li"
                     className="list-group-item"
                     blockMods={['header']}
                     data={tableSummaryData}
            />
        </ListGroup>
    );

    return campaignsTable;
};

CampaignsTable.propTypes = propTypes;
CampaignsTable.defaultProps = defaultProps;

export default CampaignsTable;

/* helper for passing campaign data to CampRow in proper format */
function campaignToCampRow(campaign) {
    let tableCampRowData = {
        status: campaign.isActive.toString(),
        name: campaign.name,
        clicks: campaign.total.clicks.toString(),
        dailySpend: campaign.total.dailySpend * 100 + '%',
        impressions: campaign.total.impressions + 'M',
        profit: '$' + campaign.total.profit,
        revenue: '$' + campaign.total.revenue,
        roi: campaign.total.roi + '%',
        spend: '$' + campaign.total.spend
    };

    return tableCampRowData;
}

/* helper for logic styling, creates proper modifiers for CampRow and its childs */
export function blockModsFromCampaign(campaign, extraMods) {
    let blockMods = extraMods || [];
    if(campaign.total.profit < 0) {
        blockMods.push('loss');
    }

    if(campaign.total.profit > 0) {
        blockMods.push('gain');
    }

    if(campaign.total.dailySpend > 0.5) {
        blockMods.push('warning-spend');
    }

    if(campaign.total.dailySpend > 0.5) {
        if(campaign.total.dailySpend > 0.9) {
            blockMods.push('danger-spend');
        }
        else {
            blockMods.push('warning-spend');
        }
    }
    else {
        blockMods.push('ok-spend');
    }

    return blockMods;
}


