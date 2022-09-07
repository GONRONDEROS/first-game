/////Choices/////
let choices = ["piedra", "papel", "tijera"];

///////Total Score/////////
let humanScore=0;
let computerScore=0;
let tieScore=0;

////////results///////
const ganar="***HAS GANADO ESTA BATALLA! AUN FALTA PARA GANAR LA GUERRA, PERO SIGUE ASI Y LA HUMANIDAD TENDRA OTRO DIA PARA VIVIR***";
const perder="***HAS PERDIDO ESTA BATALLA. LA HUMANIDAD MORIRAAAAAAAA!!!!***";
const empatar= "***ES UN EMPATE. INTENTA DE NUEVO SI TE ANIMAS...***";

//// Round ////

function playRound(playerSelection,  computerDecision) {

    if ((playerSelection.toLowerCase() === choices[0] && computerDecision === choices[2]) || (playerSelection.toLowerCase() === choices[1] && computerDecision === choices[0]) || (playerSelection.toLowerCase() === choices[2] && computerDecision === choices[1]) ) {

        humanScore++
        let score = "HUMANIDAD = " + humanScore + " || MAQUINAS = " + computerScore + " || EMPATES = " + tieScore;
        console.log("TU HAS ELEGIDO " + playerSelection.toUpperCase());
        console.log("LA COMPUTADORA HA ELEGIDO " + computerDecision.toUpperCase());
        console.log(ganar);
        console.log(score);
        
    } else if (playerSelection.toLowerCase() === computerSelection[computerChoice]) {

        tieScore++
        let score = "HUMANIDAD = " + humanScore + " || MAQUINAS = " + computerScore + " || EMPATES = " + tieScore;
        console.log("TU HAS ELEGIDO " + playerSelection.toUpperCase());
        console.log("LA COMPUTADORA HA ELEGIDO " + computerDecision.toUpperCase());
        console.log(empatar);
        console.log(score);

    } else {

        computerScore++
        let score = "HUMANIDAD = " + humanScore + " || MAQUINAS = " + computerScore + " || EMPATES = " + tieScore;
        console.log("TU HAS ELEGIDO " + playerSelection.toUpperCase());
        console.log("LA COMPUTADORA HA ELEGIDO " + computerDecision.toUpperCase());
        console.log(perder);
        console.log(score);

    }

};

//GUERRA
function game() {
    
 for (let i = 0; i <= 4; i++) {

    playerSelection = prompt("EL DESTINO DEL UNIVERSO DEPENDE DE TU ELECCION....ELIGE SABIAMENTE O EL MUNDO MORIRA");
    computerSelection = ["piedra", "papel", "tijera"];
    computerChoice = Math.floor(Math.random() * computerSelection.length);
    computerDecision = computerSelection[computerChoice];
    
    playRound(playerSelection, computerDecision); 
          
 };
 
    if (humanScore > computerScore){
        return "HAS GANADO LA GUERRA!!! POR FIN HEMOS DERROTADO A LAS MAQUINAS DEFINITIVAMENTE!!!!!!!";
    }
    if (computerScore > humanScore) {
     return "HEMOS PERDIDO LA GUERRA...YA NADA QUEDA EN PIE";
    }
    else {
     return "NINGUN BANDO HA PODIDO SACAR VENTAJA. REAGRUPANDO FUERZAS PARA LA PROXIMA BATALLA";
    }
}