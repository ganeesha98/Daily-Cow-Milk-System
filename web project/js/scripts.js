
const url = window.location.href;
const urlArray = url.split("/");

const path = urlArray.pop();

var homeMenuItem = document.getElementById("home");
var moreInfoMenuItem = document.getElementById("moreInfo");
var product = document.getElementById("product");

if (path == "index.html" || path == "") {
    homeMenuItem.classList.add("active");
    product.classList.remove("active");
    moreInfoMenuItem.classList.remove("active");
} else if (path == "more_info.html") {
    homeMenuItem.classList.remove("active");
    product.classList.remove("active");
    moreInfoMenuItem.classList.add("active");
} else {
    homeMenuItem.classList.remove("active");
    product.classList.add("active");
    moreInfoMenuItem.classList.remove("active");
}