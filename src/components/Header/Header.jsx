import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
    return (
        <header 
            className="Header"
        >
            <h1 className="Header__title">
                {props.title}
            </h1>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;