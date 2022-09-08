
///////Total Score/////////
let humanScore=0;
let computerScore=0;
let tieScore=0;

////////results///////
const ganar="***HAS GANADO ESTA BATALLA! AUN FALTA PARA GANAR LA GUERRA, PERO SIGUE ASI Y LA HUMANIDAD TENDRA OTRO DIA PARA VIVIR***";
const perder="***HAS PERDIDO ESTA BATALLA. LA HUMANIDAD MORIRAAAAAAAA!!!!***";
const empatar= "***ES UN EMPATE. INTENTA DE NUEVO SI TE ANIMAS...***";

/////Choices/////
let choices = ["piedra", "papel", "tijera"];

////Computer Play////
function computerPlay(){
    let choices = ["piedra", "papel", "tijera"];
    computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
};

/////buttons/////
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissor');
const outcomeDiv = document.querySelector('.outcome');
const resultDiv = document.querySelector('.results');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

//// Round ////

function playRound(playerSelection,  computerDecision) {

    if ((playerSelection === choices[0] && computerDecision === choices[2]) || (playerSelection === choices[1] && computerDecision === choices[0]) || (playerSelection === choices[2] && computerDecision === choices[1]) ) {

        humanScore++
        //let score = "HUMANIDAD = " + humanScore + " || MAQUINAS = " + computerScore + " || EMPATES = " + tieScore;
        // console.log("TU HAS ELEGIDO " + playerSelection.toUpperCase());
        // console.log("LA COMPUTADORA HA ELEGIDO " + computerDecision.toUpperCase());
        const p = document.createElement('p');
        p.innerText = `HAS ELEGIDO ${playerSelection.toUpperCase()} Y LA COMPUTADORA ${computerDecision.toUpperCase()}\n` + ganar;
        outcomeDiv.appendChild(p);
        //console.log(score);
        
    } else if (playerSelection === computerDecision) {

        tieScore++
        // let score = "HUMANIDAD = " + humanScore + " || MAQUINAS = " + computerScore + " || EMPATES = " + tieScore;
        // console.log("TU HAS ELEGIDO " + playerSelection.toUpperCase());
        // console.log("LA COMPUTADORA HA ELEGIDO " + computerDecision.toUpperCase());
        const p = document.createElement('p');
        p.innerText = `HAS ELEGIDO ${playerSelection.toUpperCase()} Y LA COMPUTADORA ${computerDecision.toUpperCase()}\n` + empatar;
        outcomeDiv.appendChild(p)
        //console.log(score);

    } else {

        computerScore++
        // let score = "HUMANIDAD = " + humanScore + " || MAQUINAS = " + computerScore + " || EMPATES = " + tieScore;
        // console.log("TU HAS ELEGIDO " + playerSelection.toUpperCase());
        // console.log("LA COMPUTADORA HA ELEGIDO " + computerDecision.toUpperCase());
        const p = document.createElement('p')
        p.innerText = `HAS ELEGIDO ${playerSelection.toUpperCase()} Y LA COMPUTADORA ${computerDecision.toUpperCase()}\n` + perder;
        outcomeDiv.appendChild(p)
        // console.log(score);

    }

};

const updateScore = (humanScore, computerScore) => {
    playerScoreSpan.innerText = `Humanidad: ${humanScore}  `;
    computerScoreSpan.innerText = `Maquinas: ${computerScore}`;
};

const checkWinner = (humanScore, computerScore) => {
    if (humanScore === 5){
        const h2 = document.createElement('h2');
        h2.innerText = `HAS GANADO LA GUERRA ${humanScore} a ${computerScore}!!! POR FIN HEMOS DERROTADO A LAS MAQUINAS!!!!!!!`;;
        resultDiv.appendChild(h2);

    }
    if (computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `HEMOS PERDIDO LA GUERRA ${computerScore} a ${humanScore}...YA NADA QUEDA EN PIE`;
        resultDiv.appendChild(h2);
    }
};

rockButton.addEventListener('click', () => {
    const computerDecision = computerPlay();
    const playerSelection = choices[0];
    playRound(playerSelection, computerDecision);
    updateScore(humanScore, computerScore);
    checkWinner(humanScore, computerScore);

});

paperButton.addEventListener('click', () => {
    const computerDecision = computerPlay();
    const playerSelection = choices[1];
    playRound(playerSelection, computerDecision);
    updateScore(humanScore, computerScore);
    checkWinner(humanScore, computerScore);

});

scissorsButton.addEventListener('click', () => {
    const computerDecision = computerPlay();
    const playerSelection = choices[2];
    playRound(playerSelection, computerDecision);
    updateScore(humanScore, computerScore);
    checkWinner(humanScore, computerScore);

});
