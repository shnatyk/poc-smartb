import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import MediaQuery from 'react-responsive';
import Toggle from 'react-toggle';

import Progress from './components/Progress/index';
import * as BEM from './../../../../../../helpers/bem';
import './styles.css';

const ToggleStatus = (data, onStatusClick) => {
    switch(data.status) {
        case (typeof data.status) !== 'string' :
            return (
                <Toggle
                    defaultChecked={data.status}
                    icons={false}
                    onChange={() => onStatusClick(data.id)}
                />
            );

            // return data.status;
        default: return data.status;
    }
};

class CampRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileShowStats: false
    }

    this.mobileToggleStats = this.mobileToggleStats.bind(this);
  }

  /* EVENTS */
  /* - - - - - - - - - - - - - - - - - - - - */
  // archive campaign modal
  mobileToggleStats(event) {
    event.preventDefault();
    this.setState({mobileShowStats: !this.state.mobileShowStats});
  }

  /* RENDER */
  /* - - - - - - - - - - - - - - - - - - - - */
  render() {

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
    } = this.props;

    const { mobileShowStats } = this.state;

    const bemClasses = BEM.classify(blockName, mobileShowStats ? [ ...blockMods, "mobile-open" ] : blockMods);
    const classes = className ? className + ' ' + bemClasses : bemClasses;

    const campRowImpressionsElem = (
      <div className={blockName + '__impressions'}>
        <MediaQuery maxWidth={991}>
          <span className={blockName + '__label'}>Impressions</span>
        </MediaQuery>
        <span className={blockName + '__val'}>{data.impressions}</span>
      </div>
    );

    const campRowClicksElem = (
      <div className={blockName + '__clicks'}>
        <MediaQuery maxWidth={991}>
          <span className={blockName + '__label'}>Clicks</span>
        </MediaQuery>
        <span className={blockName + '__val'}>{data.clicks}</span>
      </div>
    );

    const campRowSpendElem = (
      <div className={blockName + '__spend'}>
        <MediaQuery maxWidth={991}>
          <span className={blockName + '__label'}>Spend</span>
        </MediaQuery>
        <span className={blockName + '__val'}>{data.spend}</span>
      </div>
    );

    const campRowRevenueElem = (
      <div className={blockName + '__revenue'}>
        <MediaQuery maxWidth={991}>
          <span className={blockName + '__label'}>Revenue</span>
        </MediaQuery>
        <span className={blockName + '__val'}>{data.revenue}</span>
      </div>
    );

    const campRowRoiElem = (
      <div className={blockName + '__roi'}>
        <MediaQuery maxWidth={991}>
          <span className={blockName + '__label'}>ROI</span>
        </MediaQuery>
        <span className={blockName + '__val'}>{data.roi}</span>
      </div>
    );

    const campRowProfitElem = (
      <div className={blockName + '__profit'}>
        <MediaQuery maxWidth={991}>
          <span className={blockName + '__label'}>Profit</span>
        </MediaQuery>
        <span className={blockName + '__val'}>{data.profit}</span>
      </div>
    );

    const campRowDailySpendElem = (
      <div className={blockName + '__daily-spend'}>
        <MediaQuery maxWidth={991}>
          <span className={blockName + '__label'}>Daily Spend</span>
        </MediaQuery>
        <span className={blockName + '__val'}>
          { Number.isInteger(data.dailySpend) ? <Progress value={data.dailySpend} /> : data.dailySpend }
        </span>
      </div>
    );

    const campRowActionsElem = (
      <div className={blockName + '__actions'}>
          {btn1}
          {btn2}
      </div>
    );

    return (
        <Tag className={classes} {...attributes}>
            <div className={blockName + '__status'}>
                {ToggleStatus(data, onStatusClick)}
            </div>
            <div className={blockName + '__name'}>
                {data.name}
            </div>
            <MediaQuery maxWidth={991}>
              <FontAwesome
                className={blockName + '__show-stats-btn'}
                tag="a"
                href="#"
                name={"angle-right"}
                onClick={this.mobileToggleStats}
              />
            </MediaQuery>

            <MediaQuery maxWidth={991}>
              <div className={blockName + '__stats-wrapper'}>
                <div className="flex-break-line" />
                {campRowImpressionsElem}
                {campRowClicksElem}
                {campRowSpendElem}
                {campRowRevenueElem}
                {campRowRoiElem}
                {campRowProfitElem}
                {campRowDailySpendElem}
                {campRowActionsElem}
              </div>
            </MediaQuery>

            <MediaQuery minWidth={992}>
              {campRowImpressionsElem}
            </MediaQuery>
            <MediaQuery minWidth={992}>
              {campRowClicksElem}
            </MediaQuery>
            <MediaQuery minWidth={992}>
              {campRowSpendElem}
            </MediaQuery>
            <MediaQuery minWidth={992}>
              {campRowRevenueElem}
            </MediaQuery>
            <MediaQuery minWidth={992}>
              {campRowRoiElem}
            </MediaQuery>
            <MediaQuery minWidth={992}>
              {campRowProfitElem}
            </MediaQuery>
            <MediaQuery minWidth={992}>
              {campRowDailySpendElem}
            </MediaQuery>
            <MediaQuery minWidth={992}>
              {campRowActionsElem}
            </MediaQuery>
        </Tag>
    );

  }
}

// const CampRow = (props) => {
//
// };

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

const defaultProps = {
    tag: 'div',
    blockName: 'camp-row'
};

CampRow.propTypes = propTypes;
CampRow.defaultProps = defaultProps;
