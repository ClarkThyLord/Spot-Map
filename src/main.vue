<template>
  <!-- App -->
  <f7-app :params="f7params">
    <navbar />
    <sidebar />
    <f7-view url="/" :main="true" class="ios-edges"></f7-view>
  </f7-app>
</template>
<script>
// Import Routes...
import { f7App, f7Panel, f7View, f7Statusbar } from "framework7-vue";
import routes from "./routes.js";

import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

let theme = "auto";
if (document.location.search.indexOf("theme=") >= 0) {
  theme = document.location.search.split("theme=")[1].split("&")[0];
}

export default {
  components: {
    f7App,
    f7Panel,
    f7View,
    f7Statusbar,
    Navbar,
    Sidebar,
  },
  data() {
    return {
      f7params: {
        theme,
        routes,
        id: "io.framework7.testapp",
      },
    };
  },
};
</script>