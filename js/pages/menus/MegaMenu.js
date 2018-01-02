webpackJsonp([0],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/Dropdown.vue":function(e,o,s){"use strict";o.a={name:"dropdown",props:{title:{type:String,required:!0},icon:String,isHoverable:Boolean},data:function(){return{isActive:!1}},computed:{isClickable:function(){return!this.isHoverable}},beforeMount:function(){this.isClickable&&window.addEventListener("click",this.close)},beforeDestroy:function(){window.removeEventListener("click",this.close)},methods:{toggle:function(){this.isHoverable||(this.isActive=!this.isActive)},close:function(e){this.isActive=!1}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/TopNav.vue":function(e,o,s){"use strict";o.a={name:"top-nav",props:{isResponsive:Boolean,isBottom:Boolean},data:function(){return{isActive:!1}},computed:{classes:function(){var e=[];return this.isResponsive&&e.push("is-responsive"),this.isActive&&e.push("is-active"),this.isBottom&&e.push("is-bottom"),e}},methods:{toggleMenu:function(){this.isActive=!this.isActive}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/MegaMenu.vue":function(e,o,s){"use strict";var n=s("./src/components/menus/TopNav.vue"),a=s("./src/components/menus/Dropdown.vue");o.a={name:"mega-menu-page",data:function(){return{links:["Home","News"],examples:[["``` html",'<div class="navbar">','  <a href="#home">Home</a>','  <a href="#news">News</a>','  <div class="dropdown">','    <button class="dropbtn">Dropdown ','      <i class="fa fa-caret-down"></i>',"    </button>",'    <div class="dropdown-content">','      <div class="header">',"        <h2>Mega Menu</h2>","      </div> ",'      <div class="row">','        <div class="column">',"          <h3>Category 1</h3>",'          <a href="#">Link 1</a>','          <a href="#">Link 2</a>','          <a href="#">Link 3</a>',"        </div>",'        <div class="column">',"          <h3>Category 2</h3>",'          <a href="#">Link 1</a>','          <a href="#">Link 2</a>','          <a href="#">Link 3</a>',"        </div>",'        <div class="column">',"          <h3>Category 3</h3>",'          <a href="#">Link 1</a>','          <a href="#">Link 2</a>','          <a href="#">Link 3</a>',"        </div>","      </div>","    </div>","  </div> ","</div>","```"],["``` css","/* Navbar container */",".navbar {","  overflow: hidden;","  background-color: #333;","  font-family: Arial;","}","","/* Links inside the navbar */",".navbar a {","  float: left;","  font-size: 16px;","  color: white;","  text-align: center;","  padding: 14px 16px;","  text-decoration: none;","}","","/* The dropdown container */",".dropdown {","  float: left;","  overflow: hidden;","}","","/* Dropdown button */",".dropdown .dropbtn {","  font-size: 16px; ","  border: none;","  outline: none;","  color: white;","  padding: 14px 16px;","  background-color: inherit;","}","","/* Add a red background color to navbar links on hover */",".navbar a:hover, .dropdown:hover .dropbtn {","  background-color: red;","}","","/* Dropdown content (hidden by default) */",".dropdown-content {","  display: none;","  position: absolute;","  background-color: #f9f9f9;","  width: 100%;","  left: 0;","  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);","  z-index: 1;","}","","/* Mega Menu header, if needed */",".dropdown-content .header {","  background: red;","  padding: 16px;","  color: white;","}","","/* Show the dropdown menu on hover */",".dropdown:hover .dropdown-content {","  display: block;","}","","/* Create three equal columns that floats next to each other */",".column {","  float: left;","  width: 33.33%;","  padding: 10px;","  background-color: #ccc;","  height: 250px;","}","","/* Style links inside the columns */",".column a {","  float: none;","  color: black;","  padding: 16px;","  text-decoration: none;","  display: block;","  text-align: left;","}","","/* Add a background color on hover */",".column a:hover {","  background-color: #ddd;","}","","/* Clear floats after the columns */",".row:after {",'  content: "";',"  display: table;","  clear: both;","}","```"],["``` css","/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */","@media (max-width: 600px) {","  .column {","    width: 100%;","    height: auto;","  }","}","```"]]}},components:{TopNav:n.a,Dropdown:a.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-157e83d5","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/MegaMenu.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(void 0),o.push([e.i,'.mega-menu-page .sample{flex-direction:column;border:3px solid #f1f1f1;height:430px;position:relative;overflow:auto}.mega-menu-page .sample .sample-contents{padding:15px}.mega-menu-page .sample .top-nav{overflow:inherit}.mega-menu-page .sample .top-nav .dropdown{position:inherit}.mega-menu-page .sample .top-nav .dropdown:hover button{background-color:red;color:#fff}.mega-menu-page .sample .top-nav .dropdown button{font-size:18px;background-color:inherit}.mega-menu-page .sample .top-nav .dropdown .content{width:100%;left:0}.mega-menu-page .sample .top-nav .dropdown .content .header{background:red;padding:16px;color:#fff}.mega-menu-page .sample .top-nav .dropdown .content .row{display:flex}.mega-menu-page .sample .top-nav .dropdown .content .row:after{content:"";display:table;clear:both}.mega-menu-page .sample .top-nav .dropdown .content .row .column{flex:1;padding:10px;background-color:#ccc;height:250px}.mega-menu-page .sample .top-nav .dropdown .content .row .column a{float:none;color:#000;padding:16px;text-decoration:none;display:block;text-align:left}.mega-menu-page .sample .top-nav .dropdown .content .row .column a:hover{background-color:#ddd}.mega-menu-page .sample .top-nav>a:hover{background-color:red;color:#fff}.responsive-mega-menu-sample .sample .row{flex-direction:column}',""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-33dfae42","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Dropdown.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(void 0),o.push([e.i,".dropdown{position:relative;display:inline-block}.dropdown button{background-color:#4caf50;color:#fff;padding:16px;font-size:16px;border:none;cursor:pointer}.dropdown button:hover{background-color:#3e8e41}.dropdown .content{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown .content a{color:#000;padding:12px 16px;text-decoration:none;display:block}.dropdown .content a:hover{background-color:#f1f1f1}.dropdown.is-active .content,.dropdown.is-hoverable:hover .content{display:block}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-752baa52","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(void 0),o.push([e.i,".top-nav{width:100%;background-color:#333;overflow:auto;display:flex}.top-nav.is-responsive a{float:left}.top-nav.is-bottom{position:absolute!important;bottom:0}.top-nav a{display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:18px;cursor:pointer}.top-nav a:hover{background-color:#ddd;color:#000}.top-nav a.is-active{background-color:#4caf50;color:#fff}.top-nav a.toggle-menu{display:none}@media (max-width:768px){.top-nav.is-responsive{display:block}.top-nav.is-responsive a:not(.is-active){display:none}.top-nav.is-responsive .toggle-menu{float:right;font-size:1em;display:block!important}.top-nav.is-responsive.is-active{position:relative}.top-nav.is-responsive.is-active.is-bottom .toggle-menu{bottom:0;top:unset}.top-nav.is-responsive.is-active .toggle-menu{position:absolute;right:0;top:0}.top-nav.is-responsive.is-active a{float:none;display:block;text-align:left}}",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-157e83d5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/MegaMenu.vue':function(e,o,s){"use strict";var n=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("page",{staticClass:"mega-menu-page",attrs:{title:"Mega Menu",intro:"a mega menu (full-width dropdown menu in a navigation bar)"}},[s("template",{slot:"header"},[s("h2",{staticClass:"title"},[e._v("Mega Menu")])]),e._v(" "),s("sample",[s("top-nav",[e._l(e.links,function(o){return s("a",{domProps:{textContent:e._s(o)}})}),e._v(" "),s("dropdown",{attrs:{title:"Dropdown",icon:"fa-caret-down","is-hoverable":""}},[s("div",{staticClass:"header"},[s("h2",[e._v("Mega Menu")])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"column"},[s("h3",[e._v("Category 1")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 1")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 2")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 3")])]),e._v(" "),s("div",{staticClass:"column"},[s("h3",[e._v("Category 2")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 1")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 2")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 3")])]),e._v(" "),s("div",{staticClass:"column"},[s("h3",[e._v("Category 3")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 1")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 2")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 3")])])])])],2),e._v(" "),s("div",{staticClass:"sample-contents"},[s("h3",[e._v("Responsive Mega Menu (Full-width dropdown in navbar)")]),e._v(" "),s("p",[e._v('Hover over the "Dropdown" link to see the mega menu.')]),e._v(" "),s("p",[e._v("Resize the browser window to see the responsive effect.")])])],1),e._v(" "),s("template",{slot:"examples"},[s("hr"),e._v(" "),s("h2",{staticClass:"title"},[e._v("Create A Mega Menu")]),e._v(" "),s("p",[e._v("Create a dropdown menu that appears when the user moves the mouse over an element inside a navigation bar.")]),e._v(" "),s("step",{attrs:{no:"1",html:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),s("h3",{staticClass:"explain"},[e._v("Example Explained")]),e._v(" "),s("p",[e._v("Use any element to open the dropdown menu, e.g. a <button>, <a> or <p> element.")]),e._v(" "),s("p",[e._v('Use a container element (like <div class="dropdown-content">) to create the dropdown menu and add a grid (columns) and add dropdown links inside the grid.')]),e._v(" "),s("p",[e._v('Wrap a <div class="dropdown"> element around the button and the container element (<div class="dropdown-content"> to position the dropdown menu correctly with CSS.')]),e._v(" "),s("hr"),e._v(" "),s("step",{attrs:{no:"2",css:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[1]}}),e._v(" "),s("h3",{staticClass:"explain"},[e._v("Example Explained")]),e._v(" "),s("p",[e._v("We have styled the navigation bar and the navbar links with a background-color, padding, etc.")]),e._v(" "),s("p",[e._v("We have styled the dropdown button with a background-color, padding, etc.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v(".dropdown")]),e._v(" class uses "),s("code",[e._v("position:relative")]),e._v(", which is needed when we want the dropdown content to be placed right below the dropdown button (using "),s("code",[e._v("position:absolute")]),e._v(").")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v(".dropdown-content")]),e._v(" class holds the actual dropdown menu. It is hidden by default, and will be displayed on hover (see below). It is positioned to be visible right below the dropdown button, and the width is set to 100% to cover the whole screen.")]),e._v(" "),s("p",[e._v("Instead of using a border, we have used the "),s("code",[e._v("box-shadow")]),e._v(' property to make the dropdown menu look like a "card". We also use z-index to place the dropdown in front of other elements.')]),e._v(" "),s("p",[e._v("The "),s("code",[e._v(":hover")]),e._v(" selector is used to show the dropdown menu when the user moves the mouse over the dropdown button.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v(".column")]),e._v(" classes are used to create three columns that floats next to each other inside the dropdown menu (to show different categories).")]),e._v(" "),s("hr"),e._v(" "),s("h2",{staticClass:"title"},[e._v("Responsive Mega Menu")]),e._v(" "),s("example-code",{staticClass:"responsive-mega-menu-sample",attrs:{code:e.examples[2]}},[s("sample",[s("top-nav",[e._l(e.links,function(o){return s("a",{domProps:{textContent:e._s(o)}})}),e._v(" "),s("dropdown",{attrs:{title:"Dropdown",icon:"fa-caret-down","is-hoverable":""}},[s("div",{staticClass:"header"},[s("h2",[e._v("Mega Menu")])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"column"},[s("h3",[e._v("Category 1")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 1")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 2")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 3")])]),e._v(" "),s("div",{staticClass:"column"},[s("h3",[e._v("Category 2")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 1")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 2")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 3")])]),e._v(" "),s("div",{staticClass:"column"},[s("h3",[e._v("Category 3")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 1")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 2")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Link 3")])])])])],2),e._v(" "),s("div",{staticClass:"sample-contents"},[s("h3",[e._v("Responsive Mega Menu (Full-width dropdown menu in navbar)")]),e._v(" "),s("p",[e._v('Hover over the "Dropdown" link to see the mega menu.')])])],1)],1)],1)],2)},a=[],t={render:n,staticRenderFns:a};o.a=t},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-33dfae42","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/Dropdown.vue':function(e,o,s){"use strict";var n=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("div",{staticClass:"dropdown",class:{"is-hoverable":e.isHoverable,"is-active":e.isActive},on:{click:function(e){e.stopPropagation()}}},[s("button",{on:{click:function(o){e.toggle()}}},[e._v("\n    "+e._s(e.title)+"\n    "),e.icon?s("i",{staticClass:"fa",class:e.icon}):e._e()]),e._v(" "),s("div",{staticClass:"content"},[e._t("default")],2)])},a=[],t={render:n,staticRenderFns:a};o.a=t},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-752baa52","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/TopNav.vue':function(e,o,s){"use strict";var n=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("nav",{staticClass:"top-nav",class:e.classes},[e._t("default"),e._v(" "),e.isResponsive?s("a",{staticClass:"toggle-menu",on:{click:function(o){e.toggleMenu()}}},[e._v("☰")]):e._e()],2)},a=[],t={render:n,staticRenderFns:a};o.a=t},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-157e83d5","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/MegaMenu.vue':function(e,o,s){var n=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-157e83d5","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/MegaMenu.vue');"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("199534d5",n,!0)},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-33dfae42","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Dropdown.vue':function(e,o,s){var n=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-33dfae42","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Dropdown.vue');"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("48690fa2",n,!0)},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-752baa52","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue':function(e,o,s){var n=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-752baa52","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue');"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("6dc9edaa",n,!0)},"./src/components/menus/Dropdown.vue":function(e,o,s){"use strict";function n(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-33dfae42","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Dropdown.vue')}var a=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/Dropdown.vue"),t=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-33dfae42","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/Dropdown.vue'),d=s("./node_modules/vue-loader/lib/component-normalizer.js"),l=n,i=d(a.a,t.a,!1,l,null,null);o.a=i.exports},"./src/components/menus/TopNav.vue":function(e,o,s){"use strict";function n(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-752baa52","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue')}var a=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/TopNav.vue"),t=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-752baa52","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/TopNav.vue'),d=s("./node_modules/vue-loader/lib/component-normalizer.js"),l=n,i=d(a.a,t.a,!1,l,null,null);o.a=i.exports},"./src/pages/menus/MegaMenu.vue":function(e,o,s){"use strict";function n(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-157e83d5","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/MegaMenu.vue')}Object.defineProperty(o,"__esModule",{value:!0});var a=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/MegaMenu.vue"),t=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-157e83d5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/MegaMenu.vue'),d=s("./node_modules/vue-loader/lib/component-normalizer.js"),l=n,i=d(a.a,t.a,!1,l,null,null);o.default=i.exports}});
//# sourceMappingURL=MegaMenu.js.map?id=cf5a9f460991afb6e5b3