import React, { Component } from 'react';
import { Progress as ProgressB4 } from 'reactstrap';

import './styles.css';

class Progress extends Component {
    render() {
        return (
            <ProgressB4 {...this.props} />
        );
    }
}

export default Progress;