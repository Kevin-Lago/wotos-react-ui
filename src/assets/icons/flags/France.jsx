import React from 'react';

class France extends React.Component {
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
                <rect fill="#0000ff" width="33%" height="100%" />
                <rect x="33%" fill="#ffffff" width="34%" height="100%" />
                <rect x="67%" fill="#ff0000" width="33%" height="100%" />
            </svg>
        )
    }
};

export default France;