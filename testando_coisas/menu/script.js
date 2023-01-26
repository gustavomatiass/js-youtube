var h = document.getElementById('home');
h.addEventListener('mousemove', home)
h.addEventListener('mouseout', fora)

var b = document.getElementById('blogs')
b.addEventListener('mousemove', blogs)
b.addEventListener('mouseout', bfora)

var n = document.getElementById('nca');
n.addEventListener('mousemove', ncs)
n.addEventListener('mouseout', nfora)

var skills = document.getElementById('sk');
skills.addEventListener('mousemove', sk)
skills.addEventListener('mouseout', skfora)

var extras = document.getElementById('ex')
extras.addEventListener('mousemove', ex)
extras.addEventListener('mouseout', exfora)

var contato = document.getElementById('co')
contato.addEventListener('mousemove', co)
contato.addEventListener('mouseout', cofora)

function home(){
    h.style.color = 'black'
    h.style.fontSize = '30pt'
    var corpo = document.body
    corpo.classList.add('degrade')
    var nome = document.getElementById('nomes');
    nome.innerHTML = 'home'

    /*
    var h1 = document.createElement("h1");
    var text = document.createTextNode("home");
    h1.appendChild(text);
    h1.style.textAlign = "center";
    h1.style.position = "absolute";
    h1.style.zIndex = "-1";
    h1.style.margin = '-150px'
    h1.style.height = '40px'
    h1.style.fontSize = '200pt'
    h1.style.opacity = '0.1'
    h.appendChild(h1)
    */
}

function fora(){
    h.style.color = 'white'
    h.style.fontSize = '20pt'
    var corpo = document.body
    corpo.classList.remove('degrade')
    var nome = document.getElementById('nomes')
    nome.innerHTML = ''
    
    
}

function blogs(){
    b.style.color = 'black'
    b.style.fontSize = '30pt'
    var corpo = document.body
    corpo.classList.add('degrade2')
    var nome = document.getElementById('nomes');
    nome.innerHTML = 'blogs'
}

function bfora(){
    b.style.color = 'white'
    b.style.fontSize = '20pt'
    var corpo = document.body
    corpo.classList.remove('degrade2')
    var nome = document.getElementById('nomes')
    nome.innerHTML = ''
}

function ncs(){
    n.style.color = 'black'
    n.style.fontSize = '30pt'
    var corpo = document.body
    corpo.classList.add('degrade3')
    var nome = document.getElementById('nomes');
    nome.innerHTML = 'codigo'
    nome.style.fontSize = '100pt'
    nome.style.margin = '-180px'
}

function nfora(){
    n.style.color = 'white'
    n.style.fontSize = '20pt'
    var corpo = document.body
    corpo.classList.remove('degrade3')
    var nome = document.getElementById('nomes')
    nome.innerHTML = ''
    nome.style.fontSize = '250px'
}

function sk(){
    skills.style.color = 'black'
    skills.style.fontSize = '30pt'
    var corpo = document.body
    corpo.classList.add('degrade4')
    var nome = document.getElementById('nomes');
    nome.innerHTML = 'skills'
}

function skfora(){
    skills.style.color = 'white'
    skills.style.fontSize = '20pt'
    var corpo = document.body
    corpo.classList.remove('degrade4')
    var nome = document.getElementById('nomes')
    nome.innerHTML = ''
}

function ex(){
    extras.style.color = 'black'
    extras.style.fontSize = '30pt'
    var corpo = document.body
    corpo.classList.add('degrade5')
    var nome = document.getElementById('nomes');
    nome.innerHTML = 'extras'
}

function exfora(){
    extras.style.color = 'white'
    extras.style.fontSize = '20pt'
    var corpo = document.body
    corpo.classList.remove('degrade5')
    var nome = document.getElementById('nomes')
    nome.innerHTML = ''
}

function co(){
    contato.style.color = 'black'
    contato.style.fontSize = '30pt'
    var corpo = document.body
    corpo.classList.add('degrade6')
    var nome = document.getElementById('nomes');
    nome.innerHTML = 'contato'
}

function cofora(){
    contato.style.color = 'white'
    contato.style.fontSize = '20pt'
    var corpo = document.body
    corpo.classList.remove('degrade6')
    var nome = document.getElementById('nomes')
    nome.innerHTML = ''
}