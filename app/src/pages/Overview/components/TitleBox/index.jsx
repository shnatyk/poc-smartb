import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import * as BEM from '../../../../services/helpers/bem';
import './styles.css';

const blockName = "title-box"

const TitleBox = ({mods, icon, name, children}) => (
    <div className={BEM.namify(blockName, mods)}>
        <Row>
            <Col className={blockName + '__left'} xs="6" >
                <FontAwesome className={blockName + '__icon'} name={icon} />
                <div className={blockName + '__name'}>{name}</div>
            </Col>
            <Col className={blockName + '__right'} xs="6">
                {children}
            </Col>
        </Row>
    </div>
);

export default TitleBox;