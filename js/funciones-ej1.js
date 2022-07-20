//1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

const parOImpar = (nro) => {
    if(nro%2 === 0){
        document.write(`<p class="texto">El numero ${nro} es par</p>`);
    } else {
        document.write(`<p class="texto">El numero ${nro} es impar</p>`);
    }
}

let nro = parseInt(prompt("Ingrese un numero"));

parOImpar(nro);