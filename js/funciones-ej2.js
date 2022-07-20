// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.


const mayusOMinus = (texto) => {
    if (texto === texto.toLowerCase()) {
        document.write(`<p class="texto">El texto esta compuesto exclusivamente de minusculas</p>`);
    } else if (texto === texto.toUpperCase()) {
        document.write(`<p class="texto">El texto esta compuesto exclusivamente de mayusculas</p>`);
    } else {
        document.write(`<p class="texto">El texto esta compuesto por letras minusculas y mayusculas</p>`);
    }
}

let texto = prompt("Ingrese un texto");

mayusOMinus(texto);