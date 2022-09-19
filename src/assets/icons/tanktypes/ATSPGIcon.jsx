import React from 'react'

class ATSPGIcon extends React.Component {
    render() {
        return (
            <svg
            id={this.props.icon}
                x={this.props.x}
                y={this.props.y}
                width="20px"
                height="20px"
            >
                <defs />
                <path
                    transform="translate(1, 1)"
                    fill="#000000" fillRule="evenodd" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" d="M0 0L18 0L9 18L0 0" height="18px" width="18px"
                />
            </svg>
        )
    }
}

export default ATSPGIcon