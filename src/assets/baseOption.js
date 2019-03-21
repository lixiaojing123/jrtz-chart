import vars from "./theme.js"
import {legendHtml} from "./legend.js"
import {tooltipHTML}  from "./tooltips"



export const baseOption = {
  chart: {
    marginTop: 50,
    height: 280,
    animation: false,
  },
  credits: {
    enabled: false
  },
  colors: vars.colors,
  plotOptions: {
    column:{
      borderWidth:0,
      states:{
        hover:{
          enabled:false,
          marker:{
            enabled:false,
            radius:0,
          },
          lineWidthPlus:0,
        }
      }
    },
    line:{
      marker:{
        radius:3,
        lineWidth:5,
        lineColor: null,
        symbol:"circle",
      },
    },
    series:{
      fillOpacity:0.5,  //填充透明度
      marker:{
        enabled:true,
        states:{
          hover:{
            enabled:false
          }
        }
      },
      states:{
        hover:{
          marker:{
            enabled:false,
            radius:0,
          },
          lineWidthPlus:0,
        }
      }
    }
  },
  xAxis:{

    lineColor: vars.splitLineColor,
    gridLineWidth: 0,
    tickWidth:0,//去掉刻度
    tickLength:0,
    labels: {
      style: {
        color: vars.labelFontColor
      }
    },
    crosshair:{
      color:vars.barShadowColor,
      // width:0
    },

  },
  title:"",
  yAxis:{
    gridLineColor: vars.splitLineColor,
    lineWidth: 1,
    lineColor: vars.yLineColor,
    tickWidth:0,//去掉刻度
    allowDecimals: true,
    tickAmount: 6,
    labels: {
      x: -8,
      style: {
        color: vars.labelFontColor,
        fontSize: 10
      }
    },
    title: {
      text: '',
      align:'high',
      y:-10,
      rotation:0,
      offset:-5,
      style:{
        color: vars.labelFontColor,
        fontSize: 10,
      }
    },
  },
  legend:{
    align: "right",
    itemDistance: 15,
    floating: true,
    verticalAlign: 'top',
    symbolWidth: 0,
    symbolHeight: 0,
    y: 5,
    useHTML: true,
    padding: 0,
    itemStyle: {
      color: vars.legendFontColor,
      fontWeight: 400
    },
    labelFormatter: function () {
      return legendHtml(this.name, this.color);
    },
  },
  tooltip: {
    animation:false,
    useHTML: true,
    backgroundColor: vars.tooltipsBg,
    padding: 0,
    borderWidth: 0,
    shadow: false,
    borderRadius: 1000,
    shared: true,
    style: {
      color: vars.tooltipsTextColor,
      fontSize: '12px'
    },
    formatter: function () {
      return tooltipHTML(this);
    },
  },

}


