import React from 'react';

class Japan extends React.Component {
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
                <rect fill="#ffffff" width="100%" height="100%" />
                <circle cx="50%" cy="50%" r="22%" fill="red" />
            </svg>
        )
    }
};

export default Japan;