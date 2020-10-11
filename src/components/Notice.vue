<template>
  <f7-popup
    class="Notice"
    :opened="popupOpened"
    @popup:closed="popupOpened = false"
  >
    <f7-page>
      <f7-navbar
        :title="'Spot-Map: ' + internalization[session.language]['title']"
      >
        <f7-nav-right>
          <f7-link popup-close>{{
            internalization[session.language]["close"]
          }}</f7-link>
        </f7-nav-right>
      </f7-navbar>

      <f7-block class="text-align-center">
        <p>
          {{ internalization[session.language]["msg"] }}
        </p>

        <div class="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/WXTuuxxM6JA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="video"
          ></iframe>
        </div>

        <f7-segmented class="margin-top">
          <f7-button
            href="https://github.com/ClarkThyLord/Spot-Map/"
            external
          >
            <f7-icon f7="logo_github"></f7-icon>
            GitHub
          </f7-button>
          <f7-button>
            <f7-icon @click="open_settings" f7="gear_alt"></f7-icon>
            {{ internalization[session.language]["set"] }}
          </f7-button>
        </f7-segmented>
      </f7-block>
    </f7-page>
  </f7-popup>
</template>

<script>
export default {
  data() {
    return {
      session: window.Session,
      popupOpened: true,
      internalization: {
        english: {
          title: "Web Preview",
          close: "Close",
          msg:
            "Welcome to the Spot-Map web preview, in order for this preview to be fully functional you’ll need to provide your own Google Cloud API, don’t worry your key will only be used locally, otherwise you’ll only be able to view placeholder content, thank you for your understanding!",
          set: "Set Google API Key",
        },
        spanish: {
          title: "Vista Previa Web",
          close: "Cerrar",
          msg:
            "Bienvenido a la vista previa web de Spot-Map, para que esta vista previa sea completamente funcional, deberá proporcionar su propia API de Google Cloud, no se preocupe, su clave solo se usará localmente, sin la llave solo podrá ver contenido temporal, gracias por su comprensión.",
          set: "Insertar Clave API De Google",
        },
      },
    };
  },
  methods: {
    open_settings: function () {
      this.session.set_developer_mode(1);
      this.$f7.popup.open(".Settings");
    },
  },
};
</script>

<style scoped>
.page * {
  overflow: hidden !important;
}

.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}
.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>