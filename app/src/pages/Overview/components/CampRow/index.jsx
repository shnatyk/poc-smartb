import React, { PropTypes } from 'react';

import CampBtn from './components/CampBtn/index';

import * as BEM from '../../../../services/helpers/bem';
import './styles.css';

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    blockName: PropTypes.string,
    blockMods: PropTypes.array,
    camp: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            isActive: PropTypes.bool,
            total: PropTypes.shape({
                clicks: PropTypes.number,
                dailySpend: PropTypes.number,
                impressions: PropTypes.number,
                profit: PropTypes.number,
                revenue: PropTypes.number,
                roi: PropTypes.number,
                spend: PropTypes.number
            })
    })
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
        camp,
        ...attributes
    } = props;

    if(camp.total.profit < 0) {
        blockMods.push('loss');
    }

    if(camp.total.profit > 0) {
        blockMods.push('gain');
    }

    if(camp.total.dailySpend > 0.5) {
        blockMods.push('warning-spend');
    }

    if(camp.total.dailySpend > 0.9) {
        blockMods.push('danger-spend');
    }

    const bemClasses = BEM.namify(blockName, blockMods);
    const classes = className ? className + ' ' + bemClasses : bemClasses;

    const campRow = (
        <Tag className={classes} {...attributes}>
            <div className={blockName + '__status'}>{camp.isActive.toString()}</div>
            <div className={blockName + '__name'}>{camp.name}</div>
            <div className={blockName + '__impressions'}>{camp.total.impressions + 'M'}</div>
            <div className={blockName + '__clicks'}>{camp.total.clicks}</div>
            <div className={blockName + '__spend'}>{'$' + camp.total.spend}</div>
            <div className={blockName + '__revenue'}>{'$' + camp.total.revenue}</div>
            <div className={blockName + '__roi'}>{camp.total.roi + '%'}</div>
            <div className={blockName + '__profit'}>{'$' + camp.total.profit}</div>
            <div className={blockName + '__daily-spend'}>{camp.total.dailySpend * 100 + '%'}</div>
            <div className={blockName + '__actions'}>
                <CampBtn icon="align-left" />
                <CampBtn icon="sliders" />
                </div>
        </Tag>
    );

    return campRow;
};

CampRow.propTypes = propTypes;
CampRow.defaultProps = defaultProps;

export default CampRow;