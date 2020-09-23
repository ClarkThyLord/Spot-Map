<template>
  <f7-navbar>
    <f7-nav-left>
      <f7-link panel-toggle="left">
        <f7-icon f7="bars"></f7-icon>
      </f7-link>
    </f7-nav-left>
    <f7-searchbar
      @input="searching"
      search-container=".search-list"
      search-in=".item-title"
      :disable-button="!$theme.aurora"
    ></f7-searchbar>
    <f7-nav-right>
      <f7-link @click="pressed_qr">
        <f7-icon :f7="user.type == 'business' ? 'qrcode' : 'qrcode_viewfinder'"></f7-icon>
      </f7-link>
    </f7-nav-right>
  </f7-navbar>
</template>

<script>
import mainVue from '../main.vue';
export default {
  data: function () {
    return {
      search: "",
      user: window.user
    };
  },
  methods: {
    searching: function(event) {
      this.search = event.target.value;
      // TODO recommend searches
    },
    pressed_qr: function () {
      if (this.user.type == 'business') {
        this.$f7.views.main.router.navigate("/generate-qr/");
      } else {
        // TODO Start scanning for QR 
        //window.location.href = "/";
        navigator.camera.getPicture(ScanSuccess, ScanFailure)
      }
    },
  },
};
function ScanFailure(message)
{
  console.log('Camera did not scan because pf: ' + message);
}

function ScanSuccess(imageData)
{
  console.log("Camera scanned succesfuly..");
  var image = document.getElementById('myImage');
  image.src = "data:image/jpeg;base64," + imageData;
}
</script>

<style>
</style>