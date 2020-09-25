export default new Session();

function Session() {
  this.version = "0.0.1";

  this.theme = "auto";
  this.dark_theme = 0;
  this.language = "english";

  this.google_maps_api_key = "";

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
      this.theme = data.theme;
      this.dark_theme = data.dark_theme;
      this.language = data.language;

      this.google_maps_api_key = data.google_maps_api_key;

      this.logged_in = data.logged_in;
      this.business_name = data.business_name;
    }
  };

  this.load_session();
}
