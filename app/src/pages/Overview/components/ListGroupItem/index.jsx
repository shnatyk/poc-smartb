import React, { Component } from 'react';
import { ListGroupItem as ListGroupItemB4 } from 'reactstrap';

import './styles.css';

class ListGroupItem extends Component {
    render() {
        return (
            <ListGroupItemB4 {...this.props} />
        );
    }
}

export default ListGroupItem;