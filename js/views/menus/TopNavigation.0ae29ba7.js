(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views/menus/TopNavigation"],{"16f0":function(t,e,n){"use strict";n("5766")},"237e":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page",{attrs:{title:"Top Navigation",intro:"a top navigation bar with CSS"}},[n("sample",[n("top-nav",t._l(t.links,(function(e){return n("a",{key:e,class:{"is-active":t.isActive(e)},domProps:{textContent:t._s(e)},on:{click:function(n){return t.toggle(e)}}})})),0)],1),n("template",{slot:"examples"},[n("hr"),n("h2",{staticClass:"title"},[t._v("Create A Top Navigation Bar")]),n("step",{attrs:{no:"1",html:""}}),n("example-code",{attrs:{code:t.examples[0]}}),n("step",{attrs:{no:"2",css:""}}),n("example-code",{attrs:{code:t.examples[1]}})],1)],2)},a=[],s=n("bf2a"),i={name:"top-navigation-page",data:function(){return{currentLink:"",links:["Home","News","Contact","About"],examples:[["``` html",'<div class="topnav" id="myTopnav">','  <a class="active" href="#home">Home</a>','  <a href="#news">News</a>','  <a href="#contact">Contact</a>','  <a href="#about">About</a>',"</div>","```"],["``` css","/* Add a black background color to the top navigation */",".topnav {","  background-color: #333;","  overflow: hidden;","}","","/* Style the links inside the navigation bar */",".topnav a {","  float: left;","  color: #f2f2f2;","  text-align: center;","  padding: 14px 16px;","  text-decoration: none;","  font-size: 17px;","}","","/* Change the color of links on hover */",".topnav a:hover {","  background-color: #ddd;","  color: black;","}","","/* Add a color to the active/current link */",".topnav a.active {","  background-color: #4CAF50;","  color: white;","}","```"]]}},mounted:function(){this.currentLink=this.links[0]},methods:{isActive:function(t){return this.currentLink===t},toggle:function(t){this.currentLink=t}},components:{TopNav:s["a"]}},c=i,r=n("2877"),l=Object(r["a"])(c,o,a,!1,null,null,null);e["default"]=l.exports},5766:function(t,e,n){},bf2a:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"top-nav",class:t.classes},[t._t("default"),t.isResponsive?n("a",{staticClass:"toggle-menu",on:{click:function(e){return t.toggleMenu()}}},[t._v("☰")]):t._e()],2)},a=[],s={name:"top-nav",props:{isResponsive:Boolean,isBottom:Boolean},data:function(){return{isActive:!1}},computed:{classes:function(){var t=[];return this.isResponsive&&t.push("is-responsive"),this.isActive&&t.push("is-active"),this.isBottom&&t.push("is-bottom"),t}},methods:{toggleMenu:function(){this.isActive=!this.isActive}}},i=s,c=(n("16f0"),n("2877")),r=Object(c["a"])(i,o,a,!1,null,null,null);e["a"]=r.exports}}]);
//# sourceMappingURL=TopNavigation.0ae29ba7.js.map