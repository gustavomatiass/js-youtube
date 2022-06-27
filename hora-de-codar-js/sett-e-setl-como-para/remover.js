var x = 0

var mytime = setTimeout(function(){
    console.log("O x é o");
}, 1500);

x = 5;

if (x > 0) {
    clearTimeout(mytime)
    console.log("O x é maior que 0");
};

//clearSetInterval 

var myinterval = setInterval(function() {
    console.log("Imprimindo interval");
}, 500);

setTimeout(function(){

    console.log("Não vai repetir");
    clearInterval(myinterval)

}, 2000);