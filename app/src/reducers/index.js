import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import chart, * as fromChart from './chart';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
    active: createList('active'),
    inactive: createList('inactive'),
});

const campaigns = combineReducers({
    byId,
    chart,
    listByFilter,
});

export default campaigns;

export const getCampaigns = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map(id => fromById.getCampaign(state.byId, id));
};

export const getCampaignsChart = (state) =>
    fromChart.getChart(state.chart);

export const getIsFetching = (state, filter) =>
    fromList.getIsFetching(state.listByFilter[filter]);