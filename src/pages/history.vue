<template>
  <f7-page
    infinite
    :infinite-distance="50"
    :infinite-preloader="history.length > 0 && ShowPreloader"
    @infinite="load_history"
    :no-navbar="true"
    :no-toolbar="true"
  >
    <f7-block-title style="display: flex">
      <span style="flex: 1">
        <h1>History</h1>
      </span>
      <f7-link v-if="history.length > 0" href @click="clear_history">
        <h3>Clear History</h3>
      </f7-link>
    </f7-block-title>
    <f7-list v-if="history.length > 0" media-list>
      <f7-list-item
        v-for="(location, index) in history"
        link
        @click="open_location(location)"
        :title="location.title"
        :subtitle="location.timestamp"
        :key="index"
      ></f7-list-item>
    </f7-list>
    <div
      v-else
      style="color: gray; opacity: 0.6; margin: auto"
      class="text-align-center justify-content-center align-content-center"
    >
      <f7-icon
        f7="tray"
        size="256px"
        class="align-self-center"
        color="gray"
      ></f7-icon>
      <h1>No History To Show</h1>
    </div>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      today: new Date(),
      history: window.Session.history,
      AllowInfinite: true,
      ShowPreloader: true,
      session: window.Session,
      internalization: {
        english: {},
        spanish: {},
      },
    };
  },
  mounted: function () {
    if (this.history.length < 20) this.create_history(20);
  },
  methods: {
    clear_history: function () {
      this.history = [];
      this.session.history = [];
      this.session.save_session();
    },
    open_location: function (location) {
      this.$f7.views.main.router.navigate({
        name: "map",
        query: { lat: location.lat, lng: location.lng },
      });
    },
    load_history: function () {
      if (!this.AllowInfinite) return;
      this.AllowInfinite = false;
      setTimeout(() => {
        if (this.history.length >= 200) {
          this.ShowPreloader = false;
          return;
        } else this.create_history(20);
        this.AllowInfinite = true;
      }, 1000);
    },
    create_history: function (amount) {
      for (let count = 0; count < amount; count++) {
        let marker = this.session.markers[
          Math.floor(Math.random() * Math.floor(this.session.markers.length))
        ];

        let stamp = this.history[this.history.length - 1];
        if (stamp != undefined) stamp = new Date(stamp["timestamp"]);
        else stamp = new Date();

        stamp.setDate(
          stamp.getDate() - Math.floor(Math.random() * Math.floor(4))
        );
        stamp.setHours(
          stamp.getHours() - Math.floor(Math.random() * Math.floor(24))
        );
        stamp.setMinutes(
          stamp.getMinutes() - Math.floor(Math.random() * Math.floor(61))
        );
        stamp.setSeconds(
          stamp.getSeconds() - Math.floor(Math.random() * Math.floor(61))
        );

        this.history.push({
          title: marker["title"],
          timestamp: stamp.toLocaleString(),
          lat: marker["lat"],
          lng: marker["lng"],
        });
      }
      this.session.save_session();
    },
  },
};
</script>

<style scoped>
</style>