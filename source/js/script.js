var buttonMenu = document.querySelector(".main-nav__button");
var listMenu = document.querySelector(".main-nav__list");
var sgvMenuOpen = document.querySelector(".main-nav__svg-open");
var sgvMenuClose = document.querySelector(".main-nav__svg-close");
var messageGood = document.querySelector(".system-messages__wrapper-good");
var messageError = document.querySelector(".system-messages__wrapper-error");
var messageGoodButton = document.querySelector(".system-messages__button--good");
var messageErrorButton = document.querySelector(".system-messages__button--error");
buttonMenu.className = "main-nav__button--open";
listMenu.className = "main-nav__list--closed";

buttonMenu.addEventListener("click", function(event){
  event.preventDefault()
  if (listMenu.classList.contains("main-nav__list--closed")){
    listMenu.classList.remove("main-nav__list--closed");
    listMenu.classList.add("main-nav__list");
    buttonMenu.classList.remove("main-nav__button--open");
    buttonMenu.classList.add("main-nav__button--close");
    sgvMenuOpen.classList.remove("main-nav__svg-open");
    sgvMenuOpen.classList.add("main-nav__svg-open--unvisible");
    sgvMenuClose.classList.remove("main-nav__svg-close");
    sgvMenuClose.classList.add("main-nav__svg-close--visible");
  }
  else{
    listMenu.classList.remove("main-nav__list");
    listMenu.classList.add("main-nav__list--closed");
    buttonMenu.classList.remove("main-nav__button--close");
    buttonMenu.classList.add("main-nav__button--open");
    sgvMenuOpen.classList.remove("main-nav__svg-open--unvisible");
    sgvMenuOpen.classList.add("main-nav__svg-open");
    sgvMenuClose.classList.remove("main-nav__svg-close--visible");
    sgvMenuClose.classList.add("main-nav__svg-close");
  }

});

messageGoodButton.addEventListener("click", function(event){
  event.preventDefault()
  if (messageGood.classList.contains("system-messages__wrapper-good")){
    messageGood.classList.add("system-messages__wrapper-good--uncative");
  }
});

messageErrorButton.addEventListener("click", function(event){
  event.preventDefault()
  if (messageError.classList.contains("system-messages__wrapper-error")){
    messageError.classList.add("system-messages__wrapper-error--unactive");
  }
});
