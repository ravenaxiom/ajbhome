import React from 'react';
import PropTypes from 'prop-types';
import './NavigationItem.css';

const NavigationItem = (props) => {
    return (
        <div className="NavigationItem">
            {props.name}
        </div>
    )
};

NavigationItem.propTypes = {
    name: PropTypes.String,
};

export default NavigationItem;