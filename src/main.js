// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vars from './assets/theme.js'
// Vue.prototype.$vars = vars;

Vue.config.productionTip = false

 // Vue.prototype.$vars = vars;

// var vars = {
//   barShadowColor: 'rgba(83,148,239,0.1)',
//
//   legendFontColor: "#666",
//   labelFontColor:"#bfbfbf",
//   splitLineColor:"#e9e9e9",
//   yLineColor:"#fff",
//
//   tooltipsTitleFontColor: "rgba(255,255,255,0.6)",
//   tooltipsContentFontColor: "#fff",
//   toolitpsBackgroundColor: "rgba(0,0,0,0.8)",
//
//   unitColor:"#bfbfbf",  //单位
//
//   polarXlabelFontColor:"#666",
//   alternateGridColor:"#f8f8f8",
//
//   klineDownColor: "#55C997",
//   klineDownLineColor: "#55C997",
//   klineUpColor : "#FF7676",
//   klineUpLineColor : "#FF7676",
//
//   colors: ['#749EFF', '#FFB460', '#FF7676', '#A496FF', '#70CBEA', '#C3D5FE', '#55C997','EC6FE5']
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
