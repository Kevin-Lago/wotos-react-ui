import React from 'react';

class UK extends React.Component {
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
                <rect fill="#ffffff" fillRule="evenodd" width="40" height="24" />
                <rect transform="translate(0, 10)" fill="#ff0000" fillRule="evenodd" width="40" height="4" />
                <rect transform="translate(18, 0)" fill="#ff0000" fillRule="evenodd" width="4" height="24" />
                
                <path transform="translate(24, 0)" fill="#0000ff" fillRule="evenodd" d="M0 7L12 0L0 0" />
                <path transform="translate(24, 0)" fill="#ff0000" fillRule="evenodd" d="M0 8L2 8L16 0L14 0" />
                <path transform="translate(30, 3)" fill="#0000ff" fillRule="evenodd" d="M0 5L10 5L10 0" />
                
                <path transform="translate(4, 0)" fill="#0000ff" fillRule="evenodd" d="M0 0L12 7L12 0" />
                <path transform="translate(0, 0)" fill="#ff0000" fillRule="evenodd" d="M0 1.3L12 8L14 8L0 0" />
                <path transform="translate(0, 3)" fill="#0000ff" fillRule="evenodd" d="M0 5L10 5L0 0" />
                
                <path transform="translate(24, 17)" fill="#0000ff" fillRule="evenodd" d="M0 7L12 7L0 0" />
                <path transform="translate(0, 16)" fill="#ff0000" fillRule="evenodd" d="M0 8L2 8L16 0L14 0" />
                <path transform="translate(30, 16)" fill="#0000ff" fillRule="evenodd" d="M0 0L10 5L10 0" />
                
                <path transform="translate(4, 17)" fill="#0000ff" fillRule="evenodd" d="M0 7L12 7L12 0" />
                <path transform="translate(26, 16)" fill="#ff0000" fillRule="evenodd" d="M0 0L14 8L14 6.7L2 0" />
                <path transform="translate(0, 16)" fill="#0000ff" fillRule="evenodd" d="M0 5L10 0L0 0" />
                
            </svg>
        )
    }
};

export default UK;