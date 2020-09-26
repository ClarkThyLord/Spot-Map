<template>
  <f7-navbar>
    <f7-nav-left>
      <f7-link panel-toggle="left">
        <f7-icon f7="bars"></f7-icon>
      </f7-link>
    </f7-nav-left>

    <f7-searchbar
      v-show="search_visible"
      :disable-button="!$theme.aurora"
      id="MapSearch"
      :placeholder="internalization[session.language]['search']"
    ></f7-searchbar>

    <f7-nav-right v-if="qr_scan || session.logged_in">
      <f7-link @click="qr_pressed">
        <f7-icon
          :f7="session.logged_in ? 'qrcode' : 'qrcode_viewfinder'"
        ></f7-icon>
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
      search_visible: true,
      session: window.Session,
      qr_scan: window.cordova.platformId.localeCompare("browser"),
      internalization: {
        english: {
          "search": "Search...",
        },
        spanish: {
          "search": "Buscar...",
        },
      },
    };
  },
  mounted() {
    this.$f7ready(() => {
      this.$f7.on("routeChange", this.onRouteChange);
    });
  },
  methods: {
    onRouteChange(newRoute, previousRoute) {
      this.search_visible = newRoute.url == "/";
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