/**
 * Created by jingjing on 2018/11/22.
 */

import vars from './theme';
export const legendHtml  = function (name, color) {
  return `<i style="display: inline-block;margin-right: 5px;background: #fff; width: 8px;height: 8px;background: ${color}; border-radius: 50%;"></i>
          <span style="color: ${vars.legendFontColor};font-size:12px;">${name}</span>`
}

