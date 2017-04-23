import React, { PropTypes } from 'react';

import TitleBox from './../TitleBox/index';
import './../ListGroupItem/styles.css';
import './styles.css';

const propTypes = {
    icon: PropTypes.string,
    titleTxt: PropTypes.string,
    children: PropTypes.node,
};

const ListGroupTitle = (props) => {
    const {
        icon,
        titleTxt,
        children
    } = props;

    const listGroupTitle = (
        <TitleBox tag="li"
                  className="list-group-item"
                  icon={icon}
                  titleTxt={titleTxt}>
            {children}
        </TitleBox>
    );

    return listGroupTitle;
};

ListGroupTitle.propTypes = propTypes;

export default ListGroupTitle;