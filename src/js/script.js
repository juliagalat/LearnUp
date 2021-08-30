// ---------------menu-------------------
const menuButton = $(".menu-button");
const darkOverlay = $(".dark-overlay");
const mobileMenu = $(".mobile-menu");

$(document).on("click", ".menu-button", handleMenu);
$(document).on("click", ".is-submenu", handleToggleMenu);

function handleMenu(e) {
  e.preventDefault();
  darkOverlay.toggleClass("visible");
  mobileMenu.toggleClass("visible");
}
function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this.parent(".has-submenu").toggleClass("opened");
  $this.next("ul").slideToggle(500, function () {
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });
  $this
    .parent(".has-submenu")
    .toggleClass("opened")
    .siblings("li")
    .removeClass("opened")
    .find("ul")
    .hide();
}
function reserMobileMenu() {
  darkOverlay.removeClass("visible");
  mobileMenu.removeClass("visible");
  $(".mobile-navigation .has-submenu").removeClass("opened").find("ul").hide();
}

// -----------------logIn signUp-----------------
const sign = $(".modal-sign");
const login = $(".modal-log");
const signlink = $(".sign__up");
const loglink = $(".sign__in");
const close = $(".modal__close");

$(document).on("click", ".sign__up", openSignMenu);
$(document).on("click", ".sign__in", openLogMenu);
$(document).on("click", ".modal__close", closeSignMenu);

function openSignMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this.siblings(".modal-sign").removeClass("hide");
}

function openLogMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this.siblings(".modal-log").removeClass("hide");
}

function closeSignMenu() {
  const $this = $(this);
  console.log($this.parents(".modal"));
  $this.parents(".modal").addClass("hide");
}

// ----------------------------------------------
function initMobile() {
  console.log("is-mobile");
}

function initDesktop() {
  console.log("is-desktop");
  reserMobileMenu();
}

ssm.addState({
  id: "tablet",
  query: "(max-width: 768px)",
  onEnter: function () {
    initMobile();
  },
});

ssm.addState({
  id: "desktop",
  query: "(min-width: 900px)",
  onEnter: function () {
    initDesktop();
  },
});
// --------------------------isotop---------------------
const itemBox = $(".articles__box");

itemBox.isotope({
  itemSelector: ".articles__box__item",
});

itemBox.imagesLoaded().progress(function () {
  itemBox.isotope("layout");
});

$(document).on("click", ".articles__button_item", function () {
  const $this = $(this);
  const filter = "." + $this.data("filter");
  itemBox.isotope({ filter });
});
