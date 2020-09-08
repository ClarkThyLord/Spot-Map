<template>
  <f7-page>
  </f7-page>
</template>

<script>
export default {  
  mounted: function()
  {
let options = {
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
};
 
window.cordova.plugins.qrcodejs.encode('TEXT_TYPE', 'myemail@mydomain.me', (base64EncodedQRImage) => {
    console.info('QRCodeJS response is ' + base64EncodedQRImage);
  //TODO: use your base64EncodedQRImage
}, (err) => {
    console.error('QRCodeJS error is ' + JSON.stringify(err));
}, options);
  }
  
}


</script>

<style>

</style>