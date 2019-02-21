<template>
  <div>
    <chart id="kline_charts" :type="type6"  :xdata="xdata6"  :ydata="ydata6" :ytype="ytype6" yunit="元"
           :isXdataJustify="isXdataJustify6"></chart>

    <chart id="pannel_charts" :type="type5" :ydata="ydata5"  :text="text2" :extendOption="extendOption5"></chart>

    <chart id="spider_charts" :type="type3"  :xdata="xdata3"  :ydata="ydata3" :ytype="ytype3" :isDataDot="isDataDot3"></chart>


    <chart id="market_hk_charts" :type="type" :xdata="xdata"  :ydata="ydata" :ytype="ytype"
           :seriesName="seriesName" :yunit="yunit" :isDataDot="false">

    </chart>

    <chart id="tracking_charts" :type="type" :xdata="xdata"  :ydata="ydata" :ytype="ytype" :seriesName="seriesName" :isStacking="isStacking"></chart>


    <chart id="market_hk_charts2" :type="type" :xdata="xdata"  :ydata="ydata2" :ytype="ytype1"
           :seriesName="seriesName">

    </chart>

    <chart id="market_hk_charts3" :type="type" :xdata="xdata"  :ydata="ydata2" :ytype="['column','column']"
           :seriesName="seriesName" :isStacking="isStacking">

    </chart>


    <chart id="tracking_charts2" :type="type4"  :ydata="ydata4"  :text="text" ></chart>


  </div>
</template>



<script>
  import chart from './chart'

export default {
  data(){
    return{
      type: "basic",

      xdata:["近一周","近一月","近半年","近一年"],

      ydata: [[1,2,3,4],[1,2,3,4]],
      ydata2: [[1,10,8,3],[4,3,2,1]],

      ytype: ["line","column"],
      ytype1: ["line","line"],
      text:"中风险",

      seriesName: ["个股涨跌幅","行业涨跌幅"],
      isStacking : true,
      yunit:"家",


      //spider
      type3: "spider",
      xdata3: ['盈利前景', '成长能力', '估值水平', '技术分析', '资金流向','机构测评'],
      ydata3: [[1,2,3,4,5,6]],
      ytype3: ["area"],
      isDataDot3:false,
      //spider

      //circle
      type4: "circle",
      ydata4:[[8.5,6.2,0.7]],
      text2:"30%",
      //circle

      //pannel
      type5:"panel",
      ydata5:[20],
      extendOption5:{
//        chart: {
//          width: "160",
//          height: "100",
//        },
      },
      //pannel

      //kline
      type6:"kline",
      ytype6:["candlestick"],
      xdata6: ['2018-05-12', '2018-05-12', '2018-05-12', '2018-05-12', '2018-05-12','2018-05-12','2018-05-12','2018-05-12'],
      ydata6: [[
        ["08-12", 67.37, 68.38, 67.12, 67.79],
        ["08-15", 68.1, 68.25, 64.75, 64.98],
        ["08-15", 68.1, 68.25, 64.75, 64.98],
        ["08-15", 68.1, 68.25, 64.75, 64.98],
        ["08-15", 68.1, 68.25, 64.75, 64.98],
        ["08-15", 68.1, 68.25, 64.75, 64.98],
        ["08-15", 68.1, 68.25, 64.75, 64.98],
        ["08-15", 68.1, 68.25, 64.75, 64.98],
      ]],
      isXdataJustify6: true,
      //kline
    }
  },
  components: {
    chart
  },

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
