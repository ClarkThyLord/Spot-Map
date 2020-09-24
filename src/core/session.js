export default new Session();


function Session() {
  this.dark_theme = false;
  this.language = "english";

  this.business = {};
  this.signin_business = function (username, password) {
    this.business = username;
  }
  this.logout_business = function (username, password) {
    this.business = {};
  }

  this.save_session = function () {
    window.localStorage.setItem("Session", JSON.stringify(this));
  }
  this.load_session = function () {
    let data = window.localStorage.getItem("Session");
    if (data) {
      this.dark_theme = data.dark_theme;
      this.language = data.language;
      this.business = data.business;
    }
  }

  this.load_session()
}
