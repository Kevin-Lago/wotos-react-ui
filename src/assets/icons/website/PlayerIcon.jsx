import React from 'react';

const PlayerIcon = (props) => {
    let className = props.darkMode === true ? "darkNavIcon" : "lightNavIcon";
    className += props.active === true ? " active" : "";

    return (
        <svg
            className={className}
            viewBox="0 0 48 48"
        >
            <defs />
            <rect transform="translate(8, 18)" height="26" width="32" rx="16" ry="12" strokeWidth="2" />
            <circle transform="translate(24, 14)" strokeWidth="2" r="10" />
        </svg>
    )
}

export default PlayerIcon;
