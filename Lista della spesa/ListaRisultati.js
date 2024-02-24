let elementi = [];

let memoria = localStorage.getItem("lista");

let memoriaArr = memoria.split(",");

for(let i = 0; i < memoriaArr.length; i++) {

    rimuovi(memoriaArr[i]);
}

function rimuovi(articolo) {

    document.getElementById("fom2").style.display = "block";

    var out = document.createElement("div");

    out.classList.add("out3");
    
    if(articolo != ""){

        let imgButton = document.createElement("text");

        imgButton.textContent = "-"

        let buttonElement = document.createElement("button");

        buttonElement.appendChild(imgButton);

        buttonElement.classList.add("buttoneElimina");

        out.appendChild(buttonElement);

        elementi.push(articolo);

        let lista = document.createElement("text");

        lista.textContent = articolo;

        lista.classList.add("listaElemento");

        out.appendChild(lista);

        document.getElementById("risultati").appendChild(out);

        buttonElement.addEventListener("click", function() {

            const index = elementi.indexOf(lista);
    
            elementi.splice(index, 1);

            document.getElementById("risultati").removeChild(out);
        });

    } else {

        window.alert("Errore: inserire un elemento");
    }

}