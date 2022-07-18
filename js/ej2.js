// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
let ciudades = []

while(confirm("¿Desea agregar una nueva ciudad?")) {
    let ciudad =  prompt("Ingrese el nombre de la ciudad");
    ciudades.push(ciudad);
}

document.write(`Las ciudades dentro del array son: ${ciudades}<br>`);

// Mostrar la longitud del arreglo.
document.write(`Hay ${ciudades.length} ciudades guardadas en el arreglo<br>`);
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(`El primer elemento del arreglo es ${ciudades[0]}, el tercero es ${ciudades[2]} y el ultimo es ${ciudades[ciudades.length - 1]}<br>`);
// Añade en última posición la ciudad de París.
ciudades.push(`Paris`);
document.write(`El ultimo elemnto del arreglo ahora es ${ciudades[ciudades.length - 1]}<br>`)
// Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`El segundo elemento del arreglo es ${ciudades[1]}<br>`);
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades.splice(1, 1);
ciudades.splice(1, 0, `Barcelona`);
document.write(`El segundo elemento del arreglo ahora es ${ciudades[1]}`);

