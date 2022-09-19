import { scaleLinear } from "d3";


const CalcWrColor = (Wr) => {
    if (Wr <= 40) {
        let color = scaleLinear().domain([0, 40])
            .range(["rgb(0,0,0)", "rgb(0,0,0)"]);
        return color(Wr)
    } else if (Wr <= 42) {
        let color = scaleLinear().domain([40, 42])
            .range(["rgb(0,0,0)", "rgb(255,0,0)"]);
        return color(Wr)
    } else if (Wr <= 45) {
        let color = scaleLinear().domain([42, 45])
            .range(["rgb(255,0,0)", "rgb(255,155,0)"]);
        return color(Wr)
    } else if (Wr <= 48) {
        let color = scaleLinear().domain([45, 48])
            .range(["rgb(255,155,0)", "rgb(255,255,0)"]);
        return color(Wr)
    } else if (Wr <= 51) {
        let color = scaleLinear().domain([48, 51])
            .range(["rgb(255,255,0)", "rgb(0,255,0)"]);
        return color(Wr)
    } else if (Wr <= 55) {
        let color = scaleLinear().domain([51, 55])
            .range(["rgb(0,255,0)", "rgb(0,255,255)"]);
        return color(Wr)
    } else if (Wr <= 58) {
        let color = scaleLinear().domain([55, 58])
            .range(["rgb(0,255,255)", "rgb(0,0,255)"]);
        return color(Wr)
    } else if (Wr <= 62) {
        let color = scaleLinear().domain([58, 62])
            .range(["rgb(0,0,255)", "rgb(155,0,255)"]);
        return color(Wr)
    } else {
        let color = scaleLinear().domain([62, 70])
            .range(["rgb(155,0,255)", "rgb(255,0,255)"]);
        return color(Wr)
    }
}

export default CalcWrColor;
