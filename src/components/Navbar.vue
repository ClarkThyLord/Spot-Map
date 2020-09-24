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

    <f7-nav-right v-if="qr_scan || session.logged_in">
      <f7-link @click="qr_pressed">
        <f7-icon :f7="session.logged_in ? 'qrcode' : 'qrcode_viewfinder'"></f7-icon>
      </f7-link>
    </f7-nav-right>
  </f7-navbar>
</template>

<script>
import mainVue from "../main.vue";

export default {
  data: function () {
    return {
      search: "",
      session: window.Session,
      qr_scan: window.cordova.platformId.localeCompare("browser"),
    };
  },
  methods: {
    searching: function (event) {
      this.search = event.target.value;
      // TODO Recommend searches
    },
    qr_pressed: function () {
      if (this.session.logged_in) {
        this.$f7.views.main.router.navigate("/generate-qr/");
      } else {
        navigator.camera.getPicture(CaptureSuccess, CaptureFailure);
      }
    },
  },
};

function CaptureSuccess(imageData) {
  console.log("Camera succesfuly captured..");
  window.QrScanner.scanImage(imageData)
    .then((result) => console.log(result))
    .catch((error) => console.log(error || "no QR code found."));
}

function CaptureFailure(message) {
  console.log("Camera failed to capture: " + message);
}
</script>