webpackJsonp([32],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/examples/menu/StickyNavbar.vue":function(e,t,a){"use strict";t.a={name:"sticky-navbar-example",data:function(){return{currentLink:"",links:["Home","News","Contact"]}},beforeMount:function(){this.currentLink=this.links[0],window.addEventListener("scroll",this.onScroll)},beforeDestory:function(){window.removeEventListener("scroll",this.onScroll)},computed:{navbar:function(){return this.$refs.navbar},navbarOffsetTop:function(){return this.navbar.offsetTop}},methods:{onScroll:function(){window.pageYOffset>=this.navbarOffsetTop?this.navbar.classList.add("sticky"):this.navbar.classList.remove("sticky")}}}},'./node_modules/css-loader/index.js?minimize!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-2e5a5148","scoped":false,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/examples/menu/StickyNavbar.vue':function(e,t,a){t=e.exports=a("./node_modules/css-loader/lib/css-base.js")(!1),t.push([e.i,".header{background-color:#f1f1f1;padding:30px;text-align:center}.navbar{overflow:hidden;background-color:#333}.navbar a{float:left;display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px}.navbar a:hover{background-color:#ddd;color:#000}.navbar a.is-active{background-color:#4caf50;color:#fff}.content{padding:16px}.sticky{position:fixed;top:0;width:100%}.sticky+.content{padding-top:60px}",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-2e5a5148","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/examples/menu/StickyNavbar.vue':function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),e._v(" "),a("div",{ref:"navbar",staticClass:"navbar"},e._l(e.links,function(t){return a("a",{class:{"is-active":t===e.currentLink},attrs:{href:"javascript:void(0)"},domProps:{textContent:e._s(t)},on:{click:function(a){e.currentLink=t}}})})),e._v(" "),e._m(1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("h2",[e._v("Scroll Down")]),e._v(" "),a("p",[e._v("Scroll down to see the sticky effect.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h3",[e._v("Sticky Navigation Example")]),e._v(" "),a("p",[e._v("The navbar will stick to the top when you reach its scroll position.")]),e._v(" "),a("p",[e._v("Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.")]),e._v(" "),a("p",[e._v("Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.")]),e._v(" "),a("p",[e._v("Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.")]),e._v(" "),a("p",[e._v("Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.")]),e._v(" "),a("p",[e._v("Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.")])])}],s={render:o,staticRenderFns:i};t.a=s},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?minimize!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-2e5a5148","scoped":false,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/examples/menu/StickyNavbar.vue':function(e,t,a){var o=a('./node_modules/css-loader/index.js?minimize!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-2e5a5148","scoped":false,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/examples/menu/StickyNavbar.vue');"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("./node_modules/vue-style-loader/lib/addStylesClient.js")("5a6c20dc",o,!0,{})},"./src/examples/menu/StickyNavbar.vue":function(e,t,a){"use strict";function o(e){a('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?minimize!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-2e5a5148","scoped":false,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/examples/menu/StickyNavbar.vue')}Object.defineProperty(t,"__esModule",{value:!0});var i=a("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/examples/menu/StickyNavbar.vue"),s=a('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-2e5a5148","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/examples/menu/StickyNavbar.vue'),n=a("./node_modules/vue-loader/lib/component-normalizer.js"),l=o,r=n(i.a,s.a,!1,l,null,null);t.default=r.exports}});
//# sourceMappingURL=StickyNavbar.js.map?id=bf255c1a7a716664dc9d