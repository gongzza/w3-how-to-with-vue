webpackJsonp([10],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/TopNav.vue":function(e,s,o){"use strict";s.a={name:"top-nav",props:{isResponsive:Boolean,isBottom:Boolean},data:function(){return{isActive:!1}},computed:{classes:function(){var e=[];return this.isResponsive&&e.push("is-responsive"),this.isActive&&e.push("is-active"),this.isBottom&&e.push("is-bottom"),e}},methods:{toggleMenu:function(){this.isActive=!this.isActive}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/ResponsiveTopnav.vue":function(e,s,o){"use strict";var n=o("./src/components/menus/TopNav.vue");s.a={name:"responsive-top-navigation-page",data:function(){return{currentLink:"",links:["Home","News","Contact","About"],examples:[["``` html",'<div class="topnav" id="myTopnav">','  <a href="#home" class="active">Home</a>','  <a href="#news">News</a>','  <a href="#contact">Contact</a>','  <a href="#about">About</a>','  <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>',"</div>","```"],["``` css","/* Add a black background color to the top navigation */",".topnav {","  background-color: #333;","  overflow: hidden;","}","","/* Style the links inside the navigation bar */",".topnav a {","  float: left;","  display: block;","  color: #f2f2f2;","  text-align: center;","  padding: 14px 16px;","  text-decoration: none;","  font-size: 17px;","}","","/* Change the color of links on hover */",".topnav a:hover {","  background-color: #ddd;","  color: black;","}","","/* Add an active class to highlight the current page */",".active {","  background-color: #4CAF50;","  color: white;","}","","/* Hide the link that should open and close the topnav on small screens */",".topnav .icon {","  display: none;","}","```"],["``` css",'/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */',"@media screen and (max-width: 600px) {","  .topnav a:not(:first-child) {display: none;}","  .topnav a.icon {","    float: right;","    display: block;","  }","}","",'/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */',"@media screen and (max-width: 600px) {","  .topnav.responsive {position: relative;}","  .topnav.responsive a.icon {","    position: absolute;","    right: 0;","    top: 0;","  }","  .topnav.responsive a {","    float: none;","    display: block;","    text-align: left;","  }","}","```"],["``` js",'/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */',"function myFunction() {",'  var x = document.getElementById("myTopnav");','  if (x.className === "topnav") {','    x.className += " responsive";',"  } else {",'    x.className = "topnav";',"  }","}","```"]]}},mounted:function(){this.currentLink=this.links[0]},methods:{isActive:function(e){return this.currentLink===e},toggle:function(e){this.currentLink=e}},components:{TopNav:n.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6823dda5","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue':function(e,s,o){s=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1),s.push([e.i,".top-nav{width:100%;background-color:#333;overflow:auto;display:flex}.top-nav.is-responsive a{float:left}.top-nav.is-bottom{position:absolute!important;bottom:0}.top-nav a{display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:18px;cursor:pointer}.top-nav a:hover{background-color:#ddd;color:#000}.top-nav a.is-active{background-color:#4caf50;color:#fff}.top-nav a.toggle-menu{display:none}@media (max-width:768px){.top-nav.is-responsive{display:block}.top-nav.is-responsive a:not(.is-active){display:none}.top-nav.is-responsive .toggle-menu{float:right;font-size:1em;display:block!important}.top-nav.is-responsive.is-active{position:relative}.top-nav.is-responsive.is-active.is-bottom .toggle-menu{bottom:0;top:unset}.top-nav.is-responsive.is-active .toggle-menu{position:absolute;right:0;top:0}.top-nav.is-responsive.is-active a{float:none;display:block;text-align:left}}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-d0153838","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/ResponsiveTopnav.vue':function(e,s,o){s=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1),s.push([e.i,"",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-6823dda5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/TopNav.vue':function(e,s,o){"use strict";var n=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("nav",{staticClass:"top-nav",class:e.classes},[e._t("default"),e._v(" "),e.isResponsive?o("a",{staticClass:"toggle-menu",on:{click:function(s){e.toggleMenu()}}},[e._v("☰")]):e._e()],2)},a=[],t={render:n,staticRenderFns:a};s.a=t},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-d0153838","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/ResponsiveTopnav.vue':function(e,s,o){"use strict";var n=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("page",{attrs:{title:"Responsive Top Navigation",intro:"a responsive top navigation menu with CSS and JavaScript"}},[o("template",{slot:"header"},[o("h2",[e._v("Responsive Navigation Bar")]),e._v(" "),o("p",[o("b",[e._v("Resize")]),e._v(" the browser window to see how the responsive navigation menu works:")])]),e._v(" "),o("sample",[o("top-nav",{attrs:{"is-responsive":""}},e._l(e.links,function(s){return o("a",{class:{"is-active":e.isActive(s)},domProps:{textContent:e._s(s)},on:{click:function(o){e.toggle(s)}}})}))],1),e._v(" "),o("template",{slot:"examples"},[o("hr"),e._v(" "),o("h2",{staticClass:"title"},[e._v("Create A Responsive Topnav")]),e._v(" "),o("step",{attrs:{no:"1",html:""}}),e._v(" "),o("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),o("p",[e._v('The link with class="icon" is used to open and close the topnav on small screens.')]),e._v(" "),o("step",{attrs:{no:"2",css:""}}),e._v(" "),o("example-code",{attrs:{code:e.examples[1]}}),e._v(" "),o("p",[e._v("Add media queries:")]),e._v(" "),o("example-code",{attrs:{code:e.examples[2]}}),e._v(" "),o("step",{attrs:{no:"3",js:""}}),e._v(" "),o("example-code",{attrs:{code:e.examples[3]}})],1)],2)},a=[],t={render:n,staticRenderFns:a};s.a=t},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6823dda5","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue':function(e,s,o){var n=o('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6823dda5","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue');"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o("./node_modules/vue-style-loader/lib/addStylesClient.js")("0bd37f5d",n,!0,{})},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-d0153838","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/ResponsiveTopnav.vue':function(e,s,o){var n=o('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-d0153838","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/ResponsiveTopnav.vue');"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o("./node_modules/vue-style-loader/lib/addStylesClient.js")("9116784c",n,!0,{})},"./src/components/menus/TopNav.vue":function(e,s,o){"use strict";function n(e){o('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6823dda5","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue')}var a=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/TopNav.vue"),t=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-6823dda5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/TopNav.vue'),l=o("./node_modules/vue-loader/lib/component-normalizer.js"),i=n,d=l(a.a,t.a,!1,i,null,null);s.a=d.exports},"./src/pages/menus/ResponsiveTopnav.vue":function(e,s,o){"use strict";function n(e){o('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-d0153838","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/ResponsiveTopnav.vue')}Object.defineProperty(s,"__esModule",{value:!0});var a=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/ResponsiveTopnav.vue"),t=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-d0153838","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/ResponsiveTopnav.vue'),l=o("./node_modules/vue-loader/lib/component-normalizer.js"),i=n,d=l(a.a,t.a,!1,i,null,null);s.default=d.exports}});
//# sourceMappingURL=ResponsiveTopnav.js.map?id=dc3d6eb717caa3433caa