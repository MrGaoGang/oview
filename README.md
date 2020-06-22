

<div style="display:flex;align-items:center;justify-content:center;flex-direction: column;margin-bottom:40px;">
    <p  align="center">
<img src="https://mrgaogang.github.io/images/oview/logo.png">
<h3 align="center">oView Vue.js移动端图表库</h3>
    </p>


<p align="center">
 <tr>
        <a href="https://mrgaogang.github.io/article/oview/">
            <img src="https://img.shields.io/badge/oView-%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3-%232d8cf0.svg" />
        </a>
        <a href="https://mrgaogang.github.io/oview/docs/#/" style="margin-left:30px;">
            <img
                src="https://img.shields.io/badge/%E5%AE%98%E6%96%B9%E7%A4%BA%E4%BE%8B-%E6%95%88%E6%9E%9C%E5%9B%BE-%232d8cf0.svg" />
        </a>
</tr>

</p>

<p align="center">


<img src="https://mrgaogang.github.io/images/oview/qrcode.png" width="180" height="180" >
</p>

</div>


> oView是基于 [蚂蚁金服F2](https://www.yuque.com/antv/f2/getting-started)图表库的二次封装，以便于Vue.js开发者在移动端和PC端更好进行图表的展示。

### vue插件

```bash
vue add oview
vue invoke vue-cli-plugin-oview

```

### NPM安装

```
npm install oview --save
//或者使用yarn
yarn add oview

```
**使用**

```js
//main.js中
import oView from "oview";
Vue.use(oView);
```
oview默认会使用:`o-chart`,`o-line`的方式全局注册组件。使用时，请记得使用`o-x`的方式哦




### oView特性

- **1、oview支持哪些图？**
    - 目前oview支持：柱状图，饼状图，面积图，散点图，气泡图，折线图 ，雷达图。

- **2、图表配置简单**

    ```html
    <!-- 没错，配置一个饼状图就是这么简单--->
    <o-chart :data="data">
      <o-pie position="name*percent"></o-pie>
    </o-chart>
    ```

- **oview图表色彩鲜艳**

> 色彩主要使用F2官方建议色彩，如需自定义色彩可使用:color="yourColors"传入即可。（详细请见[oview文档](https://mrgaogang.github.io/oview/docs)）



<p align="center">
        <tr>
          <td align="center" valign="middle">
            <a href="https://mrgaogang.github.io/oview/docs" target="_blank">
            <img src="./images/oview_main.png?raw=true" width="300" height="600"/>
            </a>
          </td>
          <td align="center" valign="middle">
              <a href="https://mrgaogang.github.io/oview/docs" target="_blank">
            <img src="./images/oview_pie.png?raw=true" width="300" height="600"/>
            </a>
          </td>
        </tr>
</p>
