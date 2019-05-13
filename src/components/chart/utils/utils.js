import {
    isEmpty
} from "./string"

function renderPie(chart, colors, position, fieldName, options) {
    if (options.coord.options.transposed == undefined) {
        options.coord.options.transposed = true;
    }
    chart.coord(options.coord.coordType, options.coord.options);
    chart.axis(false); //没有坐标轴

    if (isEmpty(position)) { //默认为a*percent
        position = 'a*percent';
    }
    chart.interval()
        .position(position)
        .color(fieldName,
            colors)
        .adjust('stack').style({
            lineWidth: 1,
            stroke: '#fff',
            lineJoin: 'round',
            lineCap: 'round'
        }).animate({
            appear: {
                duration: 1200,
                easing: 'bounceOut'
            }
        });
    if (options.pieLabel != null) {
        chart.pieLabel(options.pieLabel);
    }

}
/**
 * 柱状图
 * @param {*} chart 
 * @param {*} fieldName 
 * @param {*} options 
 */
function renderHistogram(chart, colors, position, fieldName, options) {

    let obj = chart.interval().position(position);

    if (options.coord.options.transposed == undefined) {
        options.coord.options.transposed = false;
    }
    chart.coord(options.coord.coordType, options.coord.options);

    if (!isEmpty(fieldName)) {
        obj.color(fieldName,
            colors);
    }

    if (!isEmpty(options.adjust)) {
        obj.adjust(options.adjust);
    }

    if (!isEmpty(options.animation)) {
        obj.animate(options.animation);
    } else {
        obj.animate({
            appear: {
                duration: 500,
                easing: 'groupScaleInY'
            }
        });
    }


}




export {
    renderPie,
    renderHistogram
}