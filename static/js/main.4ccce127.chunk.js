(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,t,a){e.exports=a(53)},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(18),o=a.n(i),l=(a(26),a(6)),r=(a(27),a(19)),s=a.n(r),d=(a(45),a(20)),m=(a(46),a(17),function(e){return Object(n.useEffect)((function(){a(3)("https://platform.twitter.com/widgets.js",(function(){!function(){var t=document.getElementById("tweet-"+e.tweetId);window.twttr.widgets.createTweet(e.tweetId,t,{align:"center",lang:"ja"}).then((function(t){t.style.width="auto";var a=t.shadowRoot;a.querySelector(".EmbeddedTweet").style.maxWidth="100%";var n=a.querySelector(".NaturalImage-image").cloneNode(!0),c=document.getElementById("img-"+e.tweetId);c.firstChild.appendChild(n);var i,o=a.querySelector(".Tweet-text"),l="",r=Object(d.a)(o.childNodes);try{for(r.s();!(i=r.n()).done;){var s=i.value;"#text"==s.nodeName&&(l+=s.nodeValue)}}catch(m){r.e(m)}finally{r.f()}c.lastChild.textContent=l}))}()})),console.log("twi")}),[]),c.a.createElement("div",{className:"tweet-container",style:{display:e.display}},c.a.createElement("div",{id:"tweet-"+e.tweetId}))}),u=function(e){return c.a.createElement("div",{className:[e.name,e.class].join(" "),onClick:function(){return e.action()}},c.a.createElement("i",{className:e.i}),e.text)},f=function(e){var t=e.displayIndex;return c.a.createElement("div",{className:"main"},e.dataList.slice(0,e.max).map((function(e,a){return c.a.createElement(m,{tweetId:e.tweet_id,display:t==a?"block":"none"})})),c.a.createElement("div",{className:"icon",style:{display:-1==t?"none":""}},c.a.createElement(u,{name:"left",i:"fas fa-arrow-alt-circle-left",action:function(){return e.action.displayBack()},class:0==t?"hide":""}),c.a.createElement(u,{name:"right",i:"fas fas fa-arrow-alt-circle-right",action:function(){return e.action.displayForward()},class:t==e.max-1?"hide":""}),c.a.createElement(u,{name:"back-list",i:"fas fa-angle-double-left",text:"\u30ea\u30b9\u30c8\u306b\u3082\u3069\u308b",action:function(){return e.action.backList()}})))},w=(a(49),function(e){return c.a.createElement("div",{className:"card",id:"img-"+e.tweetId},c.a.createElement("div",{className:"imgWrapper"}),c.a.createElement("p",{className:"text"}))}),p=function(e){var t=e.displayIndex,a=Object(n.useState)(-1),i=Object(l.a)(a,2),o=i[0],r=i[1];return Object(n.useEffect)((function(){if(-1==t&&document.querySelector(".card-container")){var e=document.querySelector(".list").clientWidth,a=document.querySelector(".card-container").clientHeight;1800==e?window.scrollTo(0,a*(o-4)/4):e<=1350&&e>882?window.scrollTo(0,a*(o-3)/3):e<=882&&window.scrollTo(0,a*(o-2)/2)}else r(t)}),[t]),c.a.createElement("div",{className:"list",style:{display:-1==t?"":"none"}},e.dataList.slice(0,e.max).map((function(t,a){return c.a.createElement("div",{className:"card-container",onClick:function(){return t=a,void e.action(t);var t}},c.a.createElement(w,{tweetId:t.tweet_id}))})))},h=(a(50),function(e){return c.a.createElement("div",{className:"header",style:{display:-1==e.displayIndex?"":"none"}},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:"https://fontmeme.com/permalink/200408/77701b9d03a603fd471c47c958551652.png",alt:"protocol-font",border:"0"})),c.a.createElement("div",{className:"dsc"},c.a.createElement("p",null,"twitter\u3067\u4eba\u6c17\u304c\u9ad8\u3044\u30b9\u30d7\u30e9\u30c8\u30a5\u30fc\u30f32\u306e\u30a4\u30ab\u3057\u305f\u52d5\u753b\u3092\u4e00\u6319\u3054\u7d39\u4ecb\uff01")))}),E=(a(51),function(){var e=Object(n.useState)(-1),t=Object(l.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)([]),r=Object(l.a)(o,2),d=r[0],m=r[1],w=Object(n.useState)(1),E=Object(l.a)(w,2),y=E[0],v=E[1],g=d.length<40*y?d.length:40*y;return Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api").then((function(e){m(e.data)}))}),[]),c.a.createElement("div",{className:"app"},c.a.createElement(h,{displayIndex:a}),c.a.createElement(f,{dataList:d,displayIndex:a,action:{displayBack:function(){i(a-1)},displayForward:function(){i(a+1)},backList:function(){i(-1)}},max:g}),c.a.createElement(p,{dataList:d,displayIndex:a,action:function(e){i(e)},max:g}),g!=d.length&&c.a.createElement(u,{name:"load",i:"fas fa-plus-circle",action:function(){v(y+1)},class:-1==a?"":"hide"}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.4ccce127.chunk.js.map