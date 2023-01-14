//objeto

const carro = {
    marca:"ford", 
    modelo:"ka", 
    ano:2015, 
    placa:"FDG-123",
    buzina: function() { alert('BIIIIIIIIIIIII');},
    completo: function(){
        return "A marco é "+this.marca+" e o modelo é: "+this.modelo;
    }
};

console.log(carro.completo());