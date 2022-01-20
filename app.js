//Uso de variables
/*var nombre = "Jose Rogelio";
console.log(nombre);
console.log(typeof(nombre));

var edad = 27;
console.log(edad);
console.log(typeof(edad));

var edad = 'cinco';
console.log(edad);
console.log(typeof(edad));

var sueldo = 900.98;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);

puestoDeTrabajo = null;
console.log(puestoDeTrabajo);
*****************************************/

// Operadores Matematicos +, -, /, *

/*var edadJose, edadRogelio, diferenciaEdad;
var sumaEdades, yearJose, yearRogelio, yearActual;

edadJose = 28;
edadRogelio = 31;
yearActual = 2022;

sumaEdades = edadJose + edadRogelio;
console.log(sumaEdades);

diferenciaEdad = edadJose - edadRogelio;
console.log(diferenciaEdad);

yearJose = yearActual - edadJose;
yearRogelio = yearActual - edadRogelio;
//Concatenacio o concatenar: unir dos valores en una cadena
console.log('Año en que nacio Jose ' + yearJose);
console.log('Año en que nacio Rogelio ' + yearRogelio);*/


//Operadores Logicos, unarios y de asignación
/*¿¿
// Logicos > < >= <= ==
var edadJose, edadRogelio, diferenciaEdad;
edadJose = 31;
edadRogelio = 28;

/*var mayorJose = edadJose > edadRogelio;
console.log(mayorJose);

var menorRogelio = edadJose < edadRogelio;
console.log(menorRogelio);


// (!) operador de negación, devuelve true si los operandos no son iguales.
var mayorJose = !(edadJose == edadRogelio);
console.log(mayorJose);

//Unarios, ++Incremento, --Decremento
edadJose++;
console.log(edadJose);

edadJose--;
console.log(edadJose);

//Asignación, +=, -=, *=, /=, %=
var a = 11;
var b = 5;

var c = a % 5; //Residuo o resto de una devisión
console.log(c);

a += b
console.log(a)
*/

// Sentencia if..else


// var nombre = "Rogelio";
// var esCasado = false;

// if (esCasado == true){
//     console.log(nombre + " es casado");
// } else {
//     console.log(nombre + " es soltero");
// }



//if anidados
/*
var nombre = 'Rogelio';
var edad = 63;

// edad < 12 es un niÃ±o.
// edad > 11, es < 18, es un adolescente.
// edad > 17, es < 60, es un adulto.
// edad > 60 es un anciano.

if (edad < 12){
    console.log(nombre + ' es un niño.');
} else if((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adoslescente.');
}else if((edad > 17) && (edad < 60)){
    console.log(nombre + ' es un adulto.');
} else {
    console.log(nombre + ' es un anciano.');
}


//Setencia Switch


var mes = 12;

 switch(mes){
     case 1:
         console.log('Enero');
         break;
     case 2:
        console.log('Febrero');
        break;
     case 3:
        console.log('Marzo');
        break;
     case 4:
        console.log('Abril');
        break;
     default:
         console.log('Mes no encontado.');
 }
*/


 //Sentencia for


// for(var i=5; i <= 25; i+=5){
//     console.log(i);
// }



//Sentencia While, Do while

// var i = 1
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// console.log(i)


/*********
 * Sentencia Do..While
 */

var i = 12;
do{
    console.log(i);
    i++;
}while(i <= 10);










