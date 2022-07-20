//3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let suma = [];
let listaDado1 = [];
let listaDado2 = [];
let sumaDados2 = 0;
let sumaDados3 = 0;
let sumaDados4 = 0;
let sumaDados5 = 0;
let sumaDados6 = 0;
let sumaDados7 = 0;
let sumaDados8 = 0;
let sumaDados9 = 0;
let sumaDados10 = 0;
let sumaDados11 = 0;
let sumaDados12 = 0;

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * (7 - 1) + 1);
  let dado2 = Math.floor(Math.random() * (7 - 1) + 1);

  listaDado1.push(dado1);
  listaDado2.push(dado2);
  suma.push(dado1 + dado2);

  switch(suma[i]) {
    case 2: {
      sumaDados2 = sumaDados2 + 1;
      break;
    }
  }
  switch(suma[i]) {
    case 3: {
      sumaDados3 = sumaDados3 + 1;
      break;
    }
  }
  switch(suma[i]) {
    case 4: {
      sumaDados4 = sumaDados4 + 1;
      break;
    }
  }
  switch(suma[i]) {
    case 5: {
      sumaDados5 = sumaDados5 + 1;
      break;
    }
  }
  switch(suma[i]) {
    case 6: {
      sumaDados6 = sumaDados6 + 1;
      break;
    }
  }
  switch(suma[i]) {
    case 7: {
      sumaDados7 = sumaDados7 + 1;
      break;
    }
  }
  switch(suma[i]) {
    case 8: {
      sumaDados8 = sumaDados8 + 1;
      break;
    }
  }
  switch(suma[i]) {
    case 9: {
      sumaDados9 = sumaDados9 + 1;
      break;
    }
  }
  switch(suma[i]) {
    case 10: {
      sumaDados10 = sumaDados10 + 1;
      break;
    }
  }
  switch(suma[i]) {
    case 11: {
      sumaDados11 = sumaDados11 + 1;
      break;
    }
  }
  switch(suma[i]) {
    case 12: {
      sumaDados12 = sumaDados12 + 1;
      break;
    }
  }
}

document.write(`<p class="texto">Resultados del dado 1: ${listaDado1}.<br><p>`);
document.write(`<p class="texto">Resultados del dado 2: ${listaDado1}.<br><p>`);
document.write(`<p class="texto">Resultados de la suma de ambos dados: ${suma}.<br><p>`);

document.write(`<p class="texto">La suma de dados 2 aparece ${sumaDados2} veces.<br><p>`);
document.write(`<p class="texto">La suma de dados 3 aparece ${sumaDados3} veces.<br><p>`);
document.write(`<p class="texto">La suma de dados 4 aparece ${sumaDados4} veces.<br><p>`);
document.write(`<p class="texto">La suma de dados 5 aparece ${sumaDados5} veces.<br><p>`);
document.write(`<p class="texto">La suma de dados 6 aparece ${sumaDados6} veces.<br><p>`);
document.write(`<p class="texto">La suma de dados 7 aparece ${sumaDados7} veces.<br><p>`);
document.write(`<p class="texto">La suma de dados 8 aparece ${sumaDados8} veces.<br><p>`);
document.write(`<p class="texto">La suma de dados 9 aparece ${sumaDados9} veces.<br><p>`);
document.write(`<p class="texto">La suma de dados 10 aparece ${sumaDados10} veces.<br><p>`);
document.write(`<p class="texto">La suma de dados 11 aparece ${sumaDados11} veces.<br><p>`);
document.write(`<p class="texto">La suma de dados 12 aparece ${sumaDados12} veces.<br><p>`);



