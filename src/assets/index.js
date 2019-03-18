import vars from './theme'
import {baseOption} from './baseOption'
/**
 * 常用的工具方法封装
 */
window.valueDecimals = 2;
let Utils = {

  getBasicSeriesOption(dataArr,typeArr,nameArr,xdata,yunit,isDataDot,isXdataJustify,doubleYIndexArr){
    if(! nameArr instanceof Array) {
      console.log("seriesName 格式不正确" );
      return;
    }
    if(! typeArr instanceof Array) {
      console.log("type 格式不正确" );
      return;
    }

    var series = [];
    var yAxis = [];
    for(let i in dataArr){
      if(! dataArr instanceof Array) {
        console.log("dataArray 格式不正确" );
        return;
      }

      var item = {};
      item.name = nameArr[i];
      item.type = typeArr[i];
      item.data = dataArr[i];
      if(!isDataDot){
        item.marker = {
          radius: 0,
          states:{
            hover:{
              enabled:false,
            },
            select:{
              enabled:false,
            }
          }
        }
      }


      if(item.type == "column"){
        item.zIndex = '-1';
      }
      if(doubleYIndexArr){
        for(let k in doubleYIndexArr){
          if(i == doubleYIndexArr[k]){
            item.yAxis = 1;
          }
        }
      }



      series.push(item);

    }


    if(doubleYIndexArr && doubleYIndexArr.length > 0 ){
      var baseYAxis1 = this.assign(baseOption["yAxis"],{});
      baseYAxis1.title.text = yunit[0] ? yunit[0] : "";
      yAxis.push( baseYAxis1);
      var baseYAxis2 = this.assign(baseOption["yAxis"],{});
      baseYAxis2.opposite = true;
      baseYAxis2.title.text = yunit[1] ? yunit[1] : "";
      baseYAxis2.labels.x = 8;
      yAxis.push(baseYAxis2);
    }else{
      yAxis = this.assign(baseOption["yAxis"],{});
      yAxis.title.text = yunit[0] ? yunit[0] : "";
    }
    // }
    // title: {
    //   text: '',
    //     align:'high',
    //     y:-10,
    //     rotation:0,
    //     offset:-5,
    //     style:{
    //     color: vars.labelFontColor,
    //       fontSize: 10,
    //   }
    // },
    return {
      series : series,
      // yAxis:[
      //   {
      //     tickAmount:6,
      //     title: {
      //       text: yunit,
      //       align: 'high',
      //       y: -10,
      //       rotation: 0,
      //       offset: -5,
      //       style: {
      //         color: vars.unitColor,
      //         fontSize: 10,
      //       }
      //     },
      //   },
      //   {
      //     tickAmount:6,
      //     title: {
      //       text: yunit,
      //       align: 'high',
      //       y: -10,
      //       rotation: 0,
      //       offset: -10 ,
      //       style: {
      //         color: vars.unitColor,
      //         fontSize: 10,
      //
      //       },
      //
      //     },
      //     opposite: true
      //   }
      //   ],
      yAxis:yAxis,
      xAxis:{
        categories : xdata,
        tickInterval: isXdataJustify ? xdata.length-1:null,
      },

    };
  },

  getPieSeriesOption(dataArr,text){

    var series = [];
    for(let i in dataArr){
      if(! dataArr instanceof Array) {
        console.log("dataArray 格式不正确" );
        return;
      }

      var item = {};
      item.type = "pie";
      item.data = dataArr[i];
      series.push(item);
    }

    return {
      series : series,
      title: {
         text: text
      },
    };
  },
  getPanelSeriesOption(dataArr,text){
    return {
      series: [{
        type: 'gauge',
        data: dataArr,
      }],
      title: {
        text: text
      },
    };
  },
  getKlineSeriesOption(dataArr,typeArr,nameArr,xdata,yunit,isDataDot){

  },
   /**
    * 基本的数据类型判断
    */

   isNull: what => {
      return what === null || typeof (what) === 'undefined';
   },

   isArr: what => {
      return (!Utils.isNull(what) && what.constructor.toString().indexOf('Array') > -1);
   },

   isObj: what => {
      const type = typeof what;
      return what !== null && (type === 'object' || type === 'function');
   },

   isStr: what => {
      return typeof what === 'string' || what instanceof String;
   },

   isLink: what => {
      return Utils.isStr(what) && /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(what);
   },

   isNum: what => {
      return !isNaN(parseFloat(what)) && isFinite(what);
   },

   isFn: what => {
      return (what && (typeof what === 'function' || what instanceof Function));
   },

   isBool: what => {
      return what === true || what === false;
   },

   toCamel: str => {
      if (!Utils.isStr) {
         return str;
      }

      let i = 0,
         len = str.length,
         result = [];

      for (i = 0; i < len; i++) {
         if (str[i] === '-') {
            i++;
            result.push(str[i].toUpperCase());
         } else {
            result.push(str[i]);
         }
      }

      return result.join('');
   },

   /**
    * 是否是基础类型
    */
   isBasic: what => {
      return Utils.isStr(what) || Utils.isNum(what) || Utils.isBool(what) || Utils.isFn(what);
   },

   /**
    * 判断是否为空
    */
   isEmpty: what => {
      if (Utils.isArr(what)) {
         var i = 0,
            length = what.length;
         for (; i < length; i++) {
            // TODO 进一步判定类型
            if (Utils.isObjEmpty(what[i])) {
               return true;
            }
         }
         return false;
      } else {
         return Utils.isObjEmpty(what);
      }
   },

   /**
    * 判断对象是否为空
    */
   isObjEmpty: what => {
      if (what) {
         var key;
         for (key in what) {
            return false;
         }
      }
      return true;
   },

   /**
    * 深拷贝
    * 注意：该方法会影响 a 的值
    */
   merge: (a, b) => {
      if (!a || !b) {
         return a || b;
      }
      Object.keys(b).forEach((bk) => {
         if (Utils.isNull(b[bk]) || Utils.isBasic(b[bk])) {
            a[bk] = b[bk];
         } else if (Utils.isArr(b[bk])) {
            a[bk] = [];
            b[bk].forEach((i) => {
               if (Utils.isNull(i) || Utils.isBasic(i)) {
                  a[bk].push(i);
               } else {
                  a[bk].push(Utils.merge(Utils.isArr(i) ? [] : {}, i));
               }
            })
         } else if (b[bk].tagName && b[bk].appendChild && b[bk].removeChild && b[bk].style) {
            a[bk] = b[bk];
         } else {
            a[bk] = a[bk] || {};
            Utils.merge(a[bk], b[bk]);
         }
      });

      return a;
   },

   noop: () => {
      return undefined;
   },

   JSONCopy: obj => {
      return JSON.parse(JSON.stringify(obj));
   },

   // 更好做法：https://github.com/sindresorhus/object-assign
   assign: (a, b) => {
      let aa = Utils.merge({}, a);
      return Utils.merge(aa, b);
   },

   // from: https://github.com/lodash/lodash/blob/master/.internal/assignValue.js
   assignValue: (obj, key, value) => {
      const objValue = obj[key];

      if (!(Object.prototype.hasOwnProperty.call(obj, key) && Utils.eq(objValue, value)) || (value === undefined && !(key in object))) {
         obj[key] = value;
      }
   },

   // from: https://github.com/lodash/lodash/blob/master/eq.js
   eq: (value, other) => {
      return value === other || (value !== value && other !== other);
   },

   /**
    * 浅拷贝对象
    */
   extend: function (a, b) {
      var n;
      if (!b) {
         return a;
      }
      if (!a) {
         a = {};
      }
      for (n in b) {
         a[n] = b[n];
      }
      return a;
   },

   /**
    * 数值格式化，
    * @param val 需要格式化的数值
    * @param decimals 保留位数
    */
   numberFormat: (val, decimals, thousandsSep) => {

      val = (typeof decimals !== 'undefined' ? val.toFixed(decimals) : val).toString();
      // 分离数字的小数部分和整数部分
      var parts = val.split('.');

      // 整数部分加[thousandsSep]分隔, 借用一个著名的正则表达式
      parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (thousandsSep || ','));

      if (!decimals) {
         return parts[0];
      }

      return parts.join('.');
   },

   /**
    * 时间格式函数
    * @param {number} timestamp 时间戳，为空则取当前时间
    * @param {string} separator 年月日之间的分隔符
    * @param {boolean} isDateTime 是否包含时分秒
    */
   dateFormat: (timestamp, separator, isDateTime) => {
      if (separator === undefined) {
         separator = '';
      }
      var date = timestamp ? new Date(timestamp) : new Date(),
         year = date.getFullYear(),
         month = date.getMonth() + 1,
         day = date.getDate(),
         result = year + separator + (month > 9 ? month : '0' + month) + separator + (day > 9 ? day : '0' + day);

      if (!isDateTime) {
         return result;
      }

      return result + ' ' + Utils.timeFormat(null, date);
   },

   timeFormat: (timestamp, date) => {
      if (!date) {
         date = timestamp ? new Date(timestamp) : new Date();
      }

      let hours = date.getHours(),
         minutes = date.getMinutes(),
         seconds = date.getSeconds();

      return (hours > 9 ? hours : '0' + hours) + ':' + (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds);
   },

   shortTimeFormat: timestamp => {
      let date = timestamp ? new Date(timestamp) : new Date(),
         hours = date.getHours(),
         minutes = date.getMinutes();

      return (hours > 9 ? hours : '0' + hours) + ':' + (minutes > 9 ? minutes : '0' + minutes);
   },

   /**
    *
    */
   isPhone: () => {
      var check = false;
      (function (a) {
         if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
            check = true;
         }
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
   },

   /**
    * 时间单位
    */
   timeUnit: {
      seconds: 1000,
      minutes: 60 * 1000,
      hours: 60 * 60 * 1000,
      day: 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000
   },

   /**
    * 时间取整
    * @param {number} timestamp 时间戳
    * @param {number} unit 时间单位（时间戳）
    * @param {boolean} isCeil
    */
   timeRound(timestamp, unit, isCeil) {
      let count = Math[isCeil ? 'ceil' : 'floor'](timestamp / unit);
      return count * unit;
   },

   cFormat(num, fix) {
      return Utils.chineseNumFormat(num, fix);
   },

   getQueryString(name, url) {
      if (!url) {
         url = window.location.search;
      }

      let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
         r = url.substr(1).match(reg);
      if (r) {
         return r[2];
      }
      return null;
   },

   exchangeValueBySort(a, b) {
      if(a > b) {
         let temp = null;
         temp = a;
         a = b;
         b = temp
      }
      return [a, b];
   },


}

export default Utils;
