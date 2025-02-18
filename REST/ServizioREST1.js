async function fetchData() {
   
    let risposta = await fetch("https://wordpress.org/news/wp-json/wp/v2/posts");
    
    let file = await risposta.json();

    let tabella = document.getElementById("Visualizza");

    tabella.innerHTML = "";
    
    file.forEach(post => {

        let righe = document.createElement("tr");
        
        let dato = document.createElement("td");

        dato.textContent = post.date;

        righe.appendChild(dato);
        
        let titolo = document.createElement("td");

        titolo.textContent = post.title.rendered;

        righe.appendChild(titolo);
        
        tabella.appendChild(righe);
    });
}

fetchData();
