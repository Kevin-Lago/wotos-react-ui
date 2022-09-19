import React from 'react'

class RSeven extends React.Component {
    render() {
        return (
            <svg 
            id={this.props.icon}
                x={this.props.x}
                y={this.props.y}
                width="48px"
                height="24px"
            >
                <defs />
                <path transform="translate(1, 1)" fill="#000000" fillRule="evenodd" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"
                    d="M0 0.5L0 4L4 4L10 18L6 18L6 22L18 22L18 18L14 18L20 4L22 4L22 0L14 0L14 4L16 4L12 14L8 4L10 4L10 0L0.5 0"
                />
                <path transform="translate(25, 1)" fill="#000000" fillRule="evenodd" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"
                    d="M0 0.5L0 4L2 4L2 18L0 18L0 22L8 22L8 18L6 18L6  4L8 4L8 0L0.5 0"
                />
                <path transform="translate(35, 1)" fill="#000000" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"
                    d="M0 0.5L0 4L2 4L2 18L0 18L0 22L10 22L10 18L6 18L6 4L10 4L10 0L0.5 0"
                />
            </svg>
        )
    }
}

export default RSeven