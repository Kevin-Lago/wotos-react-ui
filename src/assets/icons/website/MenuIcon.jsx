import React from 'react';

const HomeIcon = (props) => {
    const className = props.darkMode === true ? "wotos-light-menu-icon" : "wotos-dark-menu-icon";

    return (
        <svg
            className={className}
            viewBox="0 0 48 48"
        >
            <defs />
            <rect x="4" y="6" strokeWidth="2" height="4" width="40" />
            <rect x="4" y="23" strokeWidth="2" height="4" width="40" />
            <rect x="4" y="40" strokeWidth="2" height="4" width="40" />
        </svg>
    )
}

export default HomeIcon;
