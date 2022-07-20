//1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

const parOImpar = (nro) => {
    let resultado;
    if(nro%2 === 0){
        resultado = `<p class="texto">El numero ${nro} es par</p>`;
    } else {
        resultado = `<p class="texto">El numero ${nro} es impar</p>`;
    }
    return resultado;
}

let nro = parseInt(prompt("Ingrese un numero"));

document.write(parOImpar(nro));

