<template>
  <f7-login-screen class="business-login" :opened="open" @loginscreen:closed="open = false">
    <f7-page login-screen>
      <f7-login-screen-title>
        <img src="~/static/Spot-Map.logo.png" class="logo" />
        <h3 style="margin-top: 0px;">{{ internalization[session.language]["business"] }}</h3>
      </f7-login-screen-title>

      <f7-list form>
        <f7-list-input
          :label="internalization[session.language]['username']"
          :placeholder="internalization[session.language]['username']"
          :value="username"
          @input="username = $event.target.value"
        ></f7-list-input>
        <f7-list-input
          :label="internalization[session.language]['password']"
          type="password"
          :placeholder="internalization[session.language]['password']"
          :value="password"
          @input="password = $event.target.value"
        ></f7-list-input>

        <f7-list v-if="registering" style="margin-top: 0px;">
          <f7-list-input
            type="password"
            :label="internalization[session.language]['repassword']"
            :placeholder="internalization[session.language]['repassword']"
            :value="confirm_password"
            @input="confirm_password = $event.target.value"
          ></f7-list-input>
          <f7-list-input
            :label="internalization[session.language]['adress']"
            :placeholder="internalization[session.language]['adress']"
            :value="address"
            @input="address = $event.target.value"
          ></f7-list-input>
        </f7-list>
      </f7-list>

      <f7-list style="overflow: hidden !important;">
        <div style="display: flex; justify-content: center;">
          <f7-button v-if="registering" @click="register">{{ internalization[session.language]["register"] }}</f7-button>
          <f7-button v-else @click="sign_in">{{ internalization[session.language]["login"] }}</f7-button>
          <f7-button @click="cancel">{{ internalization[session.language]["cancel"] }}</f7-button>
        </div>

        <f7-block-footer>
          <f7-link v-if="registering" href @click="registering=false">{{ internalization[session.language]["tacc"] }}</f7-link>
          <f7-link v-else href @click="registering=true">{{ internalization[session.language]["dacc"] }}</f7-link>
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
      username: "",
      password: "",
      confirm_password: "",
      address: "",
      session: window.Session,
      internalization: {
        english: {
          "business": "BUSINESS",
          "username": "Username",
          "password": "Password",
          "repassword": "Re-Enter Password",
          "adress": "Business Address",
          "register": "Register",
          "login": "Login",
          "cancel": "Cancel",
          "tacc": "Have an account?",
          "dacc": "Don't have an account?"
        },
        spanish: {
          "business": "NEGOCIO",
          "username": "Nombre de Usuario",
          "password": "Contraseña",
          "repassword": "Repite la Contraseña",
          "adress": "Dirección de Negocios",
          "register": "Registrarse",
          "login": "Iniciar sesión",
          "cancel": "Cancelar",
          "tacc": "¿Tienes una cuenta?",
          "dacc": "¿No tienes una cuenta?"
        },
      }
    };
  },
  methods: {
    close() {
      this.$f7.loginScreen.close();
      this.clear();
    },
    clear() {
      this.registering = false;
      this.username = "";
      this.password = "";
      this.confirm_password = "";
      this.address = "";
    },
    sign_in() {
      window.Session.business_login(this.username, this.password);
      this.close();
    },
    register() {
      // TODO Register account in server
      this.close();
    },
    cancel() {
      this.close();
    },
  },
};
</script>

<style scoped>
.logo {
  max-height: 64px;
}
</style>