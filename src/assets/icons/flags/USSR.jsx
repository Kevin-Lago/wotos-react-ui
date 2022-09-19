import React from 'react';

class USSR extends React.Component {
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
                <rect fill="#ff0000" width="40" height="24" />
                <polygon transform="translate(4,1) scale(0.6)" points="4.576,0.416 1.76,8.25 8.7076,3.25 0.4576,3.25 7.26,8.25" fill="#ffff00" />
                <polygon transform="translate(5.4,2.4) scale(0.3)" points="4.576,0.416 1.76,8.25 8.7076,3.25 0.4576,3.25 7.26,8.25" fill="#ff0000" />
                <path transform="translate(4, 6) scale(0.05)" fill="#ffea00" fillRule="evenodd" stroke="#000000" strokeOpacity="0" strokeWidth="1" strokeLinecap="square" strokeLinejoin="bevel" d="M69.2877 0C146.136 61.2953 78.7001 139.37 34.3625 86.3027L28.6733 89.5816L23.2374 88.5209L23.3258 93.2497C19.0162 96.761 15.422 99.4474 10.2375 101.396C1.96795 104.692 -2.35089 112.435 1.31711 116.231C5.46542 120.676 15.0568 117.099 20.425 106.334C22.3258 102.431 24.0592 101.467 26.9497 98.553L31.9879 98.4646C92.0259 165.182 175.408 55.0253 69.2877 0" />
                <path transform="translate(5.2, 7.4) scale(0.05)" fill="#ffea00" fillRule="evenodd" stroke="#000000" strokeOpacity="0" strokeWidth="1" strokeLinecap="square" strokeLinejoin="bevel" d="M0 27.75L14.25 39L29.2823 26.3897L85.875 89.875L97.5 79.625L37.6571 17.6835L53.125 1.12501L30.5 0L0 27.75" />
            </svg>
        )
    }
};

export default USSR;