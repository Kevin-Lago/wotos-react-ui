import React from 'react';

class Poland extends React.Component {
    render() {
        return (
            <svg
                id={this.props.icon}
                x={this.props.x}
                y={this.props.y}
                width="40px"
                height="24px"
            >
                <defs />
                <rect fill="#ffffff" width="40" height="12" />
                <rect transform="translate(0, 12)" fill="#ff0000" width="40" height="12" />
            </svg>
        )
    }
};

export default Poland;