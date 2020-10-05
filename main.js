// variaveis const não podem ter seu valor reatribuidos, mas sim mutados

//operações com constantes

//percorre uma array e realiza operações sequenciais dentro dela;
const arr = [1,3,4,5,8,9,10];
const newArr = arr.map(function(item,index){
    return item + index;
});
// console.log(newArr);

//percorre uma array e utiliza o resultado de cada operação na operação futura;   
const sum = arr.reduce(function(total,next){
    return total + next;
});
// console.log(sum);

//percorre uma array e filtra cada valor que não se encaixa na regra. obs: O retorno precisa ser do tipo boolean 
const filter = arr.filter(function(item){
    return item % 2 === 0;
});
// console.log(filter);

//buscar dados percorrendo uma aray
const find = arr.find(function(item){
    return item === 10;
});
// console.log(find);

