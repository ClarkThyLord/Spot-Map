<template>
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
      <f7-link @click="pressed_qr">
        <f7-icon :f7="login_info.logged_in ? 'qrcode' : 'qrcode_viewfinder'"></f7-icon>
      </f7-link>
    </f7-nav-right>
  </f7-navbar>
</template>

<script>
export default {
  data: function () {
    return {
      login_info: window.login_info,
    };
  },
  methods: {
    pressed_qr: function () {
      if (this.login_info.logged_in) {
        this.$f7.views.main.router.navigate("/generate-qr/");
      } else {
        // TODO Start scanning for QR
      }
    },
  },
};
</script>

<style>
</style>