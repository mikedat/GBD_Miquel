let textonum = prompt("¿Cuántos años tienes?", "Escribe un número entero");

let num = parseInt(textonum);
console.log(num);
console.log(textonum);

let jubilacion = prompt("¿Cuántos años tienes?")

let num = parseInt(jubilacion);


if (num >= 65) {
    alert("Pues puedes jubilarte");
}
else {

     let añorestantes = 65 - num 

     alert("Te quedan " + añorestantes);

}