(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1:function(e,t,a){"use strict";var i=a(15),n=a.n(i),o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"toast",class:this.toastType?"toast--"+this.toastType:""},[t("p",[this._v(this._s(this.mess))])])};o._withStripped=!0;var r={data:function(){return{mess:this.message,dura:this.duration,toastType:this.type}},props:{message:String,type:{type:String,validator:function(e){return-1!=["success","error","info"].indexOf(e)}},duration:{type:Number,default:1.5}},mounted:function(){var e=this;setTimeout(function(){e.$el.parentNode.removeChild(e.$el)},1e3*this.dura)}},u=(a(83),a(2)),l=Object(u.a)(r,o,[],!1,null,"fe243282",null);l.options.__file="src/components/toast/Toast.vue";var s,c=l.exports,d=a(28),y={duration:1.5,message:"Hello oview！"},p=function(e,t){s=new d.a({render:function(a){return a(c,{props:n()({type:e},t)})}}).$mount(),document.body.appendChild(s.$el)},v={error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;p("error",e)},success:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;p("success",e)},info:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;p("info",e)}},h=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{style:{backgroundColor:this.backgroundColor,width:this.width+"px",height:this.height+"px"}},[t("canvas",{ref:"chart",staticClass:"noselect",attrs:{height:"300"}}),this._v(" "),this._t("default")],2)};h._withStripped=!0;var m=a(42),f=a.n(m);function A(e){return void 0===e||null==e||""==e||e instanceof Object&&0==Object.keys(e).length}function g(e){return-1!=e.indexOf("*")?e.substring(e.indexOf("*")+1):null}function w(e){return-1!=e.indexOf("*")?e.substring(0,e.indexOf("*")):e}var k={width:Number,height:{type:Number,default:300},chartConfig:{type:Object,default:function(){return{}}},backgroundColor:{type:String,default:"#fff"},scale:{type:Object,default:function(){return{}}},customRender:{type:String,default:null,valiator:function(e){return-1!=[null,"prevent","extra"].indexOf(e)}},legend:{type:Object,default:function(){return{disable:!0}}},tooltip:{type:Object,default:function(){return{disable:!0}}},data:{type:Array,required:!0},colDefs:{type:Object,default:function(){return{}}},interaction:{type:[Object,Array]},scrollBar:{type:Object,default:function(){return{}}},showScrollX:{type:Boolean,default:!1},showScrollY:{type:Boolean,default:!1}},b={pie:"pie",histogram:"histogram",line:"line",radar:"radar",point:"point"},N=["#1890FF","#13C2C2","#2FC25B","#FACC14","#F04864","#8543E0"],x={pie_select:"pie-select",interval_select:"interval-select",pan:"pan",pinch:"pinch",swipe:"swipe"};var O=f.a.Util,j={props:k,data:function(){return{chartType:"",datas:this.data,position:null}},watch:{data:{immediate:!0,handler:function(e){this.datas=e,null!=this.chart&&this.changeData()}}},computed:{chartData:function(){return this.chartType==b.pie?this.datas.slice().map(function(e){return e.data="1",e}):this.data}},methods:{onTouchstart:function(e){this.preventDefault&&e.preventDefault()},changeData:function(){this.chart.changeData(this.chartData)},repaint:function(){this.chart.repaint()},setChart:function(e,t){var a=this.chart;if(this.position=t.position,"prevent"!==this.customRender){this.chartType=e;var i={chart:a,colors:t.colors,position:t.position,colorFieldName:this.colorFieldName(t.colorField),options:t};switch(e){case b.pie:!function(e){var t=e.chart,a=e.colors,i=e.position,n=e.colorFieldName,o=e.options;null==o.coord.options.transposed&&(o.coord.options.transposed=!0),t.coord(o.coord.coordType,o.coord.options),t.axis(!1),i=A(g(i))?"a*percent":"a*"+g(i),t.interval().position(i).color(n,a).adjust(o.adjust).style({lineWidth:1,stroke:"#fff",lineJoin:"round",lineCap:"round"}).style(o.chartStyle),t.animate(A(o.animate)?{appear:{duration:1200,easing:"bounceOut"}}:o.animate),null!=o.pieLabel&&t.pieLabel(o.pieLabel)}(i);break;case b.histogram:!function(e){var t=e.chart,a=e.colors,i=e.position,n=e.colorFieldName,o=e.options,r=t.interval().position(i);null==o.coord.options.transposed&&(o.coord.options.transposed=!1),t.coord(o.coord.coordType,o.coord.options),A(n)||r.color(n,a),A(o.adjust)||r.adjust(o.adjust),r.animate(A(o.animate)?{appear:{duration:500,easing:"groupScaleInY"}}:o.animate).style(o.chartStyle)}(i);break;case b.line:!function(e){var t=e.chart,a=e.colors,i=e.position,n=e.colorFieldName,o=e.options;if(o.isArea){var r=t.area().position(i);r.shape(o.shape).animate(o.animate).style(o.chartStyle).adjust(o.adjust),o.isMutiLine&&r.color(n,a)}var u=t.line({connectNulls:o.showNulls}).position(i);if(u.shape(o.shape).animate(o.animate).style(o.chartStyle).adjust(o.adjust),o.isMutiLine&&u.color(n,a),"point"==o.type){var l=t.point().position(i);l.shape(o.shape).animate(o.animate).style(o.chartStyle).adjust(o.adjust),o.isMutiLine&&l.color(n,a)}}(i);break;case b.radar:!function(e){var t=e.chart,a=e.colors,i=e.position,n=e.colorFieldName,o=e.options;t.coord("polar"),o.isArea&&t.area().position(i).style(o.chartStyle).color(n).animate(o.animate),o.customDefine||(t.line().position(i).color(n).animate(o.animate),t.point().position(i).color(n,a).animate(o.animate).style(o.chartStyle))}(i);break;case b.point:!function(e){var t=e.chart,a=e.colors,i=e.position,n=e.colorFieldName,o=e.options,r=t.point().position(i);A(o.size.fieldName)||r.size(o.size.fieldName,o.size.callback()),r.shape(o.shape).color(n,a).animate(o.animate).style(o.chartStyle)}(i)}e!=b.pie&&t.axis.length>0&&t.axis.forEach(function(e){A(e.fieldName)||a.axis(e.fieldName,e)}),this.setLegend(),this.setTooltip(),a.source(this.chartData,this.colDefs),a.scale(this.scale),function(e,t){A(t)||(Array.isArray(t)?t.forEach(function(t){void 0!==t.type&&"string"==typeof t.type&&e.interaction(t.type,t||{})}):void 0!==t.type&&"string"==typeof t.type&&e.interaction(t.type,t||{}))}(a,this.interaction),function(e,t,a,i,n){if(A(t)){if(A(t)&&-1==[b.pie,b.radar].indexOf(n)){var o={};!0===a&&(o.mode="x",o.xStyle={offsetY:-5}),!0===i&&(o.mode=null!=o.mode?o.mode+"y":"y",o.yStyle={offsetX:5}),e.scrollBar(o)}}else e.scrollBar(t)}(a,this.scrollBar,this.showScrollX,this.showScrollY,this.chartType),"extra"===this.customRender&&this.$emit("on-render",{chart:a}),a.render()}else this.$emit("on-render",{chart:a})},setLegend:function(){this.legend&&(!A(this.legend.disable)&&this.legend.disable?this.chart.legend(!1):O.isObject(this.legend)&&(A(this.legend.fieldName)?this.chart.legend(w(this.position),this.legend):this.chart.legend(this.legend.fieldName,this.legend)))},setTooltip:function(){this.tooltip&&(!A(this.tooltip.disable)&&this.tooltip.disable?this.chart.tooltip(!1):O.isObject(this.tooltip)&&this.chart.tooltip(this.tooltip))},render:function(){var e=window.innerWidth,t=(window.innerHeight,new f.a.Chart(n()({el:this.$refs.chart,width:this.width||e,height:this.height?this.height:300,pixelRatio:this.$devicePixelRatio||window.devicePixelRatio},Object.assign(this.chartConfig,{}))));this.chart=t},reRender:function(){null!=this.chart&&window.location.reload()},colorFieldName:function(e){return A(e)?w(this.position):e}},mounted:function(){var e,t;this.render(),window.addEventListener("resize",(e=this.reRender,t=null,function(){for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];var o=this;t||setTimeout(function(){e.apply(o,i),t=null})}))},beforeDestroy:function(){window.removeEventListener("resize",this.reRender)}},Y=(a(191),Object(u.a)(j,h,[],!1,null,"b99d8426",null));Y.options.__file="src/components/chart/Chart.vue";var S=Y.exports,z={abstract:!0,props:{position:{type:String,required:!0},axis:{type:Array,default:function(){return[]}},colors:{type:Array,default:function(){return N}},colorField:{type:String},chartStyle:Object,animate:Object,size:{type:Object,default:function(){return{fieldName:null,callback:function(){return null}}}},adjust:{type:Object,default:function(){return{type:"stack"}}},options:Object},render:function(){return null},methods:{gotoChart:function(e){var t=this;this.$nextTick(function(){t.$parent.setChart(e,Object.assign({},t.$props))})}}},B={mixins:[z],props:{coord:{type:Object,default:function(){return{coordType:"polar",options:{transposed:!0}}}},pieLabel:{type:Object}},mounted:function(){this.gotoChart(b.pie)}},L={mixins:[z],props:{coord:{type:Object,default:function(){return{coordType:"rect",options:{transposed:!1}}}}},mounted:function(){this.gotoChart(b.histogram)}},T={mixins:[z],props:{isArea:{type:Boolean,default:!1},type:{type:String,default:function(){return"line"},validator:function(e){return-1!=["line","point"].indexOf(e)}},shape:{type:String,default:function(){return"line"}},showNulls:{type:Boolean,default:!0},isMutiLine:{type:Boolean,default:!1}},mounted:function(){this.gotoChart(b.line)}},C={mixins:[z],props:{isArea:{type:Boolean,default:!1},customDefine:{type:Boolean,default:!1}},mounted:function(){this.gotoChart(b.radar)}},D={mixins:[z],props:{shape:{type:String,default:function(){return"circle"}}},mounted:function(){this.gotoChart(b.point)}};a.d(t,"e",function(){return B}),a.d(t,"a",function(){return S}),a.d(t,"b",function(){return L}),a.d(t,"d",function(){return T}),a.d(t,"g",function(){return C}),a.d(t,"f",function(){return D}),a.d(t,"c",function(){return x});var F={Toast:v,Chart:S,Pie:B,Line:T,Histogram:L,Radar:C,Point:D,INTERACTION_TYPE:x},M=function e(t){e.install||(Object.keys(F).forEach(function(e){t.component(e,F[e])}),t.prototype.$toast=v)};"undefined"!=typeof window&&window.Vue&&M(window.Vue);n()({install:M},F)},191:function(e,t,a){"use strict";var i=a(27);a.n(i).a},26:function(e,t){},27:function(e,t){},3:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"b",function(){return n}),a.d(t,"d",function(){return o}),a.d(t,"f",function(){return r}),a.d(t,"e",function(){return u}),a.d(t,"a",function(){return l}),a.d(t,"g",function(){return s});var i={lineNormal:[{date:"2017-06-05",value:116},{date:"2017-06-06",value:129},{date:"2017-06-07",value:135},{date:"2017-06-08",value:86},{date:"2017-06-09",value:73},{date:"2017-06-10",value:85},{date:"2017-06-11",value:73},{date:"2017-06-12",value:68},{date:"2017-06-13",value:92},{date:"2017-06-14",value:130},{date:"2017-06-15",value:245},{date:"2017-06-16",value:139},{date:"2017-06-17",value:115},{date:"2017-06-18",value:111},{date:"2017-06-19",value:309},{date:"2017-06-20",value:206},{date:"2017-06-21",value:137},{date:"2017-06-22",value:128},{date:"2017-06-23",value:85},{date:"2017-06-24",value:94},{date:"2017-06-25",value:71},{date:"2017-06-26",value:106},{date:"2017-06-27",value:84},{date:"2017-06-28",value:93},{date:"2017-06-29",value:85},{date:"2017-06-30",value:73},{date:"2017-07-01",value:83},{date:"2017-07-02",value:125},{date:"2017-07-03",value:107},{date:"2017-07-04",value:82},{date:"2017-07-05",value:44},{date:"2017-07-06",value:72},{date:"2017-07-07",value:106},{date:"2017-07-08",value:107},{date:"2017-07-09",value:66},{date:"2017-07-10",value:91},{date:"2017-07-11",value:92},{date:"2017-07-12",value:113},{date:"2017-07-13",value:107},{date:"2017-07-14",value:131},{date:"2017-07-15",value:111},{date:"2017-07-16",value:64},{date:"2017-07-17",value:69},{date:"2017-07-18",value:88},{date:"2017-07-19",value:77},{date:"2017-07-20",value:83},{date:"2017-07-21",value:111},{date:"2017-07-22",value:57},{date:"2017-07-23",value:55},{date:"2017-07-24",value:60}],pointLine:[{day:"周一",value:300},{day:"周二",value:400},{day:"周三",value:350},{day:"周四",value:500},{day:"周五",value:490},{day:"周六",value:600},{day:"周日",value:900}],mutiLine:[{country:"Asia",year:"1750",value:1502},{country:"Asia",year:"1800",value:1635},{country:"Asia",year:"1850",value:1809},{country:"Asia",year:"1900",value:5268},{country:"Asia",year:"1950",value:2400},{country:"Asia",year:"1999",value:3634},{country:"Asia",year:"2050",value:1947},{country:"Africa",year:"1750",value:1106},{country:"Africa",year:"1800",value:1107},{country:"Africa",year:"1850",value:1011},{country:"Africa",year:"1900",value:1266},{country:"Africa",year:"1950",value:1221},{country:"Africa",year:"1999",value:767},{country:"Africa",year:"2050",value:1330},{country:"Oceania",year:"1750",value:1200},{country:"Oceania",year:"1800",value:1200},{country:"Oceania",year:"1850",value:2e3},{country:"Oceania",year:"1900",value:460},{country:"Oceania",year:"1950",value:530},{country:"Oceania",year:"1999",value:300},{country:"Oceania",year:"2050",value:800}]},n={normalData:[{year:"1951 年",sales:38},{year:"1952 年",sales:52},{year:"1956 年",sales:61},{year:"1957 年",sales:145},{year:"1958 年",sales:48},{year:"1959 年",sales:38},{year:"1960 年",sales:38},{year:"1962 年",sales:38}],groupData:[{name:"London","月份":"Jan.","月均降雨量":18.9},{name:"London","月份":"Feb.","月均降雨量":28.8},{name:"London","月份":"Mar.","月均降雨量":39.3},{name:"London","月份":"Apr.","月均降雨量":81.4},{name:"London","月份":"May.","月均降雨量":47},{name:"London","月份":"Jun.","月均降雨量":20.3},{name:"London","月份":"Jul.","月均降雨量":24},{name:"London","月份":"Aug.","月均降雨量":35.6},{name:"Berlin","月份":"Jan.","月均降雨量":12.4},{name:"Berlin","月份":"Feb.","月均降雨量":23.2},{name:"Berlin","月份":"Mar.","月均降雨量":34.5},{name:"Berlin","月份":"Apr.","月均降雨量":99.7},{name:"Berlin","月份":"May.","月均降雨量":52.6},{name:"Berlin","月份":"Jun.","月均降雨量":35.5},{name:"Berlin","月份":"Jul.","月均降雨量":37.4},{name:"Berlin","月份":"Aug.","月均降雨量":42.4}],betweenData:[{x:"分类一",y:[76,100]},{x:"分类二",y:[56,108]},{x:"分类三",y:[38,129]},{x:"分类四",y:[58,155]},{x:"分类五",y:[45,120]},{x:"分类六",y:[23,99]},{x:"分类七",y:[18,56]},{x:"分类八",y:[18,34]}]},o={data:[{name:"芳华",percent:.4},{name:"妖猫传",percent:.2},{name:"机器之血",percent:.18},{name:"心理罪",percent:.15},{name:"寻梦环游记",percent:.05},{name:"其他",percent:.02}]},r={normalData:[{item:"Design",user:"用户 A",score:70},{item:"Design",user:"用户 B",score:30},{item:"Development",user:"用户 A",score:60},{item:"Development",user:"用户 B",score:70},{item:"Marketing",user:"用户 A",score:50},{item:"Marketing",user:"用户 B",score:60},{item:"Users",user:"用户 A",score:40},{item:"Users",user:"用户 B",score:50},{item:"Test",user:"用户 A",score:60},{item:"Test",user:"用户 B",score:70},{item:"Language",user:"用户 A",score:70},{item:"Language",user:"用户 B",score:50},{item:"Technology",user:"用户 A",score:70},{item:"Technology",user:"用户 B",score:40},{item:"Support",user:"用户 A",score:60},{item:"Support",user:"用户 B",score:40}],imageData:[{item:"投资经验",score:90,img:"https://gw.alipayobjects.com/zos/rmsportal/txPVjdlnLANzxmwZcchu.png"},{item:"财务状况",score:80,img:"https://gw.alipayobjects.com/zos/rmsportal/UMqgEqZdEcPhRekNGAdc.png"},{item:"风险承受能力",score:70,img:"https://gw.alipayobjects.com/zos/rmsportal/eBXrRufzPGlOisYGZwnv.png"},{item:"风险偏好",score:75,img:"https://gw.alipayobjects.com/zos/rmsportal/zqqWMLXrFwnqhySFHVjZ.png"},{item:"投资规划",score:60,img:"https://gw.alipayobjects.com/zos/rmsportal/DxcRoUZXpYOzAWKrlRvv.png"}]},u={bubbleData:[{x:95,y:95,z:13.8,name:"BE",country:"Belgium"},{x:86.5,y:102.9,z:14.7,name:"DE",country:"Germany"},{x:80.8,y:91.5,z:15.8,name:"FI",country:"Finland"},{x:80.4,y:102.5,z:12,name:"NL",country:"Netherlands"},{x:80.3,y:86.1,z:11.8,name:"SE",country:"Sweden"},{x:78.4,y:70.1,z:16.6,name:"ES",country:"Spain"},{x:74.2,y:68.5,z:14.5,name:"FR",country:"France"},{x:73.5,y:83.1,z:10,name:"NO",country:"Norway"},{x:71,y:93.2,z:24.7,name:"UK",country:"United Kingdom"},{x:69.2,y:57.6,z:10.4,name:"IT",country:"Italy"},{x:68.6,y:20,z:16,name:"RU",country:"Russia"},{x:65.5,y:126.4,z:35.3,name:"US",country:"United States"},{x:65.4,y:50.8,z:28.5,name:"HU",country:"Hungary"},{x:63.4,y:51.8,z:15.4,name:"PT",country:"Portugal"},{x:64,y:82.9,z:31.3,name:"NZ",country:"New Zealand"}]},l={normalData:[{time:"Jan.",tem:1e3},{time:"Feb.",tem:2200},{time:"Mar.",tem:2e3},{time:"Apr.",tem:2600},{time:"May.",tem:2e3},{time:"Jun.",tem:2600},{time:"Jul.",tem:2800},{time:"Aug.",tem:2e3}],fuzhiData:[{month:"Jan.",value:6.06},{month:"Feb.",value:82.2},{month:"Mar.",value:-22.11},{month:"Apr.",value:21.53},{month:"May.",value:-21.74},{month:"Jun.",value:73.61},{month:"Jul.",value:53.75},{month:"Aug.",value:60.32}],mutiArea:[{value:63.4,city:"New York",date:"2011-10-01"},{value:62.7,city:"Alaska",date:"2011-10-01"},{value:72.2,city:"Austin",date:"2011-10-01"},{value:58,city:"New York",date:"2011-10-02"},{value:59.9,city:"Alaska",date:"2011-10-02"},{value:67.7,city:"Austin",date:"2011-10-02"},{value:53.3,city:"New York",date:"2011-10-03"},{value:59.1,city:"Alaska",date:"2011-10-03"},{value:69.4,city:"Austin",date:"2011-10-03"},{value:55.7,city:"New York",date:"2011-10-04"},{value:58.8,city:"Alaska",date:"2011-10-04"},{value:68,city:"Austin",date:"2011-10-04"},{value:64.2,city:"New York",date:"2011-10-05"},{value:58.7,city:"Alaska",date:"2011-10-05"},{value:72.4,city:"Austin",date:"2011-10-05"},{value:58.8,city:"New York",date:"2011-10-06"},{value:57,city:"Alaska",date:"2011-10-06"},{value:77,city:"Austin",date:"2011-10-06"},{value:57.9,city:"New York",date:"2011-10-07"},{value:56.7,city:"Alaska",date:"2011-10-07"},{value:82.3,city:"Austin",date:"2011-10-07"},{value:61.8,city:"New York",date:"2011-10-08"},{value:56.8,city:"Alaska",date:"2011-10-08"},{value:78.9,city:"Austin",date:"2011-10-08"},{value:69.3,city:"New York",date:"2011-10-09"},{value:56.7,city:"Alaska",date:"2011-10-09"},{value:68.8,city:"Austin",date:"2011-10-09"},{value:71.2,city:"New York",date:"2011-10-10"},{value:60.1,city:"Alaska",date:"2011-10-10"},{value:68.7,city:"Austin",date:"2011-10-10"},{value:68.7,city:"New York",date:"2011-10-11"},{value:61.1,city:"Alaska",date:"2011-10-11"},{value:70.3,city:"Austin",date:"2011-10-11"},{value:61.8,city:"New York",date:"2011-10-12"},{value:61.5,city:"Alaska",date:"2011-10-12"},{value:75.3,city:"Austin",date:"2011-10-12"},{value:63,city:"New York",date:"2011-10-13"},{value:64.3,city:"Alaska",date:"2011-10-13"},{value:76.6,city:"Austin",date:"2011-10-13"},{value:66.9,city:"New York",date:"2011-10-14"},{value:67.1,city:"Alaska",date:"2011-10-14"},{value:66.6,city:"Austin",date:"2011-10-14"},{value:61.7,city:"New York",date:"2011-10-15"},{value:64.6,city:"Alaska",date:"2011-10-15"},{value:68,city:"Austin",date:"2011-10-15"},{value:61.8,city:"New York",date:"2011-10-16"},{value:61.6,city:"Alaska",date:"2011-10-16"},{value:70.6,city:"Austin",date:"2011-10-16"},{value:62.8,city:"New York",date:"2011-10-17"},{value:61.1,city:"Alaska",date:"2011-10-17"},{value:71.1,city:"Austin",date:"2011-10-17"},{value:60.8,city:"New York",date:"2011-10-18"},{value:59.2,city:"Alaska",date:"2011-10-18"},{value:70,city:"Austin",date:"2011-10-18"},{value:62.1,city:"New York",date:"2011-10-19"},{value:58.9,city:"Alaska",date:"2011-10-19"},{value:61.6,city:"Austin",date:"2011-10-19"},{value:65.1,city:"New York",date:"2011-10-20"},{value:57.2,city:"Alaska",date:"2011-10-20"},{value:57.4,city:"Austin",date:"2011-10-20"},{value:55.6,city:"New York",date:"2011-10-21"},{value:56.4,city:"Alaska",date:"2011-10-21"},{value:64.3,city:"Austin",date:"2011-10-21"},{value:54.4,city:"New York",date:"2011-10-22"},{value:60.7,city:"Alaska",date:"2011-10-22"},{value:72.4,city:"Austin",date:"2011-10-22"},{value:54.4,city:"New York",date:"2011-10-23"},{value:65.1,city:"Alaska",date:"2011-10-23"},{value:72.4,city:"Austin",date:"2011-10-23"},{value:54.8,city:"New York",date:"2011-10-24"},{value:60.9,city:"Alaska",date:"2011-10-24"},{value:72.5,city:"Austin",date:"2011-10-24"},{value:57.9,city:"New York",date:"2011-10-25"},{value:56.1,city:"Alaska",date:"2011-10-25"},{value:72.7,city:"Austin",date:"2011-10-25"},{value:54.6,city:"New York",date:"2011-10-26"},{value:54.6,city:"Alaska",date:"2011-10-26"},{value:73.4,city:"Austin",date:"2011-10-26"},{value:54.4,city:"New York",date:"2011-10-27"},{value:56.1,city:"Alaska",date:"2011-10-27"},{value:70.7,city:"Austin",date:"2011-10-27"},{value:42.5,city:"New York",date:"2011-10-28"},{value:58.1,city:"Alaska",date:"2011-10-28"},{value:56.8,city:"Austin",date:"2011-10-28"},{value:40.9,city:"New York",date:"2011-10-29"},{value:57.5,city:"Alaska",date:"2011-10-29"},{value:51,city:"Austin",date:"2011-10-29"},{value:38.6,city:"New York",date:"2011-10-30"},{value:57.7,city:"Alaska",date:"2011-10-30"},{value:54.9,city:"Austin",date:"2011-10-30"},{value:44.2,city:"New York",date:"2011-10-31"},{value:55.1,city:"Alaska",date:"2011-10-31"},{value:58.8,city:"Austin",date:"2011-10-31"},{value:49.6,city:"New York",date:"2011-11-01"},{value:57.9,city:"Alaska",date:"2011-11-01"},{value:62.6,city:"Austin",date:"2011-11-01"},{value:47.2,city:"New York",date:"2011-11-02"},{value:64.6,city:"Alaska",date:"2011-11-02"},{value:71,city:"Austin",date:"2011-11-02"}]};function s(){for(var e=[],t=Math.PI/4,a=-25;a<25;a+=t)e.push({x:a,y:Math.sin(a)});return e}},83:function(e,t,a){"use strict";var i=a(26);a.n(i).a}}]);