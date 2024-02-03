let matriceOrdini = [];
let nomi = [];

function cambia() {

    let ordine = document.getElementById("testo").value;

    let ordini = ordine.slice(ordine.indexOf(":") + 1);

    let nome = ordine.substring(0, ordine.indexOf(":") + 1);

    ordini += ";";

    matriceOrdini.push(ordini);

    nomi.push(nome);

    document.getElementById("testo").value = "";
}

function stampa() {

    localStorage.setItem("mat", matriceOrdini);

    localStorage.setItem("nomi", nomi);

    window.location.href = "Out.html";
}

