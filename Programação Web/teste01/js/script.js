
document.addEventListener("DOMContentLoaded", function(){
    let real = document.getElementById("real");
    let resultado = document.getElementById("result");
    const dolar = 5.14;
    document.getElementById("send").addEventListener("click", function(){
      if(real.value){
      resultado.innerHTML = dolar * parseFloat(real.value).toFixed(2);
      }
    });
  });

/*
// pegando valores

let real = parseFloat(document.getElementById("real").value);

let resultado = document.getElementById("result").innerHTML;

const dola = 5.14;

function calculate(){

    resultado = dola * real;

    document.getElementById("result").innerHTML = resultado;
}

document.getElementById("send").addEventListener("click", function(){
    calculate();
});




function re(){

    dola = 5.14;
    resultado = dola * real;

    const btn = document.getElementById("send");

    document.getElementById("send").addEventListener("click", function(){
        calculte(real);
    });

    document.getElementById("result").innerHTML = resultado;

};



const btn = document.getElementById("send");

btn.addEventListener("click", function(e){

        e.preventDefault();
    const real = document.getElementById("real");
    const dola = document.getElementById("dolar");
    var x;

    x = dola * real;



});
*/