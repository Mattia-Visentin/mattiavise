function caricaDati() {

    var file = new XMLHttpRequest();
    
    file.open("GET", "https://raw.githubusercontent.com/Mattia-Visentin/mattiavise/refs/heads/main/JSON/Anagrafica.json", true);
    
    file.send();
    
    file.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
           
            var jsonDoc = JSON.parse(file.responseText);
            
            mostraInfo(jsonDoc);
        }
    };

    document.getElementById("risForm").style.visibility = "visible";
}

function mostraInfo(ogg) {
    
    var tabella = document.createElement("table");

    for (let i = 0; i < 3; i++) {
        
        var colonna = document.createElement("tr");
       
        var righe = document.createElement("td");

        righe.appendChild(document.createTextNode(ogg.Nomi[i].Nome + ", "));
        
        righe.appendChild(document.createTextNode(ogg.Cognomi[i].Cognome + ", "));
        
        righe.appendChild(document.createTextNode(ogg.Eta[i].Eta + ", "));
        
        righe.appendChild(document.createTextNode(ogg.Indirizzi[i].Indirizzo + ", "));
        
        righe.appendChild(document.createTextNode(ogg.Citta[i].Citta + ", "));

        righe.appendChild(document.createTextNode(ogg.Telefoni[i].Telefono1 == undefined ? "" : "Telefono1: " + ogg.Telefoni[i].Telefono1 + ", "));
       
        righe.appendChild(document.createTextNode(ogg.Telefoni[i].Telefono2 == undefined ? "" : ogg.Telefoni[i].Telefono1 == undefined ? "Telefono1: " + ogg.Telefoni[i].Telefono2 + ", " : "Telefono1: " + ogg.Telefoni[i].Telefono2 + ", "));

        righe.appendChild(document.createTextNode(ogg.Sport[i].Sport1 == undefined ? "" :  "Sport1: " + ogg.Sport[i].Sport1 + ", "));
        
        righe.appendChild(document.createTextNode(ogg.Sport[i].Sport2 == undefined ? "" : ogg.Sport[i].Sport1 == undefined ? "Sport1: " + ogg.Sport[i].Sport2 + " " : "Sport1: " + ogg.Sport[i].Sport2 + " "));

        colonna.appendChild(righe);
        
        tabella.appendChild(colonna);
    }

    document.getElementById("stringaJSON").appendChild(tabella);
}
