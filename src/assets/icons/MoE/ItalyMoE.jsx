import React from 'react';

class ItalyMoE extends React.Component {
    render() {
        return (
            <svg
                id={this.props.icon}
                x={this.props.x}
                y={this.props.y}
                width="72px"
                height="24px"
            >
                <defs />
                <polygon transform="translate(2,2)" points="4.576,0.416 1.76,8.25 8.7076,3.25 0.4576,3.25 7.26,8.25" fill="#ffff00" />
            </svg>
        )
    }
};

export default ItalyMoE;