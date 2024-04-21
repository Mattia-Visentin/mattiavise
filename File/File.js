function loadFile(input) {

    let pagina = document.getElementById("tabella");

    let tabella = document.createElement("table");

    let file = input.files[0];

    let fileReader = new FileReader();

    fileReader.readAsText(file);

    fileReader.onload = function() {
    
        var str=fileReader.result;

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

        let bottoneG = document.getElementById("btGrafico");

        let img = document.createElement("img");

        img.src = "freccia.svg";

        let bottone = document.createElement("button");

        bottone.appendChild(img);

        bottone.classList.add("bottoneG")

        bottoneG.addEventListener("click", function() {

            let outData = [];

            let titolo = dati[0].split(",");

            for(let i = 1; i < dati.length; i++) {

                let datoG = dati[i].split(",");

                outData.push(parseInt(datoG[1]));
            }

            localStorage.setItem("Dati", outData);

            localStorage.setItem("Titolo", titolo[1]);

            window.location.href = "Grafico.html";
        })

        bottoneG.appendChild(bottone);
    }
}