<template>
  <f7-panel left>
    <div class="sidebar-content">
      <div class="logo-space">
        <img src="~/static/Spot-Map.logo.png" class="logo" />
      </div>

      <f7-list class="sidebar-items">
        <div v-if="session.logged_in">
          <f7-block-title>
            {{ session.business_name }}
            <f7-link
              style="margin-bottom: 5px;"
              class="float-right"
              panel-close
              @click="logout"
            >Logout</f7-link>
          </f7-block-title>

          <f7-list>
            <f7-list-item title="Generate QR" link="/generate-qr/" panel-close></f7-list-item>
          </f7-list>
        </div>

        <f7-list-item title="Map" link="/" panel-close></f7-list-item>
        <f7-list-item title="Metrics" link="/metrics/" panel-close></f7-list-item>
        <f7-list-item v-if="!session.logged_in" title="History" link="/history/" panel-close></f7-list-item>

        <f7-list>
          <f7-list-item title="Report COVID-19" link="/report/" panel-close></f7-list-item>
        </f7-list>

        <f7-list>
          <f7-list-item title="Settings" link="#" popup-open=".Settings" panel-close></f7-list-item>
        </f7-list>
      </f7-list>

      <div class="margin text-align-center justify-content-center">
        <div v-if="!session.logged_in">
          <f7-link href login-screen-open=".business-login" panel-close>Business? Login here</f7-link>
          <br />
        </div>
        <f7-link
          href="https://github.com/ClarkThyLord/Spot-Map#about"
          external
          target="_blank"
          panel-close
        >
          <f7-icon f7="info_circle"></f7-icon>
        </f7-link>
        <f7-link
          href="https://github.com/ClarkThyLord/Spot-Map/issues"
          external
          target="_blank"
          panel-close
        >
          <f7-icon f7="question_circle"></f7-icon>
        </f7-link>
        <f7-link
          href="https://github.com/ClarkThyLord/Spot-Map"
          external
          target="_blank"
          panel-close
        >
          <f7-icon f7="logo_github"></f7-icon>
        </f7-link>
      </div>
    </div>
  </f7-panel>
</template>

<script>
export default {
  data: function() {
    return {
      session: window.Session
    };
  },
  methods: {
    logout() {
      window.Session.business_logout();
    },
  },
};
</script>

<style scoped>
.theme-dark .panel {
  background-color: #121212;
}

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
}

.sidebar-items {
  flex: 1;
  margin-top: 0px;
}
</style>