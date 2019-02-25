/**
 * Created by jingjing on 2018/11/22.
 */
import vars from "../assets/theme.js"

export const tooltipHTML = function (target) {
  let point = target.points || target.point;
  let unit = point[0].point.series.chart.options.yAxis[0].title.text;
  let row = '';
  for (let i = 0; i < point.length; i++) {
    row += `
        <p>
          <span style="background-color:${point[i].color};width:5px;height:5px;display:inline-block;margin-right:2px;border-radius: 100%;"></span>
          <span style="color:${vars.tooltipsContentFontColor}; margin-bottom: 5px;vertical-align: middle; ">${point[i].series.name}: ${point[i].y}${unit}</span>
        </p>
        `
  }
  return `
      <div style="background: ${vars.toolitpsBackgroundColor};padding: 6px 10px; border-radius: 2px;">
          <p style="color:${vars.tooltipsTitleFontColor}; font-size:10px">${point[0].x}</p>
          <div style="color:${vars.tooltipsContentFontColor}">
              ${row}
          </div>
      </div>
    `
}

export const tooltipForKline = function (target) {
  let point = target.points || target.point;
  let unit = point[0].point.series.chart.options.yAxis[0].title.text;
  let row = '';
    row += `
        <p>
          <span style="color:${vars.tooltipsContentFontColor}; margin-bottom: 5px;vertical-align: middle; ">高: ${point[0].point.high}</span>
        </p>
         <p>
          <span style="color:${vars.tooltipsContentFontColor}; margin-bottom: 5px;vertical-align: middle; ">开: ${point[0].point.open}</span>
        </p>
         <p>
          <span style="color:${vars.tooltipsContentFontColor}; margin-bottom: 5px;vertical-align: middle; ">低: ${point[0].point.low}</span>
        </p>
         <p>
          <span style="color:${vars.tooltipsContentFontColor}; margin-bottom: 5px;vertical-align: middle; ">收: ${point[0].point.close}</span>
        </p>
        `

  return `
      <div style="background: ${vars.toolitpsBackgroundColor};padding: 6px 10px; border-radius: 2px;">
          <p style="color:${vars.tooltipsTitleFontColor}; font-size:10px">${point[0].x}</p>
          <div style="color:${vars.tooltipsContentFontColor}">
              ${row}
          </div>
      </div>
    `
}

