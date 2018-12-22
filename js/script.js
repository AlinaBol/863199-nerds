"use strict"
var link = document.querySelector(".contact-button");
var sentbutton = document.querySelector(".contactus-button");
var popup = document.querySelector(".modal-contactus");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");

var isStorageSupport = true; 
var storage = "";
  
try {
    storage = localStorage.getItem("username");
} catch (err) {
    isStorageSupport = false;
}

try {
    storage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}
  
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
      
    if (storage) {
        username.value = storage;
        
        letter.focus();
    }
});
      
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove(".modal-error");
});      


sentbutton.addEventListener("click", function (evt) {
    if (!email.value) {
      evt.preventDefault();
        popup.classList.toggle("modal-error");
        
    } else {
        if (isStorageSupport) {
            localStorage.setItem("username", username.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
      }
});
