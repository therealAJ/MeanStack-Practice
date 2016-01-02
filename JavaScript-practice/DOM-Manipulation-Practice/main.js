//var p1 = document.getElementById("first");
//var p1 = document.getElementsByTagName(p1)[0];
//var p1 = document.querySelector("#first");
//var p1 = document.querySelector(".special");'  // 4 different ways to select elements

var btn = document.querySelector("button");
var body = document.querySelector("body");
body.classList.add("purple-background");

btn.addEventListener("click", function() {
    
    body.classList.toggle("purple-background");
    
})