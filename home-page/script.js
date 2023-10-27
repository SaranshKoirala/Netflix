"use strict";
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input-container");

searchBtn.onclick = function () {
  searchInput.style.display =
    searchInput.style.display === "block" ? "none" : "block";
};
