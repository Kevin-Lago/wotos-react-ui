import React from 'react';

class Italy extends React.Component {
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
                <rect fill="#006600" width="13.3" height="24" />
                <rect transform="translate(13.4, 0)" fill="#ffffff" width="13.4" height="24" />
                <rect transform="translate(26.7, 0)" fill="#ff0000" width="13.3" height="24" />
            </svg>
        )
    }
};

export default Italy;