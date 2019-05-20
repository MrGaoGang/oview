import {
    isEmpty,
    getX,
    getY
} from "./string"


/**
 * 渲染饼状图
 */
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
        .adjust(options.adjust).style({
            lineWidth: 1,
            stroke: '#fff',
            lineJoin: 'round',
            lineCap: 'round'
        }).style(options.chartStyle);

    chart.animate(!isEmpty(options.animate) ? options.animate : {
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

    obj.animate(!isEmpty(options.animate) ? options.animate : {
        appear: {
            duration: 500,
            easing: 'groupScaleInY'
        }
    }).style(options.chartStyle)




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
    colors,
    position,
    colorFieldName,
    options
}) {

    if (options.isArea) {
        let area = chart.area().position(position);
        area.shape(options.shape).animate(options.animate).style(options.chartStyle).adjust(options.adjust);
        if (options.isMutiLine) {
            area.color(colorFieldName, colors);
        }
    }
    let line = chart.line({
        connectNulls: options.showNulls // 配置，连接空值数据
    }).position(position);
    line.shape(options.shape).animate(options.animate).style(options.chartStyle).adjust(options.adjust);
    if (options.isMutiLine) {
        line.color(colorFieldName, colors);
    }
    if (options.type == "point") {
        let point = chart.point().position(position);
        point.shape(options.shape).animate(options.animate).style(options.chartStyle).adjust(options.adjust);

        if (options.isMutiLine) {
            point.color(colorFieldName, colors);
        }
    }
}

/**
 * 渲染雷达图
 */
function renderRadar({
    chart,
    colors,
    position,
    colorFieldName,
    options
}) {
    chart.coord('polar');
    if (options.isArea) {
        chart.area().position(position).style(options.chartStyle).color(colorFieldName).animate(options.animate);
    }

    if (!options.customDefine) {

        chart.line().position(position).color(colorFieldName).animate(options.animate);
        chart.point().position(position).color(colorFieldName, colors).animate(options.animate).style(options.chartStyle);
    }

}

/**
 * 渲染散点图
 * @param {*} param0 
 */
function renderPoint({
    chart,
    colors,
    position,
    colorFieldName,
    options
}) {

    let obj = chart.point().position(position);

    if (!isEmpty(options.size.fieldName)) {
        obj.size(options.size.fieldName, options.size.callback());
    }
    obj.shape(options.shape).color(colorFieldName, colors).animate(options.animate).style(options.chartStyle);
}

export {
    renderPie,
    renderHistogram,
    renderLine,
    renderRadar,
    renderPoint
}