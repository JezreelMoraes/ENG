function LoginController() {
  this.reference = document.querySelector(".js-login-form-container");
  this.username = this.reference.querySelector(".js-username");
  this.password = this.reference.querySelector(".js-password");
  this.submitButton = this.reference.querySelector(".js-submit");

  this.submitButton.addEventListener("click", function(event) {
    event.preventDefault()
    if (username.value != "admin") return;
    if (password.value != "admin") return;

    window.location = "/home";
  });
}

document.addEventListener("DOMContentLoaded", function() {
  let loginController = new LoginController();
});
