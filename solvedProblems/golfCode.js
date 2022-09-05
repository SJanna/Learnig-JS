/*Código de golf
En el juego de Golf, cada agujero tiene un par, que significa, 
el número promedio de strokes que se espera que haga un golfista 
para hundir la pelota en el agujero para completar el juego. 
Dependiendo de qué tan por encima o por debajo del par estén tus 
strokes, hay un nombre diferente.

Tu función recibirá los argumentos par y strokes. Devuelve la cadena 
correcta según esta tabla que muestra los golpes en orden de prioridad;
 superior (más alto) a inferior (más bajo):*/
const names = ["Hole-in-one!", "Eagle",
    "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return "Hole-in-one!"
    } else if (strokes <= par - 2) {
        return "Eagle"
    } else if (strokes == par - 1) {
        return "Birdie"
    } else if (strokes == par) {
        return "Par"
    } else if (strokes == par + 1) {
        return "Bogey"
    } else if (strokes == par + 2) {
        return "Double Bogey"
    } else if (strokes >= par + 3) {
        return "Go Home!"
    }
}
golfScore(5, 4);