var btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function(){

    console.log("clicou");

    console.log(this);

    this.style.color = "green"

});

var title = document.querySelector("#title");

title.addEventListener("click", function(){

    console.log("teste")


})

// duuble click

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function(){

    console.log("click duplo");

});