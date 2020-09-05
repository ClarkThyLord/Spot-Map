<template>
  <f7-login-screen
    class="business-login"
    :opened="loginScreenOpened"
    @loginscreen:closed="loginScreenOpened = false"
  >
    <f7-page login-screen>
      <f7-login-screen-title>
        <img src="~/static/Spot-Map.logo.png" class="logo" />
      </f7-login-screen-title>
      <f7-list form>
        <f7-list-input
          label="Business ID"
          type="text"
          placeholder="Business ID"
          :value="username"
          @input="username = $event.target.value"
        ></f7-list-input>
        <f7-list-input
          label="Business Password"
          type="password"
          placeholder="Business Password"
          :value="password"
          @input="password = $event.target.value"
        ></f7-list-input>
      </f7-list>
      <f7-list>
        <div style="display: flex; justify-content: center;">
          <f7-button @click="signIn">Sign In</f7-button>
          <f7-button login-screen-close=".business-login">Cancel</f7-button>
        </div>
        <f7-block-footer>
          
        <f7-link
          href=""
        >Don't have an account? Make one here</f7-link>
        </f7-block-footer>
      </f7-list>
    </f7-page>
  </f7-login-screen>
</template>

<script>
export default {
  data() {
    return {
      loginScreenOpened: false,
      username: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      const self = this;
      const app = self.$f7;

      app.dialog.alert(
        `Username: ${self.username}<br>Password: ${self.password}`,
        () => {
          app.loginScreen.close();
        }
      );
    },
  },
};
</script>

<style scoped>
.logo {
  max-height: 64px;
}
</style>