import React from 'react';

class UKMoE extends React.Component {
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
                    <rect transform="translate(4,-1)" height="26px" width="16px" stroke="black" strokeWidth="1px" fill="#ffffff" />
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
                    <rect transform="translate(4,-1)" height="26px" width="16px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(28,-1)" height="26px" width="16px" stroke="black" strokeWidth="1px" fill="#ffffff" />
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
                    <rect transform="translate(4,-1)" height="26px" width="16px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(28,-1)" height="26px" width="16px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(52,-1)" height="26px" width="16px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                </svg>
            )
        }
    }
};

export default UKMoE;