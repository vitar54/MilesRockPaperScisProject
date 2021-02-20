

        function getGameResults() {
            
            let gameNumber = 0;
            let numOfCompWins = 0; 
            let numOfUserWins = 0;
            let numOfDraws = 0;  
            let obj = document.getElementById("areaResults");
            obj.textContent = "Game started";
            let numOfGames = 5;
            let textResults = "";
            //ask user to choose number of games
            numOfGames = prompt("Please enter Number of Games to Play", 7);
            // 1 - Rock
            // 2 - Paper
            // 3 - Scissors
            while (gameNumber < numOfGames) {
                console.log("Games played: " + gameNumber + " Ties: " + numOfDraws + " Computer wins: " + numOfCompWins  + " User wins: " + numOfUserWins );
                textResults += "\nGames played: " + gameNumber + ". Ties: " + numOfDraws + ". Computer wins: " + numOfCompWins  + ". User wins: " + numOfUserWins;
                let whatUserSelected = 1;
                // ask user to choose. put results in whatUserSelected
                let userEnteredText = "rock";
                userEnteredText = prompt("Please select Rock, Paper or Scissors", "Rock");
                // convert text into number
                if ((userEnteredText != null) && (userEnteredText != "")) {
                    userEnteredText = userEnteredText.toLowerCase();
                    if (userEnteredText == "rock") {
                        whatUserSelected = 1;
                    } else if (userEnteredText == "paper") {
                        whatUserSelected = 2;
                    } else if (userEnteredText == "scissors") {
                        whatUserSelected = 3;
                    } else {
                        whatUserSelected = 3;
                        userEnteredText = "scissors";
                    }
                } else {
                    whatUserSelected = 1;
                }
                // generate comp choice - random number from 1 to 3
                let compChoice = Math.floor(Math.random() * (3)) + 1 ;
                let compText = "rock";
                if (compChoice == 2) {
                    compText = "paper";
                } else if (compChoice == 3) {
                    compText = "scissors";
                } else {
                    compText = "rock";
                }
                console.log("Computer: " + compText + " User: " + userEnteredText);
                textResults += "\nComputer: " + compText + ". User: " + userEnteredText;
                // if they are the same then Tie
                if (compChoice == whatUserSelected) {
                    numOfDraws++;
                } else if (compChoice == 1 & whatUserSelected == 2) {
                    numOfUserWins++;
                } else if (compChoice == 1 & whatUserSelected == 3) {
                    numOfUserWins++;
                } else if (compChoice == 2 & whatUserSelected == 3) {
                    numOfUserWins++;
                } else if (compChoice == 2 & whatUserSelected == 1) {
                    numOfCompWins++;
                } else if (compChoice == 3 & whatUserSelected == 1) {
                    numOfCompWins++;
                } else if (compChoice == 3 & whatUserSelected == 2) {
                    numOfCompWins++;
                }
                gameNumber++;
            }
            
            console.log("Games played: " + gameNumber + " Ties: " + numOfDraws + " Computer wins: " + numOfCompWins  + " User wins: " + numOfUserWins );
            
            obj.textContent = textResults + "\nGames played: " + gameNumber + ". Ties: " + numOfDraws + ". Computer wins: " + numOfCompWins  + ". User wins: " + numOfUserWins;
            
        }

