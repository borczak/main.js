let button1 = document.getElementById("dodaj");
let button2 = document.getElementById("usun");
let tekst1 = document.getElementById("tekst");

button1.onclick = function () {
    tekst1.textContent = "Akademia108";
}
button2.onclick = function () {
    tekst1.textContent = "";
}
