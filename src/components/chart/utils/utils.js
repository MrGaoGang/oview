import {
    isEmpty,
    getX,
    getY
} from "./string"

function renderPie({
    chart,
    colors,
    position,
    colorFieldName,
    options
}) {
    if (options.coord.options.transposed == undefined) {
        options.coord.options.transposed = true;
    }
    chart.coord(options.coord.coordType, options.coord.options);
    chart.axis(false); //没有坐标轴

    if (isEmpty(getY(position))) { //默认为a*percent
        position = 'a*percent';
    } else {
        position = 'a*' + getY(position);
    }
    chart.interval()
        .position(position)
        .color(colorFieldName,
            colors)
        .adjust('stack').style({
            lineWidth: 1,
            stroke: '#fff',
            lineJoin: 'round',
            lineCap: 'round'
        });

    if (!isEmpty(options.animation)) {
        chart.animate(options.animation);
    } else {
        chart.animate({
            appear: {
                duration: 1200,
                easing: 'bounceOut'
            }
        });
    }
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
function renderHistogram({
    chart,
    colors,
    position,
    colorFieldName,
    options
}) {

    let obj = chart.interval().position(position);

    if (options.coord.options.transposed == undefined) {
        options.coord.options.transposed = false;
    }
    chart.coord(options.coord.coordType, options.coord.options);

    if (!isEmpty(colorFieldName)) {
        obj.color(colorFieldName,
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

/**
 * 渲染折线图
 * @param {*} chart 
 * @param {*} colors 
 * @param {*} position 
 * @param {*} fieldName 
 * @param {*} options 
 */
function renderLine({
    chart,
    position,
    options
}) {


    if (!isEmpty(options.axis.fieldName) && !isEmpty(options.axis.config)) {
        chart.axis(options.axis.fieldName, options.axis.config);
    }


    chart.line({
        connectNulls: true // 配置，连接空值数据
    }).position(position).shape(options.shape);
    if (options.type == "point") {
        chart.point().position(position).shape(options.shape);
    }

    if (!isEmpty(options.animation)) {
        chart.animate(options.animation);
    }


}



export {
    renderPie,
    renderHistogram,
    renderLine
}