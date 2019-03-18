<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    loadJs(url,callback){
        console.log(url);
      var script=document.createElement('script');
      script.type="text/javascript";
      if(typeof(callback)!="undefined"){
        if(script.readyState){
          script.onreadystatechange=function(){
            if(script.readyState == "loaded" || script.readyState == "complete"){
              script.onreadystatechange=null;
              callback();
            }
          }
        }else{
          script.onload=function(){
            callback();
          }
        }
      }
      script.src=url;
      document.body.appendChild(script);
    },
  },
//  beforeCreate(){
//    var script=document.createElement('script');
//    script.type="text/javascript";
//    script.src="./static/theme.js";
////    document.body.appendChild(script);
//    document.getElementsByTagName('header')[0].appendChild(script);
////    this.loadJs("./assets/theme.js");
//  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
