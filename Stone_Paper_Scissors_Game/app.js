let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);  // 3 sai esiliye multiply kiya kyoki hume 0 sai 2 tak ka index chahiye tha;
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.")
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose")
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame= (userChoice) => {
    console.log("user choice= ", userChoice);  // printing user choice;
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);  // printing comp choice;

    if(userChoice === compChoice)
    {
        // draw game
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === rock)
        {
            // ab comp rock to select nahi kar sakta, varna draw ho jata upar; to scissors ya paper mai sai e select karega;
            userWin = compChoice ===paper ? false: true;
        }
        else if(userChoice === paper)
        {
            // rock, scissors
            userWin = compChoice === "scissors" ? false: true;  // ternary operator
        }
        else  // if choice is scissors
        {
            userWin = compChoice == "rock" ? false: true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

};

// yeah function dekhega ki konsi choice select hui hai;
choices.forEach((choice)  => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});