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
        //window.cordova.plugins.barcodeScanner.scan()
        //window.cordova.plugins.BBScanner.scan({format: cordova.plugins.BBScanner.types.QR_CODE}, displayContents);
        QRScanner.scan(displayContents);  
      }
    },
  },
};
function displayContents(err, text){
  if(err){
    // an error occurred, or the scan was canceled (error code `6`)
    QRScanner.hide();
    window.location.href = "/";
  } else {
    // The scan completed, display the contents of the QR code:
    alert(text);
    QRScanner.hide();
    window.location.href = "/";
  }
}
</script>

<style>
</style>