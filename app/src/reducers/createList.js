import { combineReducers } from 'redux';

const createList = () => {
    const ids = (state = [], action) => {
        switch (action.type) {
            case 'FETCH_CAMPAIGNS_SUCCESS':
                return action.response.result.items;
            default:
                return state;
        }
    };

    const isFetching = (state = false, action) => {
        switch (action.type) {
            case 'FETCH_CAMPAIGNS_REQUEST':
                return true;
            case 'FETCH_CAMPAIGNS_SUCCESS':
            case 'FETCH_CAMPAIGNS_FAILURE':
                return false;
            default:
                return state;
        }
    };

    return combineReducers({
        ids,
        isFetching
    })
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;