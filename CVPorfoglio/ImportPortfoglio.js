caricaFile(localStorage.getItem("indice"));

function caricaFile(indice) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {

        gestisciXML(this);
      
      }
    };

    const nome = "https://raw.githubusercontent.com/Mattia-Visentin/mattiavise/refs/heads/main/CVPorfoglio/" + indice + ".xml"

    xhttp.open("GET", nome, true);

    xhttp.send();
}

function gestisciXML(xml) {

    var xmlDoc = xml.responseXML;

    console.log(xml.responseXML)

    var utente = xmlDoc.getElementsByTagName("Utente");

    const titolo = utente[0].getElementsByTagName("Titolo")[0].childNodes[0].nodeValue;

    const abstract = utente[0].getElementsByTagName("Abstract")[0].childNodes[0].nodeValue;

    const risorsa = utente[0].getElementsByTagName("Link")[0].childNodes[0].nodeValue;

    document.getElementById("outTitolo").innerHTML = titolo;

    document.getElementById("outAbstract").innerHTML = abstract;

    document.getElementById("outRisorsa").innerHTML = risorsa;

  }