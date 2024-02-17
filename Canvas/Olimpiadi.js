let lavagna = document.getElementById("lavagna");

let context = lavagna.getContext("2d");

let colori = ["#0079C4", "#000000", "#EC213E", "#FCAB21", "#00A046"];

for(let i = 0; i < 3; i++) {

    context.beginPath();

    context.arc(255 + (240 * i), 150, 100, 0, 2 * Math.PI);

    context.lineWidth = 20;

    context.strokeStyle = colori[i];

    context.stroke();

    context.closePath();
}

for(let i = 0; i < 2; i++) {

    context.beginPath();

    context.strokeStyle = colori[i + 3];

    context.lineWidth = 20;

    context.arc(375 + (240 * i), 250, 100, 0, 2 * Math.PI);

    context.stroke();

    context.closePath();
}

for(let i = 0; i < 2; i++) {

    context.beginPath();

    context.arc(255 + (240 * i), 150, 100, 5, 2 * Math.PI + 1);

    context.lineWidth = 20;

    context.strokeStyle = colori[i];

    context.stroke();

    context.closePath();
}

for(let i = 1; i < 3; i++) {

    context.beginPath();

    context.arc(255 + (240 * i), 150, 100, 7.9, 2 * Math.PI + 2.7);

    context.lineWidth = 20;

    context.strokeStyle = colori[i];

    context.stroke();

    context.closePath();
}