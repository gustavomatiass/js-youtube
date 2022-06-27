// mouse over
var title = document.querySelector("#title");

title.addEventListener("mouseover", function(){

    this.style.backgroundColor = "green"

});

// mouseout

title.addEventListener("mouseout", function(){

    this.style.backgroundColor = "white";

});

// outros elementos com mouseout 
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function(){

    var legenda = document.querySelector("#legenda")

    legenda.classList.remove("hide");

});

subtitle.addEventListener("mouseout", function(){

    var legenda = document.querySelector("#legenda")

    legenda.classList.add("hide");

});