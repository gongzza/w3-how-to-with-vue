<template lang="html">
  <page
    title="Modal Images"
    intro="responsive Modal Images with CSS and JavaScript"
    class="modal-images-page">

    <template slot="header">
    <h2 class="title">Modal Image</h2>
    <p>A modal is a dialog box/popup window that is displayed on top of the current page.</p>
    <p>This example use most of the code from the previous example, <router-link to="/more/modal-boxes">Modal Boxes</router-link>, only in this example, we use images.</p>
    </template>

    <sample>
      <a class="btn-modal" @click.prevent="modal.isActive = true">
        <img src="https://www.w3schools.com/howto/img_fjords.jpg" width="300" height="200">
      </a>
      <modal-box :is-active.sync="modal.isActive">
        <span class="close" @click="modal.isActive = false">&times;</span>
        <img src="https://www.w3schools.com/howto/img_fjords.jpg" width="100%">
        <p class="caption">Trolltunga, Norway</p>
      </modal-box>
    </sample>

    <template slot="examples">
    <hr>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    <step no="3" js></step>
    <example-code :code="examples[2]"></example-code>
    </template>
  </page>
</template>

<script>
import ModalBox from '@/components/more/ModalBox.vue'

export default {
  name: 'modal-images-page',
  data: () => ({
    modal: {
      isActive: false
    },
    examples: [
      [
        '``` html',
        '<!-- Trigger the Modal -->',
        '<img id="myImg" src="img_fjords.jpg" alt="Trolltunga, Norway" width="300" height="200">',
        '',
        '<!-- The Modal -->',
        '<div id="myModal" class="modal">',
        '',
        '  <!-- The Close Button -->',
        '  <span class="close">&times;</span>',
        '',
        '  <!-- Modal Content (The Image) -->',
        '  <img class="modal-content" id="img01">',
        '',
        '  <!-- Modal Caption (Image Text) -->',
        '  <div id="caption"></div>',
        '</div>',
        '```'
      ],
      [
        '``` css',
        '/* Style the Image Used to Trigger the Modal */',
        '#myImg {',
        '  border-radius: 5px;',
        '  cursor: pointer;',
        '  transition: 0.3s;',
        '}',
        '',
        '#myImg:hover {opacity: 0.7;}',
        '',
        '/* The Modal (background) */',
        '.modal {',
        '  display: none; /* Hidden by default */',
        '  position: fixed; /* Stay in place */',
        '  z-index: 1; /* Sit on top */',
        '  padding-top: 100px; /* Location of the box */',
        '  left: 0;',
        '  top: 0;',
        '  width: 100%; /* Full width */',
        '  height: 100%; /* Full height */',
        '  overflow: auto; /* Enable scroll if needed */',
        '  background-color: rgb(0,0,0); /* Fallback color */',
        '  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */',
        '}',
        '',
        '/* Modal Content (Image) */',
        '.modal-content {',
        '  margin: auto;',
        '  display: block;',
        '  width: 80%;',
        '  max-width: 700px;',
        '}',
        '',
        '/* Caption of Modal Image (Image Text) - Same Width as the Image */',
        '#caption {',
        '  margin: auto;',
        '  display: block;',
        '  width: 80%;',
        '  max-width: 700px;',
        '  text-align: center;',
        '  color: #ccc;',
        '  padding: 10px 0;',
        '  height: 150px;',
        '}',
        '',
        '/* Add Animation - Zoom in the Modal */',
        '.modal-content, #caption { ',
        '  animation-name: zoom;',
        '  animation-duration: 0.6s;',
        '}',
        '',
        '@keyframes zoom {',
        '  from {transform:scale(0)} ',
        '  to {transform:scale(1)}',
        '}',
        '',
        '/* The Close Button */',
        '.close {',
        '  position: absolute;',
        '  top: 15px;',
        '  right: 35px;',
        '  color: #f1f1f1;',
        '  font-size: 40px;',
        '  font-weight: bold;',
        '  transition: 0.3s;',
        '}',
        '',
        '.close:hover,',
        '.close:focus {',
        '  color: #bbb;',
        '  text-decoration: none;',
        '  cursor: pointer;',
        '}',
        '',
        '/* 100% Image Width on Smaller Screens */',
        '@media only screen and (max-width: 700px){',
        '  .modal-content {',
        '    width: 100%;',
        '  }',
        '}',
        '```'
      ],
      [
        '``` js',
        '// Get the modal',
        'var modal = document.getElementById("myModal");',
        '',
        '// Get the image and insert it inside the modal - use its "alt" text as a caption',
        'var img = document.getElementById("myImg");',
        'var modalImg = document.getElementById("img01");',
        'var captionText = document.getElementById("caption");',
        'img.onclick = function(){',
        '  modal.style.display = "block";',
        '  modalImg.src = this.src;',
        '  captionText.innerHTML = this.alt;',
        '}',
        '',
        '// Get the <span> element that closes the modal',
        'var span = document.getElementsByClassName("close")[0];',
        '',
        '// When the user clicks on <span> (x), close the modal',
        'span.onclick = function() { ',
        '  modal.style.display = "none";',
        '}',
        '```'
      ]
    ]
  }),
  components: {
    ModalBox
  }
}
</script>

<style lang="scss">
.modal-images-page {
  .sample {
    .btn-modal {
      cursor: pointer;
      transition: .3s;

      &:hover {
        opacity: 0.7;
      }

      & > img {
        border-radius: 5px;
      }
    }

    .modal-box {
      background-color: rgba(0, 0, 0, 0.9);

      .modal-content {
        max-width: 1000px;
        background-color: transparent;
        border: none;
        box-shadow: none;

        .close {
          font-size: 35px;
        }
      }
    }

    .caption {
      text-align: center;
      color: white;
    }
  }
}
</style>
