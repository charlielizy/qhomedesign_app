(this.webpackJsonpqhomedesign_app=this.webpackJsonpqhomedesign_app||[]).push([[0],{22:function(e,t,a){e.exports=a(41)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),l=(a(27),a(4)),i=a(12),s=a(6),m=a(5),u=a(3),p=a(13),d=(a(28),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getMenuItemTitle=function(e,t,a){return e.title},n.getMenuItemRouter=function(e,t,a){return e.router},n.getMenuItem=function(e,t,o){var c=n.getMenuItemTitle(e,o,t),l=n.getMenuItemRouter(e,o,t);return e.submenu&&e.submenu.length>0&&0===e.level?r.a.createElement("li",{className:"topMenu",key:o},c,r.a.createElement("i",{className:"fas fa-angle-down"}),r.a.createElement(a,{menu:e.submenu,submenu:!0})):e.submenu&&e.submenu.length>0&&0!==e.level?r.a.createElement("li",{className:"subMenu",key:o},c,r.a.createElement("i",{className:"fas fa-angle-right"}),r.a.createElement(a,{menu:e.submenu,submenu:!0})):r.a.createElement(p.b,{to:"/".concat(l),key:o},r.a.createElement("li",{className:"linkMenu"},c))},n.isMobile=function(){window.innerWidth<1024?n.setState({showSideMenu:!1}):n.setState({showSideMenu:!0})},n.displayMenu=function(){n.state.showSideMenu?n.setState({showSideMenu:!1}):n.setState({showSideMenu:!0})},n.render=function(){var e=n.props.menu,t=[];return e.map((function(e,a){return t.push(n.getMenuItem(e,0,a))})),n.props.submenu&&!0===n.props.submenu?r.a.createElement("ul",{className:"dropdownSubmenu"},t):r.a.createElement("div",{className:"tabBar"},r.a.createElement("div",{id:"logo",className:"logo"},r.a.createElement("img",{className:"menuLogo",src:window.appConfig.logo,alt:""}),r.a.createElement("img",{className:"menuFolder",src:window.appConfig.folder,alt:"",onClick:n.displayMenu})),r.a.createElement("ul",{style:{display:n.state.showSideMenu?"block":"none"},className:"dropdownMenu"},t))},n.state={showSideMenu:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.isMobile(),window.addEventListener("resize",this.isMobile)}}]),a}(r.a.Component));d.defaultProps=window.menuObj;var f=d,h=(a(34),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).render=function(){var t=e.props.homeBanner,a=void 0===t?{title:"",content:"",showButton:!1}:t;return r.a.createElement("div",{id:"banner",className:"banner"},r.a.createElement("p",{className:"bannerTitle"},a.title),r.a.createElement("p",{className:"bannerContent"},a.content),a.showButton&&r.a.createElement("button",{className:"bannerButton"},r.a.createElement("div",{className:"playButton"}),"How it works"))},e}return a}(r.a.Component));h.defaultProps={homeBanner:{title:window.paramsString.homeBanner.title,content:window.paramsString.homeBanner.content,showButton:window.paramsString.homeBanner.showButton}};var w=h,b=(a(35),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).render=function(){var t=e.props.data;return r.a.createElement("div",{className:"tileBox"},r.a.createElement("ul",{className:"tileTable"},t.map((function(e,t){return r.a.createElement(p.b,{key:t,to:e.tileRouter},r.a.createElement("li",{className:"homeTileCell",id:"homeTileCell_pageName"},r.a.createElement("div",{className:"homeTileHeader"},r.a.createElement("p",{className:"homeTileTitle"}),r.a.createElement("p",{className:"homeTileImage"},r.a.createElement("img",{src:e.tileImage,alt:""})),r.a.createElement("p",{className:"homeTileDescription"})),r.a.createElement("p",{className:"homeTileViewReport"},e.viewReport)))}))))},e}return a}(r.a.Component));b.defaultProps={data:window.paramsString.homeTiles};var E=b,g=(a(36),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).render=function(){var t=e.props,a=t.copyright,n=t.footerSlogan,o=t.contact;return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footerBox"},r.a.createElement("span",{className:"copyRight"},a),r.a.createElement("span",{className:"contact"},r.a.createElement(p.b,{to:"/contact_us"},o)),r.a.createElement("div",{className:"footerLogo fr"},r.a.createElement("img",{src:window.appConfig.logo,alt:""})),r.a.createElement("span",{className:"footerSlogan fr"},n)))},e}return a}(r.a.Component));g.defaultProps={copyright:window.paramsString.footer.copyright,privacy:window.paramsString.footer.privacy,contact:window.paramsString.footer.contact,footerSlogan:window.paramsString.footer.footerSlogan};var v=g,N=(a(37),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).render=function(){var t=e.props,a=t.data,n=t.partner;return r.a.createElement("div",{className:"partnerLink"},r.a.createElement("p",{className:"partner"},n),r.a.createElement("ul",{className:"partnerList"},a.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("img",{src:e.partnerLogo,alt:""}))}))))},e}return a}(r.a.Component));N.defaultProps={data:window.paramsString.partnerLink,partner:window.paramsString.partner};var y=N,j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(w,null),r.a.createElement(E,null),r.a.createElement(y,null),r.a.createElement(v,null))}}]),a}(r.a.Component),O=a(43),S=a(44),M=a(45),k=(a(38),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).render=function(){var t=e.props,a=t.data1,n=t.data2;return r.a.createElement("div",{className:"contactInfo"},r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(M.a,{xs:12,sm:6},r.a.createElement("p",{className:"contactTitle"},window.paramsString.contact1Title),a.map((function(e,t){return console.log(t),r.a.createElement("p",{key:t},r.a.createElement("span",{className:"contactCategory"},e.category,":\xa0"),r.a.createElement("span",{className:"contactDesc"},e.description))})),r.a.createElement("p",{className:"contactTitle"},window.paramsString.contact2Title),n.map((function(e,t){return console.log(t),r.a.createElement("p",{key:t},r.a.createElement("span",{className:"contactCategory"},e.category,":\xa0"),r.a.createElement("span",{className:"contactDesc"},e.description))}))),r.a.createElement(M.a,{xs:12,sm:6},r.a.createElement("p",{className:"mapTitle"},window.paramsString.mapTitle),r.a.createElement("img",{className:"contactMap",src:window.paramsString.mapImage,alt:""})))))},e}return a}(r.a.Component));k.defaultProps={data1:window.paramsString.contactInfo1,data2:window.paramsString.contactInfo2};var C=k,T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(C,null),r.a.createElement(v,{className:"footerPage"}))}}]),a}(r.a.Component),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"content",className:"".concat(this.props.mobile?"mobile":"desktop")},Object(n.cloneElement)(this.props.children))}}]),a}(n.Component),I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).isMobile=function(){window.innerWidth<1024&&!n.state.mobile?n.setState({mobile:!0}):window.innerWidth>=1024&&n.state.mobile&&n.setState({mobile:!1})},n.state={mobile:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.isMobile(),window.addEventListener("resize",this.isMobile)}},{key:"render",value:function(){return r.a.createElement(B,{site:this.props.site,mobile:this.state.mobile},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:j}),";",r.a.createElement(u.a,{path:"/contact_us",exact:!0,component:T})))}}]),a}(n.Component),L=Object(u.f)(I),x=function(e){return r.a.createElement(p.a,null,r.a.createElement(L,e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39),a(40);c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.bd3308df.chunk.js.map