import React from 'react';

const HomeIcon = (props) => {
    let className = props.darkMode === true ? "darkNavIcon" : "lightNavIcon";
    className += props.active === true ? " active" : "";

    return (
        <svg
            className={className}
            viewBox="0 0 48 48"
        >
            <defs />
            <polygon
                points="6,22 24,6 42,22 36,22 36,42 28,42 28,28 20,28 20,42 12,42 12,22"
                strokeWidth="2"
            />
            <polygon
                points="20,42 20,28 28,28 28,42"
                strokeWidth="2"
            />
        </svg>
    )
}

export default HomeIcon;
