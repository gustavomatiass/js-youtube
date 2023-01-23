for(var i = 10; i > 0; i--){

    console.log(i);

    if(i === 5){
        break;
    }
}

console.log('deu um break');

var x = 10;

while(x<100){

    x += 10;

    if(x === 60){
        console.log("continue");
        continue;
    }
    console.log('testando continue' + x);
}