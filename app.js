

////////////////////////////////////// 

//////Player choices ////////////
let choices = ["piedra", "papel", "tijera"];
//let playerSelection = prompt("EL DESTINO DEL UNIVERSO DEPENDE DE TU ELECCION....ELIGE SABIAMENTE O EL MUNDO MORIRA");**viejo.

///////Computer choices/selection function//////// 
let computerSelection = ["piedra", "papel", "tijera"];
let computerChoice = Math.floor(Math.random() * computerSelection.length);

//// Round ////

function playRound(playerSelection,  computerDecision) {
    
    if ((playerSelection.toLowerCase() === choices[0] && computerDecision === choices[2]) || (playerSelection.toLowerCase() === choices[1] && computerDecision === choices[0]) || (playerSelection.toLowerCase() === choices[2] && computerDecision === choices[1]) ) {

        humanScore++
        //console.log(playerSelection);
        //console.log(computerDecision);
        console.log(ganar);
        
    } else if (playerSelection.toLowerCase() === computerSelection[computerChoice]) {

        tieScore++
        //console.log(playerSelection);
        //console.log(computerDecision);
        console.log(empatar);

    } else {

        computerScore++
        //console.log(playerSelection);
        //console.log(computerDecision);
        console.log(perder);

    }

}

///////Total Score/////////
let humanScore=0;
let computerScore=0;
let tieScore=0;

////////results///////
const ganar="TU HAS GANADO! LA HUMANIDAD TENDRA UN FUTURO GRACIAS A TU VALENTIA!!!";
const perder="HAS PERDIDO. LA HUMANIDAD MORIRAAAAAAAA!!!!";
const empatar= "ES UN EMPATE. INTENTA DE NUEVO SI TE ANIMAS...";

//GUERRA
function game() {
    
 for (let i = 0; i <= 4; i++) {

    playerSelection = prompt("EL DESTINO DEL UNIVERSO DEPENDE DE TU ELECCION....ELIGE SABIAMENTE O EL MUNDO MORIRA");
    computerSelection = ["piedra", "papel", "tijera"];
    computerChoice = Math.floor(Math.random() * computerSelection.length);
    computerDecision = computerSelection[computerChoice]
    

    //console.log(score);
    console.log("TU HAS ELEGIDO " + playerSelection.toUpperCase());
    console.log("LA COMPUTADORA HA ELEGIDO " + computerDecision.toUpperCase());
    playRound(playerSelection, computerDecision); 
    
 }

 let score = "HUMANIDAD = " + humanScore + " || MAQUINAS = " + computerScore + " || EMPATES = " + tieScore;

  if (humanScore > computerScore){

    //console.log(score);
     return "EL RESULTADO FINAL ES: [ " + score + "]. HAS GANADO LA GUERRA!!! POR FIN HEMOS DERROTADO A LAS MAQUINAS DEFINITIVAMENTE!!!!!!!";
   
    }
  if (computerScore > humanScore) {
     //console.log(score);
     return "EL RESULTADO FINAL ES: [ " + score + "]. HEMOS PERDIDO LA GUERRA...YA NADA QUEDA EN PIE";
    }
  else {
     //console.log(score);
     return "EL RESULTADO FINAL ES: [ " + score + "]. NINGUN BANDO HA PODIDO SACAR VENTAJA. REAGRUPANDO FUERZAS PARA LA PROXIMA BATALLA";
    }

   
    console.log(score);
}






//console.log("You played this game " + score +" times.\n -------\nGame over.");
//count win lose or tie













 














///////old
//let playerSelection = playerPlay(playerChoice);
//let computerSelection = computerPlay();
//console.log("Esto es lo que eligio la PC: " + computerSelection);
//console.log("Esto es lo que eligio el humano: " + playerSelection);






/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


/// "TU HAS GANADO! " + playerSelection.toUpperCase() + " LE GANA A " + computerSelection.toUpperCase() + ". LA HUMANIDAD TENDRA UN FUTURO GRACIAS A TU VALENTIA!!!"
/// "ES UN EMPATE. TANTO TU COMO LA COMPUTADORA HAN ELEGIDO " + computerSelection.toUpperCase() + ". INTENTA DE NUEVO SI TE ANIMAS..."
/// "LA COMPUTADORA A ELEGIDO " + computerSelection.toUpperCase() + ". HAS PERDIDO. LA HUMANIDAD MORIRAAAAAAAA!!!!"


/////Game. Best of 5 = wins/////
/*
function game() {
    let playerCount = 0;
    let computerCount = 0;
    playRound();

    for (let i = 0; i < 5; i++) {
        if (playRound() === 1) {
            playerCount+1
        } else if (playRound() === -1) {
            computerCount+1
        }
    } 
    if (playerCount > computerCount) {
        return "tu has ganado";
    } else if (playerCount < computerCount) {
        return "tu has perdido"
    }
}*/