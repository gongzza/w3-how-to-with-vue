(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views/menus/BottomNavigation"],{"16f0":function(t,e,o){"use strict";o("5766")},5456:function(t,e,o){"use strict";o("9d7e")},5766:function(t,e,o){},"681e":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page",{attrs:{title:"Bottom Navigation",intro:"a bottom navigation menu with CSS"}},[o("template",{slot:"header"},[o("h2",{staticClass:"title"},[t._v("Bottom Navigation Menu")])]),o("sample",{staticClass:"bottom-navigation-page"},[o("top-nav",{attrs:{"is-bottom":""}},t._l(t.links,(function(e){return o("a",{key:e,class:{"is-active":e===t.currentLink},domProps:{textContent:t._s(e)},on:{click:function(o){t.currentLink=e}}})})),0),o("div",{staticClass:"sample-contents"},[o("h1",[t._v("Bottom Navigation Bar")]),o("p",[t._v("Some text some text some text.")])])],1),o("template",{slot:"examples"},[o("hr"),o("h2",{staticClass:"title"},[t._v("Create A Bottom Navigation Menu")]),o("step",{attrs:{no:"1",html:""}}),o("example-code",{attrs:{code:t.examples[0]}}),o("step",{attrs:{no:"2",css:""}}),o("example-code",{attrs:{code:t.examples[1]}})],1)],2)},n=[],s=o("bf2a"),i={name:"bottom-navigation-page",data:function(){return{currentLink:"",links:["Home","News","Contact","About"],examples:[["``` html",'<div class="navbar">','  <a href="#home" class="active">Home</a>','  <a href="#news">News</a>','  <a href="#contact">Contact</a>',"</div>","```"],["``` css","/* Place the navbar at the bottom of the page, and make it stick */",".navbar {","  background-color: #333;","  overflow: hidden;","  position: fixed;","  bottom: 0;","  width: 100%;","}","","/* Style the links inside the navigation bar */",".navbar a {","  float: left;","  display: block;","  color: #f2f2f2;","  text-align: center;","  padding: 14px 16px;","  text-decoration: none;","  font-size: 17px;","}","","/* Change the color of links on hover */",".navbar a:hover {","  background-color: #ddd;","  color: black;","}","","/* Add a color to the active/current link */",".navbar a.active {","  background-color: #4CAF50;","  color: white;","}","```"]]}},mounted:function(){this.currentLink=this.links[0]},components:{TopNav:s["a"]}},c=i,l=(o("5456"),o("2877")),r=Object(l["a"])(c,a,n,!1,null,null,null);e["default"]=r.exports},"9d7e":function(t,e,o){},bf2a:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"top-nav",class:t.classes},[t._t("default"),t.isResponsive?o("a",{staticClass:"toggle-menu",on:{click:function(e){return t.toggleMenu()}}},[t._v("☰")]):t._e()],2)},n=[],s={name:"top-nav",props:{isResponsive:Boolean,isBottom:Boolean},data:function(){return{isActive:!1}},computed:{classes:function(){var t=[];return this.isResponsive&&t.push("is-responsive"),this.isActive&&t.push("is-active"),this.isBottom&&t.push("is-bottom"),t}},methods:{toggleMenu:function(){this.isActive=!this.isActive}}},i=s,c=(o("16f0"),o("2877")),l=Object(c["a"])(i,a,n,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=BottomNavigation.0d8f5ef3.js.map