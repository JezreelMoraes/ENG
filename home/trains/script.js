function HomeController() {
  this.reference = document.querySelector(".js-home-container");
}

document.addEventListener("DOMContentLoaded", function() {
  let loginController = new HomeController();
});