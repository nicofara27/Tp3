//4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const tablaMultiplicar = (nro) => {
    for(let i=1; i<=10; i++) {
        document.write(`<p class=texto>${nro} X ${i} = ${nro*i}<br>`);
    }
}

let nro = parseInt(prompt("Ingrese un numero"));

tablaMultiplicar(nro);
