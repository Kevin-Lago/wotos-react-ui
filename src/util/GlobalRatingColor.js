import { scaleLinear } from "d3";


const GlobalRatingColor = (globalRating) => {
    if (globalRating <= 1300) {
        let color = scaleLinear().domain([0, 1300])
            .range(["rgb(0,0,0)", "rgb(0,0,0)"]);
        return color(globalRating)
    } else if (globalRating <= 2600) {
        let color = scaleLinear().domain([1300, 2600])
            .range(["rgb(0,0,0)", "rgb(255,0,0)"]);
        return color(globalRating)
    } else if (globalRating <= 3900) {
        let color = scaleLinear().domain([2600, 3900])
            .range(["rgb(255,0,0)", "rgb(255,155,0)"]);
        return color(globalRating)
    } else if (globalRating <= 5200) {
        let color = scaleLinear().domain([3900, 5200])
            .range(["rgb(255,155,0)", "rgb(255,255,0)"]);
        return color(globalRating)
    } else if (globalRating <= 6500) {
        let color = scaleLinear().domain([5200, 6500])
            .range(["rgb(255,255,0)", "rgb(0,255,0)"]);
        return color(globalRating)
    } else if (globalRating <= 7900) {
        let color = scaleLinear().domain([6500, 7900])
            .range(["rgb(0,255,0)", "rgb(0,255,255)"]);
        return color(globalRating)
    } else if (globalRating <= 9200) {
        let color = scaleLinear().domain([7900, 9200])
            .range(["rgb(0,255,255)", "rgb(0,0,255)"]);
        return color(globalRating)
    } else if (globalRating <= 10500) {
        let color = scaleLinear().domain([9200, 10500])
            .range(["rgb(0,0,255)", "rgb(155,0,255)"]);
        return color(globalRating)
    } else {
        let color = scaleLinear().domain([10500, 12000])
            .range(["rgb(155,0,255)", "rgb(255,0,255)"]);
        return color(globalRating)
    }
}

export default GlobalRatingColor;
