/*En el juego de casino Blackjack, un jugador puede determinar si tiene una
 ventaja en la siguiente mano sobre la casa llevando la cuenta del número
  relativo de cartas altas y bajas que quedan en la baraja. Esto se llama
   cuenta de tarjetas.

Tener más cartas altas en la baraja es una ventaja para el jugador. 
Se le asigna un valor a cada carta de acuerdo a la siguiente tabla.
Cuando el conteo es positivo, el jugador debería apostar alto.
Cuando el conteo da 0 o negativo, el jugador debería apostar bajo. */

let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

cc(3); cc(7); cc('Q'); cc(8); cc('A');