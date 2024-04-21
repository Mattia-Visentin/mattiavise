var canvas = document.getElementById("canvas");

var grafico = canvas.getContext("2d");

var titolo = document.getElementById("titoloG");

titolo.innerHTML = localStorage.getItem("Titolo");

function disegnaAssi() {

    let baseX = 50;

    let baseY = 390;

    let chartWidth = 700;

    var leftY, rightX;

    leftY = 5;

    rightX = baseX + chartWidth;

    grafico.moveTo(baseX, leftY);

    grafico.lineTo(baseX, baseY);

    grafico.moveTo(baseX, leftY);

    grafico.lineTo(baseX + 5, leftY + 5);

    grafico.moveTo(baseX, leftY);

    grafico.lineTo(baseX - 5, leftY + 5);

    grafico.moveTo(baseX, baseY);

    grafico.lineTo(rightX, baseY);

    grafico.moveTo(rightX, baseY);

    grafico.lineTo(rightX - 5, baseY + 5);

    grafico.moveTo(rightX, baseY);

    grafico.lineTo(rightX - 5, baseY - 5);

    grafico.strokeStyle = "#000";
    
    grafico.stroke();
}

function disegnaPunti(data) {

    var baseX = 50;

    var baseY = 390;

    var distanzaPunti = 700 / (data.length - 1);
    
    grafico.lineWidth = 2;

    for (var i = 0; i < data.length; i++) {

        grafico.beginPath();

        var x = baseX + (distanzaPunti * i);

        var y = baseY - data[i];

        grafico.arc(x, y, 7, 0, Math.PI * 2);

        grafico.fill();

        grafico.closePath();
    }
}

let dati = localStorage.getItem("Dati");

disegnaPunti(dati.split(","));

disegnaAssi();

