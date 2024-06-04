const contador2 = document.getElementById("contar2");
const sumar2 = document.getElementById("incr2");
const restando2 = document.getElementById("decr2");
const reset2 = document.getElementById("reset2");

let numero2 = 0;

sumar2.addEventListener("click", ()=>{
    numero2++;
    contador2.innerHTML = numero2;
});

restando2.addEventListener("click", ()=>{

    if(numero2==0){}
    else{
        numero2--;
        contador2.innerHTML = numero2;
    }

});

reset2.addEventListener("click", ()=>{
    numero2 = 0;
    contador2.innerHTML = numero2;
});