/**
 * Created by jingjing on 2018/11/22.
 */

export const getSeriesOption = function(dataArr,typeArr,nameArr,xdata){

  if(! nameArr instanceof Array) {
    console.log("seriesName 格式不正确" );
    return;
  }
  if(! typeArr instanceof Array) {
    console.log("type 格式不正确" );
    return;
  }

  var series = [];
  for(let i in dataArr){
    if(! dataArr instanceof Array) {
      console.log("dataArray 格式不正确" );
      return;
    }

    var item = {};
    item.name = nameArr[i];
    item.type = typeArr[i];
    item.data = dataArr[i];
    series.push(item);
  }

  return {
    series : series,
    // xAxis:{
    //   categories : xdata
    // }
  };
}


export const setXData = function(xdata){

  if(! xdata instanceof Array) {
    console.log("seriesName 格式不正确" );
    return;
  }
  return {
    categories :xdata
  };
}



export const setData = function(xdata,ydata,seriesName){
  return {
    data: {
      columns: [
        [null, 'Apples', 'Pears', 'Oranges'], // categories
        ['Ola', 1, 4, 3], // first series
        ['Kari', 5, 4, 2] // second series
      ]
    }
  };

}
