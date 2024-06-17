var click = document.getElementById("btn_d");
var two = document.getElementById("two");
var one = document.getElementById("one");
var body = document.querySelector("body")
var h1 = document.querySelector("h1")

h1.innerHTML = "assalom alekum"


click.onclick = function () {
    body.style.backgroundColor = "red"

}
two.onclick = function () {
    body.style.backgroundColor = "yellow"
}
one.onclick = function () {
    body.style.backgroundColor = "blue"
}
