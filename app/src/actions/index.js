import { normalize } from 'normalizr';
import  * as schema from './schema';
import { getIsFetching } from '../reducers';
import * as api from '../api';

export const fetchCampaigns = () => (dispatch, getState) => {
    if (getIsFetching(getState())) {
        return Promise.resolve();
    }

    dispatch({
        type: 'FETCH_CAMPAIGNS_REQUEST',
    });

    return api.fetchCampaings().then(
        response => {
            dispatch({
                type: 'FETCH_CAMPAIGNS_SUCCESS',
                response: normalize(response.data, schema.arrayOfCampaings),
            });
        },
        error => {
            dispatch({
                type: 'FETCH_CAMPAIGNS_FAILURE',
                message: error.message || 'Something went wrong!',
            })
        }
    );
};
