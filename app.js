let userScore=0;
let compScore=0;

const userScorepara = document.getElementById("user-score");
const compScorePara=document.getElementById("Comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText="game was draw!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) =>{
    if(userWin)
    {
        console.log("you win");
        msg.innerText = "you win!";
        userScore++;
        userScorepara.innerText=userScore;
        msg.style.backgroundColor = "green";
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

    }
    else{
        console.log("you lose");
        msg.innerText="you lose";
        compScore++;
        compScorePara.innerText=compScore;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    console.log("userchoice = ",userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("compChoice = ",compChoice)
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock")
        {
            userWin = compChoice == "paper"? false: true;
        }
        else if(userChoice == "paper")
        {
            userWin = compChoice == "scissors" ? false : true;
        }
        else{
            userWin = compChoice == "rock" ? false: true; 
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
})

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorepara.innerText = 0;
    compScorePara.innerText = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
});

