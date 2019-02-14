<template>
    <div>
      <!--<remoteJs src="/static/theme.js"></remoteJs>-->
      <div :id="id"
           :type = "type"
           :xdata = "xdata"
           :isXdataJustify = "isXdataJustify"
           :ydata = "ydata"
           :ytype = "ytype"
           :seriesName = "seriesName"
           :extendOption = "extendOption"
           :isStacking = "isStacking"
           :yunit = "yunit"
           :isDataDot = "isDataDot"
           :text = "text"
           :theme = "theme"
      ></div>
  </div>
</template>
<script>
//  import remoteJs from '../assets/importJs'
  import HighCharts from 'highcharts/highstock'
  import highchartsMore from 'highcharts/highcharts-more';
  import * as chartOption from '../assets/chartOption'
  import Utils from '../assets/index.js'
//  import base from '../assets/base'

  highchartsMore(HighCharts);
  export default {
    // 验证类型
    props: {
      id: {
        type: String
      },
      type:{
        type:String
      },
      xdata:{
        type:Array,
        default: Array,
      },
      ydata:{
        type: [Object, Array],
        default: () => ({})
      },
      ytype:{
        type: [Object, Array],
        default: () => ({})
      },
      seriesName:{
        default:Array,
      },
      isStacking:{
        default: false
      },
      isDataDot:{
        default:true,
      },
      yunit:{
        type:String,
        default: "",
      },
      text:{
        type:String,
        default: "",
      },
      isXdataJustify:{
        default: false,
      },
      theme:{
        type: String,
        default:"white",
      },
      extendOption:{
        type: Object,
        default : null
      }
    },
    created(){

    },
    data(){
        return {
            chart:null,
        }
    },
    components:{
//      remoteJs
    },
    mounted() {

      console.log("sdfdsfdf");
      this.init()
    },
    methods: {
      getChart(){
        return this.chart;
      },
      addSeries(options) {
        this.delegateMethod('addSeries', options);
      },
      removeSeries() {
        while (this.getChart().series.length !== 0) {
          this.getChart().series[0].remove();
        }
      },
      mergeOption(options) {
        this.delegateMethod('update', options);
      },
      showLoading(txt) {
        this.getChart().showLoading(txt);
      },
      hideLoading() {
        this.getChart().hideLoading();
      },
      delegateMethod(name, ...args) {
        if (!this.getChart()) {
          return
        }
        return this.getChart()[name](...args)
      },
      init(){
        let t = this.type;
        let option = {};
        switch (t) {
          case "basic" :
              var seriesOption = Utils.getBasicSeriesOption(this.ydata,this.ytype,this.seriesName,this.xdata,this.yunit,this.isDataDot,this.isXdataJustify);
              option = Utils.assign(chartOption.basicBaseOption(),seriesOption);
              break;
          case "circle" :
              var circleSeriesOption = Utils.getPieSeriesOption(this.ydata,this.text);
              option = Utils.assign(chartOption.pieBaseOption(),circleSeriesOption);
              break;
          case "spider" :
              var spiderSeriesOption = Utils.getBasicSeriesOption(this.ydata,this.ytype,this.seriesName,this.xdata,this.yunit,this.isDataDot3);
              option = Utils.assign(chartOption.spiderBaseOpiton(),spiderSeriesOption);
              break;
          case "panel" :
              var panelSeriesOption = Utils.getPanelSeriesOption(this.ydata,this.text);
              option = Utils.assign(chartOption.instrumentPanelBaseOption(),panelSeriesOption);
              break;
          case "kline" :
              var klineSeriesOption = Utils.getBasicSeriesOption(this.ydata,this.ytype,this.seriesName,this.xdata,this.yunit,this.isDataDot,this.isXdataJustify);
              option = Utils.assign(chartOption.kLineBaseOption(),klineSeriesOption);
              break;
        }
        if(this.isStacking){  //是否堆叠
          let plotOptions = {
            plotOptions: {
              series: {
                stacking: 'normal'
              }
            }
          }
          option = Utils.assign(option,plotOptions);
        }
        this.chart = HighCharts.chart(this.id,option);
      },
    },

  }
</script>


<style>
  .highcharts-legend-item .highcharts-point{
    display:none;
  }
</style>
