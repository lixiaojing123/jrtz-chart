
import {baseOption} from "./baseOption"
import vars from "./theme.js"

import Utils from "./index.js"
import {tooltipForKline}  from "./tooltips"

export const basicBaseOption = function(){
  return Utils.assign(baseOption);
};

export const lineColumnOpiton = function(){

  let lco = {

  }
  Utils.assign(baseOption);
}
//蜘蛛图
export const spiderBaseOpiton = function(){

  let spiderOption = {
    chart: {
      polar: true,
    },
    dataLabels:{
      inside: true,
    },

    xAxis: {
      tickmarkPlacement: 'on',
      lineWidth: 0,
      labels:{
        style: {
          color: vars.polarXlabelFontColor,
        },
      },
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      alternateGridColor: vars.alternateGridColor,
      lineWidth: 0,
      min: 0,
      labels: {
        enabled: false,
      },
    },
    tooltip: {
      enabled:false,
    },
    legend: {
      enabled: false
    },
  }
  return Utils.assign(baseOption,spiderOption);
}



export const pieBaseOption = function(){
  let option1 = {
    chart: {
      spacing : [140, 0 , 40, 0]
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false
        },
        innerSize: '60%',
      }
    },
    title: {
      floating:true,
    },
  };
  return Utils.assign(baseOption,option1);
}

//仪表盘
export const instrumentPanelBaseOption = function(){
  let option1 = {
    chart: {
      marginTop: 0,
      width: "180",
      height: "130",
      plotBackgroundImage: "/static/meter.png",
    },
    pane: {
      startAngle: -115,
      endAngle: 115,
      center: ['50%', '70%'],
      background: {
        backgroundColor: '#fff',
        borderWidth: 0,
        innerRadius:20,
        outerRadius: 65,
      }
    },
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickAmount: 50,
      labels: {
        enabled: false
      },
    },
    plotOptions: {
      gauge: {
        dataLabels: {
          enabled: false
        },
        dial: {
          backgroundColor: '#e63838',
          radius: '100%',
          rearLength: '0%',
          baseWidth: 10,
          baseLength: '10%'
        }
      }
    },
    title: {
      floating:true,
      x: 0,
      y: 100,
      style:{
        fontSize:24
      }
    },

  };
  return Utils.assign(baseOption,option1);
}

//k线图
export const kLineBaseOption = function(){
  let option = {
    plotOptions:{
      candlestick:{
        color: vars.klineDownColor,
        lineColor: vars.klineDownLineColor,
        upColor: vars.klineUpColor,
        upLineColor: vars.klineUpLineColor,
        showInLegend:false,
      },
    },
    tooltip: {
      formatter: function () {
        return tooltipForKline(this);
      },
    }
  }
  return Utils.assign(baseOption,option);
}



