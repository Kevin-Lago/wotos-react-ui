import React from 'react'

class HeavyTankIcon extends React.Component {
    render() {
        return (
            <svg
            id={this.props.icon}
                x={this.props.x}
                y={this.props.y}
                width="22px"
                height="22px"
            >
                <defs />
                <rect
                    transform="matrix(0.500271439528983 -0.500271439528982 0.500283113067764 0.500283113067764 0.866635847 10.33350944)"
                    fill="#000000" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" width="6.108467961px" height="20px"
                />
                <rect
                    transform="matrix(0.500271428840874 -0.500271428840874 0.500283109784836 0.500283109784836 4.822287542 6.377785733)"
                    fill="#000000" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" width="6.225198948px" height="20px"
                />
                <rect
                    transform="matrix(0.500271428840874 -0.500271428840874 0.500283109784836 0.500283109784836 8.644324698 2.555675193)"
                    fill="#000000" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" width="6.108268593px" height="20px"
                />
            </svg>
        )
    }
}

export default HeavyTankIcon