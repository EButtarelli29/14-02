const botonSi = document.getElementById("botonSi");
const botonNo = document.getElementById("botonNo");
const botonSiTrue = document.getElementById("botonSiTrue");
const contenido = document.getElementById("contenido");
const texto = document.getElementById("texto");
const a = document.querySelector("a");
const imagen = document.getElementById("imagen");

let scale1 = 1;
let scale2 = 1;

botonSi.addEventListener("click", () => {
    scale1 -= 0.07;
    scale2 += 0.1;
    botonSi.style.transform = `scale(${scale1})`;
    botonNo.style.transform = `scale(${scale2})`;
});

botonNo.addEventListener("click", () => {
    contenido.style.display = "none";
    document.body.style.backgroundColor = "#000000";
    texto.innerText = "oye po ke isiste ezo :c";
    imagen.src = "img/pibbleEmo.gif";
    a.innerText = "volver...";
})

botonSiTrue.addEventListener("click", () => {
    contenido.style.display = "none";
    document.body.style.backgroundColor = "#ffb6c1";
    texto.innerText = "Yupiiiii <3";
    texto.style.color = "#000";
    imagen.src = "img/pibbleHeart.gif";
})