"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[572],{81:function(n,t,e){e.r(t),e.d(t,{NoInfo:function(){return m},default:function(){return h}});var r,a,u=e(168),c=(e(791),e(689)),i=e(735),o=e.p+"static/media/default-photo.85991e4aacdc174ce462.png",s=e(924),p=e(302),f=e(579),d=e(94),l=e(184),h=function(){var n=(0,c.UO)().movieId,t=(0,p.i)(i.zv,n),e=t.data,r=t.error;return r?(d.Am.error("Sorry, problem connection to server! ".concat(r)),(0,l.jsx)(d.Ix,{})):e?(0,l.jsxs)(l.Fragment,{children:[0!==(null===e||void 0===e?void 0:e.length)&&(0,l.jsx)(v,{children:e.map((function(n){return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/w500/".concat(n.profile_path):o,alt:n.name,width:120}),(0,l.jsx)("p",{children:n.name}),(0,l.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))}),0===(null===e||void 0===e?void 0:e.length)&&(0,l.jsx)(m,{children:"We don't have any information about cast"})]}):(0,l.jsx)(f.Z,{})},v=s.ZP.ul(r||(r=(0,u.Z)(["\n  color: white;\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n\n  li {\n    text-align: center;\n  }\n  img {\n    /* width: 120px; */\n    border-radius: 10px;\n  }\n  p {\n    margin-top: 0.5rem;\n  }\n"]))),m=s.ZP.p(a||(a=(0,u.Z)(["\n  color: white;\n  padding-left: 1rem;\n"])))},302:function(n,t,e){e.d(t,{i:function(){return u}});var r=e(439),a=e(791),u=function(n,t){var e=(0,a.useState)(null),u=(0,r.Z)(e,2),c=u[0],i=u[1],o=(0,a.useState)(null),s=(0,r.Z)(o,2),p=s[0],f=s[1],d=(0,a.useState)(!1),l=(0,r.Z)(d,2),h=l[0],v=l[1];return(0,a.useEffect)((function(){v(!0),n(t).then((function(n){return i(n)})).catch((function(n){return f(n.message)})).finally(v(!1))}),[n,t]),{data:c,setData:i,error:p,loading:h}}},735:function(n,t,e){e.d(t,{IR:function(){return o},YJ:function(){return s},ds:function(){return i},tx:function(){return f},zv:function(){return p}});var r=e(861),a=e(757),u=e.n(a),c=e(294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"aad019924e86df423e45a1d04ee8b714",language:"en-US"}}),i=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie?query=".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=572.9369264d.chunk.js.map