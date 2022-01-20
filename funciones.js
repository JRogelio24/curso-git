// function mensaje(){
//     console.log("mensaje desde la funcion");
// }

// mensaje();


// function mensaje(msj){
//     console.log(msj);
// }

// var msj = "Mensaje como argumento de la función";
// mensaje(msj)


// function mensaje(){
//     return "Mensaje de devolución de la función";
// }
/*
// var msj = mensaje();
// console.log(msj); 

//funciones con argumentos

// function sumar(a, b, c){
//     return a + b + c;
// }

// var result = sumar(4, 5, 8);
// console.log(result);

// //funciones con argumentos opcional
// function sumar(a, b, c=3){
//     return a + b + c;
// }

// var result1 = sumar(4, 5);
// console.log(result1);

//funciones anonimas
var sumar = function (a, b, c=3){
    return a + b + c;
}

var result1 = sumar(4, 5);
console.log(result1);
*/

//funciones recursivas

var factorial = function(n){
    if((n ==0)) || (n == 1))
        return 1;
    else
        return(n * factorial(n - 1));
}

console.log(factorial)




