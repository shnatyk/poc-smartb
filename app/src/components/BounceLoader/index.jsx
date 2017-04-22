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
                    backgroundStyle={{backgroundColor: '#FFF', opacity: '0.9'}} />
        );
    }
}

export default BounceLoader;