let operazioni = ["+", "-", ":", "x"];

var menu = document.getElementById("operazione");

for(let i = 0; i < operazioni.length; i++) {

    var elemento = document.createElement("option");

    elemento.text = operazioni[i];

    elemento.value = operazioni[i];

    menu.appendChild(elemento)
}

function calcola() {

    var oper = document.getElementById("operazione");

    var numero1 = document.getElementById("numero1").value;

    var numero2 = document.getElementById("numero2").value;

    var schermo = document.getElementById("ris");

    switch(oper.value) {

    case "+":

        schermo.innerHTML = "Risultato: " + String((parseFloat(numero1) + parseFloat(numero2)).toFixed(1));

        break;

    case "-":

        schermo.innerHTML = "Risultato: " + String((parseFloat(numero1) - parseFloat(numero2)).toFixed(1));

        break;

    case ":":

        schermo.innerHTML = "Risultato: " + String((parseFloat(numero1) / parseFloat(numero2)).toFixed(1));

        break;

    case "x":

        schermo.innerHTML = "Risultato: " + String((parseFloat(numero1) * parseFloat(numero2)).toFixed(1));

        break;
    
    default:

        console.error("Errore: operazione sconosciuta");

        break;
    }
}