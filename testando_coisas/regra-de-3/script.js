function clicar() {
    var num1 = document.querySelector("#n1").value;
    var num2 = document.querySelector("#n2").value;

    var resultado = parseInt(num1) + parseInt(num2);
    
    document.querySelector(".resultado").innerHTML = resultado

    console.log(resultado)
}