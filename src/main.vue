<template>
  <!-- App -->
  <f7-app :params="f7params">
    <f7-navbar>
      <f7-nav-left>
        <f7-link panel-toggle="left">
          <f7-icon f7="bars"></f7-icon>
        </f7-link>
      </f7-nav-left>
      <f7-searchbar
        search-container=".search-list"
        search-in=".item-title"
        :disable-button="!$theme.aurora"
      ></f7-searchbar>
      <f7-nav-right>
        <f7-link>
          <f7-icon f7="qrcode"></f7-icon>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-panel left>
      <!-- <img src="./static/Spot-Map.svg"  style="width: 40px; height: 40px; border-radius: 50%"/> -->
      <div style="display: flex; flex-direction: column; height: 100%;">
        <f7-list  style="flex: 1;">
          <f7-list-item title="History" link="#"></f7-list-item>
          <f7-list-item title="Generate QR" link="#"></f7-list-item>
          <f7-list-item title="Link 3" link="#"></f7-list-item>
        </f7-list>
        <div>
          GitHub
        </div>
      </div>
    </f7-panel>

    <f7-view url="/" :main="true" class="ios-edges"></f7-view>
  </f7-app>
</template>
<script>
// Import Routes...
import { f7App, f7Panel, f7View, f7Statusbar } from "framework7-vue";
import routes from "./routes.js";

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