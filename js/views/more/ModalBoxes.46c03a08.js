(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views/more/ModalBoxes"],{"072c":function(e,o,t){"use strict";t("86d4")},"814f":function(e,o,t){"use strict";t.r(o);var a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("page",{staticClass:"modal-boxes-page",attrs:{title:"CSS/JS Modal",intro:"a Modal Box with CSS and JavaScript"}},[t("template",{slot:"header"},[t("h2",{staticClass:"title"},[e._v("How To Create a Modal Box")]),t("p",[e._v("A modal is a dialog box/popup window that is displayed on top of the current page:")])]),t("sample",[t("button",{staticClass:"btn-modal",on:{click:function(o){e.modal.isActive=!0}}},[e._v("Open Modal")]),t("modal-box",{attrs:{"is-active":e.modal.isActive,"is-closable":""},on:{"update:isActive":function(o){return e.$set(e.modal,"isActive",o)},"update:is-active":function(o){return e.$set(e.modal,"isActive",o)}}},[t("div",{staticClass:"modal-header"},[t("span",{staticClass:"close",on:{click:function(o){e.modal.isActive=!1}}},[e._v("×")]),t("h2",[e._v("Modal Header")])]),t("div",{staticClass:"modal-body"},[t("p",[e._v("Some text in the Modal Body")]),t("p",[e._v("Some other text...")])]),t("div",{staticClass:"modal-footer"},[t("h3",[e._v("Modal Footer")])])])],1),t("template",{slot:"examples"},[t("hr"),t("step",{attrs:{no:"1",html:""}}),t("example-code",{attrs:{code:e.examples[0]}}),t("step",{attrs:{no:"2",css:""}}),t("example-code",{attrs:{code:e.examples[1]}}),t("step",{attrs:{no:"3",js:""}}),t("example-code",{attrs:{code:e.examples[2]}}),t("h2",{staticClass:"title"},[e._v("Add Header and Footer")]),t("p",[e._v("Add a class for modal-header, modal-body, and modal-footer:")]),t("example-code",{attrs:{code:e.examples[3]}}),t("p",[e._v("Style the modal header, body and footer, and add animation (slide in the modal):")]),t("example-code",{attrs:{code:e.examples[4]}}),t("h2",{staticClass:"title"},[e._v('Bottom Modal ("Bottom sheets")')]),t("p",[e._v("An example on how to create a full-with modal that slides in from the bottom:")]),t("example-code",[t("sample",[t("iframe",{attrs:{src:"#examples/more/bottom-modal",frameborder:"0",width:"100%",height:"500px"}})])],1)],1)],2)},l=[],d=t("c012"),s={name:"modal-boxes-page",data:function(){return{modal:{isActive:!1},examples:[["``` html","\x3c!-- Trigger/Open The Modal --\x3e",'<button id="myBtn">Open Modal</button>',"","\x3c!-- The Modal --\x3e",'<div id="myModal" class="modal">',"","  \x3c!-- Modal content --\x3e",'  <div class="modal-content">','    <span class="close">&times;</span>',"    <p>Some text in the Modal..</p>","  </div>","","</div>","```"],["``` css","/* The Modal (background) */",".modal {","  display: none; /* Hidden by default */","  position: fixed; /* Stay in place */","  z-index: 1; /* Sit on top */","  left: 0;","  top: 0;","  width: 100%; /* Full width */","  height: 100%; /* Full height */","  overflow: auto; /* Enable scroll if needed */","  background-color: rgb(0,0,0); /* Fallback color */","  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */","}","","/* Modal Content/Box */",".modal-content {","  background-color: #fefefe;","  margin: 15% auto; /* 15% from the top and centered */","  padding: 20px;","  border: 1px solid #888;","  width: 80%; /* Could be more or less, depending on screen size */","}","","/* The Close Button */",".close {","  color: #aaa;","  float: right;","  font-size: 28px;","  font-weight: bold;","}","",".close:hover,",".close:focus {","  color: black;","  text-decoration: none;","  cursor: pointer;","}","```"],["``` js","// Get the modal",'var modal = document.getElementById("myModal");',"","// Get the button that opens the modal",'var btn = document.getElementById("myBtn");',"","// Get the <span> element that closes the modal",'var span = document.getElementsByClassName("close")[0];',"","// When the user clicks on the button, open the modal ","btn.onclick = function() {",'  modal.style.display = "block";',"}","","// When the user clicks on <span> (x), close the modal","span.onclick = function() {",'  modal.style.display = "none";',"}","","// When the user clicks anywhere outside of the modal, close it","window.onclick = function(event) {","  if (event.target == modal) {",'    modal.style.display = "none";',"  }","}","```"],["``` html","\x3c!-- Modal content --\x3e",'<div class="modal-content">','  <div class="modal-header">','    <span class="close">&times;</span>',"    <h2>Modal Header</h2>","  </div>",'  <div class="modal-body">',"    <p>Some text in the Modal Body</p>","    <p>Some other text...</p>","  </div>",'  <div class="modal-footer">',"    <h3>Modal Footer</h3>","  </div>","</div>","```"],["``` css","/* Modal Header */",".modal-header {","  padding: 2px 16px;","  background-color: #5cb85c;","  color: white;","}","","/* Modal Body */",".modal-body {padding: 2px 16px;}","","/* Modal Footer */",".modal-footer {","  padding: 2px 16px;","  background-color: #5cb85c;","  color: white;","}","","/* Modal Content */",".modal-content {","  position: relative;","  background-color: #fefefe;","  margin: auto;","  padding: 0;","  border: 1px solid #888;","  width: 80%;","  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);","  animation-name: animatetop;","  animation-duration: 0.4s;","}","","/* Add Animation */","@keyframes animatetop {","  from {top: -300px; opacity: 0}","  to {top: 0; opacity: 1}","}","```"]]}},components:{ModalBox:d["a"]}},n=s,i=(t("8d40"),t("2877")),c=Object(i["a"])(n,a,l,!1,null,null,null);o["default"]=c.exports},"86d4":function(e,o,t){},"8d40":function(e,o,t){"use strict";t("fb8f")},c012:function(e,o,t){"use strict";var a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"modal-box",class:{"is-active":e.isActive},on:{click:function(o){return o.target!==o.currentTarget?null:e.closeDim()}}},[t("div",{staticClass:"modal-content"},[e._t("default")],2)])},l=[],d={name:"modal-box",props:{isClosable:Boolean,isActive:Boolean},methods:{close:function(){this.$emit("close"),this.$emit("update:isActive",!1)},closeDim:function(){this.isClosable&&this.close()}}},s=d,n=(t("072c"),t("2877")),i=Object(n["a"])(s,a,l,!1,null,null,null);o["a"]=i.exports},fb8f:function(e,o,t){}}]);
//# sourceMappingURL=ModalBoxes.46c03a08.js.map