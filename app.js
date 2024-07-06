let listaNumerosSorteados=[];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let numeroMaximo=10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número! Lo hiciste en ${intentos} ${(intentos==1)?"Intento":"Intentos"}.`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //El usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        } else {
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";
    
}


function generarNumeroSecreto() {
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1
    //si ya sorteamos todos los números
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles, referesca la página para jugar de nuevo.")
    }else{
        //Si el número generado está en la lista no se usa y si no está se usa
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto()
        } else {
            listaNumerosSorteados.push(numeroGenerado)
        }
        return numeroGenerado;
    }

}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Mensaje de intervalo de número
    //reiniciar intentos
    //Generar un nuevo número aleatorio
    condicionesIniciales();
    //deshabilitar el botón
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

function condicionesIniciales(){
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
}

condicionesIniciales();