"use strict";

let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let btn = document.querySelector(".sign-in-btn");

// btn.onclick = function () {};

btn.addEventListener("click", function (event) {
  let email = "saranshkoirala12@gmail.com";
  let password = "saransh";
  if (email == emailInput.value && password == passwordInput.value) {
    location.href = "/home-page/home.html";
  } else {
    alert("Invalid username or password");
  }
});
