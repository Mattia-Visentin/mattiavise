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

        righe.appendChild(document.createTextNode("Telefono1: " + ogg.Telefoni[0].Telefoni[i].Telefono1 + ", "));
       
        righe.appendChild(document.createTextNode("Telefono2: " + ogg.Telefoni[0].Telefoni[i].Telefono2 + ", "));

        righe.appendChild(document.createTextNode("Sport1: " + ogg.Sport[0].Sport[i].Sport1 + ", "));
        
        righe.appendChild(document.createTextNode("Sport2: " + ogg.Sport[0].Sport[i].Sport2 + " "));

        colonna.appendChild(righe);
        
        tabella.appendChild(colonna);
    }

    document.getElementById("stringaJSON").appendChild(tabella);
}
