let opa;
let opb;
let result;

function init(){
    //veriables
    let result = document.getElementById('result');
    
    let uno = document.getElementById('uno'); 
    let dos = document.getElementById('dos'); 
    let tres = document.getElementById('tres'); 
    let cuatro = document.getElementById('cuatro'); 
    let cinco = document.getElementById('cinco'); 
    let seis = document.getElementById('seis'); 
    let siete = document.getElementById('siete'); 
    let ocho = document.getElementById('ocho'); 
    let nueve = document.getElementById('nueve'); 
    let cero = document.getElementById('cero'); 

    let punto = document.getElementById('punto');
    let reset = document.getElementById('reset');
    let igual = document.getElementById('igual');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');

   
    //eventos
    uno.onclick = function(e){
        result.textContent = result.textContent + "1";
    }
    dos.onclick = function(e){
        result.textContent = result.textContent + "2";
    }
    tres.onclick = function(e){
        result.textContent = result.textContent + "3";
    }
    cuatro.onclick = function(e){
        result.textContent = result.textContent + "4";
    }
    cinco.onclick = function(e){
        result.textContent = result.textContent + "5";
    }
    seis.onclick = function(e){
        result.textContent = result.textContent + "6";
    }
    siete.onclick = function(e){
        result.textContent = result.textContent + "7";
    }
    ocho.onclick = function(e){
        result.textContent = result.textContent + "8";
    }
    nueve.onclick = function(e){
        result.textContent = result.textContent + "9";
    }
    cero.onclick = function(e){
        result.textContent = result.textContent + "0";
    }
    punto.onclick = function(e){
        result.textContent = result.textContent + ".";
    }


    reset.onclick = function(e){
        resetear();
    }
    
    suma.onclick = function(e){
        opa = result.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        opa = result.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        opa = result.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        opa = result.textContent;
        operacion = "/";
        limpiar();

    }

    igual.onclick = function(e){
        opb = result.textContent;
        resolver();
    }

        

}

function limpiar(){

        result.textContent = "";
}

function resetear(){
    result.textContent = "";
    opa = 0;
    opb = 0;
    operacion = "";
}

function resolver(){
    let res = 0;

    switch(operacion){
        case "+":
            res = parseFloat(opa) + parseFloat(opb);
            break;
        case "-":
            res = parseFloat(opa) - parseFloat(opb);
            break;
        case "*":
            res = parseFloat(opa) * parseFloat(opb);
            break;
        case "/":
            res = parseFloat(opa) / parseFloat(opb);
            break;
    }

    resetear();
    result.textContent = res ;
}