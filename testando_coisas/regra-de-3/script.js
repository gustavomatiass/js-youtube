function clicar() {
    var num1 = document.querySelector("#n1").value;
    var num2 = document.querySelector("#n2").value;

    var num3 = document.querySelector("#n3").value;

    //soma
    var multiplica = parseInt(num1) * parseInt(num2);

    
    var resultado = multiplica / num3;
    
    document.querySelector(".resultado").innerHTML = resultado

    console.log(resultado)
    console.log(num3)
}

 document.getElementById("cor").addEventListener("click", "green" )