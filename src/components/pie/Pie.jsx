import React from 'react';
import * as d3 from 'd3';
import Slice from './Slice';

function translate(x, y) {
    return `translate(${x}, ${y})`;
};

/* 
FIX THE 0 PROBLEM
*/

class Pie extends React.Component {
    constructor(props) {
        super(props);
        this.renderSlice = this.renderSlice.bind(this);
    }

    state = {
        updateTimer: false,
        battles: {},
    }

    handleClick() {
        console.log('worked')
    }

    calcWN8Color(avgWN8) {
        if (avgWN8 <= 500) {
            let color = d3.scaleLinear().domain([0, 500])
                .range(["rgb(0,0,0)", "rgb(0,0,0)"]);
            return color(avgWN8)
        } else if (avgWN8 <= 700) {
            let color = d3.scaleLinear().domain([500, 700])
                .range(["rgb(0,0,0)", "rgb(255,0,0)"]);
            return color(avgWN8)
        } else if (avgWN8 <= 900) {
            let color = d3.scaleLinear().domain([700, 900])
                .range(["rgb(255,0,0)", "rgb(255,155,0)"]);
            return color(avgWN8)
        } else if (avgWN8 <= 1100) {
            let color = d3.scaleLinear().domain([900, 1100])
                .range(["rgb(255,155,0)", "rgb(255,255,0)"]);
            return color(avgWN8)
        } else if (avgWN8 <= 1350) {
            let color = d3.scaleLinear().domain([1100, 1350])
                .range(["rgb(255,255,0)", "rgb(0,255,0)"]);
            return color(avgWN8)
        } else if (avgWN8 <= 1550) {
            let color = d3.scaleLinear().domain([1350, 1550])
                .range(["rgb(0,255,0)", "rgb(0,255,255)"]);
            return color(avgWN8)
        } else if (avgWN8 <= 1850) {
            let color = d3.scaleLinear().domain([1550, 1850])
                .range(["rgb(0,255,255)", "rgb(0,0,255)"]);
            return color(avgWN8)
        } else if (avgWN8 <= 2050) {
            let color = d3.scaleLinear().domain([1850, 2050])
                .range(["rgb(0,0,255)", "rgb(155,0,255)"]);
            return color(avgWN8)
        } else {
            let color = d3.scaleLinear().domain([2050, 3000])
                .range(["rgb(155,0,255)", "rgb(255,0,255)"]);
            return color(avgWN8)
        }
    }

    calcWRColor(WR) {
        if (WR <= 40) {
            let color = d3.scaleLinear().domain([0, 40])
                .range(["rgb(0,0,0)", "rgb(0,0,0)"]);
            return color(WR)
        } else if (WR <= 42) {
            let color = d3.scaleLinear().domain([40, 42])
                .range(["rgb(0,0,0)", "rgb(255,0,0)"]);
            return color(WR)
        } else if (WR <= 45) {
            let color = d3.scaleLinear().domain([42, 45])
                .range(["rgb(255,0,0)", "rgb(255,155,0)"]);
            return color(WR)
        } else if (WR <= 48) {
            let color = d3.scaleLinear().domain([45, 48])
                .range(["rgb(255,155,0)", "rgb(255,255,0)"]);
            return color(WR)
        } else if (WR <= 51) {
            let color = d3.scaleLinear().domain([48, 51])
                .range(["rgb(255,255,0)", "rgb(0,255,0)"]);
            return color(WR)
        } else if (WR <= 55) {
            let color = d3.scaleLinear().domain([51, 55])
                .range(["rgb(0,255,0)", "rgb(0,255,255)"]);
            return color(WR)
        } else if (WR <= 58) {
            let color = d3.scaleLinear().domain([55, 58])
                .range(["rgb(0,255,255)", "rgb(0,0,255)"]);
            return color(WR)
        } else if (WR <= 62) {
            let color = d3.scaleLinear().domain([58, 62])
                .range(["rgb(0,0,255)", "rgb(155,0,255)"]);
            return color(WR)
        } else {
            let color = d3.scaleLinear().domain([62, 70])
                .range(["rgb(155,0,255)", "rgb(255,0,255)"]);
            return color(WR)
        }
    }

    render() {

        let { x, y, battles } = this.props;
        let pie = d3.pie().sort(null);

        battles.forEach((category, i) => {
            if (category <= 5) {
                battles.splice(i, 1);
            }
        })

        return (
            <g transform={translate(x, y)}>
                {pie(battles).map(this.renderSlice)}
            </g>
        );

    }

    renderSlice(value, i) {
        let { sortGraphsByCategory, labels, div, innerRadius, outerRadius, cornerRadius, padAngle } = this.props;
        
        let color;
        let avgWN8;
        let WRValue;

        if (this.props.div === 'WinRate') {
            let battles = this.props.battles
            let WR = Math.round(((battles[0] / (battles[0] + battles[1] + battles[2])) * 100) * 100) / 100
            let colors = [this.calcWRColor(WR), 'rgb(0, 155, 255)', 'rgb(255, 0, 0)'];
            color = colors[i];
            let WRValues = [
                WR,
                Math.round(((battles[1] / (battles[0] + battles[1] + battles[2])) * 100) * 100) / 100,
                Math.round(((battles[2] / (battles[0] + battles[1] + battles[2])) * 100) * 100) / 100
            ]
            WRValue = WRValues[i]
        } else if (Object.keys(this.props.WN8).length !== 0) {
            avgWN8 = Math.round(this.props.WN8[this.props.labels[i]][0] / this.props.WN8[this.props.labels[i]][1]);
            color = this.calcWN8Color(avgWN8);
        }
        return (
            <Slice key={i}
                sortGraphsByCategory={sortGraphsByCategory}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                cornerRadius={cornerRadius}
                padAngle={padAngle}
                value={value}
                label={labels[i]}
                fill={color}
                avgWN8={avgWN8}
                div={div}
                WRValue={WRValue}
            />
        );
    }
}

export default Pie