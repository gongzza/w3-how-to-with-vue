webpackJsonp([10],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/TopNav.vue":function(e,o,s){"use strict";o.a={name:"top-nav",props:{isResponsive:Boolean,isBottom:Boolean},data:function(){return{isActive:!1}},computed:{classes:function(){var e=[];return this.isResponsive&&e.push("is-responsive"),this.isActive&&e.push("is-active"),this.isBottom&&e.push("is-bottom"),e}},methods:{toggleMenu:function(){this.isActive=!this.isActive}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/FixedMenu.vue":function(e,o,s){"use strict";var t=s("./src/components/menus/TopNav.vue");o.a={name:"fixed-menu-page",data:function(){return{intro:'a "fixed" menu with CSS',currentLink:"",links:["Home","News","Contact"],examples:[["``` html",'<div class="navnav">','  <a href="#home" class="active">Home</a>','  <a href="#news">News</a>','  <a href="#contact">Contact</a>',"</div>","",'<div class="main">',"  <p>Some text some text some text some text..</p>","</div>","```"],["``` css","/* The navigation bar */",".navbar {","  overflow: hidden;","  background-color: #333;","  position: fixed; /* Set the navbar to fixed position */","  top: 0; /* Position the navbar at the top of the page */","  width: 100%; /* Full width */","}","","/* Links inside the navbar */",".navbar a {","  float: left;","  display: block;","  color: #f2f2f2;","  text-align: center;","  padding: 14px 16px;","  text-decoration: none;","}","","/* Main content */",".main {","  margin-top: 30px; /* Add a top margin to avoid content overlay */","}","```"],["``` css","/* The navigation bar */",".navbar {","  position: fixed; /* Set the navbar to fixed position */","  bottom: 0; /* Position the navbar at the bottom of the page */","  width: 100%; /* Full width */","}","","/* Main content */",".main {","  margin-bottom: 30px; /* Add a bottom margin to avoid content overlay */","}","```"]]}},mounted:function(){this.currentLink=this.links[0]},components:{TopNav:t.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-752baa52","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(void 0),o.push([e.i,".top-nav{width:100%;background-color:#333;overflow:auto;display:flex}.top-nav.is-responsive a{float:left}.top-nav.is-bottom{position:absolute!important;bottom:0}.top-nav a{display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:18px;cursor:pointer}.top-nav a:hover{background-color:#ddd;color:#000}.top-nav a.is-active{background-color:#4caf50;color:#fff}.top-nav a.toggle-menu{display:none}@media (max-width:768px){.top-nav.is-responsive{display:block}.top-nav.is-responsive a:not(.is-active){display:none}.top-nav.is-responsive .toggle-menu{float:right;font-size:1em;display:block!important}.top-nav.is-responsive.is-active{position:relative}.top-nav.is-responsive.is-active.is-bottom .toggle-menu{bottom:0;top:unset}.top-nav.is-responsive.is-active .toggle-menu{position:absolute;right:0;top:0}.top-nav.is-responsive.is-active a{float:none;display:block;text-align:left}}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-7e1dc157","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/FixedMenu.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(void 0),o.push([e.i,".fixed-menu-page{flex-direction:column;border:1px solid #f1f1f1;position:relative}.fixed-menu-page .top-nav{position:absolute}.fixed-menu-page .sample-contents{margin-top:50px;padding:15px;max-height:300px;overflow-y:auto}",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-752baa52","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/TopNav.vue':function(e,o,s){"use strict";var t=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("nav",{staticClass:"top-nav",class:e.classes},[e._t("default"),e._v(" "),e.isResponsive?s("a",{staticClass:"toggle-menu",on:{click:function(o){e.toggleMenu()}}},[e._v("☰")]):e._e()],2)},n=[],a={render:t,staticRenderFns:n};o.a=a},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7e1dc157","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/FixedMenu.vue':function(e,o,s){"use strict";var t=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("page",{attrs:{title:"Fixed Menu",intro:e.intro}},[s("sample",{staticClass:"fixed-menu-page"},[s("top-nav",e._l(e.links,function(o){return s("a",{class:{"is-active":o===e.currentLink},domProps:{textContent:e._s(o)},on:{click:function(s){e.currentLink=o}}})})),e._v(" "),s("div",{staticClass:"sample-contents"},[s("h1",[e._v("Fixed Top Menu")]),e._v(" "),s("h2",[e._v("Scroll this page to see the effect")]),e._v(" "),s("h2",[e._v("The navigation bar will stay at the top of the page while scrolling")]),e._v(" "),e._l(20,function(o){return s("p",[e._v("Some text some text some text some text..")])})],2)],1),e._v(" "),s("template",{slot:"examples"},[s("hr"),e._v(" "),s("h2",{staticClass:"title"},[e._v("How To Create a Fixed Top Menu")]),e._v(" "),s("step",{attrs:{no:"1",html:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),s("step",{attrs:{no:"2",css:""}}),e._v(" "),s("p",[e._v("To create a fixed top menu, use "),s("code",[e._v("position:fixed")]),e._v(" and "),s("code",[e._v("top:0")]),e._v(". Note that the fixed menu will overlay your other content. To fix this, add a "),s("code",[e._v("margin-top")]),e._v(" (to the content) that is equal or larger than the height of your menu.")]),e._v(" "),s("example-code",{attrs:{code:e.examples[1]}}),e._v(" "),s("hr"),e._v(" "),s("h2",{staticClass:"title"},[e._v("How To Create a Fixed Bottom Menu")]),e._v(" "),s("p",[e._v("To create a fixed bottom menu, use "),s("code",[e._v("position:fixed")]),e._v(" and "),s("code",[e._v("bottom:0")]),e._v(":")]),e._v(" "),s("example-code",{attrs:{code:e.examples[2]}})],1)],2)},n=[],a={render:t,staticRenderFns:n};o.a=a},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-752baa52","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue':function(e,o,s){var t=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-752baa52","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue');"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("6dc9edaa",t,!0)},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-7e1dc157","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/FixedMenu.vue':function(e,o,s){var t=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-7e1dc157","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/FixedMenu.vue');"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("4eb74bce",t,!0)},"./src/components/menus/TopNav.vue":function(e,o,s){"use strict";function t(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-752baa52","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue')}var n=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/TopNav.vue"),a=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-752baa52","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/TopNav.vue'),l=s("./node_modules/vue-loader/lib/component-normalizer.js"),i=t,d=l(n.a,a.a,!1,i,null,null);o.a=d.exports},"./src/pages/menus/FixedMenu.vue":function(e,o,s){"use strict";function t(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-7e1dc157","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/FixedMenu.vue')}Object.defineProperty(o,"__esModule",{value:!0});var n=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/FixedMenu.vue"),a=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7e1dc157","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/FixedMenu.vue'),l=s("./node_modules/vue-loader/lib/component-normalizer.js"),i=t,d=l(n.a,a.a,!1,i,null,null);o.default=d.exports}});
//# sourceMappingURL=FixedMenu.js.map?id=1e26b16dcb303f96bca7