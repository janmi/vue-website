webpackJsonp([1],{74:function(e,t,n){"use strict";var a=n(135);e.exports={props:["dataBanner"],data:function(){return{banner:[],isTab:0}},ready:function(){var e=this;setTimeout(function(){new a(document.getElementById("slider"),{startSlide:0,speed:500,auto:3e3,continuous:!0,disableScroll:!1,stopPropagation:!1,callback:function(t,n){e.$data.isTab=t}})},1e3)}}},76:function(e,t){"use strict";e.exports={props:["dataList"]}},79:function(e,t,n){"use strict";e.exports={data:function(){return{banners:[],goods:[],msg:""}},route:{data:function(e){var t=this,n=[{id:1,picture:"https://gw.alicdn.com/tps/TB1qC1WJFXXXXcXXXXXXXXXXXXX-1125-352.jpg_q50.jpg",tit:"banner"},{id:2,picture:"https://img.alicdn.com/tps/TB10W1SJFXXXXXvXFXXXXXXXXXX-1125-352.jpg_q50.jpg",tit:"banner"},{id:3,picture:"https://img.alicdn.com/tps/TB13rc6JpXXXXXkXpXXXXXXXXXX-1125-352.jpg_q50.jpg",tit:"banner"}];t.$data.banners=n,t.$http.get({url:"https://jsonp.afeld.me/?url=http://www.ydcss.com/json/index.json"}).then(function(n){e.next({goods:n.data.goodsData}),t.$data.goods=n.data.goodsData,console.log("请求成功！")},function(e){console.log("请求失败，请稍后再试")})}},components:{myBanner:n(104),myType:n(106),myList:n(105)}}},81:function(e,t,n){t=e.exports=n(15)(),t.push([e.id,".m-banner{position:relative;height:3.066667rem}.m-banner img{display:block;width:100%}.swipe{visibility:hidden}.swipe,.swipe-wrap{height:100%;overflow:hidden;position:relative}.swipe-wrap>div{float:left;width:100%;position:relative}.swipe-tab{position:absolute;right:.4rem;bottom:.066667rem}.swipe-tab span{display:inline-block;width:.24rem;height:.24rem;margin-right:.066667rem;border-radius:50%;background-color:hsla(0,0%,97%,.8);border:.026667rem solid #d9d9d9}.swipe-tab .cur{background-color:#ff5000}","",{version:3,sources:["/./src/components/banner.vue"],names:[],mappings:"AAAA,UAAU,kBAAkB,kBAAkB,CAAC,cAAc,cAAc,UAAU,CAAC,OAAmC,iBAAkB,CAAkB,mBAAhE,YAAY,gBAAgB,AAAkB,iBAAiB,CAA2D,gBAAgB,WAAW,WAAW,iBAAiB,CAAC,WAAW,kBAAkB,YAAY,iBAAiB,CAAC,gBAAgB,qBAAqB,aAAa,cAAc,wBAAwB,kBAAkB,mCAAuC,+BAA+B,CAAC,gBAAgB,wBAAwB,CAAC",file:"banner.vue",sourcesContent:[".m-banner{position:relative;height:3.066667rem}.m-banner img{display:block;width:100%}.swipe{height:100%;overflow:hidden;visibility:hidden;position:relative}.swipe-wrap{height:100%;overflow:hidden;position:relative}.swipe-wrap>div{float:left;width:100%;position:relative}.swipe-tab{position:absolute;right:.4rem;bottom:.066667rem}.swipe-tab span{display:inline-block;width:.24rem;height:.24rem;margin-right:.066667rem;border-radius:50%;background-color:rgba(248,248,248,0.8);border:.026667rem solid #d9d9d9}.swipe-tab .cur{background-color:#ff5000}"],sourceRoot:"webpack://"}])},82:function(e,t,n){t=e.exports=n(15)(),t.push([e.id,'.goods{width:100%;overflow:hidden}.goods .goods-item{float:left;width:49.5%;margin-bottom:.133333rem;padding-bottom:.266667rem;background-color:#fff;font-size:14px}[data-dpr="2"] .goods .goods-item{font-size:28px}[data-dpr="2.5"] .goods .goods-item{font-size:35px}[data-dpr="2.75"] .goods .goods-item{font-size:39px}[data-dpr="3"] .goods .goods-item{font-size:42px}[data-dpr="4"] .goods .goods-item{font-size:56px}.goods .goods-item:nth-child(even){margin-left:1%}.goods .goods-item img{display:block;width:100%;min-height:4.933333rem}.goods .goods-item .goods-name{padding:.133333rem .2rem;height:1rem;line-height:.55rem;color:#666;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.goods .goods-item span{display:inline-block;padding:.066667rem .2rem;color:#ff5000}',"",{version:3,sources:["/./src/components/list.vue"],names:[],mappings:"AAAA,OAAO,WAAW,eAAe,CAAC,mBAAmB,WAAW,YAAY,yBAAyB,0BAA0B,sBAAsB,cAAc,CAAC,kCAAkC,cAAc,CAAC,oCAAoC,cAAc,CAAC,qCAAqC,cAAc,CAAC,kCAAkC,cAAc,CAAC,kCAAkC,cAAc,CAAC,mCAAmC,cAAc,CAAC,uBAAuB,cAAc,WAAW,sBAAsB,CAAC,+BAA+B,yBAAyB,YAAY,mBAAmB,WAAW,qBAAqB,gBAAgB,uBAAuB,oBAAoB,qBAAqB,2BAA2B,CAAC,wBAAwB,qBAAqB,yBAAyB,aAAa,CAAC",file:"list.vue",sourcesContent:['.goods{width:100%;overflow:hidden}.goods .goods-item{float:left;width:49.5%;margin-bottom:.133333rem;padding-bottom:.266667rem;background-color:#fff;font-size:14px}[data-dpr="2"] .goods .goods-item{font-size:28px}[data-dpr="2.5"] .goods .goods-item{font-size:35px}[data-dpr="2.75"] .goods .goods-item{font-size:39px}[data-dpr="3"] .goods .goods-item{font-size:42px}[data-dpr="4"] .goods .goods-item{font-size:56px}.goods .goods-item:nth-child(even){margin-left:1%}.goods .goods-item img{display:block;width:100%;min-height:4.933333rem}.goods .goods-item .goods-name{padding:.133333rem .2rem;height:1rem;line-height:.55rem;color:#666;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.goods .goods-item span{display:inline-block;padding:.066667rem .2rem;color:#ff5000}'],sourceRoot:"webpack://"}])},83:function(e,t,n){t=e.exports=n(15)(),t.push([e.id,'.type-nav{padding:.333333rem .333333rem 0;margin-bottom:.133333rem;background-color:#fff;overflow:hidden}.type-nav .nav-item{float:left;display:block;width:20%;margin-bottom:.333333rem;text-align:center;color:#5f646e;font-size:12px}[data-dpr="2"] .type-nav .nav-item{font-size:24px}[data-dpr="2.5"] .type-nav .nav-item{font-size:30px}[data-dpr="2.75"] .type-nav .nav-item{font-size:33px}[data-dpr="3"] .type-nav .nav-item{font-size:36px}[data-dpr="4"] .type-nav .nav-item{font-size:48px}.type-nav .nav-item span{display:block;margin:0 auto .133333rem;width:1.173333rem;height:1.173333rem;line-height:1.173333rem;border-radius:50%;background-color:#f2f2f2;color:#ff5000;font-size:26px}[data-dpr="2"] .type-nav .nav-item span{font-size:52px}[data-dpr="2.5"] .type-nav .nav-item span{font-size:65px}[data-dpr="2.75"] .type-nav .nav-item span{font-size:72px}[data-dpr="3"] .type-nav .nav-item span{font-size:78px}[data-dpr="4"] .type-nav .nav-item span{font-size:104px}.user-head{height:2rem;background-color:#ff5000;font-size:16px}[data-dpr="2"] .user-head{font-size:32px}[data-dpr="2.5"] .user-head{font-size:40px}[data-dpr="2.75"] .user-head{font-size:44px}[data-dpr="3"] .user-head{font-size:48px}[data-dpr="4"] .user-head{font-size:64px}.user-head a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;width:100%;height:2rem;padding-left:.2rem;color:#fff}.user-head .user-name{display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.user-head span:last-child{display:block;position:relative;width:1.55rem;height:.666667rem;line-height:.666667rem;background-color:#e54800;z-index:10;text-align:center;text-indent:-.053333rem}.user-head span:last-child:before{content:"";position:absolute;top:0;left:-.265333rem;width:.666667rem;height:.666667rem;border-top-left-radius:100%;border-bottom-left-radius:100%;background-color:#e54800;z-index:-1}.user-head .user-pic{display:block;margin-right:.2rem;width:1.333333rem;height:1.333333rem;border-radius:50%;border:.026667rem solid #fff}.user-nav{width:100%;margin-top:.266667rem;background-color:#fff;border-bottom:.026667rem solid #e7e7e7}.order-all{padding:.333333rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #e7e7e7;font-size:16px;color:#595e60}[data-dpr="2"] .order-all{font-size:32px}[data-dpr="2.5"] .order-all{font-size:40px}[data-dpr="2.75"] .order-all{font-size:44px}[data-dpr="3"] .order-all{font-size:48px}[data-dpr="4"] .order-all{font-size:64px}.order-all .tit{display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.order-all span:last-child{color:#adadad;font-size:12px}[data-dpr="2"] .order-all span:last-child{font-size:24px}[data-dpr="2.5"] .order-all span:last-child{font-size:30px}[data-dpr="2.75"] .order-all span:last-child{font-size:33px}[data-dpr="3"] .order-all span:last-child{font-size:36px}[data-dpr="4"] .order-all span:last-child{font-size:48px}.user-nav-cont{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:.2rem 0;text-align:center}.user-nav-cont:after{position:absolute;bottom:0;left:0;content:\'\';width:100%;height:1px;background-color:#d9d9d9}.user-nav-cont a{position:relative;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#051b28;font-size:14px}[data-dpr="2"] .user-nav-cont a{font-size:28px}[data-dpr="2.5"] .user-nav-cont a{font-size:35px}[data-dpr="2.75"] .user-nav-cont a{font-size:39px}[data-dpr="3"] .user-nav-cont a{font-size:42px}[data-dpr="4"] .user-nav-cont a{font-size:56px}.user-nav-cont a span{display:inline-block;width:100%;margin-bottom:-.133333rem;font-size:22px;color:#999}[data-dpr="2"] .user-nav-cont a span{font-size:44px}[data-dpr="2.5"] .user-nav-cont a span{font-size:55px}[data-dpr="2.75"] .user-nav-cont a span{font-size:61px}[data-dpr="3"] .user-nav-cont a span{font-size:66px}[data-dpr="4"] .user-nav-cont a span{font-size:88px}.user-nav-cont a i{position:absolute;top:.035rem;left:50%;margin-left:.14rem;padding:.04rem;width:.42rem;height:.42rem;line-height:.42rem;border:.026667rem solid #ff5000;background-color:#ff5000;border-radius:50%;color:#fff;text-align:center;font-size:12px;font-style:normal}[data-dpr="2"] .user-nav-cont a i{font-size:24px}[data-dpr="2.5"] .user-nav-cont a i{font-size:30px}[data-dpr="2.75"] .user-nav-cont a i{font-size:33px}[data-dpr="3"] .user-nav-cont a i{font-size:36px}[data-dpr="4"] .user-nav-cont a i{font-size:48px}.user-grid-nav{width:100%;margin-top:.266667rem;border-bottom:.026667rem solid #e7e7e7;background-color:#fff;overflow:hidden}.user-grid-nav a{position:relative;float:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:25%;height:2.626667rem;font-size:14px;color:#051b28;box-sizing:border-box;border-bottom:.0133333rem solid #e7e7e7;border-right:.0133333rem solid #e7e7e7}[data-dpr="2"] .user-grid-nav a{font-size:28px}[data-dpr="2.5"] .user-grid-nav a{font-size:35px}[data-dpr="2.75"] .user-grid-nav a{font-size:39px}[data-dpr="3"] .user-grid-nav a{font-size:42px}[data-dpr="4"] .user-grid-nav a{font-size:56px}.user-grid-nav a span{display:block;width:100%;font-size:30px;color:#ff5000;text-align:center}[data-dpr="2"] .user-grid-nav a span{font-size:60px}[data-dpr="2.5"] .user-grid-nav a span{font-size:75px}[data-dpr="2.75"] .user-grid-nav a span{font-size:83px}[data-dpr="3"] .user-grid-nav a span{font-size:90px}[data-dpr="4"] .user-grid-nav a span{font-size:120px}[data-dpr="1"] .user-grid-nav a{border-bottom:1px solid #e7e7e7;border-right:1px solid #e7e7e7}',"",{version:3,sources:["/./src/components/type_nav.vue"],names:[],mappings:"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",file:"type_nav.vue",sourcesContent:['.type-nav{padding:.333333rem .333333rem 0;margin-bottom:.133333rem;background-color:#fff;overflow:hidden}.type-nav .nav-item{float:left;display:block;width:20%;margin-bottom:.333333rem;text-align:center;color:#5f646e;font-size:12px}[data-dpr="2"] .type-nav .nav-item{font-size:24px}[data-dpr="2.5"] .type-nav .nav-item{font-size:30px}[data-dpr="2.75"] .type-nav .nav-item{font-size:33px}[data-dpr="3"] .type-nav .nav-item{font-size:36px}[data-dpr="4"] .type-nav .nav-item{font-size:48px}.type-nav .nav-item span{display:block;margin:0 auto .133333rem;width:1.173333rem;height:1.173333rem;line-height:1.173333rem;border-radius:50%;background-color:#f2f2f2;color:#ff5000;font-size:26px}[data-dpr="2"] .type-nav .nav-item span{font-size:52px}[data-dpr="2.5"] .type-nav .nav-item span{font-size:65px}[data-dpr="2.75"] .type-nav .nav-item span{font-size:72px}[data-dpr="3"] .type-nav .nav-item span{font-size:78px}[data-dpr="4"] .type-nav .nav-item span{font-size:104px}.user-head{height:2rem;background-color:#ff5000;font-size:16px}[data-dpr="2"] .user-head{font-size:32px}[data-dpr="2.5"] .user-head{font-size:40px}[data-dpr="2.75"] .user-head{font-size:44px}[data-dpr="3"] .user-head{font-size:48px}[data-dpr="4"] .user-head{font-size:64px}.user-head a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;width:100%;height:2rem;padding-left:.2rem;color:#fff}.user-head .user-name{display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.user-head span:last-child{display:block;position:relative;width:1.55rem;height:.666667rem;line-height:.666667rem;background-color:#e54800;z-index:10;text-align:center;text-indent:-0.053333rem}.user-head span:last-child:before{content:"";position:absolute;top:0;left:-0.265333rem;width:.666667rem;height:.666667rem;border-top-left-radius:100%;border-bottom-left-radius:100%;background-color:#e54800;z-index:-1}.user-head .user-pic{display:block;margin-right:.2rem;width:1.333333rem;height:1.333333rem;border-radius:50%;border:.026667rem solid #fff}.user-nav{width:100%;margin-top:.266667rem;background-color:#fff;border-bottom:.026667rem solid #e7e7e7}.order-all{padding:.333333rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #e7e7e7;font-size:16px;color:#595e60}[data-dpr="2"] .order-all{font-size:32px}[data-dpr="2.5"] .order-all{font-size:40px}[data-dpr="2.75"] .order-all{font-size:44px}[data-dpr="3"] .order-all{font-size:48px}[data-dpr="4"] .order-all{font-size:64px}.order-all .tit{display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.order-all span:last-child{color:#adadad;font-size:12px}[data-dpr="2"] .order-all span:last-child{font-size:24px}[data-dpr="2.5"] .order-all span:last-child{font-size:30px}[data-dpr="2.75"] .order-all span:last-child{font-size:33px}[data-dpr="3"] .order-all span:last-child{font-size:36px}[data-dpr="4"] .order-all span:last-child{font-size:48px}.user-nav-cont{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:.2rem 0;text-align:center}.user-nav-cont:after{position:absolute;bottom:0;left:0;content:\'\';width:100%;height:1px;background-color:#d9d9d9}.user-nav-cont a{position:relative;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#051b28;font-size:14px}[data-dpr="2"] .user-nav-cont a{font-size:28px}[data-dpr="2.5"] .user-nav-cont a{font-size:35px}[data-dpr="2.75"] .user-nav-cont a{font-size:39px}[data-dpr="3"] .user-nav-cont a{font-size:42px}[data-dpr="4"] .user-nav-cont a{font-size:56px}.user-nav-cont a span{display:inline-block;width:100%;margin-bottom:-0.133333rem;font-size:22px;color:#999}[data-dpr="2"] .user-nav-cont a span{font-size:44px}[data-dpr="2.5"] .user-nav-cont a span{font-size:55px}[data-dpr="2.75"] .user-nav-cont a span{font-size:61px}[data-dpr="3"] .user-nav-cont a span{font-size:66px}[data-dpr="4"] .user-nav-cont a span{font-size:88px}.user-nav-cont a i{position:absolute;top:.035rem;left:50%;margin-left:.14rem;padding:.04rem;width:.42rem;height:.42rem;line-height:.42rem;border:.026667rem solid #ff5000;background-color:#ff5000;border-radius:50%;color:#fff;text-align:center;font-size:12px;font-style:normal}[data-dpr="2"] .user-nav-cont a i{font-size:24px}[data-dpr="2.5"] .user-nav-cont a i{font-size:30px}[data-dpr="2.75"] .user-nav-cont a i{font-size:33px}[data-dpr="3"] .user-nav-cont a i{font-size:36px}[data-dpr="4"] .user-nav-cont a i{font-size:48px}.user-grid-nav{width:100%;margin-top:.266667rem;border-bottom:.026667rem solid #e7e7e7;background-color:#fff;overflow:hidden}.user-grid-nav a{position:relative;float:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:25%;height:2.626667rem;font-size:14px;color:#051b28;box-sizing:border-box;border-bottom:.0133333rem solid #e7e7e7;border-right:.0133333rem solid #e7e7e7}[data-dpr="2"] .user-grid-nav a{font-size:28px}[data-dpr="2.5"] .user-grid-nav a{font-size:35px}[data-dpr="2.75"] .user-grid-nav a{font-size:39px}[data-dpr="3"] .user-grid-nav a{font-size:42px}[data-dpr="4"] .user-grid-nav a{font-size:56px}.user-grid-nav a span{display:block;width:100%;font-size:30px;color:#ff5000;text-align:center}[data-dpr="2"] .user-grid-nav a span{font-size:60px}[data-dpr="2.5"] .user-grid-nav a span{font-size:75px}[data-dpr="2.75"] .user-grid-nav a span{font-size:83px}[data-dpr="3"] .user-grid-nav a span{font-size:90px}[data-dpr="4"] .user-grid-nav a span{font-size:120px}[data-dpr="1"] .user-grid-nav a{border-bottom:1px solid #e7e7e7;border-right:1px solid #e7e7e7}'],sourceRoot:"webpack://"}])},86:function(e,t,n){var a=n(81);"string"==typeof a&&(a=[[e.id,a,""]]);n(16)(a,{});a.locals&&(e.exports=a.locals)},88:function(e,t,n){var a=n(82);"string"==typeof a&&(a=[[e.id,a,""]]);n(16)(a,{});a.locals&&(e.exports=a.locals)},89:function(e,t,n){var a=n(83);"string"==typeof a&&(a=[[e.id,a,""]]);n(16)(a,{});a.locals&&(e.exports=a.locals)},94:function(e,t){e.exports='<div class=m-banner> <div id=slider class=swipe> <div class=swipe-wrap> <template v-for="banner in dataBanner"> <div class=swipe-wrap-item><a v-link="{name:\'detail\', params: { goodsId: banner.id }}" title=""><img v-bind:src=banner.picture alt={{banner.tit}}></a></div> </template> </div> </div> <div class=swipe-tab> <template v-for="banner in dataBanner"> <span v-bind:class="{\'cur\': isTab == $index }"></span> </template> </div> </div>'},96:function(e,t){e.exports='<div class=m-list> <ul class=goods> <template v-for="goods in dataList"> <li class=goods-item data-id={{goods.id}}> <a v-link="{name:\'detail\', params: { goodsId: goods.id }}" title=goods.tit> <img v-bind:src=goods.picture alt=""> <p class=goods-name>{{goods.tit}}</p> <span>{{goods.price}}</span> </a> </li> </template> </ul> </div>'},97:function(e,t){e.exports='<div class=type-nav> <a class=nav-item href=#> <span class="icon-font icon-cat"></span> 树懒 </a> <a class=nav-item href=#> <span class="icon-font icon-ju"></span> 闪电聚 </a> <a class=nav-item href=#> <span class="icon-font icon-import"></span> 闪电国际 </a> <a class=nav-item href=#> <span class="icon-font icon-take"></span> 闪电外卖 </a> <a class=nav-item href=#> <span class="icon-font icon-superMarket"></span> 闪电超市 </a> <a class=nav-item href=#> <span class="icon-font icon-full"></span> 充值中心 </a> <a class=nav-item href=#> <span class="icon-font icon-tour"></span> 闪电旅行 </a> <a class=nav-item href=#> <span class="icon-font icon-gold"></span> 领金币 </a> <a class=nav-item href=#> <span class="icon-font icon-live"></span> 闪电生活 </a> <a class=nav-item href=#> <span class="icon-font icon-type"></span> 闪电分类 </a> </div>'},101:function(e,t){e.exports="<my-banner v-bind:data-banner=banners></my-banner> <my-type></my-type> <div class=icon-loading v-if=$loadingRouteData></div> <my-list v-if=!$loadingRouteData v-bind:data-list=goods></my-list>"},104:function(e,t,n){var a,o;n(86),a=n(74),o=n(94),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},105:function(e,t,n){var a,o;n(88),a=n(76),o=n(96),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},106:function(e,t,n){var a,o;n(89),o=n(97),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},110:function(e,t,n){var a,o;a=n(79),o=n(101),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},135:function(e,t){function n(e,t){"use strict";function n(){u=b.children,B=u.length,u.length<2&&(t.continuous=!1),m.transitions&&t.continuous&&u.length<3&&(b.appendChild(u[0].cloneNode(!0)),b.appendChild(b.children[1].cloneNode(!0)),u=b.children),x=new Array(u.length),g=e.getBoundingClientRect().width||e.offsetWidth,b.style.width=u.length*g+"px";for(var n=u.length;n--;){var a=u[n];a.style.width=g+"px",a.setAttribute("data-index",n),m.transitions&&(a.style.left=n*-g+"px",s(n,C>n?-g:n>C?g:0,0))}t.continuous&&m.transitions&&(s(i(C-1),-g,0),s(i(C+1),g,0)),m.transitions||(b.style.left=C*-g+"px"),e.style.visibility="visible"}function a(){t.continuous?r(C-1):C&&r(C-1)}function o(){t.continuous?r(C+1):C<u.length-1&&r(C+1)}function i(e){return(u.length+e%u.length)%u.length}function r(e,n){if(C!=e){if(m.transitions){var a=Math.abs(C-e)/(C-e);if(t.continuous){var o=a;a=-x[i(e)]/g,a!==o&&(e=-a*u.length+e)}for(var r=Math.abs(C-e)-1;r--;)s(i((e>C?e:C)-r-1),g*a,0);e=i(e),s(C,g*a,n||v),s(e,0,n||v),t.continuous&&s(i(e-a),-(g*a),0)}else e=i(e),d(C*-g,e*-g,n||v);C=e,f(t.callback&&t.callback(C,u[C]))}}function s(e,t,n){A(e,t,n),x[e]=t}function A(e,t,n){var a=u[e],o=a&&a.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=n+"ms",o.webkitTransform="translate("+t+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+t+"px)")}function d(e,n,a){if(!a)return void(b.style.left=n+"px");var o=+new Date,i=setInterval(function(){var r=+new Date-o;return r>a?(b.style.left=n+"px",k&&p(),t.transitionEnd&&t.transitionEnd.call(event,C,u[C]),void clearInterval(i)):void(b.style.left=(n-e)*(Math.floor(r/a*100)/100)+e+"px")},4)}function p(){h=setTimeout(o,k)}function c(){k=0,clearTimeout(h)}var l=function(){},f=function(e){setTimeout(e||l,0)},m={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(e){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in t)if(void 0!==e.style[t[n]])return!0;return!1}(document.createElement("swipe"))};if(e){var u,x,g,B,b=e.children[0];t=t||{};var C=parseInt(t.startSlide,10)||0,v=t.speed||300;t.continuous=void 0!==t.continuous?t.continuous:!0;var h,w,k=t.auto||0,y={},z={},W={handleEvent:function(e){switch(e.type){case"touchstart":this.start(e);break;case"touchmove":this.move(e);break;case"touchend":f(this.end(e));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":f(this.transitionEnd(e));break;case"resize":f(n)}t.stopPropagation&&e.stopPropagation()},start:function(e){var t=e.touches[0];y={x:t.pageX,y:t.pageY,time:+new Date},w=void 0,z={},b.addEventListener("touchmove",this,!1),b.addEventListener("touchend",this,!1)},move:function(e){if(!(e.touches.length>1||e.scale&&1!==e.scale)){t.disableScroll&&e.preventDefault();var n=e.touches[0];z={x:n.pageX-y.x,y:n.pageY-y.y},"undefined"==typeof w&&(w=!!(w||Math.abs(z.x)<Math.abs(z.y))),w||(e.preventDefault(),c(),t.continuous?(A(i(C-1),z.x+x[i(C-1)],0),A(C,z.x+x[C],0),A(i(C+1),z.x+x[i(C+1)],0)):(z.x=z.x/(!C&&z.x>0||C==u.length-1&&z.x<0?Math.abs(z.x)/g+1:1),A(C-1,z.x+x[C-1],0),A(C,z.x+x[C],0),A(C+1,z.x+x[C+1],0)))}},end:function(e){var n=+new Date-y.time,a=Number(n)<250&&Math.abs(z.x)>20||Math.abs(z.x)>g/2,o=!C&&z.x>0||C==u.length-1&&z.x<0;t.continuous&&(o=!1);var r=z.x<0;w||(a&&!o?(r?(t.continuous?(s(i(C-1),-g,0),s(i(C+2),g,0)):s(C-1,-g,0),s(C,x[C]-g,v),s(i(C+1),x[i(C+1)]-g,v),C=i(C+1)):(t.continuous?(s(i(C+1),g,0),s(i(C-2),-g,0)):s(C+1,g,0),s(C,x[C]+g,v),s(i(C-1),x[i(C-1)]+g,v),C=i(C-1)),t.callback&&t.callback(C,u[C])):t.continuous?(s(i(C-1),-g,v),s(C,0,v),s(i(C+1),g,v)):(s(C-1,-g,v),s(C,0,v),s(C+1,g,v))),b.removeEventListener("touchmove",W,!1),b.removeEventListener("touchend",W,!1)},transitionEnd:function(e){parseInt(e.target.getAttribute("data-index"),10)==C&&(k&&p(),t.transitionEnd&&t.transitionEnd.call(e,C,u[C]))}};return n(),k&&p(),m.addEventListener?(m.touch&&b.addEventListener("touchstart",W,!1),m.transitions&&(b.addEventListener("webkitTransitionEnd",W,!1),b.addEventListener("msTransitionEnd",W,!1),b.addEventListener("oTransitionEnd",W,!1),b.addEventListener("otransitionend",W,!1),b.addEventListener("transitionend",W,!1)),window.addEventListener("resize",W,!1)):window.onresize=function(){n()},{setup:function(){n()},slide:function(e,t){c(),r(e,t)},prev:function(){c(),a()},next:function(){c(),o()},stop:function(){c()},getPos:function(){return C},getNumSlides:function(){return B},kill:function(){c(),b.style.width="",b.style.left="";for(var e=u.length;e--;){var t=u[e];t.style.width="",t.style.left="",m.transitions&&A(e,0,0)}m.addEventListener?(b.removeEventListener("touchstart",W,!1),b.removeEventListener("webkitTransitionEnd",W,!1),b.removeEventListener("msTransitionEnd",W,!1),b.removeEventListener("oTransitionEnd",W,!1),b.removeEventListener("otransitionend",W,!1),b.removeEventListener("transitionend",W,!1),window.removeEventListener("resize",W,!1)):window.onresize=null}}}}e.exports=n,(window.jQuery||window.Zepto)&&!function(e){e.fn.Swipe=function(t){return this.each(function(){e(this).data("Swipe",new n(e(this)[0],t))})}}(window.jQuery||window.Zepto)}});
//# sourceMappingURL=1.185e94121079fe32161a.js.map