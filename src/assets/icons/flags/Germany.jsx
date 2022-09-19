import React from 'react';

class Germany extends React.Component {
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
                <ellipse transform="translate(5.5, 2.5)" rx="9.5" ry="9.5" cx="9.5" cy="9.5" fill="#ffffff" />

                <rect transform="translate(0, 8)" fill="#ffffff" width="8" height="8" />
                <rect transform="translate(22, 8)" fill="#ffffff" width="18" height="8" />
                <rect transform="translate(11, 0)" fill="#ffffff" width="8" height="5" />
                <rect transform="translate(11, 19)" fill="#ffffff" width="8" height="5" />

                <ellipse transform="translate(9, 6)" rx="6" ry="6" cx="6" cy="6" fill="none" stroke="#000000" strokeWidth="1" />

                <rect transform="translate(0, 9)" fill="#000000" width="8" height="1" />
                <rect transform="translate(0, 11)" fill="#000000" width="7.5" height="2" />
                <rect transform="translate(0, 14)" fill="#000000" width="8" height="1" />

                <rect transform="translate(22, 9)" fill="#000000" width="18" height="1" />
                <rect transform="translate(22.5, 11)" fill="#000000" width="17.5" height="2" />
                <rect transform="translate(22, 14)" fill="#000000" width="18" height="1" />

                <rect transform="translate(12, 0)" fill="#000000" width="1" height="5" />
                <rect transform="translate(14, 0)" fill="#000000" width="2" height="4.5" />
                <rect transform="translate(17, 0)" fill="#000000" width="1" height="5" />

                <rect transform="translate(12, 19)" fill="#000000" width="1" height="5" />
                <rect transform="translate(14, 19.5)" fill="#000000" width="2" height="4.5" />
                <rect transform="translate(17, 19)" fill="#000000" width="1" height="5" />


                <rect transform="translate(14, 8)" fill="#000000" width="2" height="8" />
                <rect transform="translate(11, 11)" fill="#000000" width="8" height="2" />
                <rect transform="translate(12, 14)" fill="#000000" width="1" height="2" />
                <rect transform="translate(17, 14)" fill="#000000" width="1" height="2" />
                <rect transform="translate(11, 14)" fill="#000000" width="2" height="1" />
                <rect transform="translate(17, 14)" fill="#000000" width="2" height="1" />
                <rect transform="translate(12, 8)" fill="#000000" width="1" height="2" />
                <rect transform="translate(17, 8)" fill="#000000" width="1" height="2" />
                <rect transform="translate(11, 9)" fill="#000000" width="2" height="1" />
                <rect transform="translate(17, 9)" fill="#000000" width="2" height="1" />

                <path transform="translate(7.5, 4.5)" fill="none" stroke="#000000" strokeWidth="1" d="M5 0C5 0 1 1 0 5" />

                <path transform="translate(7.5, 14.5)" fill="none" stroke="#000000" strokeWidth="1" d="M0 0C0 0 0 3 5 5" />

                <path transform="translate(17.5, 14.5)" fill="none" stroke="#000000" strokeWidth="1" d="M5 0C5 0 4 4 0 5" />

                <path transform="translate(17.5, 4.5)" fill="none" stroke="#000000" strokeWidth="1" d="M5 5C5 2 1 0 0 0" />
            </svg>
        )
    }
};

export default Germany;