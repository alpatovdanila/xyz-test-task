(this["webpackJsonpxyz-test-task"]=this["webpackJsonpxyz-test-task"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={flexItem:"layout_flexItem__2QW5G",itemBlock:"layout_itemBlock__3Jmbo",col1:"layout_col1__O_XKt",col2:"layout_col2__1RNmP",col3:"layout_col3__3YWc8",col4:"layout_col4__2dkdt",col5:"layout_col5__2kFIU",col6:"layout_col6__32W4b",col7:"layout_col7__O7QoL",col8:"layout_col8__C9wI4",col9:"layout_col9__Z6VP0",col10:"layout_col10__QWZPp",col11:"layout_col11__1DMZr",flex:"layout_flex__1xG5Z",spacing2:"layout_spacing2__2x4Tz",spacing4:"layout_spacing4__3FOhY",spacing8:"layout_spacing8__1DPX_",spacing16:"layout_spacing16__19tax",spacing20:"layout_spacing20__1yJts",spacing24:"layout_spacing24__3cY04",spacing28:"layout_spacing28__1BVNU",spacing32:"layout_spacing32__2wbIY",spacing48:"layout_spacing48__1Og6g",wrap:"layout_wrap__1hgmH",block:"layout_block__1aTGC",valignCenter:"layout_valignCenter__UXZNr",alignCenter:"layout_alignCenter__2V7VW",flexCol:"layout_flexCol__1puM7"}},,,,,function(e,t,n){e.exports={repository:"repository_repository__JjZQL",url:"repository_url__3s7hc",description:"repository_description__1_cbi"}},function(e,t,n){e.exports={reposListItem:"repos-list_reposListItem__210UU"}},function(e,t,n){e.exports={input:"input-text_input__1cwFM",transparent:"input-text_transparent__1ZJeS",block:"input-text_block__3nv2t"}},function(e,t,n){e.exports={input:"select_input__2Kk5s",select:"select_select__1XDcV",transparent:"select_transparent__2jgLI",block:"select_block__mpQ2H"}},,,,,,function(e,t,n){e.exports={jello:"jello_jello__3KeUJ",infinite:"jello_infinite__2A47m"}},function(e,t,n){e.exports={inputSearch:"input-search_inputSearch__yzGji",focused:"input-search_focused__2NRuv"}},,,,function(e,t,n){e.exports={appWrapper:"app_appWrapper__31BMm"}},function(e,t,n){e.exports={link:"link_link__slMov"}},function(e,t,n){e.exports={icon:"icon_icon__2n8q5"}},function(e,t,n){e.exports={textLabel:"text-label_textLabel__2oSGb"}},function(e,t,n){e.exports={empty:"empty_empty__Gi-Rp"}},function(e,t,n){e.exports={fadedAway:"faded-away_fadedAway__1Vrng"}},,function(e,t,n){e.exports={preloader:"preloader_preloader__2j67n"}},function(e,t,n){e.exports={error:"error_error__3cWKh"}},,function(e,t,n){e.exports=n(55)},,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(31),l=n.n(c),o=n(32),i=n.n(o),u=n(3),s=n(33),p=n.n(s),f=function(e){var t=e.children,n=Object(u.a)(e,["children"]);return r.createElement("a",Object.assign({},n,{className:p.a.link}),t)},g=n(1),m=n(6),d=n.n(m),v=n(12),b="https://api.github.com",h="alpatovdanila",y="62e1a9ec50d2abfb984b4308b5fffe83de254195",_=function(){var e=Object(v.a)(d.a.mark((function e(t,n,r){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b).concat(n),Object(g.a)({method:t,headers:{Authorization:"Basic ".concat(btoa("".concat(h,":").concat(y)))}},r));case 2:if(!((a=e.sent).status>=200&&a.status<=299)){e.next=9;break}return e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 9:return e.next=11,a.json();case 11:throw c=e.sent,Error(c.message);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),E=function(e,t){return _("GET",e,t)},O=function(e){var t=e.query,n=e.sort,r=void 0===n?N:n,a=e.order,c=void 0===a?q:a,l=e.page,o=void 0===l?1:l,i=e.perPage,u=void 0===i?10:i,s=e.lang,p=void 0===s?null:s,f="/search/repositories?q=".concat(t);return p&&(f+="+language:".concat(p)),r&&(f+="&sort=".concat(r)),c&&(f+="&order=".concat(c)),o&&(f+="&page=".concat(o)),u&&(f+="&per_page=".concat(u)),E(f)},j=n(41),x=function(e){return{type:"@emojis/receive",payload:{emojis:e}}},k=function(e,t){return"@emojis/receive"===t.type?Object(g.a)(Object(g.a)({},e),t.payload.emojis):e},w=function(e){return{type:"@languages/receive",payload:{languages:e}}},C=function(e,t){return"@languages/receive"===t.type?Object(g.a)(Object(g.a)({},e),t.payload.languages):e},S=function(e){return{type:"@application/setPreloading",payload:{preloading:e}}},R=function(e){return{type:"@application/addError",payload:{error:e}}},L=function(e,t){switch(t.type){case"@application/setPreloading":return Object(g.a)(Object(g.a)({},e),{},{preloading:t.payload.preloading});case"@application/setCrashed":return Object(g.a)(Object(g.a)({},e),{},{crashed:t.payload.crashed});case"@application/addError":return Object(g.a)(Object(g.a)({},e),{},{errors:[].concat(Object(j.a)(e.errors),[t.payload.error])});default:return e}},P={application:{preloading:!0,crashed:!1,errors:[]},emojis:{},languages:{},search:{query:null,page:null,sort:null,order:null,fetching:!1,results:{},perPage:30}},q="asc",N="best-match",z=function(e){return{type:"@search/setFetching",payload:{fetching:e}}},M=function(e){return function(){var t=Object(v.a)(d.a.mark((function t(n,r){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"@search/receiveResults",payload:{results:e,emojis:r().emojis}});case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},I=function(e,t){switch(t.type){case"@search/setQuery":return Object(g.a)(Object(g.a)({},e),{},{query:t.payload.query});case"@search/setLang":return Object(g.a)(Object(g.a)({},e),{},{lang:t.payload.lang});case"@search/setPage":return Object(g.a)(Object(g.a)({},e),{},{page:t.payload.page});case"@search/setOrder":return Object(g.a)(Object(g.a)({},e),{},{order:t.payload.order});case"@search/setSort":return Object(g.a)(Object(g.a)({},e),{},{sort:t.payload.sort});case"@search/setFetching":return Object(g.a)(Object(g.a)({},e),{},{fetching:t.payload.fetching});case"@search/receiveResults":var n=Object(g.a)(Object(g.a)({},t.payload.results),{},{items:t.payload.results.items.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{description:(n=e.description,r=t.payload.emojis,n?n.replace(/:(\S+?):/gm,(function(e,t){return r[t]?'<img src="'.concat(r[t],'" class="gitmoji">'):e})):null)});var n,r}))});return Object(g.a)(Object(g.a)({},e),{},{results:n});case"@search/clearResults":return Object(g.a)(Object(g.a)({},e),{},{results:P.search.results});default:return e}},B=n(4),U=n(13),W=n.n(U),A=n(7),F=n.n(A),G=function(e){var t,n=e.block,a=void 0!==n&&n,c=e.children,l=e.col,o=Object(u.a)(e,["block","children","col"]),i=F()(W.a.flexItem,(t={},Object(B.a)(t,W.a.itemBlock,a),Object(B.a)(t,W.a["col".concat(l)],l),t));return r.createElement("div",Object.assign({},o,{className:i}),c)},Z=function(e){var t,n=e.children,a=e.spacing,c=void 0===a?0:a,l=e.wrap,o=void 0!==l&&l,i=e.col,u=void 0!==i&&i,s=e.alignCenter,p=void 0!==s&&s,f=e.valignCenter,g=void 0!==f&&f,m=e.block,d=void 0!==m&&m,v=F()((t={},Object(B.a)(t,W.a["spacing".concat(c)],!!c),Object(B.a)(t,W.a.flex,!u),Object(B.a)(t,W.a.wrap,o),Object(B.a)(t,W.a.flexCol,u),Object(B.a)(t,W.a.alignCenter,p),Object(B.a)(t,W.a.valignCenter,g),Object(B.a)(t,W.a.block,d),t));return r.createElement("div",{className:v},n)},H=[{label:"Best match",sort:N},{label:"\xabHelp wanted\xbb issues",sort:"help-wanted-issues"},{label:"Updated",sort:"updated"},{label:"Stars",sort:"stars"},{label:"Forks",sort:"forks"}],T=function(e){var t=e.sort,n=e.onSortSelect,a=e.order,c=e.onOrderSelect,l=function(e){t===e.sort?c(function(e){return"desc"===e?q:"desc"}(a)):n(e.sort)};return r.createElement(Z,{spacing:16},H.map((function(e){return r.createElement(G,{key:e.label},r.createElement(f,{onClick:function(){return l(e)}},t===e.sort&&r.createElement("b",null,e.label),t!==e.sort&&e.label,t===e.sort&&function(e){return"desc"===e?"\ud83e\udc17":"\u2191"}(a)))})))},V=n(18),J=n.n(V),Q=n(34),D=n.n(Q);function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Y=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),$=a.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),ee=function(e){var t=e.svgRef,n=e.title,r=X(e,["svgRef","title"]);return a.a.createElement("svg",K({viewBox:"0 0 24 24",width:"18px",height:"18px",ref:t},r),n?a.a.createElement("title",null,n):null,Y,$)},te=a.a.forwardRef((function(e,t){return a.a.createElement(ee,K({svgRef:t},e))}));n.p;function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ae=a.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),ce=a.a.createElement("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),le=function(e){var t=e.svgRef,n=e.title,r=re(e,["svgRef","title"]);return a.a.createElement("svg",ne({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,ae,ce)},oe=a.a.forwardRef((function(e,t){return a.a.createElement(le,ne({svgRef:t},e))}));n.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var se=a.a.createElement("g",null,a.a.createElement("rect",{fill:"none",height:24,width:24}),a.a.createElement("path",{d:"M9.78,11.16l-1.42,1.42c-0.68-0.69-1.34-1.58-1.79-2.94l1.94-0.49C8.83,10.04,9.28,10.65,9.78,11.16z M11,6L7,2L3,6h3.02 C6.04,6.81,6.1,7.54,6.21,8.17l1.94-0.49C8.08,7.2,8.03,6.63,8.02,6H11z M21,6l-4-4l-4,4h2.99c-0.1,3.68-1.28,4.75-2.54,5.88 c-0.5,0.44-1.01,0.92-1.45,1.55c-0.34-0.49-0.73-0.88-1.13-1.24L9.46,13.6C10.39,14.45,11,15.14,11,17c0,0,0,0,0,0h0v5h2v-5 c0,0,0,0,0,0c0-2.02,0.71-2.66,1.79-3.63c1.38-1.24,3.08-2.78,3.2-7.37H21z"})),pe=function(e){var t=e.svgRef,n=e.title,r=ue(e,["svgRef","title"]);return a.a.createElement("svg",ie({enableBackground:"new 0 0 24 24",height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,se)},fe=a.a.forwardRef((function(e,t){return a.a.createElement(pe,ie({svgRef:t},e))}));n.p;function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var de=a.a.createElement("path",{d:"M24 24H0V0h24v24z",fill:"none"}),ve=a.a.createElement("circle",{cx:12,cy:12,r:8}),be=function(e){var t=e.svgRef,n=e.title,r=me(e,["svgRef","title"]);return a.a.createElement("svg",ge({viewBox:"0 0 24 24",width:"18px",height:"18px",ref:t},r),n?a.a.createElement("title",null,n):null,de,ve)},he=a.a.forwardRef((function(e,t){return a.a.createElement(be,ge({svgRef:t},e))})),ye=(n.p,function(e){return function(t){var n=t.size,a=void 0===n?"18":n,c=t.fill,l=void 0===c?"black":c,o=Object(u.a)(t,["size","fill"]);return r.createElement(e,Object.assign({width:a,height:a,fill:l,className:D.a.icon},o))}}),_e=ye(te),Ee=ye(oe),Oe=ye(fe),je=ye(he),xe=n(35),ke=n.n(xe),we=function(e){var t=e.children,n=Object(u.a)(e,["children"]);return r.createElement("span",Object.assign({},n,{className:ke.a.textLabel}),t)},Ce=function(e){var t=e.stars;return r.createElement(Z,{spacing:2,alignItems:"center"},r.createElement(G,null,r.createElement(we,null,r.createElement(Ee,{size:18,fill:"currentColor"}))),r.createElement(G,null,r.createElement(we,null,t)))},Se=function(e){var t=e.forks;return r.createElement(Z,{spacing:2,verticalAlign:"middle"},r.createElement(G,null,r.createElement(we,null,r.createElement(Oe,{fill:"currentColor",size:18}))),r.createElement(G,null,r.createElement(we,null,t)))},Re=n(24),Le=function(e){return Re[e]?Re[e]:"black"},Pe=function(e){var t=e.language;return r.createElement(Z,{spacing:2,alignItems:"center"},r.createElement(G,null,r.createElement(je,{size:18,fill:Le(t)})),r.createElement(G,null,r.createElement(we,null,t)))},qe=function(e){var t=e.repository,n=t.html_url,a=t.full_name,c=t.description,l=t.language,o=t.stargazers_count,i=t.forks_count;return r.createElement("div",{className:J.a.repository},r.createElement(Z,{col:!0,spacing:16},r.createElement(G,null,r.createElement("div",{className:J.a.url},r.createElement(f,{target:"_blank",rel:"noopener noreferrer",href:n},a))),t.description&&r.createElement(G,null,r.createElement("div",{className:J.a.description},c)),r.createElement(G,null,r.createElement(Z,{spacing:16,valignCenter:!0},l&&r.createElement(G,null,r.createElement(Pe,{language:l})),r.createElement(G,null,r.createElement(Ce,{stars:o})),r.createElement(G,null,r.createElement(Se,{forks:i}))))))},Ne=n(19),ze=n.n(Ne),Me=n(36),Ie=n.n(Me),Be=function(e){var t=e.children,n=Object(u.a)(e,["children"]);return r.createElement("div",Object.assign({className:Ie.a.empty},n),t)},Ue=function(e){var t=e.children,n=Object(u.a)(e,["children"]);return r.createElement("h1",n,t)},We=function(e){var t=e.items,n=e.invalidated,a=void 0!==n&&n;F()(ze.a.reposList,Object(B.a)({},ze.a.invalidated,a));return r.createElement(Z,{col:!0,block:!0,spacing:24},!!t.length&&t.map((function(e){return r.createElement("div",{className:ze.a.reposListItem,key:e.id},r.createElement(qe,{repository:e}))})),!t.length&&r.createElement(Be,null,r.createElement(Ue,null,"Nothing found")))},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;return{search:I(e.search,t),application:L(e.application,t),emojis:k(e.emojis,t),languages:C(e.languages,t)}},Fe=r.createContext(),Ge=n(37),Ze=n.n(Ge),He=function(e){var t=e.children,n=Object(u.a)(e,["children"]);return r.createElement("div",Object.assign({className:Ze.a.fadedAway},n),t)},Te=function(e){var t=e.pagesCount,n=e.onPageClick,a=e.currentPage,c=r.useMemo((function(){return Array.from({length:t>100?100:t},(function(e,t){return t+1}))}),[t]);return r.createElement(Z,{valignCenter:!0,spacing:16,wrap:!0},c.map((function(e){return r.createElement(G,{key:e},e===a&&r.createElement("span",null,e),e!==a&&r.createElement(f,{onClick:function(t){return function(e,t){t.preventDefault(),n&&n(e)}(e,t)}},e))})))},Ve=n(2),Je=function(){var e=Object(Ve.h)(),t=Object(Ve.g)(),n=r.useMemo((function(){var t=new URLSearchParams(e.search);return{query:t.get("query")||null,sort:t.get("sort")||null,order:t.get("order")||null,page:isNaN(+t.get("page"))?1:+t.get("page"),lang:t.get("lang")||null}}),[e.search]),a=r.useCallback((function(e){var r=e.query,a=void 0===r?n.query:r,c=e.sort,l=void 0===c?n.sort:c,o=e.order,i=void 0===o?n.order:o,u=e.page,s=void 0===u?n.page:u,p=e.lang,f=void 0===p?n.lang:p;t.push(function(e){var t=e.query,n=e.page,r=e.sort,a=e.order,c=e.lang,l="/search/?query=".concat(t||"");return n&&(l+="&page=".concat(n)),c&&(l+="&lang=".concat(c)),r&&(l+="&sort=".concat(r)),a&&(l+="&order=".concat(a)),encodeURI(l)}({query:a,sort:l,order:i,page:s,lang:f}))}),[e.search]);return{query:n.query,order:n.order,page:n.page,sort:n.sort,lang:n.lang,updateUrl:a}},Qe=function(){var e=Je(),t=e.updateUrl,n=e.query,a=Object(Ve.g)(),c=Object(r.useContext)(Fe),l=c.state,o=c.dispatch,i=l.search,u=i.page,s=i.sort,p=i.order,f=i.query,g=i.fetching,m=i.results,b=i.perPage,h=i.lang;Object(r.useEffect)((function(){n||a.replace("/")}),[n]),Object(r.useEffect)((function(){o(function(){var e=Object(v.a)(d.a.mark((function e(t,n){var r,a,c,l,o,i,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.prev=1,r=n().search,a=r.query,c=r.order,l=r.sort,o=r.page,i=r.perPage,u=r.lang,t(z(!0)),e.t0=t,e.t1=M,e.next=8,O({query:a,order:c,sort:l,page:o,perPage:i,lang:u});case 8:e.t2=e.sent,e.t3=(0,e.t1)(e.t2),(0,e.t0)(e.t3),t(z(!1)),e.next=18;break;case 14:e.prev=14,e.t4=e.catch(1),t(z(!1)),t(R(e.t4.message));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}())}),[f,p,u,s,h]);var y=m.total_count?Math.min(m.total_count,1e3):0,_=Math.ceil(y/b),E=!!m&&!!m.items&&!!m.items.length,j=Math.min(b,m.total_count);return r.createElement(Z,{col:!0,spacing:32,block:!0,alignCenter:!0},E&&r.createElement(G,{block:!0},r.createElement(Z,{block:!0},r.createElement(G,{col:4},"Showing ",j," of ",m.total_count," results"),r.createElement(G,{style:{textAlign:"right"},col:8},r.createElement(T,{sort:s,onSortSelect:function(e){return t({sort:e})},order:p,onOrderSelect:function(e){return t({order:e})}})))),r.createElement(G,{block:!0},!!m.items&&r.createElement(r.Fragment,null,g&&r.createElement(He,null,r.createElement(We,{items:m.items})),!g&&r.createElement(We,{items:m.items}))),_>1&&r.createElement(G,{block:!0},r.createElement(Te,{pagesCount:_,onPageClick:function(e){return t({page:e})},currentPage:u})))},De=function(){var e=Object(r.useContext)(Fe).dispatch;return r.useEffect((function(){e({type:"@search/clearResults"})}),[]),r.createElement(Be,null,"Start searching by typing in the field above")},Ke=n(39),Xe=n.n(Ke);function Ye(){return(Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function $e(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var et=a.a.createElement("path",{d:"M50.7755 57.9157C58.7888 52.1001 63.9999 42.6586 63.9999 32C63.9999 14.3269 49.673 -1.04104e-06 31.9999 0C14.3268 -4.53352e-07 -9.2466e-05 14.3269 -9.15527e-05 32C-9.20061e-05 49.6731 14.3268 64 31.9999 64C36.867 64 41.4803 62.9134 45.6104 60.9696L37.6376 47.1603C30.3961 49.8532 22.0569 47.0127 18.0646 40.0979C13.6106 32.3833 16.2538 22.5187 23.9684 18.0647C31.683 13.6107 41.5476 16.2539 46.0016 23.9685C49.8919 30.7067 48.3678 39.0851 42.7792 44.0658L50.7755 57.9157Z",fill:"black"}),tt=a.a.createElement("path",{d:"M26.5978 22.619C21.3985 25.6208 19.6171 32.2692 22.6189 37.4685C25.6207 42.6678 32.2691 44.4492 37.4684 41.4474C42.6677 38.4456 44.4491 31.7972 41.4473 26.5979C38.4455 21.3986 31.7971 19.6172 26.5978 22.619Z",fill:"black"}),nt=function(e){var t=e.svgRef,n=e.title,r=$e(e,["svgRef","title"]);return a.a.createElement("svg",Ye({width:64,height:64,viewBox:"0 0 64 64",fill:"none",ref:t},r),n?a.a.createElement("title",null,n):null,et,tt)},rt=a.a.forwardRef((function(e,t){return a.a.createElement(nt,Ye({svgRef:t},e))})),at=(n.p,function(e){var t=e.size,n=void 0===t?"64":t,a=Object(u.a)(e,["size"]);return r.createElement(rt,Object.assign({witdh:n,height:n,fill:"black"},a))}),ct=n(27),lt=n.n(ct),ot=function(e){var t=e.infinite,n=e.children,a=Object(u.a)(e,["infinite","children"]),c=F()(lt.a.jello,Object(B.a)({},lt.a.infinite,t));return r.createElement("div",Object.assign({},a,{className:c}),n)},it=function(e){var t=e.children;return r.createElement("div",{className:Xe.a.preloader},r.createElement(Z,{col:!0,spacing:32,valignCenter:!0},r.createElement(G,null,r.createElement(ot,{infinite:!0},r.createElement(at,null))),r.createElement(G,null,t)))},ut=n(40),st=n.n(ut),pt=function(e){var t=e.children,n=e.props;return r.createElement("div",Object.assign({className:st.a.error},n),t)},ft=n(10),gt=n(28),mt=n.n(gt),dt=n(20),vt=n.n(dt),bt=r.forwardRef((function(e,t){var n,a=e.transparent,c=void 0!==a&&a,l=e.block,o=void 0!==l&&l,i=Object(u.a)(e,["transparent","block"]),s=F()(vt.a.input,(n={},Object(B.a)(n,vt.a.block,o),Object(B.a)(n,vt.a.transparent,c),n));return r.createElement("input",Object.assign({},i,{ref:t,type:"text",className:s}))})),ht=n(21),yt=n.n(ht),_t=r.forwardRef((function(e,t){var n,a=e.transparent,c=void 0!==a&&a,l=e.block,o=void 0!==l&&l,i=Object(u.a)(e,["transparent","block"]),s=F()(yt.a.select,(n={},Object(B.a)(n,yt.a.block,o),Object(B.a)(n,yt.a.transparent,c),n));return r.createElement("select",Object.assign({},i,{ref:t,type:"text",className:s}))})),Et=r.memo((function(e){var t=e.languages,n=e.onLanguageSelect,a=e.activeLanguage;return r.createElement(_t,{onChange:function(e){e.target.value&&n(e.target.value),e.target.value||n(null)},transparent:!0,value:a},r.createElement("option",{value:""},"Any programming language"),Object.values(t).map((function(e,t){return r.createElement("option",{value:e.aliases[0]},e.name)})))})),Ot=function(e){var t=e.value,n=e.onChange,a=e.languages,c=e.onLanguageSelect,l=e.activeLanguage,o=Object(u.a)(e,["value","onChange","languages","onLanguageSelect","activeLanguage"]),i=r.useState(!1),s=Object(ft.a)(i,2),p=s[0],f=s[1],g=r.useRef(),m=F()(mt.a.inputSearch,Object(B.a)({},mt.a.focused,p));return r.createElement("div",{className:m},r.createElement(Z,{block:!0,valignCenter:!0,spacing:8},r.createElement(G,null,r.createElement(_e,{size:24,fill:"currentColor"})),r.createElement(G,{block:!0,onClick:function(){return g.current.focus()}},r.createElement(bt,Object.assign({},o,{ref:g,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onChange:function(e){return n(e.target.value)},value:t,transparent:!0,block:!0}))),r.createElement(G,null,r.createElement(Et,{languages:a,onLanguageSelect:c,activeLanguage:l}))))},jt=function(e){var t=e.languages,n=e.activeLanguage,a=e.query,c=e.onSubmit,l=e.submitTimeout,o=void 0===l?250:l,i=r.useState(a),u=Object(ft.a)(i,2),s=u[0],p=u[1],f=r.useState(n),g=Object(ft.a)(f,2),m=g[0],d=g[1],v=function(e,t){var n=r.useState(e),a=Object(ft.a)(n,2),c=a[0],l=a[1];return r.useEffect((function(){var n=setTimeout((function(){return l(e)}),t);return function(){return clearTimeout(n)}}),[e,t]),c}(s,o),b=r.useState(!1),h=Object(ft.a)(b,2),y=h[0],_=h[1],E=y&&v&&v.trim();return r.useEffect((function(){E&&c({query:v,lang:m})}),[v,m]),r.createElement(r.Fragment,null,r.createElement(Ot,{languages:t,activeLanguage:m,onLanguageSelect:d,value:s,onChange:function(e){p(e),_(!0)},placeholder:"Repository name or author",block:!0}))},xt=function(){var e=r.useContext(Fe),t=e.state,n=e.dispatch,a=Je(),c=a.query,l=a.order,o=a.sort,u=a.page,s=a.lang,p=a.updateUrl;!function(){var e=Je().query,t=e?"".concat(e," \u2014 Github Repositories Search"):"Github Repositories Search";document.querySelector("title").innerText=t}(),r.useEffect((function(){n(function(){var e=Object(v.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t(S(!0)),t(function(){var e=Object(v.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.t1=x,e.next=4,E("/emojis");case 4:e.t2=e.sent,e.t3=(0,e.t1)(e.t2),(0,e.t0)(e.t3);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t(function(){var e=Object(v.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.t1=w,e.next=4,E("/languages");case 4:e.t2=e.sent,e.t3=(0,e.t1)(e.t2),(0,e.t0)(e.t3);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t(S(!1))}catch(n){t(R(n.message)),t({type:"@application/setCrashed",payload:{crashed:!0}}),t(S(!1))}case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}),[]),r.useEffect((function(){n(function(e){return{type:"@search/setQuery",payload:{query:e}}}(c)),n(function(e){return{type:"@search/setOrder",payload:{order:e}}}(l)),n(function(e){return{type:"@search/setSort",payload:{sort:e}}}(o)),n(function(e){return{type:"@search/setPage",payload:{page:e}}}(u)),n(function(e){return{type:"@search/setLang",payload:{lang:e}}}(s))}),[c,l,o,u,s]);return r.createElement("div",{className:i.a.appWrapper},t.application.preloading&&r.createElement(it,null,"Preloading github directories"),!t.application.preloading&&r.createElement(Z,{col:!0,spacing:32,block:!0},r.createElement(G,{block:!0},r.createElement(Z,{col:!0,block:!0,alignCenter:!0,spacing:32},r.createElement(G,null,t.search.fetching&&r.createElement(ot,null,r.createElement(at,null)),!t.search.fetching&&r.createElement(at,null)),r.createElement(G,{block:!0},r.createElement(jt,{query:t.search.query,onSubmit:function(e){var t=e.query,n=e.lang;return p({query:t,lang:n,page:1})},submitTimeout:500,languages:t.languages,activeLanguage:s})),!!t.application.errors.length&&r.createElement(G,null,t.application.errors.map((function(e){return r.createElement(pt,null,e)}))))),r.createElement(G,null,r.createElement(Ve.d,null,r.createElement(Ve.b,{path:"/",exact:!0,component:De}),r.createElement(Ve.b,{path:"/search/",exact:!0,component:Qe}),r.createElement(Ve.b,{exact:!0,render:function(){return r.createElement(Ve.a,{to:"/"})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var kt=n(23),wt=function(e){var t=e.children,n=function(e,t,n){var a=r.useReducer(e,t,n),c=Object(ft.a)(a,2),l=c[0],o=c[1],i=r.useRef(l);return i.current=l,[l,function e(t){"function"===typeof t?t(e,(function(){return i.current})):o(t)}]}(Ae,P),a=Object(ft.a)(n,2),c=a[0],l=a[1];return r.createElement(Fe.Provider,{value:{state:c,dispatch:l}},r.createElement(kt.a,null,t))};n(54);l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(wt,null,a.a.createElement(xt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.3110cb8b.chunk.js.map