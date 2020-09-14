<template>
  <f7-page>
    <img v-bind:src="QR" alt="Something went wrong" />
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return { QR: "" };
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
      "david@marin.com",
      (base64EncodedQRImage) => {
        console.info("QRCodeJS response is " + base64EncodedQRImage);
        //TODO: use your base64EncodedQRImage
        this.QR = base64EncodedQRImage; 
      },
      (err) => {
        console.error("QRCodeJS error is " + JSON.stringify(err));
      },
      options
    );
  },
};
</script>

<style>
</style>