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
      <div style="display: flex; flex-direction: column; height: 100%;">
        <div style="margin: 15px; text-align: center;">
          <img src="./static/Spot-Map.logo.png"  style="height: 40px; height: 40px; border-radius: 50%"/>
        </div>

        <f7-list style="flex: 1; margin-top: 0;">
          <f7-list-item title="Map" link="#"></f7-list-item>
          <f7-list-item title="History" link="#"></f7-list-item>
          <f7-list-item title="Alert COVID" link="#"></f7-list-item>
          <f7-list-item title="Generate QR" link="#"></f7-list-item>
        </f7-list>
        
        <div style="margin: 15px; text-align: center;">
          <f7-link style="margin-bottom: 5px;">Business? Sign-in here</f7-link>
          <br/>
          <f7-link href="https://github.com/ClarkThyLord/Spot-Map#about" external target="_blank">
            <f7-icon f7="info_circle"></f7-icon>
          </f7-link>
          <f7-link href="https://github.com/ClarkThyLord/Spot-Map/issues" external target="_blank">
            <f7-icon f7="question_circle"></f7-icon>
          </f7-link>
          <f7-link href="https://github.com/ClarkThyLord/Spot-Map" external target="_blank">
            <f7-icon f7="logo_github"></f7-icon>
          </f7-link>
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