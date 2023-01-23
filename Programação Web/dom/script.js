var lista = ['laranja', 'maçã','pera','jaca', 'limão'];

var listaUL = document.createElement('ul');

var body = document.getElementsByTagName('body');

//console.log(body[0]);

body[0].appendChild(listaUL);

var listaNoNobody = document.getElementsByTagName('ul');

console.log(listaNoNobody[0]);

for(var i = 0; i < lista.length; i++){

    var lifor = document.createElement('li');

    var textoLI = document.createTextNode(lista[i]);

    lifor.appendChild(textoLI);

    console.log(lista[i]);
}