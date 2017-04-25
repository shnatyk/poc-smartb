import { normalize } from 'normalizr';
import  * as schema from './schema';
import { getIsFetching } from '../reducers';
import * as api from '../api';

export const fetchCampaigns = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch({
        type: 'FETCH_CAMPAIGNS_REQUEST',
        filter
    });

    return api.fetchCampaings(filter).then(
        response => {
            dispatch({
                type: 'FETCH_CAMPAIGNS_SUCCESS',
                filter,
                response: normalize(response.data, schema.arrayOfCampaings),
            });
        },
        error => {
            dispatch({
                type: 'FETCH_CAMPAIGNS_FAILURE',
                filter,
                message: error.message || 'Something went wrong!',
            })
        }
    );
};

export const toggleStatus = (id) => (dispatch) =>
    api.toggleStatus(id).then(response => {
        dispatch({
            type: 'TOGGLE_CAMPAIGN_SUCCESS',
            response: normalize(response.data, schema.items),
        })
    });
