import React from 'react';

class Sweden extends React.Component {
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
                <rect fill="rgb(0,127,229)" width="100%" height="100%" />
                <rect fill="rgb(255,204,0)" x="25%" width="12.5%" height="100%" />
                <rect fill="rgb(255,204,0)" y="37.5%" width="100%" height="20%" />
            </svg>
        )
    }
};

export default Sweden;