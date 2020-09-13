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
window.user = {
  id: "",
  name: "",
  type: "anonymous",
};
window.login = function (id, name, type) {
  window.user.id = id;
  window.user.name = name;
  window.user.type = type;
};
window.logout = function () {
  window.user.id = "";
  window.user.name = "";
  window.user.type = "anonymous";
};

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