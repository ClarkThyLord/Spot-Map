<template>
  <f7-popup
    class="Settings"
    :opened="PopupOpened"
    @popup:closed="PopupOpened = false"
  >
    <f7-page>
      <f7-navbar :title="internalization[session.language]['settings']">
        <f7-nav-right>
          <f7-link popup-close>{{
            internalization[session.language]["close"]
          }}</f7-link>
        </f7-nav-right>
      </f7-navbar>

      <f7-block>
        <f7-list no-hairlines-md>
          <f7-list-input
            type="select"
            :label="internalization[session.language]['language']"
            :value="session.language"
            @input="session.set_language($event.target.value)"
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </f7-list-input>

          <f7-list-input
            type="select"
            :label="internalization[session.language]['theme']"
            :value="session.theme"
            @input="set_theme"
          >
            <option value="auto">Auto</option>
            <option value="ios">IOS</option>
            <option value="md">Android</option>
            <option value="aurora">Aurora</option>
          </f7-list-input>

          <f7-list-item>
            <span>{{ internalization[session.language]["darktheme"] }}</span>
            <f7-toggle
              :value="session.dark_theme"
              :checked="session.dark_theme == 1 ? true : false"
              @toggle:change="session.set_dark_theme($event ? 1 : 0)"
            ></f7-toggle>
          </f7-list-item>

          <f7-list-item>
            <span>{{ internalization[session.language]["devmode"] }}</span>
            <f7-toggle
              :value="session.developer_mode"
              :checked="session.developer_mode == 1 ? true : false"
              @toggle:change="session.set_developer_mode($event ? 1 : 0)"
            ></f7-toggle>
          </f7-list-item>

          <div v-if="session.developer_mode">
            <f7-list>
              <f7-list-input
                type="password"
                :label="internalization[session.language]['mapkey']"
                :placeholder="internalization[session.language]['mapkey']"
                :value="session.google_maps_api_key"
                @input="set_google_maps_api_key"
                clear-button
              >
              </f7-list-input>
            </f7-list>

            <f7-block-title>{{
              internalization[session.language]["markdata"]
            }}</f7-block-title>
            <f7-block>
              <f7-segmented>
                <f7-button @click="marker_data_export">
                  <f7-icon f7="arrow_down_to_line_alt"></f7-icon>
                  {{ internalization[session.language]["export"] }}
                </f7-button>
                <f7-button @click="marker_data_restore">
                  <f7-icon f7="arrow_clockwise"></f7-icon>
                  {{ internalization[session.language]["restore"] }}
                </f7-button>
              </f7-segmented>
            </f7-block>
          </div>
        </f7-list>
      </f7-block>
    </f7-page>
  </f7-popup>
</template>

<script>
import session from "../core/session";
export default {
  data() {
    return {
      PopupOpened: false,
      session: window.Session,
      internalization: {
        english: {
          settings: "Settings",
          close: "Close",
          language: "Language",
          theme: "Theme",
          darktheme: "Dark Theme",
          devmode: "Developer Mode",
          mapkey: "Google Maps API Key",
          markdata: "Marker Data",
          export: "Export",
          restore: "Restore",
        },
        spanish: {
          settings: "Configuraciones",
          close: "Cerrar",
          language: "Idioma",
          theme: "Palette",
          darktheme: "Modo Oscuro",
          devmode: "Modo Desarrollador",
          mapkey: "Clave de API de Google Maps",
          markdata: "Datos de Marcadores",
          export: "Exportar",
          restore: "Restaurar",
        },
      },
    };
  },
  methods: {
    set_theme: function (event) {
      this.session.set_theme(event.target.value);
      window.location.reload(true);
    },
    set_google_maps_api_key: function (event) {
      this.session.set_google_maps_api_key(event.target.value);
      window.location.reload(true);
    },
    marker_data_export: function () {
      console.log(JSON.stringify(this.session.markers));
    },
    marker_data_restore: function (event) {
      session.set_markers(require("../static/markers.json"));
      window.location.reload(true);
    },
  },
};
</script>

<style>
</style>