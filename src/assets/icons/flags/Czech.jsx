import React from 'react';

class Czech extends React.Component {
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
                <rect fill="#ffffff" width="100%" height="50%" />
				<rect fill="#ff0000" y="50%" width="100%" height="50%" />
                <polygon fill="#0000ff" points="0,0 24,12 0,24" />
            </svg>
        )
    }
};

export default Czech;