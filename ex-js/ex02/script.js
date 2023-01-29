var me = document.getElementById('messi');
me.addEventListener('mouseenter', mover);
me.addEventListener('mouseenter', emover);

function mover(){
    setTimeout(function() {
        img.style.position = "absolute";
        img.style.top = "50px";
        img.style.left = "100px";
      }, 2000);
}



