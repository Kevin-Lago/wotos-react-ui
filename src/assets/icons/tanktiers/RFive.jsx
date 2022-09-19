import React from 'react'

class RFive extends React.Component {
    render() {
        return (
            <svg 
            id={this.props.icon}
                x={this.props.x}
                y={this.props.y}
                width="28px"
                height="24px"
            >
                <defs />
                <path transform="translate(1, 1)" fill="#000000" fillRule="evenodd" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"
                    d="M0 0.5L0 4L4 4L10 18L6 18L6 22L18 22L18 18L14 18L20 4L24 4L24 0L14 0L14 4L16 4L12 14L8 4L10 4L10 0L0.5 0"
                />
            </svg>
        )
    }
}

export default RFive