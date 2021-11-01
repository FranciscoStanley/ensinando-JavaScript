function mensagem(mensagem1, mensagem2){
    console.log(mensagem1, mensagem2);
}

mensagem("Aprendendo", "funcão");


console.log("____________________________________");


var funcao = function funcao(){
    console.log("Uma mensagem de função de expressão.")
};

funcao();


console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

/*Ou podemos fazer da seguinte maneira que irá funcionar da mesma forma*/

var funcao = function(){
    console.log("Uma mensagem de função de expressão.")
};

funcao();


console.log("[x]-[x]-[x]-[x]-[x]-[x]-[x]-[x]-[x]-[x]");

/*arrow function*/

var funcao = () => {
    console.log("Um arrow function!");
}

funcao();