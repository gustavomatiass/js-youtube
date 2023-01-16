//eventos

function eventoClick(){
    //alert("Lá ele");
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick(){
    alert('evento de click dublo');
}

function viraAmarelo(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "green";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

function dicionaTexo(){
    let p = document.getElementById("texto");
    p.append('o mause moveu<br>');
}

function limpaTexto(){
    document.getElementById("compoTexto").value = "";
}

function mudou(){
    console.log('mudou');
}

function teclaPressionada(){
    console.log("tecla pressionada");
}
