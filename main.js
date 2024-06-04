const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restando = document.getElementById("decr");
const reset = document.getElementById("reset");

let numero = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
});

restando.addEventListener("click", ()=>{

    if(numero==0){}
    else{
        numero--;
        contador.innerHTML = numero;
    }

});

reset.addEventListener("click", ()=>{
    numero = 0;
    contador.innerHTML = numero;
});

