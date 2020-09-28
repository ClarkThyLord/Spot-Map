cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-qrcodejs/www/qrcodejsPlugin.js",
        "id": "cordova-plugin-qrcodejs.QRCodeJS",
        "pluginId": "cordova-plugin-qrcodejs",
        "clobbers": [
            "cordova.plugins.qrcodejs"
        ]
    },
    {
        "file": "plugins/cordova-plugin-qrcodejs/www/qrcode.js",
        "id": "cordova-plugin-qrcodejs.QRCcodeJSImpl",
        "pluginId": "cordova-plugin-qrcodejs",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-qrcodejs/www/qrcodejsPluginProxy.js",
        "id": "cordova-plugin-qrcodejs.QRCcodeJSProxy",
        "pluginId": "cordova-plugin-qrcodejs",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
        "id": "cordova-plugin-qrscanner.QRScanner",
        "pluginId": "cordova-plugin-qrscanner",
        "clobbers": [
            "QRScanner"
        ]
    },
    {
        "file": "plugins/cordova-plugin-qrscanner/src/browser/plugin.min.js",
        "id": "cordova-plugin-qrscanner.QRScannerProxy",
        "pluginId": "cordova-plugin-qrscanner",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/src/browser/CameraProxy.js",
        "id": "cordova-plugin-camera.CameraProxy",
        "pluginId": "cordova-plugin-camera",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-qrcodejs": "1.0.0",
    "cordova-plugin-qrscanner": "3.0.1",
    "cordova-plugin-splashscreen": "6.0.0",
    "cordova-plugin-camera": "5.0.0"
}
// BOTTOM OF METADATA
});