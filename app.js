let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let MaximoIntentos = 3;

function asignarTextoElementos(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
console.log(numeroSecreto);

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElementos("p",`Acertaste el numero en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElementos ("p","el numero secreto es menor");
            } else {
            asignarTextoElementos ("p","el numero secreto es mayor");    
            } 
            intentos++;
            limpiarCaja();
        } 
    return;
}    
function limpiarCaja(){
    document.querySelector("#valorUsuario").value ="";
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
 if (listaDeNumerosSorteados.length == numeroMaximo){
    asignarTextoElementos('p','ya se asignaron todos los numero posibles');
 } else {

    if (listaDeNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaDeNumerosSorteados.push(numeroGenerado);
        return numeroGenerado
    } 
 }
}

function condicionesIniciales() {
    asignarTextoElementos("h1","juego del numero secreto");
    asignarTextoElementos("p",`indica un numero de 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}


condicionesIniciales();

