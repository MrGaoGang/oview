(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{188:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"item-desc"},[e._v("普通的饼状图")]),e._v(" "),n("o-chart",{attrs:{data:e.data,legend:e.legend,position:"name*percent"}},[n("o-pie")],1),e._v(" "),n("p",{staticClass:"item-desc"},[e._v("有内圆半径的饼状图")]),e._v(" "),n("o-chart",{attrs:{data:e.data,legend:e.legend,position:"name*percent"}},[n("o-pie",{attrs:{coord:e.coord}})],1),e._v(" "),n("p",{staticClass:"item-desc"},[e._v("可点击的饼状图")]),e._v(" "),n("o-chart",{attrs:{data:e.data,legend:e.legend,position:"name*percent"}},[n("o-pie",{attrs:{"pie-label":e.pieLabel(),coord:e.coord}})],1)],1)};a._withStripped=!0;var i=n(7),o={components:{"o-chart":i.a,"o-pie":i.d},data:function(){return{data:[{name:"芳华",percent:.4},{name:"妖猫传",percent:.2},{name:"机器之血",percent:.18},{name:"心理罪",percent:.15},{name:"寻梦环游记",percent:.05},{name:"其他",percent:.02}],legend:{disable:!1,config:{position:"top",align:"center"}},coord:{coordType:"polar",options:{transposed:!0,radius:.85,innerRadius:.618}}}},methods:{pieLabel:function(){return{sidePadding:30,activeShape:!0,label1:function(e){return{text:e.name,fill:"#343434",fontWeight:"bold"}},label2:function(e){return{text:100*e.percent+"%",fill:"#999"}},onClick:function(e){var t=e.data;t&&(e.chart.guide().clear(),e.chart.guide().html({position:["50%","50%"],html:'<div style="text-align: center;width:150px;height: 50px;">\n      <p style="font-size: 12px;color: #999;margin: 0" class="label1">'+t.name+'</p>\n      <p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" class="label2">'+100*t.percent+"%</p>\n      </div>"}),e.chart.repaint())}}}}},r=n(1),c=Object(r.a)(o,a,[],!1,null,null,null);c.options.__file="examples/components/chart/Pie.vue";t.default=c.exports}}]);