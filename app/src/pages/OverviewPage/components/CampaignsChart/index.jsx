import React, { PropTypes } from 'react';
import Highcharts from 'react-highcharts';
import { ListGroup } from 'reactstrap';

import ListGroupItem from './../ListGroupItem/index';
import TitleBox from './../TitleBox/index';

const propTypes = {
    isLoading: PropTypes.bool
};

const defaultProps = {
    isLoading: false
};

const CampaignsChart = (props) => {
    const {
        data,
        isLoading
    } = props;

    const d = new Date();
    const config = {
        colors: ['#f15c80', '#bc75fc', '#1788f6', '#fbbb00', '#94a1ab', '#90ed7d', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1', '#434348'],

        title: {
            text: null
        },

        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                hour: '%H:%M'
            }
        },

        plotOptions: {
            series: {
                pointStart: Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 0, 0),
                pointInterval: 3600 * 1000,
                marker: {
                    symbol: 'circle',
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: null // inherit from series
                }
            },
        },
        series: data
    };

    const highCharts = !isLoading ? <Highcharts config={config} /> : '';

    return (
        <ListGroup>
            <TitleBox  tag="li"
                       className="list-group-item"
                       icon="bar-chart"
                       titleTxt="Performance snapshot">
            </TitleBox>
            <ListGroupItem className="chart">
                {highCharts}
            </ListGroupItem>
        </ListGroup>
    );
};

CampaignsChart.propTypes = propTypes;
CampaignsChart.defaultProps = defaultProps;

export default CampaignsChart;
