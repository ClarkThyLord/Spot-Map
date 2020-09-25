<template>
  <!-- App -->
  <f7-app :params="f7params">
    <navbar />
    <sidebar />

    <login />
    <settings />

    <f7-view url="/" :main="true" class="ios-edges"></f7-view>
  </f7-app>
</template>
<script>
import { f7App, f7Panel, f7View, f7Statusbar } from "framework7-vue";
import routes from "./routes.js";

import QrScanner from "qr-scanner";
window.QrScanner = QrScanner;

import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

import Login from "./components/Login.vue";
import Settings from "./components/Settings.vue";

import Session from "./core/session";
window.Session = Session;

export default {
  components: {
    f7App,
    f7Panel,
    f7View,
    f7Statusbar,
    Navbar,
    Sidebar,
    Login,
    Settings
  },
  data() {
    return {
      f7params: {
        id: "xyz.spot.map",
        name: "Spot-Map",
        version: "0.0.0",
        theme: Session.theme,
        routes,
      },
    };
  },
};
</script>

<style scoped>
.view {
  z-index: 1;
}
</style>