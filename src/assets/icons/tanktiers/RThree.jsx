import React from 'react'

class RThree extends React.Component {
    render() {
        return (
            <svg 
            id={this.props.icon}
                x={this.props.x}
                y={this.props.y}
                width="34px"
                height="24px"
            >
                <defs />
                <path transform="translate(1, 1)" fill="#000000" fillRule="evenodd" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"
                    d="M0 0.5L0 4L4 4L4 18L0 18L0 22L10 22L10 18L8 18L8 4L10 4L10 0L0.5 0"
                />
                <path transform="translate(13, 1)" fill="#000000" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"
                    d="M0 0.5L0 4L2 4L2 18L0 18L0 22L8 22L8 18L6 18L6  4L8 4L8 0L0.5 0"
                />
                <path transform="translate(23, 1)" fill="#000000" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"
                    d="M0 0.5L0 4L2 4L2 18L0 18L0 22L10 22L10 18L6 18L6 4L10 4L10 0L0.5 0"
                />
            </svg>
        )
    }
}

export default RThree