import React from 'react'

class MediumTankIcon extends React.Component {
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
                    transform="matrix(0.500282739019664 -0.500282739019664 0.500274560151696 0.500274560151696 1.866714958 10.33338035)"
                    fill="#000000" fillRule="evenodd" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" width="8px" height="20px"
                />
                <rect
                    transform="matrix(0.500282742833817 -0.500282742833817 0.500274575745724 0.500274575745724 6.736721074 5.463746325)"
                    fill="#000000" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" width="8px" height="20px"
                />
            </svg>
        )
    }
}

export default MediumTankIcon