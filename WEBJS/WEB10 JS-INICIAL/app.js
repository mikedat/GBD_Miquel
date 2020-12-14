let p = document.getElementById("parrafo1");

window.alert("Esto es un alert");

p.innerHTML = ("Adiós");

alert("Esto es otro alert sin usar el window");

p.className = ("importante");
p.style.textDecoration = ("underline");
p.style.color = ("orange");

let a = document.getElementById("enlace");
a.style.textDecoration = ("none");
a.style.color = ("black");



let lienlaces = document.getElementsByTagName("a");

for (const enlace of lienlaces) {
    enlace.style.backgroundColor = ("Orange");
}

let resultado = confirm("¿Quieres que te salude?")

console.log(resultado);

if (resultado == true) {
    alert("Buenas usuario :D");
}
else {

    alert("Pues no te saludo crack");

}

let respuesta = prompt("Dime tu nombre");
console.log(respuesta);






