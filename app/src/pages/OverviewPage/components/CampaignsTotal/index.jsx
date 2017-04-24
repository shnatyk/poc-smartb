import React, { PropTypes } from 'react';
import { ListGroup } from 'reactstrap';

import ListGroupItem from './../ListGroupItem/index';

const propTypes = {
    isLoading: PropTypes.bool
};

const defaultProps = {
    isLoading: false
};

const CamapignsTotal = (props) => {
    const {
        isLoading
    } = props;

    const camapignsTotal = (
        <ListGroup>
            <ListGroupItem>

            </ListGroupItem>
        </ListGroup>
    );

    return camapignsTotal;
};

CamapignsTotal.propTypes = propTypes;
CamapignsTotal.defaultProps = defaultProps;

export default CamapignsTotal;
