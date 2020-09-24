<template>
  <!-- App -->
  <f7-app :params="f7params">
    <navbar />
    <sidebar />
    <login />

    <f7-view url="/" :main="true" class="ios-edges"></f7-view>
  </f7-app>
</template>
<script>
// Import Routes...
import { f7App, f7Panel, f7View, f7Statusbar } from "framework7-vue";
import routes from "./routes.js";

import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Login from "./components/Login.vue";

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
  },
  data() {
    return {
      f7params: {
        id: "xyz.spot.map",
        name: "Spot-Map",
        version: "0.0.0",
        routes,
      },
    };
  },
};
</script>