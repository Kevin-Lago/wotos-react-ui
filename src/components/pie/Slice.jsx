import React from 'react';
import * as d3 from 'd3';
import './slice.css';
import Icons from '../../assets/icons/Icons';

const HoverLabel = (props) => (
    <g>
        <ellipse
            transform={'translate(' + -props.innerRadius + ',' + -props.innerRadius + ')'}
            rx={props.innerRadius} ry={props.innerRadius} cx={props.innerRadius} cy={props.innerRadius}
            fill={props.fill} fillOpacity="0.3" stroke="#000000" strokeOpacity="0.3" strokeWidth="1"
        />
        <text x={props.x - props.innerRadius / 2 - 14} y={props.y} className="hoverLabel">
            Battles: 
            {props.value.data}
        </text>
        <path />
        <text x={props.x - props.innerRadius / 2 - 2} y={props.y + 20} className="hoverLabel">
            wn8: 
            {props.avgWN8}
        </text>
    </g>
);

class Slice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: 0,
            isMounted: false
        };
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    componentDidMount() {
        this.setState({ isMounted: true })
    }

    onMouseOver(event) {
        // FIX ICONS ZINDEX
        event.currentTarget.parentElement.appendChild(event.currentTarget);
        this.setState({ isHovered: true, wasHovered: true });
        if (this.props.div !== 'WinRate' && (this.props.value.startAngle !== 0 || this.props.value.endAngle !== 6.283185307179586)) {
            this.props.value.startAngle -= .2;
            this.props.value.endAngle += .2;
        }
    }

    onMouseOut(event) {
        event.currentTarget.parentElement.appendChild(event.currentTarget);
        this.setState({ isHovered: false, wasHovered: false });
        if (this.props.div !== 'WinRate' && (this.props.value.startAngle !== 0 || this.props.value.endAngle !== 6.283185307179586)) {
            this.props.value.startAngle += .2;
            this.props.value.endAngle -= .2;
        }
    }

    componentWillUnmount() {
        this.setState({ isMounted: false })
    }

    animation(value) {
        var i = d3.interpolate(value.startAngle + 0.1, value.endAngle);
        console.log(i)
        // value => { 
        //     value.endAngle = i(value)
        //     return value; 
        // };
    }

    render() {

        let { sortGraphsByCategory, div, WRValue, avgWN8, value, label, fill, innerRadius = 0, outerRadius, cornerRadius, padAngle, ...props } = this.props;

        if (this.state.isHovered === true && this.state.isMounted === true) {
            outerRadius *= 1.1;
        }

        let arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .cornerRadius(cornerRadius)
            .padAngle(padAngle);

        let x = arc.centroid(value)[0];
        let y = arc.centroid(value)[1];

        return (
            <g
                className="slice"
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                onClick={sortGraphsByCategory}
                {...props}
            >
                <path id={label} className="piepath" d={arc(value)} fill={fill} />
                {this.state.isHovered === true && div !== 'WinRate' ? <HoverLabel fill={fill} value={value} avgWN8={avgWN8} innerRadius={innerRadius} x={0} y={0} /> : <div/>}
                <Icons icon={label} x={x} y={y} />
            </g>
        );

    }

};

export default Slice;