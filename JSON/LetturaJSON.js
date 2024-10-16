function caricaDati() {

    var file = new XMLHttpRequest();

    file.open("GET", "https://raw.githubusercontent.com/Mattia-Visentin/mattiavise/refs/heads/main/JSON/Anagrafica.json", true);

    file.send();

    file.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 200) {

            var jsonDoc = JSON.parse(file.responseText);

            mostraInfo(jsonDoc);

            //document.getElementById("stringaJSON").innerHTML = jsonDoc.Nomi[0].Nome;
        }
    }

    document.getElementById("risForm").style.visibility = "visible"
}

function mostraInfo(ogg) {

    for(var n = 0; n < 3; n++) {

        let testo = document.createElement("text");

        testo.classList.add("testoElenco");

        testo.textContent = ogg.Nomi[n].Nome

        document.getElementById("stringaJSON").appendChild(testo);

        document.getElementById("stringaJSON").appendChild(document.createElement("br"));
    }
}