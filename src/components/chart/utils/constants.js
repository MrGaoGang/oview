 const CHART_TYPE = {
     pie: "pie",
     histogram: "histogram",
     line: "line",
     radar: "radar",
     point: "point"
 }

 const COLORS = [
     "#1890FF",
     "#13C2C2",
     "#2FC25B",
     "#FACC14",
     "#F04864",
     "#8543E0"
 ];

 /**
  * 交互行为
  */
 export const INTERACTION_TYPE = {
     pie_select: "pie-select", //饼状图选中
     interval_select: "interval-select", //柱状图选中
     pan: "pan", //平移
     pinch: "pinch", //缩放
     swipe: "swipe" //快扫
 }
 export {
     CHART_TYPE,
     COLORS
 }