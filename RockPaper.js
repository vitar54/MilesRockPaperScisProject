
const options = {
    rock:1,
    paper:2,
    scissors:3
};

    function GetUserText(userEnteredText) {
        let whatUserSelected1 = 1; 
        if (userEnteredText == "rock") {
            whatUserSelected1 = options.rock;
        } else if (userEnteredText == "paper") {
            whatUserSelected1 = options.paper;
        } else if (userEnteredText == "scissors") {
            whatUserSelected1 = options.scissors;
        } else {
            whatUserSelected1 = options.scissors;
        }
        return whatUserSelected1;
    }

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
                if ((userEnteredText != null) && (userEnteredText != "")) {
                    userEnteredText = userEnteredText.toLowerCase();
                    // convert text into number
                    whatUserSelected = GetUserText(userEnteredText);
                }else {
                    whatUserSelected = options.rock;
                }
                // define userEnteredText in case user misspelled entry
                if (whatUserSelected == options.scissors) {
                    userEnteredText = "scissors";
                }
                // generate comp choice - random number from 1 to 3
                let compChoice = Math.floor(Math.random() * (3)) + 1 ;
                // convert computer choice into text
                let compText = getCompText(compChoice);
                
                // save user and computer choices
                lineVar = "Computer: " + compText + " User: " + userEnteredText;
                console.log(lineVar);
            
                textResults += lineVar + "\n";
                // compare
                // if they are the same then Tie
                if (compChoice == whatUserSelected) {
                    numOfDraws++;
                // case rock paper - user wins
                } else if (compChoice == options.rock & whatUserSelected == options.paper) {
                    numOfUserWins++;
                // case rock scissors - user wins
                } else if (compChoice == options.rock & whatUserSelected == options.scissors) {
                    numOfUserWins++;
                // case paper scissors - user wins
                } else if (compChoice == options.paper & whatUserSelected == options.scissors) {
                    numOfUserWins++;
                // case paper rock - Computer wins
                } else if (compChoice == options.paper & whatUserSelected == options.rock) {
                    numOfCompWins++;
                // case scissors rock - Computer wins
                } else if (compChoice == options.scissors & whatUserSelected == options.rock) {
                    numOfCompWins++;
                // case scissors paper - Computer wins
                } else if (compChoice == options.scissors & whatUserSelected == options.paper) {
                    numOfCompWins++;
                }
                gameNumber++;
            }
            
            lineVar = "Games played: " + gameNumber + ". Ties: " + numOfDraws + ". Computer wins: " + numOfCompWins  + ". User wins: " + numOfUserWins;
            console.log(lineVar);
            
            obj.textContent = textResults + lineVar + "\n";
            
        }

    function getCompText(compChoice) {
        let compText1 = "rock";
                if (compChoice == options.paper) {
                    compText1 = "paper";
                } else if (compChoice == options.scissors) {
                    compText1 = "scissors";
                } else {
                    compText1 = "rock";
                }
            return compText1;
    }

