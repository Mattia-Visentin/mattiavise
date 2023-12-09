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

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (pattern.test(username)) {

      return true;

    } else {

      return false;
    }
}

function controlloPassword() {

    let password = document.getElementById("password").value;

    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

    if (pattern.test(password)) {

       return true;

    } else {

        return false;
    }
}