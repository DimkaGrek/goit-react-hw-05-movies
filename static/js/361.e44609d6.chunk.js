"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[361,572],{81:function(n,t,e){e.r(t),e.d(t,{NoInfo:function(){return m},default:function(){return h}});var r,a,o=e(168),i=(e(791),e(689)),u=e(735),c=e.p+"static/media/default-photo.85991e4aacdc174ce462.png",s=e(924),d=e(302),l=e(579),p=e(94),f=e(184),h=function(){var n=(0,i.UO)().movieId,t=(0,d.i)(u.zv,n),e=t.data,r=t.error;return r?(p.Am.error("Sorry, problem connection to server! ".concat(r)),(0,f.jsx)(p.Ix,{})):e?(0,f.jsxs)(f.Fragment,{children:[0!==(null===e||void 0===e?void 0:e.length)&&(0,f.jsx)(v,{children:e.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/w500/".concat(n.profile_path):c,alt:n.name,width:120}),(0,f.jsx)("p",{children:n.name}),(0,f.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))}),0===(null===e||void 0===e?void 0:e.length)&&(0,f.jsx)(m,{children:"We don't have any information about cast"})]}):(0,f.jsx)(l.Z,{})},v=s.ZP.ul(r||(r=(0,o.Z)(["\n  color: white;\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n\n  li {\n    text-align: center;\n  }\n  img {\n    /* width: 120px; */\n    border-radius: 10px;\n  }\n  p {\n    margin-top: 0.5rem;\n  }\n"]))),m=s.ZP.p(a||(a=(0,o.Z)(["\n  color: white;\n  padding-left: 1rem;\n"])))},802:function(n,t,e){e.r(t);var r,a,o=e(168),i=(e(791),e(689)),u=e(735),c=e(924),s=e(81),d=e(302),l=e(579),p=e(94),f=e(184);t.default=function(){var n=(0,i.UO)().movieId,t=(0,d.i)(u.tx,n),e=t.data,r=t.error;return r?(p.Am.error("Sorry, problem connection to server! ".concat(r)),(0,f.jsx)(p.Ix,{})):e?(0,f.jsxs)(f.Fragment,{children:[0!==(null===e||void 0===e?void 0:e.length)&&(0,f.jsx)(h,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsxs)(v,{children:["Author: ",n.author_details.username]}),(0,f.jsx)("p",{children:n.content})]},n.id)}))}),0===(null===e||void 0===e?void 0:e.length)&&(0,f.jsx)(s.NoInfo,{children:"We don't have any reviews for this movie."})]}):(0,f.jsx)(l.Z,{})};var h=c.ZP.ul(r||(r=(0,o.Z)(["\n  color: white;\n  list-style-type: none;\n  padding: 0 1rem;\n  li {\n    margin-bottom: 1rem;\n    border-bottom: 1px solid #444;\n    padding-bottom: 1rem;\n  }\n  p {\n    margin: 0.5rem 0;\n  }\n"]))),v=c.ZP.p(a||(a=(0,o.Z)(["\n  font-weight: bold;\n"])))},302:function(n,t,e){e.d(t,{i:function(){return o}});var r=e(439),a=e(791),o=function(n,t){var e=(0,a.useState)(null),o=(0,r.Z)(e,2),i=o[0],u=o[1],c=(0,a.useState)(null),s=(0,r.Z)(c,2),d=s[0],l=s[1],p=(0,a.useState)(!1),f=(0,r.Z)(p,2),h=f[0],v=f[1];return(0,a.useEffect)((function(){v(!0),n(t).then((function(n){return u(n)})).catch((function(n){return l(n.message)})).finally(v(!1))}),[n,t]),{data:i,setData:u,error:d,loading:h}}},735:function(n,t,e){e.d(t,{IR:function(){return c},YJ:function(){return s},ds:function(){return u},tx:function(){return l},zv:function(){return d}});var r=e(861),a=e(757),o=e.n(a),i=e(294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"aad019924e86df423e45a1d04ee8b714",language:"en-US"}}),u=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/trending/movie/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/search/movie?query=".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=361.e44609d6.chunk.js.map