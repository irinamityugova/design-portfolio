(function loadPage() {
  let splash = document.getElementsByClassName("splashscreen")[0];
  setTimeout(() => {
    splash.classList.add("splashscreen--is-hidden");
    setTimeout(() => {
      splash.classList.add("splashscreen--is-not-displayed");
    }, 300);
  }, 500);
})();

console.log("functions.js end");
