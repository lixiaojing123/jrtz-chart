
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
      plotBackgroundImage: "/static/meter.png",
    },
    pane: {
      startAngle: -115,
      endAngle: 115,
      center: ['50%', '70%'],
      background: {
        backgroundColor: '#fff',
        borderWidth: 0,
        innerRadius:100,
        outerRadius: 100,
        shape:'arc',
      }
    },
    yAxis: {
      min: 0,
      max: 4,
      // lineWidth: 0,
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
          backgroundColor: '#F63636',
          radius: '100%',
          baseWidth: 9,
          baseLength: '10%', // of radius
          rearLength: '5',
        },
        pivot: {
          radius:4,
          borderWidth: 1,
          borderColor: '#F63636',
          backgroundColor: '#fff'
        }
      }
    },
    title: {
      floating:true,
      x: 0,
      y: 80,
      style:{
        fontSize:20
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



