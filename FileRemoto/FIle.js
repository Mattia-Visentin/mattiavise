const xhttp = new XMLHttpRequest();

xhttp.open('GET', 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale.csv')

xhttp.onreadystatechange = function() {

    if(xhttp.readyState === 4 && xhttp.status === 200) {
            
        let pagina = document.getElementById("tabella");

        let tabella = document.createElement("table");

        var str=xhttp.response;

        let dati = str.split("\n");

        let dato;

        let righe;

        let testo;

        let colonna;

        for(let i = 0; i < dati.length; i++) {
            
            dato = dati[i].split(",");

            colonna = document.createElement("tr");

            for(let j = 0; j < dato.length; j++) {

                testo = document.createTextNode(dato[j]);

                righe = document.createElement("td");

                righe.classList.add(i == 0 ? "tdTitolo" : "tdGenerali");

                righe.appendChild(testo);

                colonna.appendChild(righe);
            }

            tabella.appendChild(colonna);
        }

        pagina.appendChild(tabella);

    
    }
}

xhttp.send();