
var quadro = document.getElementById('tudo');
quadro.addEventListener('mousemove', qmover);
quadro.addEventListener('mouseout', sair);
document.getElementById('btn').addEventListener('click', calcular);



function calcular(){
    let valorCompra = document.getElementById('valor').value;
    let valorFloat = parseFloat(valorCompra);
    let parcela = document.getElementById('parcelas');
    let parcelas = parcela.value;
    let valorFinal;
    var res = document.getElementById('resultado');
    
    if(parcelas == 1){
        valorFinal = valorFloat;
        res.innerHTML += 'A VISTA VC VAI PAGAR' + valorFinal;
    }
    if(parcelas == 2){
        var j;
        j = valorFloat * (3/100);
        valorFinal = j + valorFloat;
        res.innerHTML +=  (valorFinal/2)
    }
    if(parcelas == 4){
        var j;
        j = valorFloat * (7/100);
        valorFinal = j;
        valorFinal = j + valorFloat;
        res.innerHTML +=  (valorFinal/4)
    }
    

}


var quadro = document.getElementById('tudo');
quadro.addEventListener('mouseenter', qmover);
quadro.addEventListener('mouseout', sair);

function qmover(){
    quadro.classList.add('degrade')
}

function sair(){
    
    quadro.classList.remove('degrade')   
}
