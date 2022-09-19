import React from 'react'

class LightTankIcon extends React.Component {
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
                    transform="matrix(0.707106781186548 -0.707106781186548 0.707106781186548 0.707106781186548 0 10)"
                    fill="#000000" fillRule="evenodd" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" width="14" height="14"
                />
            </svg>
        )
    }
}

export default LightTankIcon