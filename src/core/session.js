export default new Session();

function Session() {
  this.version = "0.0.2";

  this.theme = "auto";
  this.set_theme = function (theme) {
    this.theme = theme;
    this.save_session();
  };
  this.dark_theme = 0;
  this.set_dark_theme = function (dark_theme) {
    this.dark_theme = dark_theme;
    if (dark_theme == 1)
      document.getElementsByTagName("body")[0].classList.add("theme-dark");
    else
      document.getElementsByTagName("body")[0].classList.remove("theme-dark");
    this.save_session();
  };
  this.language = "english";
  this.set_language = function (language) {
    this.language = language;
    this.save_session();
  };

  this.developer_mode = 0;
  this.set_developer_mode = function (developer_mode) {
    this.developer_mode = developer_mode;
    this.save_session();
  }

  this.google_maps_api_key = "";
  this.set_google_maps_api_key = function (google_maps_api_key) {
    this.google_maps_api_key = google_maps_api_key;
    this.save_session();
  };

  this.markers = [];
  this.set_markers = function (markers) {
    this.markers = markers;
    this.save_session();
  }

  this.logged_in = false;
  this.business_name = "";

  this.business_login = function (username, password) {
    // TODO Connect to server and login
    this.logged_in = true;
    this.business_name = username;
    this.save_session();
  };
  this.business_logout = function () {
    this.logged_in = false;
    this.business_name = "";
    this.save_session();
  };

  this.save_session = function () {
    window.localStorage.setItem("Session", JSON.stringify(this));
  };
  this.load_session = function () {
    let data = window.localStorage.getItem("Session");
    if (data) {
      data = JSON.parse(data);
      if (data.version.localeCompare(this.version)) return;
      this.set_theme(data.theme);
      this.set_dark_theme(data.dark_theme);
      this.set_language(data.language);

      this.developer_mode = data.developer_mode;
      this.set_google_maps_api_key(data.google_maps_api_key);
      this.markers = data.markers;

      this.logged_in = data.logged_in;
      this.business_name = data.business_name;
    } else {
      this.markers = require("../static/markers.json");
    }
  };

  this.load_session();
}
