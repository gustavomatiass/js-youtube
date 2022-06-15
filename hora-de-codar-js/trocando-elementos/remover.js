// criar elemento
var el = document.createElement("h3");

el.classList = "testando-classe";

var texto = document.createTextNode("este é o texto trocado para um h3");

el.appendChild(texto);

console.log(el);

// selecionar o elemento para trocar
var title = document.querySelector("#title");

console.log(title);

// selencionar o pai do el
var pai = title.parentNode;

// trocar
pai.replaceChild(el, title)