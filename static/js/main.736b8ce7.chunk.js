(this.webpackJsonp2nd_movie=this.webpackJsonp2nd_movie||[]).push([[0],{75:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e(1),i=e.n(a),c=e(37),o=e.n(c),s=e(12),u=e(13),l=e(15),d=e(14),p=e(19),j=e(5),b=e(10),h=e.n(b),g=e(17),v=e(3),f=e(2);function x(){var t=Object(v.a)(["\n    margin-top:25px;\n    display:grid;\n    grid-template-columns:repeat(auto-fill, 125px);\n    grid-gap:25px;\n"]);return x=function(){return t},t}function O(){var t=Object(v.a)(["\n    font-size:16px;\n    font-weight:600;\n"]);return O=function(){return t},t}function m(){var t=Object(v.a)(["\n    :not(:last-child){\n        margin-bottom:50px;\n    }\n"]);return m=function(){return t},t}var y=f.c.div(m()),_=f.c.span(O()),w=f.c.div(x()),k=function(t){var n=t.title,e=t.children;return Object(r.jsxs)(y,{children:[Object(r.jsx)(_,{children:n}),Object(r.jsx)(w,{children:e})]})};function S(){var t=Object(v.a)(["\n    height:100vh;\n    width:100vw;\n    display:flex;\n    justify-content:center;\n    font-size:28px;\n    margin-top: 20px;\n"]);return S=function(){return t},t}var T=f.c.div(S()),R=function(){return Object(r.jsx)(T,{children:Object(r.jsx)("span",{role:"img","aria-label":"Lodaing",children:"\u23f0"})})};function C(){var t=Object(v.a)(["\n    color:",";\n"]);return C=function(){return t},t}function M(){var t=Object(v.a)(["\n    width:100vw;\n    display:flex;\n    justify-content:center;\n"]);return M=function(){return t},t}var U=f.c.div(M()),z=f.c.span(C(),(function(t){return t.color})),P=function(t){var n=t.text,e=t.color;return Object(r.jsx)(U,{children:Object(r.jsx)(z,{color:e,children:n})})};function I(){var t=Object(v.a)(["\n    font-size:10px;\n    color: rgba(255,255,255,0.5);\n"]);return I=function(){return t},t}function F(){var t=Object(v.a)(["\n    display:block;\n    margin-bottom:3px;\n"]);return F=function(){return t},t}function V(){var t=Object(v.a)(["\n    margin-bottom:5px;\n    position:relative;\n    &:hover{\n        ","{\n            opacity:0.3;\n        }\n\n        ","{\n            opacity:1;\n        }\n    }\n"]);return V=function(){return t},t}function A(){var t=Object(v.a)(["\n    bottom:5px;\n    right:5px;\n    position:absolute;\n    opacity:0;\n    transition:opacity 0.1s linear;\n"]);return A=function(){return t},t}function D(){var t=Object(v.a)(["\n    background-image:url(",');\n    //require("assets/noPosterSnall.png")\n    height:180px;\n    background-size:cover;\n    border-radius:4px;\n    background-position:center center;\n    transition:opacity 0.1s linear;\n']);return D=function(){return t},t}function N(){var t=Object(v.a)(["\n    font-size:12px;\n"]);return N=function(){return t},t}var q=f.c.div(N()),B=f.c.div(D(),(function(t){return t.bgUrl})),H=f.c.span(A()),L=f.c.div(V(),B,H),J=f.c.span(F()),E=f.c.span(I()),G=function(t){var n=t.id,e=t.imageUrl,a=t.title,i=t.rating,c=t.year,o=void 0===c?"0000":c,s=t.isMovie,u=void 0!==s&&s;return Object(r.jsx)(p.b,{to:u?"/movie/".concat(n):"/tv/".concat(n),children:Object(r.jsxs)(q,{children:[Object(r.jsxs)(L,{children:[Object(r.jsx)(B,{bgUrl:e?"https://image.tmdb.org/t/p/w300".concat(e):"noPosterSmall.png"}),Object(r.jsxs)(H,{children:[Object(r.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50"})," ",i,"/10"]})]}),Object(r.jsx)(J,{children:a.length>18?"".concat(a.substring(0,15),"..."):a}),Object(r.jsx)(E,{children:o})]})})},K=e(16);function Q(){var t=Object(v.a)(["\npadding:20px;\n"]);return Q=function(){return t},t}var W=f.c.div(Q()),X=function(t){var n=t.nowPlaying,e=t.upComing,a=t.popular,i=t.err,c=t.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(K.a,{children:Object(r.jsx)("title",{children:"Movies | Hongfilx"})}),c?Object(r.jsx)(R,{}):Object(r.jsxs)(W,{children:[n&&n.length>0&&Object(r.jsx)(k,{title:"Now Playing",children:n.map((function(t){return Object(r.jsx)(G,{id:t.id,title:t.original_title,imageUrl:t.poster_path,rating:t.vote_average,isMovie:!0,year:t.release_date.substring(0,4)},t.id)}))}),a&&a.length>0&&Object(r.jsx)(k,{title:"Popular Movies",children:a.map((function(t){return Object(r.jsx)(G,{id:t.id,title:t.original_title,imageUrl:t.poster_path,rating:t.vote_average,isMovie:!0,year:t.release_date.substring(0,4)},t.id)}))}),e&&e.length>0&&Object(r.jsx)(k,{title:"UpComing",children:e.map((function(t){return Object(r.jsx)(G,{id:t.id,title:t.original_title,imageUrl:t.poster_path,rating:t.vote_average,isMovie:!0,year:t.release_date.substring(0,4)},t.id)}))}),i&&Object(r.jsx)(P,{color:"#e74c3c",text:i})]})]})},Y=e(43),Z=e.n(Y).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"40f91f8c1fcb3743cba488ad4d6ade90",language:"en-US"}}),$=function(){return Z.get("tv/airing_today")},tt=function(){return Z.get("tv/top_rated")},nt=function(){return Z.get("tv/popular")},et=function(t){return Z.get("tv/".concat(t),{params:{append_to_response:"videos"}})},rt=function(t){return Z.get("search/tv",{params:{query:encodeURIComponent(t)}})},at=function(){return Z.get("movie/now_playing")},it=function(){return Z.get("movie/upcoming")},ct=function(){return Z.get("movie/popular")},ot=function(t){return Z.get("movie/".concat(t),{params:{append_to_response:"videos"}})},st=function(t){return Z.get("search/movie",{params:{query:encodeURIComponent(t)}})},ut=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))).state={nowPlaying:null,upComing:null,popular:null,err:null,loading:!0},t}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=Object(g.a)(h.a.mark((function t(){var n,e,r,a,i,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,at();case 3:return n=t.sent,e=n.data.results,t.next=7,it();case 7:return r=t.sent,a=r.data.results,t.next=11,ct();case 11:i=t.sent,c=i.data.results,this.setState({nowPlaying:e,upComing:a,popular:c}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),this.setState({err:"Can't get Movies information"});case 19:return t.prev=19,this.setState({loading:!1}),t.finish(19);case 22:case"end":return t.stop()}}),t,this,[[0,16,19,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,n=t.nowPlaying,e=t.upComing,a=t.popular,i=t.err,c=t.loading;return console.log(this.state),Object(r.jsx)(X,{nowPlaying:n,upComing:e,popular:a,err:i,loading:c})}}]),e}(i.a.Component);function lt(){var t=Object(v.a)(["\n    all:unset;\n    font-size:28px;\n    width:100%;\n"]);return lt=function(){return t},t}function dt(){var t=Object(v.a)(["\n    margin-bottom:50px;\n    width:100%;\n"]);return dt=function(){return t},t}function pt(){var t=Object(v.a)(["\n    padding:20px;\n"]);return pt=function(){return t},t}var jt=f.c.div(pt()),bt=f.c.form(dt()),ht=f.c.input(lt()),gt=function(t){var n=t.movieResults,e=t.tvResults,a=t.err,i=t.loading,c=t.searchTerm,o=t.handleSubmit,s=t.updateTerm;return Object(r.jsxs)(jt,{children:[Object(r.jsx)(K.a,{children:Object(r.jsx)("title",{children:"Search | Hongfilx"})}),Object(r.jsx)(bt,{onSubmit:o,children:Object(r.jsx)(ht,{placeholder:"Search Movies or TV shows...",value:c,onChange:s})}),i?Object(r.jsx)(R,{}):Object(r.jsxs)(r.Fragment,{children:[n&&n.length>0&&Object(r.jsx)(k,{title:"Movie Results",children:n.map((function(t){return Object(r.jsx)(G,{id:t.id,title:t.original_title,imageUrl:t.poster_path,rating:t.vote_average,isMovie:!0,year:t.release_date?t.release_date.substring(0,4):""},t.id)}))}),e&&e.length>0&&Object(r.jsx)(k,{title:"TV Show Results",children:e.map((function(t){return Object(r.jsx)(G,{id:t.id,title:t.original_name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date?t.first_air_date.substring(0,4):""},t.id)}))}),a&&Object(r.jsx)(P,{color:"#e74c3c",text:a}),e&&n&&0===e.length&&0===n.length&&Object(r.jsx)(P,{text:"Nothing Found",color:"#95a5a6"})]})]})},vt=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",err:null,loading:!1},t.handleSubmit=function(n){n.preventDefault(),""!==t.state.searchTerm&&t.searchByTerm()},t.updateTerm=function(n){var e=n.target.value;console.log(e),t.setState({searchTerm:e})},t.searchByTerm=Object(g.a)(h.a.mark((function n(){var e,r,a,i,c;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.state.searchTerm,t.setState({loading:!0}),n.prev=2,n.next=5,st(e);case 5:return r=n.sent,a=r.data.results,n.next=9,rt(e);case 9:i=n.sent,c=i.data.results,t.setState({movieResults:a,tvResults:c}),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(2),t.setState({err:"can't find result"});case 17:return n.prev=17,t.setState({loading:!1}),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[2,14,17,20]])}))),t}return Object(u.a)(e,[{key:"render",value:function(){var t=this.state,n=t.movieResults,e=t.tvResults,a=t.searchTerm,i=t.err,c=t.loading;return console.log(this.state),Object(r.jsx)(gt,{movieResults:n,tvResults:e,searchTerm:a,err:i,loading:c,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),e}(i.a.Component);function ft(){var t=Object(v.a)(["\npadding:20px;\n"]);return ft=function(){return t},t}var xt=f.c.div(ft()),Ot=function(t){var n=t.topRated,e=t.airingToday,a=t.popular,i=t.err,c=t.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(K.a,{children:Object(r.jsx)("title",{children:"TV | Hongfilx"})}),c?Object(r.jsx)(R,{}):Object(r.jsxs)(xt,{children:[n&&n.length>0&&Object(r.jsx)(k,{title:"Top Rated",children:n.map((function(t){return Object(r.jsx)(G,{id:t.id,title:t.original_name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date.substring(0,4)},t.id)}))}),a&&a.length>0&&Object(r.jsx)(k,{title:"Popular Show",children:a.map((function(t){return Object(r.jsx)(G,{id:t.id,title:t.original_name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date.substring(0,4)},t.id)}))}),e&&e.length>0&&Object(r.jsx)(k,{title:"Airing Today",children:e.map((function(t){return Object(r.jsx)(G,{id:t.id,title:t.original_name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date.substring(0,4)},t.id)}))}),i&&Object(r.jsx)(P,{color:"#e74c3c",text:i})]})]})},mt=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,err:null,loading:!0},t}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=Object(g.a)(h.a.mark((function t(){var n,e,r,a,i,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,tt();case 3:return n=t.sent,e=n.data.results,t.next=7,nt();case 7:return r=t.sent,a=r.data.results,t.next=11,$();case 11:i=t.sent,c=i.data.results,this.setState({topRated:e,popular:a,airingToday:c}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),this.setState({err:"Can't get TV information"});case 19:return t.prev=19,this.setState({loading:!1}),t.finish(19);case 22:case"end":return t.stop()}}),t,this,[[0,16,19,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,n=t.topRated,e=t.popular,a=t.airingToday,i=t.err,c=t.loading;return console.log(this.state),Object(r.jsx)(Ot,{topRated:n,airingToday:a,popular:e,err:i,loading:c})}}]),e}(i.a.Component);function yt(){var t=Object(v.a)(["\nheight:50px;\ndisplay:flex;\nalign-items:center;\njustify-content:center;\n"]);return yt=function(){return t},t}function _t(){var t=Object(v.a)(["\nwidth:80px;\nheight:50px;\ntext-align:center;\nborder-bottom: 5px solid ",";\ntransition : border-bottom .5s ease;\n"]);return _t=function(){return t},t}function wt(){var t=Object(v.a)(["\ndisplay:flex;\n"]);return wt=function(){return t},t}function kt(){var t=Object(v.a)(["\ncolor:white;\nposition:fixed;\ntop:0;\nleft:0;\nwidth:100%;\nheight:50px;\ndisplay:flex;\nalign-items:center;\nbackground-color: rgba(20,20,20,0.8);\nbox-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\nz-index:10;\n"]);return kt=function(){return t},t}var St=f.c.header(kt()),Tt=f.c.ul(wt()),Rt=f.c.li(_t(),(function(t){return t.current?"#3498db":"transparent"})),Ct=Object(f.c)(p.b)(yt()),Mt=Object(j.g)((function(t){var n=t.location.pathname;return Object(r.jsxs)(St,{children:[console.log(n),Object(r.jsxs)(Tt,{children:[Object(r.jsx)(Rt,{current:"/"===n,children:Object(r.jsx)(Ct,{to:"/",children:"Movies"})}),Object(r.jsx)(Rt,{current:"/tv"===n,children:Object(r.jsx)(Ct,{to:"/tv",children:"TV"})}),Object(r.jsx)(Rt,{current:"/search"===n,children:Object(r.jsx)(Ct,{to:"/search",children:"Search"})})]})]})}));function Ut(){var t=Object(v.a)(["\n    font-size:12px;\n    opacity:0.7;\n    line-height:1.5;\n    width:50%;\n"]);return Ut=function(){return t},t}function zt(){var t=Object(v.a)(["\n    margin:0 10px;\n"]);return zt=function(){return t},t}function Pt(){var t=Object(v.a)(["\n\n"]);return Pt=function(){return t},t}function It(){var t=Object(v.a)(["\n    margin: 20px 0;\n"]);return It=function(){return t},t}function Ft(){var t=Object(v.a)(["\n    font-size:32px;\n"]);return Ft=function(){return t},t}function Vt(){var t=Object(v.a)(["\n    width:70%;\n    margin-left:10px;\n"]);return Vt=function(){return t},t}function At(){var t=Object(v.a)(["\n    width:30%;\n    background-image:url(",");\n    background-position:center center;\n    background-size: cover;\n    height:100%;\n    border-radius: 5px;\n"]);return At=function(){return t},t}function Dt(){var t=Object(v.a)(["\n    display:flex;\n    width:100%;\n    position:relative;\n    z-index:1;\n    height:100%;\n"]);return Dt=function(){return t},t}function Nt(){var t=Object(v.a)(["\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background-image:url(",");\n    background-position:center center;\n    background-size: cover;\n    filter:blur(3px);\n    opacity:0.5;\n    z-index:0;\n"]);return Nt=function(){return t},t}function qt(){var t=Object(v.a)(["\n    height: calc(100vh - 50px);\n    width:100%;\n    position:relative;\n    padding:50px;\n"]);return qt=function(){return t},t}var Bt=f.c.div(qt()),Ht=f.c.div(Nt(),(function(t){return t.bgImage})),Lt=f.c.div(Dt()),Jt=f.c.div(At(),(function(t){return t.bgImage})),Et=f.c.div(Vt()),Gt=f.c.h3(Ft()),Kt=f.c.div(It()),Qt=f.c.span(Pt()),Wt=f.c.span(zt()),Xt=f.c.p(Ut()),Yt=function(t){var n=t.result;t.err;return t.loading?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(K.a,{children:Object(r.jsx)("title",{children:"Loading..."})}),Object(r.jsx)(R,{})]}):Object(r.jsxs)(Bt,{children:[Object(r.jsx)(K.a,{children:Object(r.jsx)("title",{children:n.original_title?n.original_title:n.original_name})}),Object(r.jsx)(Ht,{bgImage:n.backdrop_path?"https://image.tmdb.org/t/p/original".concat(n.backdrop_path):"noPosterSmall.png"}),Object(r.jsxs)(Lt,{children:[Object(r.jsx)(Jt,{bgImage:n.poster_path?"https://image.tmdb.org/t/p/original".concat(n.poster_path):"noPosterSmall.png"}),Object(r.jsxs)(Et,{children:[Object(r.jsx)(Gt,{children:n.original_title?n.original_title:n.original_name}),Object(r.jsxs)(Kt,{children:[Object(r.jsx)(Qt,{children:n.release_date?n.release_date.substring(0,4):n.first_air_date.substring(0,4)}),Object(r.jsx)(Wt,{children:"\xb7"}),Object(r.jsxs)(Qt,{children:[n.runtime?n.runtime:n.episode_run_time,"min"]}),Object(r.jsx)(Wt,{children:"\xb7"}),Object(r.jsx)(Qt,{children:n.genres&&n.genres.map((function(t,e){return e===n.genres.length-1?t.name:"".concat(t.name," / ")}))})]}),Object(r.jsx)(Xt,{children:n.overview})]})]})]})},Zt=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(t){var r;Object(s.a)(this,e),r=n.call(this,t);var a=t.location.pathname;return r.state={result:null,err:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=Object(g.a)(h.a.mark((function t(){var n,e,r,a,i,c,o,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.props,e=n.match.params.id,r=n.history.push,a=this.state.isMovie,i=parseInt(e),!isNaN(i)){t.next=5;break}return t.abrupt("return",r("/"));case 5:if(c=null,t.prev=6,!a){t.next=14;break}return t.next=10,ot(i);case 10:o=t.sent,c=o.data,t.next=18;break;case 14:return t.next=16,et(i);case 16:s=t.sent,c=s.data;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(6),this.setState({err:"can't find anything"});case 23:return t.prev=23,this.setState({loading:!1,result:c}),t.finish(23);case 26:case"end":return t.stop()}}),t,this,[[6,20,23,26]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,n=t.result,e=t.err,a=t.loading;return console.log(n),Object(r.jsx)(Yt,{result:n,err:e,loading:a})}}]),e}(i.a.Component),$t=function(){return Object(r.jsx)(p.a,{children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Mt,{}),Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{path:"/",exact:!0,component:ut}),Object(r.jsx)(j.b,{path:"/tv",exact:!0,component:mt}),Object(r.jsx)(j.b,{path:"/tv/popular",render:function(){return Object(r.jsx)("h1",{children:"Popular"})}}),Object(r.jsx)(j.b,{path:"/search",component:vt}),Object(r.jsx)(j.b,{path:"/movie/:id",component:Zt}),Object(r.jsx)(j.b,{path:"/tv/:id",component:Zt}),Object(r.jsx)(j.a,{from:"*",to:"/"})]})]})})},tn=e(44);function nn(){var t=Object(v.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-size:14px;\n        background-color:rgba(20,20,20,1);\n        color:white;\n        padding-top:50px;\n    }\n"]);return nn=function(){return t},t}var en=Object(f.a)(nn(),tn.a),rn=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){return Object(s.a)(this,e),n.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)($t,{}),Object(r.jsx)(en,{})]})}}]),e}(a.Component);o.a.render(Object(r.jsx)(rn,{}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.736b8ce7.chunk.js.map