const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

document.write("<ol>");
for (let i = 0; i < meses.length; i++) {
  document.write(`<li>${meses[i]}</li>`);
}
document.write("</ol>");
