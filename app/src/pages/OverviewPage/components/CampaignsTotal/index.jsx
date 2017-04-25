import React, { PropTypes } from 'react';

import ListGroup from './../ListGroup/index';
import ListGroupItem from './../ListGroupItem/index';
import Total from './components/Total/index';

const propTypes = {
    blockName: PropTypes.string,
    isLoading: PropTypes.bool
};

const defaultProps = {
    blockName: 'campaigns-total',
    isLoading: false
};

const CamapignsTotal = (props) => {
    const {
        blockName,
        isLoading
    } = props;

    const camapignsTotal = (
        <ListGroup className={blockName}>
            <ListGroupItem>
                <Total
                    val="1.2M"
                    label="Impressions"
                    isLoading={isLoading}
                    blockMods={['red']} />
            </ListGroupItem>
            <ListGroupItem>
                <Total
                    val="3.4K"
                    label="Clicks"
                    isLoading={isLoading}
                    blockMods={['violet']} />
            </ListGroupItem>
            <ListGroupItem>
                <Total
                    val="0.2K"
                    label="Actions"
                    isLoading={isLoading}
                    blockMods={['yellow']} />
            </ListGroupItem>
            <ListGroupItem>
                <Total
                    val="$1.8K"
                    label="Spend"
                    isLoading={isLoading}
                    blockMods={['blue']} />
            </ListGroupItem>
            <ListGroupItem>
                <Total
                    val="$725"
                    label="Profit"
                    isLoading={isLoading}
                    blockMods={['green']} />
            </ListGroupItem>
            <ListGroupItem>
                <Total
                    val="-7%"
                    label="ROI"
                    isLoading={isLoading} />
            </ListGroupItem>
        </ListGroup>
    );

    return camapignsTotal;
};

CamapignsTotal.propTypes = propTypes;
CamapignsTotal.defaultProps = defaultProps;

export default CamapignsTotal;
