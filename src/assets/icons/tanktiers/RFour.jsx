import React from 'react'

class RFour extends React.Component {
    render() {
        return (
            <svg 
            id={this.props.icon}
                x={this.props.x}
                y={this.props.y}
                width="36px"
                height="24px"
            >
                <defs />
                <path transform="translate(1, 1)" fill="#000000" fillRule="evenodd" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"
                    d="M0 0.5L0 4L4 4L4 18L0 18L0 22L10 22L10 18L8 18L8 4L10 4L10 0L0.5 0"
                />
                <path transform="translate(13, 1)" fill="#000000" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"
                    d="M0 0.5L0 4L2 4L8 18L4 18L4 22L16 22L16 18L12 18L18 4L22 4L22 0L12 0L12 4L14 4L10 14L6 4L8 4L8 0L0.5 0"
                />
            </svg>
        )
    }
}

export default RFour