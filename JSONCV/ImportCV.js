let indiceCV = localStorage.getItem("Indice");

caricaDatiCV(indiceCV);

function caricaDatiCV(indice) {

    var file = new XMLHttpRequest();
    
    file.open("GET", "https://raw.githubusercontent.com/Mattia-Visentin/mattiavise/refs/heads/main/JSONCV/CurriculumAnag.json", true);
    
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

    immagine.src = ogg.Immagini[indice].Immagine === undefined ? "" : ogg.Immagini[indice].Immagine;

    nominativoTit.appendChild(document.createTextNode("Nominativo"));

    nominativo.appendChild(document.createTextNode(ogg.Nominativi[indice].Nominativo));

    posizioniTit.appendChild(document.createTextNode("Posizioni"));

    posizioni.appendChild(document.createTextNode(ogg.Posizioni[indice].Posizione));

    esperienzaTit.appendChild(document.createTextNode("Esperienza"));

    esperienza.appendChild(document.createTextNode(ogg.Esperienze[indice].Esperienza));
    
    descrizioneTit.appendChild(document.createTextNode("Descrizione"));

    descrizione.appendChild(document.createTextNode(ogg.Descrizioni[indice].Descrizione));

    document.getElementById("intestazione").appendChild(immagine);

    document.getElementById("intestazione").appendChild(nominativo);

    document.getElementById("contenutoCV").appendChild(posizioniTit);

    document.getElementById("contenutoCV").appendChild(posizioni);

    document.getElementById("contenutoCV").appendChild(esperienzaTit);

    document.getElementById("contenutoCV").appendChild(esperienza);

    document.getElementById("contenutoCV").appendChild(descrizioneTit);

    document.getElementById("contenutoCV").appendChild(descrizione);


}   
