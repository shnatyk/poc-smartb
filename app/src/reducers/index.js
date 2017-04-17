import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import chart, * as fromChart from './chart';
import createList, * as fromList from './createList';

const campaigns = combineReducers({
    byId,
    chart,
    campaignsList: createList()
});

export default campaigns;

export const getCampaigns = (state) => {
    const ids = fromList.getIds(state.campaignsList);
    return ids.map(id => fromById.getCampaign(state.byId, id));
};

export const getCampaignsChart = (state) =>
    fromChart.getChart(state.chart);

export const getIsFetching = (state, filter) =>
    fromList.getIsFetching(state.campaignsList);