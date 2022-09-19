import React from 'react'

class ROne extends React.Component {
    render() {
        return (
            <svg 
            id={this.props.icon}
                x={this.props.x}
                y={this.props.y}
                width="14px"
                height="24px"
            >
                <defs />
                <path transform="translate(1, 1)" fill="#000000" fillRule="evenodd" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"
                    d="M0 0.5L0 4L4 4L4 18L0 18L0 22L12 22L12 18L8 18L8 4L12 4L12 0L0.5 0"
                />
            </svg>

        )
    }
}

export default ROne