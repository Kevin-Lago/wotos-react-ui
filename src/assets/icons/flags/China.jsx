import React from 'react';

class China extends React.Component {
    render() {
        return (
            <svg
                id={this.props.icon}
                x={this.props.x}
                y={this.props.y}
                width="40px"
                height="24px"
            >
                <defs />
                <rect fill="#ff0000" stroke="none" width="40" height="24" />
                <polygon transform="translate(2.7,2.5)" points="4.576,0.416 1.76,8.25 8.7076,3.25 0.4576,3.25 7.26,8.25" fill="#ffff00" />
                <polygon transform="rotate(-52) translate(4, 10)" points="1.8304,0.1664 0.704,3.3 3.48304,1.3 0.18304,1.3 2.904,3.3" fill="#ffff00" />
                <polygon transform="rotate(-26) translate(10, 10)" points="1.8304,0.1664 0.704,3.3 3.48304,1.3 0.18304,1.3 2.904,3.3" fill="#ffff00" />
                <polygon transform="translate(14,8)" points="1.8304,0.1664 0.704,3.3 3.48304,1.3 0.18304,1.3 2.904,3.3" fill="#ffff00" />
                <polygon transform="rotate(26) translate(15, 4)" points="1.8304,0.1664 0.704,3.3 3.48304,1.3 0.18304,1.3 2.904,3.3" fill="#ffff00" />
            </svg>
        )
    }
};

export default China;