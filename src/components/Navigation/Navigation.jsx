import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './Navigation.css';

const Navigation = (props) => {
    function renderNavigationItems () {
        return props.navigationItems.map((i) => <NavigationItem {...i} /> );
    }

    return (
        <nav 
            className="Navigation"
            >
            {renderNavigationItems()}
        </nav>
    );
}

export default Navigation;