let numero = Array("");

let operazione = Array();

function aggiungi(tasto) {

    let schermo = document.getElementById("risultato");

    numero[operazione.length != 0 ? (operazione.length) : 0] += tasto;

    schermo.innerHTML = numero[operazione.length != 0 ? (operazione.length) : 0];
}

function AC() {

    operazione = []; numero = [""];

    document.getElementById("risultato").innerHTML = "0";
}


function operaz(oper) {

    operazione.push(oper);

    numero.push("");
}

function segno() {

    let schermo = document.getElementById("risultato");

    numero[operazione.length] = parseFloat(numero[operazione.length] * -1);

    schermo.innerHTML = numero[operazione.length != 0 ? (operazione.length) : 0];

}

function virgola() {

    let schermo = document.getElementById("risultato");

    if(!String(numero[operazione.length]).includes(".")) {

        numero[operazione.length] += ".";

        schermo.innerHTML = numero[operazione.length];
    }
}

function perCento() {

    numero[operazione.length != 0 ? (operazione.length - 1) : 0] = (parseFloat(numero[operazione.length != 0 ? (operazione.length - 1) : 0]) / 100);

    visualizzaRisultato(numero[operazione.length != 0 ? (operazione.length - 1) : 0]);

}

function visualizzaRisultato(numero) {


    let schermo = document.getElementById("risultato");

    if(String(numero).includes('.')) { 

        if(((String(numero).length - String(numero).indexOf(".")) - 1) > 3) {

            numero = parseFloat(numero).toFixed(3);
        }
    }

    schermo.innerHTML = numero;
}

function quadrato() {

    let schermo = document.getElementById("risultato");

    numero[operazione.length] = Math.pow(parseFloat(numero[operazione.length]), 2);

    visualizzaRisultato(numero[operazione.length]);
}

function cubo() {

    let schermo = document.getElementById("risultato");

    numero[operazione.length] = Math.pow(parseFloat(numero[operazione.length]), 3);

    visualizzaRisultato(numero[operazione.length]);
}

function radice() {

    let schermo = document.getElementById("risultato");

    numero[operazione.length != 0 ? (operazione.length - 1) : 0] = Math.sqrt(parseFloat(numero[operazione.length != 0 ? (operazione.length - 1) : 0]));

    visualizzaRisultato(numero[operazione.length != 0 ? (operazione.length - 1) : 0]);
}

function radiceCubica() {

    let schermo = document.getElementById("risultato");

    numero[operazione.length != 0 ? (operazione.length - 1) : 0] = Math.cbrt(parseFloat(numero[operazione.length != 0 ? (operazione.length - 1) : 0]));

    visualizzaRisultato(numero[operazione.length != 0 ? (operazione.length - 1) : 0]);
}

function uguale() {

    let schermo = document.getElementById("risultato");

    while(numero.length != 1) {

        if(operazione.includes("moltiplicazione") || operazione.includes("divisione")) {

            for(let i = 0; i < operazione.length; i++) {

                switch(operazione[i]) {

                case "moltiplicazione":

                    numero[i] = (parseFloat(numero[i]) * parseFloat(numero[i + 1]));

                    break;

                case "divisione":

                    numero[i] = ((parseFloat(numero[i]) / parseFloat(numero[i + 1]))).toFixed(3);

                    break;

                default:

                    continue;
                }

                rimuovi(i + 1);
        
                rimuoviOper(i);
            }

        } else {

            for(let i = 0; i < operazione.length; i++) {

                switch(operazione[i]) {
    
                case "addizione":
    
                    numero[i] = (parseFloat(numero[i]) + parseFloat(numero[i + 1]));
    
                    break;
    
                case "differenza":
    
                    numero[i] = (parseFloat(numero[i]) - parseFloat(numero[i + 1]));
    
                    break;
    
                default:
    
                    continue;
                }
    
                rimuovi(i + 1);
        
                rimuoviOper(i);
            }
        }
    
        schermo.innerHTML = numero[0];
        //operazione = []; numero = [""];
    }   
}

function rimuovi(indice) {

    if (indice >= 0 && indice < numero.length) {

        numero.splice(indice, 1)
    }
}

function rimuoviOper(indice) {

    if (indice >= 0 && indice < operazione.length) {

        operazione.splice(indice, 1);
    }
}