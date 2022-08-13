//Computer choice function 
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
// 

//Player function + game
//The fate of the world depends on your choice...choose wisely or you will die!!!!
let playerChoice = prompt("EL DESTINO DEL UNIVERSO DEPENDE DE TU ELECCION....ELIGE SABIAMENTE O EL MUNDO MORIRA");
let computerChoice = getComputerChoice(3);

function game(playerChoice, computerChoice) {

    if (playerChoice.toLowerCase() === choices[0] && computerChoice.toLowerCase() === choices[2]) {
        return "TU HAS GANADO! " + playerChoice + " LE GANA A " + computerChoice + ". LA HUMANIDAD TENDRA UN FUTURO GRACIAS A TU VALENTIA!!!";
    } else if (playerChoice.toLowerCase() === choices[1] && computerChoice.toLowerCase() === choices[0]) {
        return "TU HAS GANADO! " + playerChoice + " LE GANA A " + computerChoice + ". LA HUMANIDAD TENDRA UN FUTURO GRACIAS A TU VALENTIA!!!";
    } else if (playerChoice.toLowerCase() === choices[2] && computerChoice.toLowerCase() === choices[1]) {
        return "TU HAS GANADO! " + playerChoice + " LE GANA A " + computerChoice + ". LA HUMANIDAD TENDRA UN FUTURO GRACIAS A TU VALENTIA!!!"; 
    } else if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
        return "ES UN EMPATE. TANTO TU COMO LA COMPUTADORA HAN ELEGIDO " + computerChoice + ". INTENTA DE NUEVO SI TE ANIMAS..."
    } else {
        return "LA COMPUTADORA A ELEGIDO " + computerChoice + ". HAS PERDIDO. LA HUMANIDAD MORIRAAAAAAAA!!!!"
    }

}

