import React from 'react';

class GermanyMoE extends React.Component {
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
                    <rect transform="translate(2, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(10, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(18, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
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
                    <rect transform="translate(2, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(10, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(18, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(26, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(34, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(42, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
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
                    <rect transform="translate(2, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(10, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(18, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(26, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(34, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(42, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(50, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(58, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                    <rect transform="translate(66, -1)" width="4px" height="26px" stroke="black" strokeWidth="1px" fill="#ffffff" />
                </svg>
            )
        }
    }
};

export default GermanyMoE;