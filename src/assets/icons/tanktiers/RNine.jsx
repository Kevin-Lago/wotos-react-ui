import React from 'react'

class RNine extends React.Component {
    render() {
        return (
            <svg 
            id={this.props.icon}
                x={this.props.x}
                y={this.props.y}
                width="38px"
                height="24px"
            >
                <defs />
                <path transform="translate(1, 1)" fill="#000000" fillRule="evenodd" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"
                    d="M0 0.5L0 4L4 4L4 18L0 18L0 22L10 22L10 18L8 18L8 4L10 4L10 0L0.5 0"
                />
                <path transform="translate(13, 1)" fill="#000000" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"
                    d="M0 0.5L0 4L2 4L8 11L2 18L0 18L0 22L10 22L10 18L8 18L11 14L14 18L12 18L12 22L24 22L24 18L20 18L14 11L20 4L24 4L24 0L12 0L12 4L14 4L11 8L8 4L10 4L10 0L0.5 0"
                />
            </svg>
        )
    }
}

export default RNine