webpackJsonp([27],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/IconBar.vue":function(e,o,s){"use strict";o.a={name:"icon-bar",functional:!0,props:{isVertical:Boolean},render:function(e,o){var s=["icon-bar"];return s.push(o.props.isVertical?"vertical":"horizontal"),e("div",{class:s.reduce(function(e,o){return e[o]=!0,e},{})},o.children)}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/IconBar.vue":function(e,o,s){"use strict";var a=s("./src/components/menus/IconBar.vue");o.a={name:"icon-bar-page",data:function(){return{menus:["home","search","envelope","globe","trash"],pos:0,examples:[["``` html","\x3c!-- Add icon library --\x3e",'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">',"",'<div class="icon-bar">','  <a class="active" href="#"><i class="fa fa-home"></i></a>','  <a href="#"><i class="fa fa-search"></i></a>','  <a href="#"><i class="fa fa-envelope"></i></a>','  <a href="#"><i class="fa fa-globe"></i></a>','  <a href="#"><i class="fa fa-trash"></i></a>',"</div>","```"],["``` css",".icon-bar {","  width: 90px; /* Set a specific width */","  background-color: #555; /* Dark-grey background */","}","",".icon-bar a {","  display: block; /* Make the links appear below each other instead of side-by-side */","  text-align: center; /* Center-align text */","  padding: 16px; /* Add some padding */","  transition: all 0.3s ease; /* Add transition for hover effects */","  color: white; /* White text color */","  font-size: 36px; /* Increased font-size */","}","",".icon-bar a:hover {","  background-color: #000; /* Add a hover color */","}","",".active {","  background-color: #4CAF50; /* Add an active/current color */","}","```"],["``` css",".icon-bar {","  width: 100%; /* Full-width */","  background-color: #555; /* Dark-grey background */","  overflow: auto; /* Overflow due to float */","}","",".icon-bar a {","  float: left; /* Float links side by side */","  text-align: center; /* Center-align text */","  width: 20%; /* Equal width (5 icons with 20% width each = 100%) */","  padding: 12px 0; /* Some top and bottom padding */","  transition: all 0.3s ease; /* Add transition for hover effects */","  color: white; /* White text color */","  font-size: 36px; /* Increased font size */","}","",".icon-bar a:hover {","  background-color: #000; /* Add a hover color */","}","",".active {","  background-color: #4CAF50; /* Add an active/current color */","}","```"]]}},components:{IconBar:a.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-3551aba4","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/IconBar.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(!1),o.push([e.i,".icon-bar-page div:first-child{flex:1}.icon-bar-page div:nth-child(2){flex:2}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-72f43302","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/IconBar.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(!1),o.push([e.i,".icon-bar{display:flex}.icon-bar a{cursor:pointer;text-align:center;color:#fff;font-size:36px}.icon-bar a:hover{background-color:#000}.icon-bar a.active{background-color:#4caf50}.icon-bar.vertical{width:90px;background-color:#555;flex-direction:column}.icon-bar.vertical a{padding:16px;transition:all .3s ease}.icon-bar.horizontal{width:100%;background-color:#555;overflow:auto}.icon-bar.horizontal a{flex:1;padding:12px 0;transition:all .3s ease}",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3551aba4","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/IconBar.vue':function(e,o,s){"use strict";var a=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("page",{attrs:{title:"Icon Bar",intro:"icon bars with CSS"}},[s("sample",{staticClass:"icon-bar-page"},[s("div",[s("p",[e._v("Vertical:")]),e._v(" "),s("icon-bar",{attrs:{"is-vertical":""}},e._l(e.menus,function(o,a){return s("a",{class:{active:e.pos===a},on:{click:function(o){o.preventDefault(),e.pos=a}}},[s("i",{staticClass:"fa",class:"fa-"+o})])}))],1),e._v(" "),s("div",[s("p",[e._v("Horizontal:")]),e._v(" "),s("icon-bar",e._l(e.menus,function(o,a){return s("a",{class:{active:e.pos===a},on:{click:function(o){o.preventDefault(),e.pos=a}}},[s("i",{staticClass:"fa",class:"fa-"+o})])}))],1)]),e._v(" "),s("template",{slot:"examples"},[s("hr"),e._v(" "),s("h2",{staticClass:"title"},[e._v("How To Create An Icon Bar")]),e._v(" "),s("step",{attrs:{no:"1",html:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),s("step",{attrs:{no:"2",css:""}}),e._v(" "),s("example-code",{attrs:{title:"Vertical Example",code:e.examples[1]}}),e._v(" "),s("example-code",{attrs:{title:"Horizontal Example",code:e.examples[2]}})],1)],2)},l=[],n={render:a,staticRenderFns:l};o.a=n},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-3551aba4","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/IconBar.vue':function(e,o,s){var a=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-3551aba4","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/IconBar.vue');"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("39826d1c",a,!0,{})},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-72f43302","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/IconBar.vue':function(e,o,s){var a=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-72f43302","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/IconBar.vue');"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("e28f2f86",a,!0,{})},"./src/components/menus/IconBar.vue":function(e,o,s){"use strict";function a(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-72f43302","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/IconBar.vue')}var l=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/IconBar.vue"),n=s("./node_modules/vue-loader/lib/component-normalizer.js"),d=a,r=n(l.a,null,!1,d,null,null);o.a=r.exports},"./src/pages/menus/IconBar.vue":function(e,o,s){"use strict";function a(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-3551aba4","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/IconBar.vue')}Object.defineProperty(o,"__esModule",{value:!0});var l=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/IconBar.vue"),n=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3551aba4","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/IconBar.vue'),d=s("./node_modules/vue-loader/lib/component-normalizer.js"),r=a,i=d(l.a,n.a,!1,r,null,null);o.default=i.exports}});
//# sourceMappingURL=IconBar.js.map?id=ab3043c6ee5400b843c9