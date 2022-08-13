///////Computer choice function//////// 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

let choices = ["piedra", "papel", "tijera"];

function getComputerChoice(max) {

        if (getRandomInt(max) === 0) {
            return choices[0];
        } else if (getRandomInt(max) === 1) {
            return choices[1];
        } else {
            return choices[2]
        }
};
////////////////////////////////////// 

//////Player function + game
let playerSelection = prompt("EL DESTINO DEL UNIVERSO DEPENDE DE TU ELECCION....ELIGE SABIAMENTE O EL MUNDO MORIRA").toLowerCase();
let computerSelection = getComputerChoice(3).toLowerCase();

function playRound(playerSelection, computerSelection) {

    if ((playerSelection === choices[0] && computerSelection === choices[2]) || (playerSelection === choices[1] && computerSelection === choices[0]) || (playerSelection === choices[2] && computerSelection === choices[1]) ) {

        return "TU HAS GANADO! " + playerSelection.toUpperCase() + " LE GANA A " + computerSelection.toUpperCase() + ". LA HUMANIDAD TENDRA UN FUTURO GRACIAS A TU VALENTIA!!!";

    } else if (playerSelection === computerSelection) {

        return "ES UN EMPATE. TANTO TU COMO LA COMPUTADORA HAN ELEGIDO " + computerSelection.toUpperCase() + ". INTENTA DE NUEVO SI TE ANIMAS...";

    } else {

        return "LA COMPUTADORA A ELEGIDO " + computerSelection.toUpperCase() + ". HAS PERDIDO. LA HUMANIDAD MORIRAAAAAAAA!!!!";
    }
}

