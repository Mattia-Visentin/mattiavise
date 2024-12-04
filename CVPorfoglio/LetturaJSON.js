function caricaDati() {

    var file = new XMLHttpRequest();
    
    file.open("GET", "https://raw.githubusercontent.com/Mattia-Visentin/mattiavise/refs/heads/main/JSONCV/Anagrafica.json", true);
    
    file.send();
    
    file.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
           
            var jsonDoc = JSON.parse(file.responseText);
            
            mostraInfo(jsonDoc);
        }
    };

    document.getElementById("formIngr").style.width = "0px";
    
    document.getElementById("formIngr").style.visibility = "hidden";

    document.getElementById("risForm").style.visibility = "visible";

}

function mostraInfo(ogg) {
    
    var tabella = document.createElement("table");

    var colonnaIndici = ["Immagine", "Nome", "Cognome", "Età", "Indirizzo", "Città", "Telefono 1", "Telefono 2", "Sport 1", "Sport 2"];

    var colonnaTit = document.createElement("tr");

    for(let i = 0; i < colonnaIndici.length; i++) {

        var righe = document.createElement("th");

        righe.appendChild(document.createTextNode(colonnaIndici[i]));

        colonnaTit.appendChild(righe);
    }

    tabella.appendChild(colonnaTit);

    for (let i = 0; i < 3; i++) {
        
        var colonna = document.createElement("tr");
       
        var rigaNome = document.createElement("td");

        rigaNome.appendChild(document.createTextNode(ogg.Anagrafica[i].Nome));

        var rigaCognome = document.createElement("td");
        
        rigaCognome.appendChild(document.createTextNode(ogg.Anagrafica[i].Cognome));

        var rigaEta = document.createElement("td");
        
        rigaEta.appendChild(document.createTextNode(ogg.Anagrafica[i].Eta));

        var rigaIndirizzo = document.createElement("td");
        
        rigaIndirizzo.appendChild(document.createTextNode(ogg.Anagrafica[i].Indirizzo));

        var rigaCitta = document.createElement("td");
        
        rigaCitta.appendChild(document.createTextNode(ogg.Anagrafica[i].Citta));

        var rigaTelefono1 = document.createElement("td");

        rigaTelefono1.appendChild(document.createTextNode(ogg.Anagrafica[i].Telefoni[0].Telefono1 == undefined ? "" :  ogg.Anagrafica[i].Telefoni[0].Telefono1));

        var rigaTelefono2 = document.createElement("td");
       
        rigaTelefono2.appendChild(document.createTextNode(ogg.Anagrafica[i].Telefoni[1].Telefono2 == undefined ? "" : ogg.Anagrafica[i].Telefoni[1].Telefono2));
        
        var rigaSport1 = document.createElement("td");

        rigaSport1.appendChild(document.createTextNode(ogg.Anagrafica[i].Sport[0].Sport1 == undefined ? "" :  ogg.Anagrafica[i].Sport[0].Sport1));
        
        var rigaSport2 = document.createElement("td");

        rigaSport2.appendChild(document.createTextNode(ogg.Anagrafica[i].Sport[1].Sport2 == undefined ? "" : ogg.Anagrafica[i].Sport[1].Sport2));

        var img = document.createElement("td");

        let bottone = document.createElement("img");

        bottone.src = ogg.Anagrafica[i].Immagine === undefined ? "" : ogg.Anagrafica[i].Immagine;

        bottone.classList.add("immagineProfilo")

        bottone.addEventListener("click", function() {

            localStorage.setItem("id", ogg.Anagrafica[i].id);

            console.log("Bottone premuto");

            window.location.href = "Cv.html";
        });

        var rigaBottone = document.createElement("td");
        
        rigaBottone.appendChild(bottone);
        
        colonna.appendChild(rigaBottone);

        colonna.appendChild(rigaNome);

        colonna.appendChild(rigaCognome);

        colonna.appendChild(rigaEta);

        colonna.appendChild(rigaIndirizzo);

        colonna.appendChild(rigaCitta);

        colonna.appendChild(rigaTelefono1);

        colonna.appendChild(rigaTelefono2);

        colonna.appendChild(rigaSport1);

        colonna.appendChild(rigaSport2);

        tabella.appendChild(colonna);
    }

    document.getElementById("stringaJSON").appendChild(tabella);
}
