let num = [5, 8, 2, 9, 3];

/*

console.log('o vetor tem ' + num.length + ' posição')

console.log(num[1])

for(let pos=0; pos <= num.length; pos++){
    console.log('a posição '+pos+' tem o valor'+ num[pos])
}

for(let x in num){
    console.log(num[pos])
}

num.sort()

for(let pos in num){
    console.log(num[pos])
}

*/


let pos = num.indexOf(3);

if(pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log('o valor 8 esta na posição '+pos)
}

