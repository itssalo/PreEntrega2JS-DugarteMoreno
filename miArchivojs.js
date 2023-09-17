// Varible
let numero1, numero2, resultado;

// prompt para capturar numeros()
function capturarNumeros() {
    numero1 = parseFloat(prompt("Ingresa el primer número:"));
    numero2 = parseFloat(prompt("Ingresa el segundo número:"));
}

// Suma | Resta | Division
function suma() {
    resultado = numero1 + numero2;
}

function resta() {
    resultado = numero1 - numero2;
}

function multiplicacion() {
    resultado = numero1 * numero2;
}

function division() {
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
    } else {
        resultado = "Error.";
    }
}

// resultado
function notificarResultado() {
    alert("El resultado es: " + resultado);
}

// para los botones
function realizarOperacion(operacion) {
    capturarNumeros();
    switch (operacion) {
        case 'suma':
            suma();
            break;
        case 'resta':
            resta();
            break;
        case 'multiplicacion':
            multiplicacion();
            break;
        case 'division':
            division();
            break;
        default:
            resultado = "Operación no válida.";
    }
    notificarResultado();
}
