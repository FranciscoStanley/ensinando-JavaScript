/*
let array = ['String', 1, 2.5, true, ['array2']];

console.log(array);

console.log(array[0]);

para manipular o array podemos usar os seguintes metodos abaixo:

.foreach() - itera um array;
.push() - add item no final do array;
.pop() - remove item no final do array;
.shift() - remove item no inicio do array;
.unshift() - add item no inicio do array;
.indexOf() - retorna o indice de um valor;

*/
/*
array.forEach(
    function(item, index){
        console.log(item, index)
    }
);

array.push('novo item');
console.log(array)


array.pop();
console.log(array)

array.shift();
console.log(array)

array.unshift("novo item");
console.log(array)

console.log(array.indexOf(true))

array.splice(0, 3);
console.log(array);

let novoarray = array.slice(0, 3);
console.log(novoarray);
*/


/*Objetos*/
/*
let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ["array"],
    objectInterno:{
        objectInterno: 'objeto interno'
    }
};

console.log(object);

var numero = object.number;
console.log(numero);
*/

/*Desistruturando um objeto*/

var xicara = {
    cor:'azul',
    tamanho: 'p',
    funcao: tormarCafe()
}


var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tormarCafe(); 