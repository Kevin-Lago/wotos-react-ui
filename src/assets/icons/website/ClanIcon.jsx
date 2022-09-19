import React from 'react';

const ClanIcon = (props) => {
    let className = props.darkMode === true ? "darkNavIcon" : "lightNavIcon";
    className += props.active === true ? " active" : "";

    return (
        <svg
            className={className}
            viewBox="0 0 48 48"
        >
            <defs />
            <rect transform="translate(24, 18)" height="16" width="20" rx="9" ry="7" strokeWidth="2" />
            <circle transform="translate(34, 14)" strokeWidth="2" r="6" />

            <rect transform="translate(4, 18)" height="16" width="20" rx="9" ry="7" strokeWidth="2" />
            <circle transform="translate(14, 14)" strokeWidth="2" r="6" />

            <rect transform="translate(12, 22)" height="20" width="24" rx="11" ry="9" strokeWidth="2" />
            <circle transform="translate(24, 18)" strokeWidth="2" r="8" />
        </svg>
    )
}

export default ClanIcon;
