(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views/menus/Breadcrumbs"],{"18ce":function(e,t,a){},"63f6":function(e,t,a){"use strict";a.r(t);var r,l,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page",{staticClass:"breadcrumb-page",attrs:{title:"Breadcrumbs",intro:"a breadcrumb navigation with CSS"}},[a("template",{slot:"header"},[a("h2",{staticClass:"title"},[e._v("How To Create a Breadcrumb Navigation")]),a("p",[e._v("A breadcrumb navigation provide links back to each previous page the user navigated through, and shows the user's current location in a website.")])]),a("sample",[a("breadcrumb",{attrs:{links:e.links}})],1),a("template",{slot:"examples"},[a("hr"),a("step",{attrs:{no:"1",html:""}}),a("example-code",{attrs:{code:e.examples[0]}}),a("step",{attrs:{no:"2",css:""}}),a("example-code",{attrs:{code:e.examples[1]}})],1)],2)},s=[],n=(a("d81d"),{name:"breadcrumb",functional:!0,props:{links:{type:Array,required:!0}},render:function(e,t){var a=t.props.links.length-1,r=t.props.links.map((function(t,r){var l="string"===typeof t?{to:t,title:t}:t,i=l.to,s=l.title;return r===a?e("li",s):e("li",{},[e("a",{attrs:{href:i}},s)])}));return e("ul",{class:"breadcrumb"},r)}}),o=n,c=(a("9a7b"),a("2877")),u=Object(c["a"])(o,r,l,!1,null,null,null),d=u.exports,p={name:"breadcrumb-page",data:function(){return{links:[{to:"javascript:void(0)",title:"Home"},{to:"javascript:void(0)",title:"Pictures"},{to:"javascript:void(0)",title:"Summer 15"},"Italy"],examples:[["``` html",'<ul class="breadcrumb">','  <li><a href="#">Home</a></li>','  <li><a href="#">Pictures</a></li>','  <li><a href="#">Summer 15</a></li>',"  <li>Italy</li>","</ul>","```"],["``` css","/* Style the list */","ul.breadcrumb {","  padding: 10px 16px;","  list-style: none;","  background-color: #eee;","}","","/* Display list items side by side */","ul.breadcrumb li {","  display: inline;","  font-size: 18px;","}","","/* Add a slash symbol (/) before/behind each list item */","ul.breadcrumb li+li:before {","  padding: 8px;","  color: black;",'  content: "/\\00a0";',"}","","/* Add a color to all links inside the list */","ul.breadcrumb li a {","  color: #0275d8;","  text-decoration: none;","}","","/* Add a color on mouse-over */","ul.breadcrumb li a:hover {","  color: #01447e;","  text-decoration: underline;","}","```"]]}},components:{Breadcrumb:d}},b=p,m=(a("7382"),Object(c["a"])(b,i,s,!1,null,null,null));t["default"]=m.exports},7382:function(e,t,a){"use strict";a("90e0")},"90e0":function(e,t,a){},"9a7b":function(e,t,a){"use strict";a("18ce")}}]);
//# sourceMappingURL=Breadcrumbs.295df4e3.js.map