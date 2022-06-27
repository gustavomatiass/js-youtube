//keydown
document.addEventListener("keydown", function(event){

    console.log(event.key);

    if(event.key == "Enter") {
        console.log("Apertou enter")
    }
});

// keyup
document.addEventListener("keyup", function(event) {
    
    if(event.key == "Enter") {
        console.log("soltou o enter")
    }

});