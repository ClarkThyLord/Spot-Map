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
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-qrcodejs": "1.0.0",
    "cordova-plugin-qrscanner": "3.0.1"
}
// BOTTOM OF METADATA
});