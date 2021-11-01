let array = ['valor0', 'valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {propriedades1: 'valor1', propriedades2: 'valor2', propriedades3: 'valor3'}

for (let indice = 0;indice < array.length; indice++) {
    console.log(indice);
}

console.log("--------------------------------------");


for (let i in object){
    console.log(i);
}

console.log("--------------------------------------");

for (i of array) {
    console.log(i);
}

console.log("--------------------------------------");

var a = 0;
while (a < 10){
    a += 1;
    console.log(a)
}

console.log("--------------------------------------");

var a = 0;
do{
    a++
    console.log(a);
}while(a < 10)