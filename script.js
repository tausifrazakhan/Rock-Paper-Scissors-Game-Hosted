let userScore = 0;
    let compScore = 0;

    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");
    const userScorePara=document.querySelector("#user-score")
    const compScorePara=document.querySelector("#comp-score")

    const genCompChoice = () => {
      // rock, paper, scissors
      const options = ["rock", "paper", "scissors"];

      //generate computer choice

      const randIdx = Math.round(Math.random() * 2);
      return options[randIdx];

    }

    const drawGame = () => {
      msg.innerText = "Game was Draw. Play Again";
       msg.style.backgroundColor = "#589595"

    }

    const showWinner = (userWin, userChoice, compChoice) => {
      if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
      } else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
      }
    }

    const playGame = (userChoice) => {
    
      const compChoice = genCompChoice();
      

      if (userChoice === compChoice) {
        drawGame();
      } else {
        let userWin = true;
        if (userChoice === "rock") {
          //compChoice will be scissors or paper

          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //compChoice will be scissors or rock

          userWin = compChoice === "scissors" ? false : true;

        } else if (userChoice === "scissors") {
          //compChoice will be rock or paper

          userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
      }

    }


    choices.forEach((choice) => {
      choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
      })
    })

