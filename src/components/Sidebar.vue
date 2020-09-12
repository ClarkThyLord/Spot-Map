<template>
  <f7-panel left>
    <div class="sidebar-content">
      <div class="logo-space">
        <img src="~/static/Spot-Map.logo.png" class="logo" />
      </div>

      <f7-list class="sidebar-items">
        <f7-list-item title="Map" link="/" panel-close></f7-list-item>
        <f7-list>
          <f7-list-item title="History" link="/history-client/" panel-close></f7-list-item>
          <f7-list-item title="Metrics" link="/metrics-client/" panel-close></f7-list-item>
          <f7-list-item title="Alert COVID" link="/alert-business/" panel-close></f7-list-item>
        </f7-list>
        <f7-block-title v-if="business">
          Business
          <f7-link
            style="margin-bottom: 5px;"
            class="float-right"
            panel-close
            @click="sign_out"
          >Logout</f7-link>
        </f7-block-title>
        <f7-list v-if="business">
          <f7-list-item title="Generate QR" link="/generate-qr/" panel-close></f7-list-item>
          <f7-list-item title="Report COVID" link="/alert-client/" panel-close></f7-list-item>
          <f7-list-item title="Business Metrics" link="/metrics-business/" panel-close></f7-list-item>
        </f7-list>
      </f7-list>

      <div class="margin text-align-center justify-content-center">
        <f7-link
          v-if="!business"
          href=""
          login-screen-open=".business-login"
          panel-close
        >Business? Login here</f7-link>
        <br v-if="!business" />
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
</template>

<script>
export default {
  data: function () {
    return {
      business: true,
    };
  },
  methods: {
    sign_out: function (event) {
      this.business = false;
    },
  },
};
</script>

<style scoped>
.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.logo-space {
  margin: 15px;
  text-align: center;
}

.logo-space .logo {
  height: 40px;
  height: 40px;
  border-radius: 50%;
}

.sidebar-items {
  flex: 1;
  margin-top: 0;
}
</style>