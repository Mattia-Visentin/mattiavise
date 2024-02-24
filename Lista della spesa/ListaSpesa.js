let elementi = [];

var out = document.createElement("div");

let lista = document.createElement("input")

lista.classList.add("inputTesto");

out.appendChild(lista);

let imgButton = document.createElement("text");

imgButton.textContent = "Aggiungi"

let buttonElement = document.createElement("button");

buttonElement.appendChild(imgButton);

buttonElement.classList.add("bottone2");

out.appendChild(buttonElement);

document.getElementById("risultati").appendChild(out);

    buttonElement.addEventListener("click", function() {

        if(lista.value != "") {

            elementi.push(lista.value);
    
            buttonElement.disabled = true;

        } else {

            document.getElementById("risultati").removeChild(out);

            alert("Errore: inserire un articolo");
        }

    aggiungi()

});

function aggiungi() {

    var out = document.createElement("div");

    let lista = document.createElement("input")

    lista.classList.add("inputTesto");

    out.appendChild(lista);

    let imgButton = document.createElement("text");

    imgButton.textContent = "Aggiungi"

    let buttonElement = document.createElement("button");

    buttonElement.appendChild(imgButton);

    buttonElement.classList.add("bottone2");

    out.appendChild(buttonElement);

    document.getElementById("risultati").appendChild(out);

    buttonElement.addEventListener("click", function() {

        if(lista.value != "") {

            elementi.push(lista.value);

            buttonElement.disabled = true;

        } else {

            document.getElementById("risultati").removeChild(out);

            alert("Errore: inserire un articolo");
        }

        aggiungi()

    });

}

function invia() {

    localStorage.setItem("lista", elementi);

    window.location.href = "Risultati.html";
}