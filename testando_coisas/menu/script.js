var h = document.getElementById('home');
h.addEventListener('mousemove', home)
h.addEventListener('mouseout', fora)

var b = document.getElementById('blogs')
b.addEventListener('mousemove', blogs)
b.addEventListener('mouseout', bfora)

var n = document.getElementById('nca');
n.addEventListener('mousemove', ncs)
n.addEventListener('mouseout', nfora)


function home(){
    h.style.color = 'black'
    h.style.fontSize = '30pt'
    var corpo = document.body
    corpo.classList.add('degrade')
}

function fora(){
    h.style.color = 'white'
    h.style.fontSize = '20pt'
    var corpo = document.body
    corpo.classList.remove('degrade')
}

function blogs(){
    b.style.color = 'black'
    b.style.fontSize = '30pt'
    var corpo = document.body
    corpo.classList.add('degrade2')
}

function bfora(){
    b.style.color = 'white'
    b.style.fontSize = '20pt'
    var corpo = document.body
    corpo.classList.remove('degrade2')
}

function ncs(){
    n.style.color = 'black'
    n.style.fontSize = '30pt'
    var corpo = document.body
    corpo.classList.add('degrade3')
}

function nfora(){
    n.style.color = 'white'
    n.style.fontSize = '20pt'
    var corpo = document.body
    corpo.classList.remove('degrade3')
}