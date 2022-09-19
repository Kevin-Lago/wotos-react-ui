import React from 'react';

class CzechMoE extends React.Component {
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
                    <rect transform="translate(4, 2)" height="20px" width="6px" stroke="black" strokeWidth="1px" fill="white" />
                    <rect transform="translate(14, 2)" height="20px" width="6px" stroke="black" strokeWidth="1px" fill="white" />
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
                    <rect transform="translate(4, 2)" height="20px" width="6px" stroke="black" strokeWidth="1px" fill="white" />
                    <rect transform="translate(14, 2)" height="20px" width="6px" stroke="black" strokeWidth="1px" fill="white" />

                    <rect transform="translate(28, 2)" height="20px" width="6px" stroke="black" strokeWidth="1px" fill="white" />
                    <rect transform="translate(38, 2)" height="20px" width="6px" stroke="black" strokeWidth="1px" fill="white" />
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
                    <rect transform="translate(4, 2)" height="20px" width="6px" stroke="black" strokeWidth="1px" fill="white" />
                    <rect transform="translate(14, 2)" height="20px" width="6px" stroke="black" strokeWidth="1px" fill="white" />

                    <rect transform="translate(28, 2)" height="20px" width="6px" stroke="black" strokeWidth="1px" fill="white" />
                    <rect transform="translate(38, 2)" height="20px" width="6px" stroke="black" strokeWidth="1px" fill="white" />

                    <rect transform="translate(52, 2)" height="20px" width="6px" stroke="black" strokeWidth="1px" fill="white" />
                    <rect transform="translate(62, 2)" height="20px" width="6px" stroke="black" strokeWidth="1px" fill="white" />
                </svg>
            )
        }
    }
};

export default CzechMoE;