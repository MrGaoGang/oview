import {
    isEmpty
} from "./string";
import {
    CHART_TYPE
} from "./constants.js"
/**
 * 配置左右上下滑动
 * @param {*} chart 
 * @param {*} interction 
 * @param {*} scrollConfig 
 * @param {*} scrollX 
 * @param {*} scrollY 
 */
export default function (chart, scrollConfig, scrollX, scrollY, chartType) {


    if (!isEmpty(scrollConfig)) {
        // 是否显示scrollbar
        chart.scrollBar(scrollConfig);
        return;
    }


    if (isEmpty(scrollConfig)) {
        //快捷方式，不支持饼状图和雷达图左右和上下滑动
        if ([CHART_TYPE.pie, CHART_TYPE.radar].indexOf(chartType) == -1) {

            let scrollDefault = {};
            if (scrollX === true) {
                scrollDefault.mode = "x";
                scrollDefault.xStyle = {
                    offsetY: -5
                };
            }
            if (scrollY === true) {
                scrollDefault.mode = scrollDefault.mode != undefined ? scrollDefault.mode + "y" : "y";
                scrollDefault.yStyle = {
                    offsetX: 5
                };
            }

            chart.scrollBar(scrollDefault);

        }
    }
}
/**
 * 设置交互
 * @param {*} chart 
 * @param {*} interaction 
 */
export function setInteraction(chart,interaction){
    // 顶层配置较为有限
    if (!isEmpty(interaction)) {
        //配置交互行为
        if(Array.isArray(interaction)){

            interaction.forEach(element => {
                if (
                    element.type !== undefined &&
                    typeof element.type === "string"
                ) {
                    chart.interaction(element.type, element || {});
                }
            });
        }else{
            if (
                interaction.type !== undefined &&
                typeof interaction.type === "string"
            ) {
                chart.interaction(interaction.type, interaction || {});
            }
        }
     
    }
}