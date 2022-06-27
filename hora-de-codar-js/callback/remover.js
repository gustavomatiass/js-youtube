function mostrar(num) {
    console.log("O resultado é: " + num);
}

function soma(a, b, callback){
    var op = a + b;
    callback(op);
}

function multiplicação(a, b, callback){
    var op = a * b;
   callback(op);
}

soma(2, 78, mostrar);

multiplicação(2, 5, mostrar);