alert("Comienza tu partida!!");
alert ("Elegi tu echizo");


let jugador = prompt("Ingresa 0 para Fuego, 1 para Hielo, 2 para Tierra y 3 para Aire");
let enemigo = Math.round(Math.random()*3); 


if (jugador == 0){
    alert("Elegiste Fuego")
}else if(jugador ==1){
    alert("Elegiste Hielo")
}else if(jugador == 2){
    alert("Elegiste Tierra")
}else if(jugador == 3){
    alert("Elegiste Aire")
}

if (enemigo == 0){
    alert("El contrincante eligio Fuego")
}else if(enemigo ==1){
    alert("El contrincante eligio Hielo")
}else if(enemigo == 2){
    alert("El contrincante eligio Tierra")
}else if(enemigo == 3){
    alert("El contrincante eligio Aire")
}

if (jugador == enemigo){
    alert("EMPATASTE :|")
}else if(jugador == 0 && enemigo == 1){
    alert("Derrotaste a el enemigo con tu echizo de BOLA DE FUEGO")
}else if (jugador == 1 && enemigo == 0){
    alert("Derrotaste a el enemigo con tu echizo de RAFAGA DE HIELO")
}else if (jugador == 3 && enemigo == 2){
    alert("Derrotaste a el enemigo con tu echizo de RAFAGA DE AIRE")
}else if(jugador == 2 && enemigo == 0){
    alert("Derrotaste a el enemigo con tu echizo de RAFAGA DE AIRE")
}else{
    alert("El enemigo te ha vencido :((")
}



