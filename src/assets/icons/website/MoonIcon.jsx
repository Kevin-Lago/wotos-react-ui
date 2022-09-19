import React from 'react';

class MoonIcon extends React.Component {
    render() {
        return (
            <svg
                className="menuIcon"
                width="28px"
                height="28px"
            >
                <defs />
                <path transform="translate(1,1) scale(3)" fill="#ffffff" fillRule="evenodd" stroke="#000000" strokeOpacity="0" strokeWidth="0.24" strokeLinecap="square" strokeLinejoin="bevel" d="M0 6.795C4.43135 6.90397 7.0813 5.08307 6.72 0C8.57614 2.25248 8.82341 4.41249 7.2 6.465C3.99611 9.37644 1.8992 8.43022 0 6.795"/>
            </svg>
        )
    }
};

export default MoonIcon;