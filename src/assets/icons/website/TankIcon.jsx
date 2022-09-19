import React, { Component } from 'react';

export default class TankIcon extends Component {
    render() {
        let className = this.props.darkMode === true ? "darkNavIcon" : "lightNavIcon";
        className += this.props.active === true ? " active" : "";
        
        return (
            <svg
                className={className}
                viewBox="0 0 48 48"
            >
                <defs />
                <polygon
                    points="14,17 14,11 16,9 26,9 28,11 42,11 42,15 29,15 30,17"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <polygon
                    points="6,26 6,21 24,17 12,19.66 12,17 24,17 32,17 41,26"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                {/* <polygon
                    points="6,33 6,27 42,27 42,33 34,38 12,38"
                    stroke-width="2"
                    stroke-linejoin="round"
                /> */}
                <polygon
                    points="6,28 6,26 41,26 42,27 38,32 10,32"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        )
    }
};
