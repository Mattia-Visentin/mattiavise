let indiceCV = localStorage.getItem("id");

caricaDatiCV(indiceCV);

function caricaDatiCV(indice) {

    var file = new XMLHttpRequest();

    let nameFile = "https://raw.githubusercontent.com/Mattia-Visentin/mattiavise/refs/heads/main/JSONCV/" + indice + ".json";
    
    file.open("GET", nameFile, true);
    
    file.send();
    
    file.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {

            var jsonDoc = JSON.parse(file.responseText);
            
            mostraInfoCV(jsonDoc, indice);
        }
    };

}

function mostraInfoCV(ogg, indice) {

    console.log(indice);

    let nominativoTit = document.createElement("h2");

    let posizioniTit = document.createElement("h2");

    let esperienzaTit = document.createElement("h2");

    let descrizioneTit = document.createElement("h2");

    let nominativo = document.createElement("h1");

    let posizioni = document.createElement("p");

    let esperienza = document.createElement("p");

    let descrizione = document.createElement("p");

    let immagine = document.createElement("img");

    let dati = document.createElement("p");

    immagine.src = ogg.Immagine === undefined ? "" : ogg.Immagine;

    nominativoTit.appendChild(document.createTextNode("Nominativo"));

    nominativo.appendChild(document.createTextNode(ogg.Nominativo));

    dati.appendChild(document.createTextNode("Mail: " + ogg.Dati.Mail + "\n"));
    
    dati.appendChild(document.createTextNode("Telefono: " + ogg.Dati.Telefono + "\n"));
    
    dati.appendChild(document.createTextNode("Indirizzo: " + ogg.Dati.Indirizzo + "\n"));

    posizioniTit.appendChild(document.createTextNode("Posizioni"));

    posizioni.appendChild(document.createTextNode(ogg.Posizione));

    esperienzaTit.appendChild(document.createTextNode("Esperienza"));

    esperienza.appendChild(document.createTextNode(ogg.Esperienza));
    
    descrizioneTit.appendChild(document.createTextNode("Descrizione"));

    descrizione.appendChild(document.createTextNode(ogg.Descrizione));

    document.getElementById("intestazione").appendChild(immagine);

    document.getElementById("intestazione").appendChild(nominativo);

    document.getElementById("intestazione").appendChild(dati);

    document.getElementById("contenutoCV").appendChild(posizioniTit);

    document.getElementById("contenutoCV").appendChild(posizioni);

    document.getElementById("contenutoCV").appendChild(esperienzaTit);

    document.getElementById("contenutoCV").appendChild(esperienza);

    document.getElementById("contenutoCV").appendChild(descrizioneTit);

    document.getElementById("contenutoCV").appendChild(descrizione);


}   
