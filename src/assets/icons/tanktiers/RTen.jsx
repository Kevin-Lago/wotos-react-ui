import React from 'react'

class RTen extends React.Component {
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
                <path transform="translate(1, 1)" fill="#000000" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"
                    d="M0 0.5L0 4L4 4L10 11L4 18L0 18L0 22L12 22L12 18L10 18L13 14L16 18L14 18L14 22L26 22L26 18L22 18L16 11L22 4L26 4L26 0L14 0L14 4L16 4L13 8L10 4L12 4L12 0L0.5 0"
                />
            </svg>

        )
    }
}

export default RTen