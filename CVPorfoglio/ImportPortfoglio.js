caricaDatiCV();

function caricaDatiCV() {

    var file = new XMLHttpRequest();

    let nameFile = "http://localhost/fileLocali/1.xml";
    
    file.open("GET", nameFile, true);
    
    file.send();
    
    file.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            
            mostraInfoCV(this);
        }
    };

}

function mostraInfoCV(Doc) {

    var xmlDoc = Doc.responseText;

    document.getElementById("contenutoCV").innerHTML = xmlDoc.getElementByTagName("Abstract")[0].textContent;
}   
