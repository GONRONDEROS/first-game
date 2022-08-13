//Computer choice function 
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        };

        if (getRandomInt(3) === 0) {
            return choices[0];
        } else if (getRandomInt(3) === 1) {
            return choices[1];
        } else {
            return choices[2]
        }
};

let playerChoice = prompt("The fate of the world depends on your choice...choose wisely or you will die!!!!");



