import React from 'react';
import Pie from './Pie'

class PieGraph extends React.Component {

    state = {
        size: undefined,
        updateTimer: false,
        battles: {},
        labels: {}
    }

    componentDidMount() {

        let div = document.getElementById(this.props.div);

        if (div !== null && this.state.size === undefined) {

            let size;
            let width = div.clientWidth;
            let height = div.clientHeight;

            // if (height >= width) {
            //     width = div.clientWidth;
            //     height = div.clientWidth;
            // } else {
            //     width = div.clientHeight;
            //     height = div.clientHeight;
            // }
            
            if (width >= height) {
                width = div.clientWidth;
                height = div.clientWidth;
            }

            let minViewportSize = Math.min(width, height);
            let radius = (minViewportSize * .9) / 2;
            let x = width / 2;
            let y = height / 2;

            size = {
                width: width,
                height: height,
                x: x,
                y: y,
                innerRadius: radius * .55,
                outerRadius: radius
            }

            this.setState({
                size: size,
                mounted: true
            })

        }
    }

    componentWillUnmount() {
        this.setState({
            mounted: false,
        })
    }

    render() {

        let { sortGraphsByCategory, div, stats, battles } = this.props;

        if (this.state.size !== undefined) {
            return (
                <svg width={this.state.size.width} height={this.state.size.height}>
                    <Pie
                        x={this.state.size.x}
                        y={this.state.size.y}
                        innerRadius={this.state.size.innerRadius}
                        outerRadius={this.state.size.outerRadius}
                        cornerRadius={3}
                        padAngle={.01}
                        div={div}
                        WN8={stats}
                        battles={Object.values(battles)}
                        labels={Object.keys(battles)}
                        sortGraphsByCategory={sortGraphsByCategory}
                    />
                </svg>
            );
        } else {
            return (
                <svg width="100%" height="100%" />
            );
        }
    }
};

export default PieGraph;