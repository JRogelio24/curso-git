var nombre = ["jose", "Rogelio", "Cristina"];
var color = new Array("azul", "rojo", "verde", "cafe");

//  console.log(nombre[2]);
//  console.log(color[0]);

//  nombre[0] = "Jose";
//  color[2] = 'anaranjado';

//  console.log(nombre[0]);
//  console.log(color[2]);

// console.log(nombre.length);
// for(var i = 0; i <= nombre.length - 1; i++){
//     console.log(nombre[i]);
// }

// color.forEach(function(elemento, indice){
//     console.log(elemento, indice);
// })


console.log(nombre);
nombre.push("Pancracia"); //comando "Push" agrega elemento al final del arreglo
console.log(nombre);
nombre.unshift('oink'); //comando "Unshift" agrega elemento al principio del arreglo
console.log(nombre);
nombre.pop();           // comando "Pop" elimina elemento final
console.log(nombre);
nombre.shift();         //comando  "Shift" elimina elemento inicial
console.log(nombre);

var pos = nombre.indexOf("Cristina"); // comando ".indexOf" para saber el indice de un elemento
console.log(pos);

nombre.splice(1 , 1); //comando "Splice" elimina elemento especifico por indice y cuantos elementos 
console.log(nombre); 