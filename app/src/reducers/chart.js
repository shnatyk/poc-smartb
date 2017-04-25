const chart = (state = [], action) => {
    if (action.response && action.type !== 'TOGGLE_CAMPAIGN_SUCCESS') {
        return action.response.result.chart
    }
    return state;
};

export default chart;

export const getChart = (state) => state;


