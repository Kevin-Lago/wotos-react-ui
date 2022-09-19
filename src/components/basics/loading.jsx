import React from 'react';
import './loading.css'

const VisualComponent = () => (
    <svg
        id="loading"
        width="480pt"
        height="480pt"
        viewBox="0 0 480 480">
        <defs />
        <path id="shape0" transform="translate(36.8790674939592, 277.106166890239)" type="arc" rx="206.441576477007" ry="206.507749408345" cx="203.079369957052" cy="-37.1184164372926" start="1.64238851578737" end="2.96086700058397" open={true} d="M0 0C16.9255 92.6609 94.3887 162.122 188.312 168.86" fill="none" stroke="#000000" strokeWidth="9.6" strokeLinecap="round" strokeLinejoin="round" />
        {/* <path transform="translate(33.5168615693809, 239.987750452947)" type="arc" rx="206.441576477007" ry="206.507749408345" cx="206.44157588163" cy="4.1129440810117e-14" start="6.28318530717959" end="3.14151670630452" open="true" d="M0 0.0156837C0.00865886 114.064 92.4379 206.512 206.449 206.508C320.461 206.503 412.883 114.048 412.883 5.42742e-19" fill="none" stroke="#000000" strokeWidth="9.6" strokeLinecap="round" strokeLinejoin="round" /> */}
        <path transform="translate(18.7800263920642, 124.559990729624)" fill="#000000" fillRule="evenodd" stroke="#000000" strokeWidth="0.72" strokeLinecap="square" strokeLinejoin="bevel" d="M4.19941 155.1L1.89651 140.138L1.35465 140.049L1.3998 135.92L0.0451549 135.875L0.0903098 132.901L1.35465 132.901L1.35465 132.323L0 132.368L0.0451549 129.393L1.44496 129.349L1.83279 88.0307L1.03457 88.7842C3.48931 65.4991 7.929 42.2974 13.0046 19.1953L16.2329 4.1441L16.4564 4.01852L17.3185 0L19.4897 0.0627894L20.252 4.01094L20.5229 4.09974L23.7515 19.2619C28.6343 41.9023 32.8785 64.7938 35.1431 87.5598L34.273 87.5441L34.6881 129.377L36.4123 129.409L36.54 132.297L35.2628 132.266L35.2309 132.925L36.5081 132.925L36.4852 136.036L34.9236 136.037L34.916 140.165L34.2952 140.182L31.7506 155.027C32.4385 154.957 23.2548 154.982 4.19941 155.1Z" /> */}
    {/* <path transform="translate(48.9600022323, 159.72000739802)" fill="none" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M0 0L17.88 28.92" /> */}
        {/* <path transform="matrix(-0.99999995288137 0 0 0.999999985841996 25.3560259312729 160.020032453624)" fill="none" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M0 0L17.889 27.9" /> */}
    </svg>
);

class Loading extends React.Component {

    render() {
        return (
            <VisualComponent />
        )
    }

};

export default Loading;