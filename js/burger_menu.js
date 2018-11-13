function Burger() {
    var x = document.getElementById("js_nav");
    if (x.className === "navbar-nav") {
        x.className += " responsive";
    }
    else {
        x.className = "navbar-nav"
    }
}