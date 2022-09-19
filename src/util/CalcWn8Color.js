import { scaleLinear } from 'd3';


const CalcWn8Color = (wn8) => {
    if (wn8 <= 500) {
        let color = scaleLinear().domain([0, 500])
            .range(["rgb(0,0,0)", "rgb(0,0,0)"]);
        return color(wn8)
    } else if (wn8 <= 700) {
        let color = scaleLinear().domain([500, 700])
            .range(["rgb(0,0,0)", "rgb(255,0,0)"]);
        return color(wn8)
    } else if (wn8 <= 900) {
        let color = scaleLinear().domain([700, 900])
            .range(["rgb(255,0,0)", "rgb(255,155,0)"]);
        return color(wn8)
    } else if (wn8 <= 1100) {
        let color = scaleLinear().domain([900, 1100])
            .range(["rgb(255,155,0)", "rgb(255,255,0)"]);
        return color(wn8)
    } else if (wn8 <= 1350) {
        let color = scaleLinear().domain([1100, 1350])
            .range(["rgb(255,255,0)", "rgb(0,255,0)"]);
        return color(wn8)
    } else if (wn8 <= 1550) {
        let color = scaleLinear().domain([1350, 1550])
            .range(["rgb(0,255,0)", "rgb(0,255,255)"]);
        return color(wn8)
    } else if (wn8 <= 1850) {
        let color = scaleLinear().domain([1550, 1850])
            .range(["rgb(0,255,255)", "rgb(0,0,255)"]);
        return color(wn8)
    } else if (wn8 <= 2050) {
        let color = scaleLinear().domain([1850, 2050])
            .range(["rgb(0,0,255)", "rgb(155,0,255)"]);
        return color(wn8)
    } else {
        let color = scaleLinear().domain([2050, 3000])
            .range(["rgb(155,0,255)", "rgb(255,0,255)"]);
        return color(wn8)
    }
}

export default CalcWn8Color;
