
var btn = document.getElementById('b');
btn.addEventListener('click', enviar);


function enviar() {
  var nome = document.getElementById('nomeCliente').value;
  var idade = document.getElementById('numeroIdade').value;
  var emailCliente = document.getElementById('email').value;
  var senharCliente = document.getElementById('senhar').value;
  var BT = document.getElementById('b02');  

}

console.log(nome + idade + emailCliente + senharCliente)


/*
var nome = document.getElementById('nomeCliente').value;
var idade = document.getElementById('numeroIdade').value;
var emailCliente = document.getElementById('email').value;
var senharCliente = document.getElementById('senhar').value;
var BT = document.getElementById('b02');

BT.addEventListener('click', mostrar)

function mostrar(){
  var mostrar = document.getElementById('sn');
  
  mostrar.innerHTML = 'nome'
  
}






var btn = document.getElementById('b');
btn.addEventListener('click', enviar);


function enviar() {
  var nome = document.getElementById('nomeCliente').value;
  var idade = document.getElementById('numeroIdade').value;
  var emailCliente = document.getElementById('email').value;
  var senharCliente = document.getElementById('senhar').value;


  var mostrarnome = document.getElementById('n')
  mostrarnome.innerHTML = nome
}
*/