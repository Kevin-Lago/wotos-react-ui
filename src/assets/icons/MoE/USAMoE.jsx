import React from 'react';

class USAMoE extends React.Component {
    render() {
        if (this.props.MoE === 1) {
            return (
                <svg
                    id={this.props.icon}
                    x={this.props.x}
                    y={this.props.y}
                    width="24px"
                    height="24px"
                >
                    <defs />
                    <polygon transform="translate(0,0)" points="12,0 4,24 24,8.5 0,8.5 20,24" fill="#000000" />
                    <polygon transform="translate(2.45,2.45) scale(0.8)" points="12,0 4,24 24,8.5 0,8.5 20,24" fill="#ffffff" />
                </svg>
            )
        } else if (this.props.MoE === 2) {
            return (
                <svg
                    id={this.props.icon}
                    x={this.props.x}
                    y={this.props.y}
                    width="48px"
                    height="24px"
                >
                    <defs />
                    <polygon transform="translate(0,0)" points="12,0 4,24 24,8.5 0,8.5 20,24" fill="#000000" />
                    <polygon transform="translate(2.45,2.45) scale(0.8)" points="12,0 4,24 24,8.5 0,8.5 20,24" fill="#ffffff" />
                    <polygon transform="translate(24,0)" points="12,0 4,24 24,8.5 0,8.5 20,24" fill="#000000" />
                    <polygon transform="translate(26.45,2.45) scale(0.8)" points="12,0 4,24 24,8.5 0,8.5 20,24" fill="#ffffff" />
                </svg>
            )
        } else {
            return (
                <svg
                    id={this.props.icon}
                    x={this.props.x}
                    y={this.props.y}
                    width="72px"
                    height="24px"
                >
                    <defs />
                    <polygon transform="translate(0,0)" points="12,0 4,24 24,8.5 0,8.5 20,24" fill="#000000" />
                    <polygon transform="translate(2.45,2.45) scale(0.8)" points="12,0 4,24 24,8.5 0,8.5 20,24" fill="#ffffff" />
                    <polygon transform="translate(24,0)" points="12,0 4,24 24,8.5 0,8.5 20,24" fill="#000000" />
                    <polygon transform="translate(26.45,2.45) scale(0.8)" points="12,0 4,24 24,8.5 0,8.5 20,24" fill="#ffffff" />
                    <polygon transform="translate(48,0)" points="12,0 4,24 24,8.5 0,8.5 20,24" fill="#000000" />
                    <polygon transform="translate(50.45,2.45) scale(0.8)" points="12,0 4,24 24,8.5 0,8.5 20,24" fill="#ffffff" />
                </svg>
            )
        }
    }
};

export default USAMoE;