var jogador1 = 0;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são validos") :
console.log("Jogadores Invalidos!"); 

if(jogador1 > 0  && jogador1 > jogador2){
    console.log("jogador1 está vencendo!\nPontuação: jogador1", jogador1, "x", jogador2, "jogador2");
}else if(jogador2 > 0 && jogador2 > jogador1){
    console.log("jogador2 está vencendo!\nPontuação: jogador1", jogador1, "x", jogador2, "jogador2");
}else if(jogador1 >= 1 && jogador2 >= 1){
    console.log("Jogo está impatado\n jogador1", jogador1,"x", jogador2, "jogador2");
}else{
    console.log("Ninguém marcou ponto!\n jogo está:", jogador1, "x", jogador2);
}
