const chart = (state = [], action) => {
    if (action.response) {
        return action.response.result.chart
    }
    return state;
};

export default chart;

export const getChart = (state) => state;


