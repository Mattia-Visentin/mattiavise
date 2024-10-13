function caricaDati() {

    var file = new XMLHttpRequest();

    file.open("GET", "Anagrafica.json", true);

    file.send();

    file.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 200) {

            var jsonDoc = JSON.parse(file.responseText);

            document.getElementById("stringaJSON").innerHTML = jsonDoc.nomi[0];
        }
    }
}