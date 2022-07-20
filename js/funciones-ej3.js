// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

let lado1 = parseInt(prompt("Ingrese el valor del lado vertical de un rectangulo"));
let lado2 = parseInt(prompt("Ingrese el valor del lado horizontal de un rectangulo"));

const perimRectangulo = (lado1, lado2) => {
    let perimetro = 2*(lado1 + lado2);
    document.write(`El perimetro de este rectangulo es: ${perimetro}`) 
}

perimRectangulo(lado1, lado2);
