import React, { PropTypes } from 'react';

import * as BEM from '../../../../services/helpers/bem';
import './styles.css';

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    blockName: PropTypes.string,
    blockMods: PropTypes.array,
    data: PropTypes.shape({
        status: PropTypes.string,
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

const defaultProps = {
    tag: 'div',
    blockName: 'camp-row'
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
        ...attributes
    } = props;

    const bemClasses = BEM.namify(blockName, blockMods);
    const classes = className ? className + ' ' + bemClasses : bemClasses;

    const campRow = (
        <Tag className={classes} {...attributes}>
            <div className={blockName + '__status'}>
                {data.status}
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
                {data.dailySpend}
            </div>
            <div className={blockName + '__actions'}>
                {btn1}
                {btn2}
            </div>
        </Tag>
    );

    return campRow;
};

CampRow.propTypes = propTypes;
CampRow.defaultProps = defaultProps;

export default CampRow;