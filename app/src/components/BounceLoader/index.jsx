import React, { Component } from 'react';
import Loader from 'react-loader-advanced';

import BounceSpinner from './../BounceSpinner';
import './styles.css';

class BounceLoader extends Component {
    render() {
        const spinner = <BounceSpinner />;
        return (
            <Loader {...this.props}
                    message={spinner}
                    backgroundStyle={{backgroundColor: 'rgba(255,255,255, 0.5)'}} />
        );
    }
}

export default BounceLoader;