import React, { PropTypes } from 'react';
import Toggle from 'react-toggle';

import Progress from './components/Progress/index';
import * as BEM from './../../../../../../helpers/bem';
import './styles.css';

const defaultProps = {
    tag: 'div',
    blockName: 'camp-row'
};

const ToggleStatus = (data, onStatusClick) => {
    switch(data.status) {
        case 'status':
            return data.status;
        default: return (
            <Toggle
                defaultChecked={data.status}
                icons={false}
                onChange={() => onStatusClick(data.id)}
            />
        );
    }
};

const CampRow = (props) => {
    const {
        tag: Tag,
        className,
        blockName,
        blockMods,
        data,
        btn1,
        btn2,
        onStatusClick,
        ...attributes
    } = props;

    const bemClasses = BEM.classify(blockName, blockMods);
    const classes = className ? className + ' ' + bemClasses : bemClasses;

    return (
        <Tag className={classes} {...attributes}>
            <div className={blockName + '__status'}>
                {ToggleStatus(data, onStatusClick)}
            </div>
            <div className={blockName + '__name'}>
                {data.name}
            </div>
            <div className={blockName + '__impressions'}>
                {data.impressions}
            </div>
            <div className={blockName + '__clicks'}>
                {data.clicks}
            </div>
            <div className={blockName + '__spend'}>
                {data.spend}
            </div>
            <div className={blockName + '__revenue'}>
                {data.revenue}
            </div>
            <div className={blockName + '__roi'}>
                {data.roi}
            </div>
            <div className={blockName + '__profit'}>
                {data.profit}
            </div>
            <div className={blockName + '__daily-spend'}>
                { Number.isInteger(data.dailySpend) ? <Progress value={data.dailySpend} /> : data.dailySpend }
            </div>
            <div className={blockName + '__actions'}>
                {btn1}
                {btn2}
            </div>
        </Tag>
    );
};

export default CampRow;

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    blockName: PropTypes.string,
    blockMods: PropTypes.array,
    data: PropTypes.shape({
        status: PropTypes.boolean,
        name: PropTypes.string,
        clicks: PropTypes.string,
        dailySpend: PropTypes.string,
        impressions: PropTypes.string,
        profit: PropTypes.string,
        revenue: PropTypes.string,
        roi: PropTypes.string,
        spend: PropTypes.string,
    }),
    btn1: PropTypes.node,
    btn2: PropTypes.node
};

CampRow.propTypes = propTypes;
CampRow.defaultProps = defaultProps;