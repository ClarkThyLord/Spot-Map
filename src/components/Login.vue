<template>
  <f7-login-screen class="business-login" :opened="open" @loginscreen:closed="open = false">
    <f7-page login-screen>
      <f7-login-screen-title>
        <img src="~/static/Spot-Map.logo.png" class="logo" />
        <h3 style="margin-top: 0px;">BUSINESS</h3>
      </f7-login-screen-title>

      <f7-list form>
        <f7-list-input
          label="Email"
          type="email"
          placeholder="Email"
          :value="email"
          @input="email = $event.target.value"
        ></f7-list-input>
        <f7-list-input
          label="Business Password"
          type="password"
          placeholder="Business Password"
          :value="password"
          @input="password = $event.target.value"
        ></f7-list-input>

        <f7-list v-if="registering" style="margin-top: 0px;">
          <f7-list-input
            label="Re-Enter Password"
            type="password"
            placeholder="Business Password"
            :value="confirm_password"
            @input="confirm_password = $event.target.value"
          ></f7-list-input>
          <f7-list-input
            label="Address"
            placeholder="Address"
            :value="address"
            @input="address = $event.target.value"
          ></f7-list-input>
        </f7-list>
      </f7-list>

      <f7-list style="overflow: hidden !important;">
        <div style="display: flex; justify-content: center;">
          <f7-button v-if="registering" @click="register">Register</f7-button>
          <f7-button v-else @click="sign_in">Login</f7-button>
          <f7-button @click="cancel">Cancel</f7-button>
        </div>

        <f7-block-footer>
          <f7-link v-if="registering" href @click="registering=false">Have an account?</f7-link>
          <f7-link v-else href @click="registering=true">Don't have an account?</f7-link>
        </f7-block-footer>
      </f7-list>
    </f7-page>
  </f7-login-screen>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      registering: false,
      email: "",
      password: "",
      confirm_password: "",
      address: "",
    };
  },
  methods: {
    clear() {
      this.registering = false;
      this.email = "";
      this.password = "";
      this.confirm_password = "";
      this.address = "";
    },
    sign_in() {
      window.login(0, this.email, "business");

      this.$f7.loginScreen.close();
      this.clear();
    },
    register() {
      // TODO Register account in server

      this.$f7.loginScreen.close();
      this.clear();
    },
    cancel() {
      this.$f7.loginScreen.close();
      this.clear();
    },
  },
};
</script>

<style scoped>
.logo {
  max-height: 64px;
}
</style>