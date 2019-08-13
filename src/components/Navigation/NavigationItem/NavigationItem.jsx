import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavigationItem.css';

const NavigationItem = (props) => {
    return (
        <Link
            to={props.path} 
            className="NavigationItem"
            >
            {props.name}
        </Link>
        )
};

NavigationItem.propTypes = {
    // TODO this is wrong
    name: PropTypes.String,
};

export default NavigationItem;