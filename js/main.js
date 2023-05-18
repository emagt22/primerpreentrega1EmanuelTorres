
function promedio(num,cant){
    let prom;
    prom = num/cant;
    return prom;
}

function validarNumero(num){
    if(num <= 0){
        alert("Error!! No se ingreso un valor Positivo");
        exit();
    }
}

function validarMateria(nom){
    if(!isNaN(nom)){
        alert("Error!! No se ingreso un String");
        exit();
    }
}

var materia;
let cantNotas;
let nota=0;
let suma=0;

materia = prompt("Ingrese Nombre de la MATERIA?"); 
validarMateria(materia);
cantNotas = prompt("Ingrese CANTIDAD DE NOTAS?");
validarNumero(cantNotas);
parseInt(cantNotas);

for (let index = 1; index <= cantNotas; index++) {
        nota = parseInt(prompt("Ingrese la " + index + " Nota: "));
        validarNumero(nota);
        suma = suma + nota;
}

alert("El promedio de la materia " + materia.toUpperCase() + " es de "+ promedio(suma,cantNotas));