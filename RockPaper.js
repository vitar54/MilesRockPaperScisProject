
const options = {
    rock:1,
    paper:2,
    scissors:3
};

        function getGameResults() {
            
            let gameNumber = 0;
            let numOfCompWins = 0; 
            let numOfUserWins = 0;
            let numOfDraws = 0;  
            let obj = document.getElementById("areaResults");
            let textResults = "";
            let lineVar = "";
            //ask user to choose number of games
            let numOfGames = 5; // initialize
            numOfGames = prompt("Please enter Number of Games to Play", 7);
            // 1 - Rock
            // 2 - Paper
            // 3 - Scissors
            while (gameNumber < numOfGames) {
                lineVar = "Games played: " + gameNumber + ". Ties: " + numOfDraws + ". Computer wins: " + numOfCompWins  + ". User wins: " + numOfUserWins;
                console.log(lineVar);
                textResults += lineVar + "\n";
                let whatUserSelected = options.rock;
                // ask user to choose. put results in whatUserSelected
                let userEnteredText = "rock";
                userEnteredText = prompt("Please select Rock, Paper or Scissors", "Rock");
                // convert text into number
                if ((userEnteredText != null) && (userEnteredText != "")) {
                    userEnteredText = userEnteredText.toLowerCase();
                    if (userEnteredText == "rock") {
                        whatUserSelected = options.rock;
                    } else if (userEnteredText == "paper") {
                        whatUserSelected = options.paper;
                    } else if (userEnteredText == "scissors") {
                        whatUserSelected = options.scissors;
                    } else {
                        whatUserSelected = options.scissors;
                        userEnteredText = "scissors";
                    }
                } else {
                    whatUserSelected = options.rock;
                }
                // generate comp choice - random number from 1 to 3
                let compChoice = Math.floor(Math.random() * (3)) + 1 ;
                // convert computer choice into text
                let compText = "rock";
                if (compChoice == options.paper) {
                    compText = "paper";
                } else if (compChoice == options.scissors) {
                    compText = "scissors";
                } else {
                    compText = "rock";
                }
                lineVar = "Computer: " + compText + " User: " + userEnteredText;
                console.log(lineVar);
            
                textResults += lineVar + "\n";
                // if they are the same then Tie
                if (compChoice == whatUserSelected) {
                    numOfDraws++;
                } else if (compChoice == options.rock & whatUserSelected == options.paper) {
                    numOfUserWins++;
                } else if (compChoice == options.rock & whatUserSelected == options.scissors) {
                    numOfUserWins++;
                } else if (compChoice == options.paper & whatUserSelected == options.scissors) {
                    numOfUserWins++;
                } else if (compChoice == options.paper & whatUserSelected == options.rock) {
                    numOfCompWins++;
                } else if (compChoice == options.scissors & whatUserSelected == options.rock) {
                    numOfCompWins++;
                } else if (compChoice == options.scissors & whatUserSelected == options.paper) {
                    numOfCompWins++;
                }
                gameNumber++;
            }
            
            lineVar = "Games played: " + gameNumber + ". Ties: " + numOfDraws + ". Computer wins: " + numOfCompWins  + ". User wins: " + numOfUserWins;
            console.log(lineVar);
            
            obj.textContent = textResults + lineVar + "\n";
            
        }

