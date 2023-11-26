let dominio = [".com", ".it", ".us", ".de", ".co.uk", ".edu.it", ".net", ".gov", ".fr", ".info"];

let caratteriSpeciali = ["&", "%", "!", "(", ")", "?", "^", "+", "[", "]", ".", ",", "_"];

function controllo() {

    let esito = document.getElementById("esito");
    
    let ris = document.getElementById("testoEsito");

    esito.style.display = "block";

    if(controlloUser() && controlloPassword()) {

        esito.style.backgroundColor = "rgba(0, 172, 0, 0.607)";

        ris.innerHTML = "Accesso consentito";

    } else {

        esito.style.backgroundColor = "rgba(255, 0, 0, 0.585)";

        ris.innerHTML = "Accesso negato";
    }
}

function controlloUser() {

    let username = document.getElementById("user").value;

    if(username.includes('@') && username.indexOf("@") != 0) {

        for(let i = 0; i < username.indexOf("@"); i++) {

            if((username.charCodeAt(i) > 48 && username.charCodeAt(i) < 57) || (username.charCodeAt(i) > 65 && username.charCodeAt(i) <= 122) || username.charCodeAt(i) == 46) {
                
                continue;

            } else {

                alert("Errore: hai insetito un carattere vietato");

                return false;
            }
        }

        let dominioM = username.substring(username.indexOf(".", username.indexOf("@")));

        if(dominio.includes(dominioM) && (username.indexOf("@") - username.indexOf(".", username.indexOf("@"))) != -1) {

            for(let i = username.indexOf("@") + 1; i < username.indexOf(".", username.indexOf("@")); i++) {

                if((username.charCodeAt(i) >= 48 && username.charCodeAt(i) <= 57) || (username.charCodeAt(i) >= 97 && username.charCodeAt(i) <= 122) || username.charCodeAt(i) == 46) {
                
                    continue;
    
                } else {
    
                    alert("Errore: hai insetito un carattere vietato");
    
                    return false;
                }
            }

            return true;

        } else {

            alert("Errore: dominio non riconosciuto");

            return false;
        }
    }

    alert("Utente non valido");
    
    return false;
}

function controlloPassword() {

    let password = document.getElementById("password").value;

    let controlloUp = false;

    let controlloNumero = false;

    let controlloCS = false;

    if(password.length != 0) {

        if(password.length >= 8) {

            for(let i = 0; i < password.length; i++) {

                if((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) || caratteriSpeciali.includes(password.charAt(i))) {

                    if(password.charAt(i) == password.charAt(i).toUpperCase()) {
    
                        controlloUp = true;
                    }
        
                    if(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(password.charAt(i))) {
        
                        controlloNumero = true;
                    }
    
                    if(caratteriSpeciali.includes(password.charAt(i))) {
    
                        controlloCS = true;
                    }

                } else {
                    
                    alert("Hai inserito un carattere non valido");

                    return false;

                }
            }
    
            if(controlloUp) {

                if(!controlloNumero) {

                    alert("La password deve contenere almeno un numero");
    
                    return false;
                }
                
                if(!controlloCS) {

                    alert("La password deve contenere almeno un carattere speciale");
    
                    return false;
                }
    
                return true;
    
            } else {
    
                alert("La password deve contenere almeno un carattere maiuscolo");
    
                return false;
            }
        
        } else {
    
            alert("La password deve contenere almeno 8 caratteri");
    
            return false;
        }

    } else {

        alert("Inserire una password");
    }
}