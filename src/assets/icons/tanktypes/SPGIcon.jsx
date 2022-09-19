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
                <rect
                    transform="translate(1, 1)"
                    fill="#000000" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" width="16px" height="16px"
                />
            </svg>
        )
    }
}

export default ATSPGIcon