import Vue from './vue.min.js';


//引入vue-resource
import VueResource from 'vue-resource';

//引入路由
import VueRouter from './vue-router.min.js';

import routerConfig from './router.config.js';

import '../css/admin-style.css';








import App from '../components/App.vue';








Vue.use(VueRouter);



Vue.use(VueResource);



var router = new VueRouter(routerConfig);







//时间过滤器
 Vue.filter('time', function (value) {
        //return new Date(parseInt(value) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
        var time = new Date(parseInt(value)*1000);
        var year = time.getFullYear();
        var month = time.getMonth()+1;
        month = month < 10?'0' + month:month;
        var day = time.getDate();
        day = day<10?'0' + day:day;
        return year + '.'+month+'.'+day;

    })




//全局标签过滤器
 Vue.prototype.htmlDecode = function(str){
      var s = "";   
      if (str.length == 0) return "";   
      s = str.replace(/&gt;/g, ">");   
      s = s.replace(/&lt;/g, "<"); 
      s = s.replace(/&gt;/g, ">");     
      s = s.replace(/amp;/g, "");     
      //s = s.replace(/&nbsp;/g, " ");   
      s = s.replace(/&#39;/g, "\'");   
      s = s.replace(/&quot;/g, "\"");   
      //s = s.replace(/<br>/g, "\n");   
      return s; 
 }











var vm = new Vue({
	router,
  el: '#admin',
  render: h => h(App),

})
























