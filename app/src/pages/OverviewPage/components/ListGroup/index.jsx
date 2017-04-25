import React, { Component } from 'react';
import { ListGroup as ListGroupB4 } from 'reactstrap';

import './styles.css';

class ListGroup extends Component {
    render() {
        return (
            <ListGroupB4 {...this.props} />
        );
    }
}

export default ListGroup;