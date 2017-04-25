import { combineReducers } from 'redux';

const createList = (filter) => {

    const handleToggle = (state, action) => {
        const { result: toggledId, entities } = action.response;
        const { isActive } = entities.items[toggledId];
        console.log(isActive);
        const shouldRemove = (
            (!isActive && filter === 'active') ||
            (isActive && filter === 'inactive')
        );
        return shouldRemove ?
            state.filter(id => id !== toggledId) :
            state;
    };

    const ids = (state = [], action) => {
        switch (action.type) {
            case 'FETCH_CAMPAIGNS_SUCCESS':
                return filter === action.filter ?
                    action.response.result.items :
                    state;
            case 'TOGGLE_CAMPAIGN_SUCCESS':
                return handleToggle(state, action);
            default:
                return state;
        }
    };

    const isFetching = (state = false, action) => {
        if(action.filter !== filter) {
            return state
        }
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
export const getIsFetching = (state) => {
    return(state.isFetching);
};