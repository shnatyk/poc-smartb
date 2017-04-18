import React, { Component } from 'react';

import * as BEM from './../../services/bem';
import './styles.css';

class Page extends Component {
    render() {
        const name = "page";
        return (
            <div className={ BEM.namify(name, this.props.mods) }>
                {this.props.children}
            </div>
        );
    }
}

export default Page;