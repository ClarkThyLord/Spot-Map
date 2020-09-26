<template>
  <f7-page
    style="display: flex; justify-content: center"
    :no-navbar="true"
    :no-toolbar="true"
  >
    <f7-block-title class="text-align-center">
      <h1>{{ session.business_name }}</h1>
    </f7-block-title>

    <img v-bind:src="QR" alt="Something went wrong" style="max-width: 480px" />

    <div style="display: flex; justify-content: center">
      <!-- <f7-button @click="print">Print</f7-button>
      <f7-button @click="to_pdf">Download PDF...</f7-button> -->
    </div>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      QR: "",
      session: window.Session,
      internalization: {
        english: {},
        spanish: {},
      },
    };
  },
  mounted: function () {
    let options = {
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
    };

    window.cordova.plugins.qrcodejs.encode(
      "TEXT_TYPE",
      this.session.business_name,
      (base64EncodedQRImage) => {
        this.QR = base64EncodedQRImage;
      },
      (err) => {
        console.error("Error when generating qr: " + JSON.stringify(err));
      },
      options
    );
  },
  methods: {
    print: function () {
      // TODO print
    },
    to_pdf: function () {
      // TODO QR to pdf
    },
  },
};
</script>

<style>
</style>