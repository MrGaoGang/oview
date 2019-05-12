function renderPie(chart, colors, fieldName, options) {
    if (options.coord.options.transposed == undefined) {
        options.coord.options.transposed = true;
    }
    chart.coord(options.coord.coordType, options.coord.options);
    chart.axis(false); //没有坐标轴


    chart.interval()
        .position('a*percent')
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





export {
    renderPie
}