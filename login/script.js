
function logar(){

    var login = document.getElementById('login').value;
    var senhar = document.getElementById('senha').value;
    
    
    if(login == 'admin' && senhar == 'admin'){
        alert('perfeito');
        location.href = "home.html"
    }else{
        alert('senha incorreta');
    }

}