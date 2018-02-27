webpackJsonp([26],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/images/Slideshow.vue":function(e,s,o){"use strict";s.a={name:"slideshow",props:{slides:{type:Array,required:!0},isGallery:Boolean,showDots:Boolean,overlapText:Boolean},data:function(){return{curIdx:0}},computed:{slideLength:function(){return this.slides.length}},methods:{changeSlide:function(e){this.curIdx=this.slideLength<=e?0:e,this.$emit("change-slide",e)},prevSlide:function(){this.changeSlide(this.curIdx>0?this.curIdx-1:this.slideLength-1)},nextSlide:function(){this.changeSlide(this.curIdx>=this.slideLength-1?0:this.curIdx+1)}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/images/SlideshowGallery.vue":function(e,s,o){"use strict";var l=o("./src/components/images/Slideshow.vue");s.a={name:"slideshow-gallery-page",data:function(){return{slides:[{link:"https://www.w3schools.com/howto/img_woods_wide.jpg",text:"The Woods"},{link:"https://www.w3schools.com/howto/img_fjords_wide.jpg",text:"Trolltunga, Norway"},{link:"https://www.w3schools.com/howto/img_mountains_wide.jpg",text:"Mountains and fjords"},{link:"https://www.w3schools.com/howto/img_lights_wide.jpg",text:"Northern Lights"},{link:"https://www.w3schools.com/howto/img_nature_wide.jpg",text:"Nature and sunrise"},{link:"https://www.w3schools.com/howto/img_snow_wide.jpg",text:"Snowy Mountains"}],examples:[["``` html","\x3c!-- Container for the image gallery --\x3e",'<div class="container">',"","  \x3c!-- Full-width images with number text --\x3e",'  <div class="mySlides">','    <div class="numbertext">1 / 6</div>','      <img src="img_woods_wide.jpg" style="width:100%">',"  </div>","",'  <div class="mySlides">','    <div class="numbertext">2 / 6</div>','      <img src="img_fjords_wide.jpg" style="width:100%">',"  </div>","",'  <div class="mySlides">','    <div class="numbertext">3 / 6</div>','      <img src="img_mountains_wide.jpg" style="width:100%">',"  </div>","",'  <div class="mySlides">','    <div class="numbertext">4 / 6</div>','      <img src="img_lights_wide.jpg" style="width:100%">',"  </div>","",'  <div class="mySlides">','    <div class="numbertext">5 / 6</div>','      <img src="img_nature_wide.jpg" style="width:100%">',"  </div>","",'  <div class="mySlides">','    <div class="numbertext">6 / 6</div>','      <img src="img_snow_wide.jpg" style="width:100%">',"  </div>","","  \x3c!-- Next and previous buttons --\x3e",'  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>','  <a class="next" onclick="plusSlides(1)">&#10095;</a>',"","  \x3c!-- Image text --\x3e",'  <div class="caption-container">','    <p id="caption"></p>',"  </div>","","  \x3c!-- Thumbnail images --\x3e",'  <div class="row">','    <div class="column">','      <img class="demo cursor" src="img_woods.jpg" style="width:100%" onclick="currentSlide(1)" alt="The Woods">',"    </div>",'    <div class="column"> ','      <img class="demo cursor" src="img_fjords.jpg" style="width:100%" onclick="currentSlide(2)" alt="Trolltunga, Norway">',"    </div>",'    <div class="column">','      <img class="demo cursor" src="img_mountains.jpg" style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords">',"    </div>",'    <div class="column">','      <img class="demo cursor" src="img_lights.jpg" style="width:100%" onclick="currentSlide(4)" alt="Northern Lights">',"    </div>",'    <div class="column">','      <img class="demo cursor" src="img_nature.jpg" style="width:100%" onclick="currentSlide(5)" alt="Nature and sunrise">',"    </div> ",'    <div class="column">','      <img class="demo cursor" src="img_snow.jpg" style="width:100%" onclick="currentSlide(6)" alt="Snowy Mountains">',"    </div>","  </div>","</div>","```"],["``` css","* {","  box-sizing: border-box;","}","","/* Position the image container (needed to position the left and right arrows) */",".container {","  position: relative;","}","","/* Hide the images by default */",".mySlides {","  display: none;","}","","/* Add a pointer when hovering over the thumbnail images */",".cursor {","  cursor: pointer;","}","","/* Next & previous buttons */",".prev,",".next {","  cursor: pointer;","  position: absolute;","  top: 40%;","  width: auto;","  padding: 16px;","  margin-top: -50px;","  color: white;","  font-weight: bold;","  font-size: 20px;","  border-radius: 0 3px 3px 0;","  user-select: none;","  -webkit-user-select: none;","}","",'/* Position the "next button" to the right */',".next {","  right: 0;","  border-radius: 3px 0 0 3px;","}","","/* On hover, add a black background color with a little bit see-through */",".prev:hover,",".next:hover {","  background-color: rgba(0, 0, 0, 0.8);","}","","/* Number text (1/3 etc) */",".numbertext {","  color: #f2f2f2;","  font-size: 12px;","  padding: 8px 12px;","  position: absolute;","  top: 0;","}","","/* Container for image text */",".caption-container {","  text-align: center;","  background-color: #222;","  padding: 2px 16px;","  color: white;","}","",".row:after {",'  content: "";',"  display: table;","  clear: both;","}","","/* Six columns side by side */",".column {","  float: left;","  width: 16.66%;","}","","/* Add a transparency effect for thumnbail images */",".demo {","  opacity: 0.6;","}","",".active,",".demo:hover {","  opacity: 1;","}","```"],["``` js","var slideIndex = 1;","showSlides(slideIndex);","","// Next/previous controls","function plusSlides(n) {","  showSlides(slideIndex += n);","}","","// Thumbnail image controls","function currentSlide(n) {","  showSlides(slideIndex = n);","}","","function showSlides(n) {","  var i;",'  var slides = document.getElementsByClassName("mySlides");','  var dots = document.getElementsByClassName("demo");','  var captionText = document.getElementById("caption");',"  if (n > slides.length) {slideIndex = 1}","  if (n < 1) {slideIndex = slides.length}","  for (i = 0; i < slides.length; i++) {",'    slides[i].style.display = "none";',"  }","  for (i = 0; i < dots.length; i++) {",'    dots[i].className = dots[i].className.replace(" active", "");',"  }",'  slides[slideIndex-1].style.display = "block";','  dots[slideIndex-1].className += " active";',"  captionText.innerHTML = dots[slideIndex-1].alt;","}","```"]]}},components:{Slideshow:l.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-848c85da","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/images/SlideshowGallery.vue':function(e,s,o){s=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1),s.push([e.i,".slideshow-gallery-page .sample{justify-content:center}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-c29189e2","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/images/Slideshow.vue':function(e,s,o){s=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1),s.push([e.i,".slideshow .slideshow-container{max-width:1000px;position:relative;margin:auto}.slideshow .slide{display:none;flex-direction:column}.slideshow .slide.is-active{display:flex}.slideshow .slide img{width:100%}.slideshow .dots{text-align:center}.slideshow .next,.slideshow .prev{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-22px;padding:16px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;border-radius:0 3px 3px 0}.slideshow .next{right:0;border-radius:3px 0 0 3px}.slideshow .next:hover,.slideshow .prev:hover{background-color:rgba(0,0,0,.8)}.slideshow .text{font-size:15px;padding:2px 15px;color:#fff;background-color:#222;text-align:center}.slideshow .text.is-overlapped{position:absolute;width:100%;bottom:0;padding:0;color:#f2f2f2;background-color:unset}.slideshow .numbertext{color:#f2f2f2;font-size:12px;padding:8px 12px;position:absolute;top:0}.slideshow .dot{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:#bbb;border-radius:50%;display:inline-block;transition:background-color .6s ease}.slideshow .dot.is-active,.slideshow .dot:hover{background-color:#717171}.slideshow .gallery-container{display:flex;max-width:1000px;overflow-y:hidden;overflow-x:auto}.slideshow .gallery-container .column{max-width:20%;min-width:15%;height:110px}.slideshow .gallery-container .column .gallery{width:100%;height:100%;opacity:.6;cursor:pointer}.slideshow .gallery-container .column .gallery.is-active,.slideshow .gallery-container .column .gallery:hover{opacity:1}.slideshow .fade{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}@-webkit-keyframes fade{0%{opacity:.4}to{opacity:1}}@keyframes fade{0%{opacity:.4}to{opacity:1}}",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-848c85da","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/images/SlideshowGallery.vue':function(e,s,o){"use strict";var l=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("page",{staticClass:"slideshow-gallery-page",attrs:{title:"Slideshow Gellary",intro:"a responsive slideshow gallery with CSS and JavaScript"}},[o("template",{slot:"header"},[o("h2",{staticClass:"title"},[e._v("Slideshow Gallery")]),e._v(" "),o("p",[e._v("A slideshow is used to cycle through elements:")])]),e._v(" "),o("sample",[o("slideshow",{attrs:{slides:e.slides,"is-gallery":""}})],1),e._v(" "),o("template",{slot:"examples"},[o("hr"),e._v(" "),o("h2",{staticClass:"title"},[e._v("Create A Slideshow Gallery")]),e._v(" "),o("step",{attrs:{no:"1",html:""}}),e._v(" "),o("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),o("hr"),e._v(" "),o("step",{attrs:{no:"2",css:""}}),e._v(" "),o("p",[e._v("Style the image gallery, next and previous buttons, the caption text and the dots:")]),e._v(" "),o("example-code",{attrs:{code:e.examples[1]}}),e._v(" "),o("hr"),e._v(" "),o("step",{attrs:{no:"3",js:""}}),e._v(" "),o("example-code",{attrs:{code:e.examples[2]}})],1)],2)},i=[],t={render:l,staticRenderFns:i};s.a=t},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-c29189e2","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/images/Slideshow.vue':function(e,s,o){"use strict";var l=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"slideshow"},[o("div",{staticClass:"slideshow-container"},[e._l(e.slides,function(s,l){return o("div",{key:l,staticClass:"slide fade",class:{"is-active":e.curIdx===l}},[o("div",{staticClass:"numbertext"},[e._v(e._s(l+1)+" / "+e._s(e.slideLength))]),e._v(" "),o("img",{attrs:{src:s.link,alt:s.text}}),e._v(" "),o("div",{staticClass:"text",class:{"is-overlapped":e.overlapText}},[o("p",{domProps:{textContent:e._s(s.text)}})])])}),e._v(" "),o("a",{staticClass:"prev",on:{click:function(s){s.preventDefault(),e.prevSlide()}}},[e._v("❮")]),e._v(" "),o("a",{staticClass:"next",on:{click:function(s){s.preventDefault(),e.nextSlide()}}},[e._v("❯")])],2),e._v(" "),e.isGallery?o("div",{staticClass:"gallery-container"},e._l(e.slides,function(s,l){return o("div",{key:l,staticClass:"column"},[o("img",{staticClass:"gallery",class:{"is-active":e.curIdx===l},attrs:{src:s.link,alt:s.text},on:{click:function(s){e.changeSlide(l)}}})])})):e._e(),e._v(" "),o("br"),e._v(" "),e.showDots?o("div",{staticClass:"dots"},e._l(e.slideLength,function(s,l){return o("span",{key:l,staticClass:"dot",class:{"is-active":e.curIdx===l},on:{click:function(s){e.changeSlide(l)}}})})):e._e()])},i=[],t={render:l,staticRenderFns:i};s.a=t},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-848c85da","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/images/SlideshowGallery.vue':function(e,s,o){var l=o('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-848c85da","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/images/SlideshowGallery.vue');"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);o("./node_modules/vue-style-loader/lib/addStylesClient.js")("4174b691",l,!0,{})},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-c29189e2","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/images/Slideshow.vue':function(e,s,o){var l=o('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-c29189e2","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/images/Slideshow.vue');"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);o("./node_modules/vue-style-loader/lib/addStylesClient.js")("8c85208e",l,!0,{})},"./src/components/images/Slideshow.vue":function(e,s,o){"use strict";function l(e){o('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-c29189e2","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/images/Slideshow.vue')}var i=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/images/Slideshow.vue"),t=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-c29189e2","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/images/Slideshow.vue'),d=o("./node_modules/vue-loader/lib/component-normalizer.js"),a=l,n=d(i.a,t.a,!1,a,null,null);s.a=n.exports},"./src/pages/images/SlideshowGallery.vue":function(e,s,o){"use strict";function l(e){o('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-848c85da","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/images/SlideshowGallery.vue')}Object.defineProperty(s,"__esModule",{value:!0});var i=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/images/SlideshowGallery.vue"),t=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-848c85da","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/images/SlideshowGallery.vue'),d=o("./node_modules/vue-loader/lib/component-normalizer.js"),a=l,n=d(i.a,t.a,!1,a,null,null);s.default=n.exports}});
//# sourceMappingURL=SlideshowGallery.js.map?id=045c11feadf80e57f97c