var n = document.getElementById('nome');
var ronaldo = document.getElementById('cr7');
var leonel = document.getElementById('messi');

leonel.addEventListener('mouseenter', mudar);
leonel.addEventListener('mouseout', messi);

function mudar(){
  var imgelement = document.getElementById('myimg').src = 'img/cr7.jpeg'
}

function messi(){
  var imgelement = document.getElementById('myimg').src = 'img/messi.jpeg'
}