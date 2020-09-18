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
        QRScanner.scan(displayContents);
        QRScanner.show(); 
      }
    },
  },
};
function onDone(err, status){
  if (err) {
   // here we can handle errors and clean up any loose ends.
   console.error(err);
  }
  if (status.authorized) {
    //No Auth
  } else if (status.denied) {
   // `QRScanner.openSettings()` or they wont scan
  } else {
    //Ask again soon
  }
}

function displayContents(err, text){
  if(err){
    // an error occurred, or the scan was canceled (error code `6`)
    console.log(err);
  } else {
    // The scan completed, display the contents of the QR code:
    console.log(text);
    
    QRScanner.destroy();
  }
}
</script>

<style>
</style>