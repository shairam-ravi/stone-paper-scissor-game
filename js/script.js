var options = ["far fa-hand-rock fa-3x", "far fa-hand-paper fa-3x", "far fa-hand-scissors fa-3x"];
var values = ["rock", "paper", "scissor"];

function changeToRegular(elementId) {
    if(elementId.id == "rock")
        elementId.children[0].className = options[0];
    else if(elementId.id == "paper")
        elementId.children[0].className = options[1];
    else 
        elementId.children[0].className = options[2];

    // var userScore = document.getElementById('userScore');
    
    // userScore.innerHTML = Math.floor(Math.random() * 10) % 3;
}

function changeToSolid(elementId) {
    if(elementId.id == "rock")
        elementId.children[0].className = "fas fa-hand-rock fa-3x";
    else if(elementId.id == "paper")
        elementId.children[0].className = "fas fa-hand-paper fa-3x";
    else
        elementId.children[0].className = "fas fa-hand-scissors fa-3x";
}

function hide() {
    document.getElementById('userChoice').style.visibility = "hidden";
    document.getElementById('computerChoice').style.visibility = "hidden";

    document.getElementById('userState').style.visibility = "hidden";
    document.getElementById('compState').style.visibility = "hidden";
}

function whoWins(elementId) {
    var userChoice = document.getElementById('userChoice');
    var computerChoice = document.getElementById('computerChoice');

    var compIndex = Math.floor(Math.random() * 10) % 3;

    var userScore = document.getElementById('userScore');
    var compScore = document.getElementById('computerScore');

    var userState = document.getElementById('userState');
    var compState = document.getElementById('compState');

    userChoice.children[0].className = options[values.indexOf(elementId.id)];
    computerChoice.children[0].className = options[compIndex];

    userChoice.style.visibility = "visible";
    computerChoice.style.visibility = "visible";

    userState.style.visibility = "visible";
    compState.style.visibility = "visible";

    if( (elementId.id == "rock" && values[compIndex] == "scissor") || 
        (elementId.id == "scissor" && values[compIndex] == "paper") ||
        (elementId.id == "paper" && values[compIndex] == "rock")
        ) {
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
        userChoice.style.borderColor = "#53ff1a";
        computerChoice.style.borderColor = "#ff1a1a";

        userState.innerHTML = "Win";
        userState.style.color = "#53ff1a";

        compState.innerHTML = "Loss";
        compState.style.color = "#ff1a1a";

    }
    else if( (elementId.id == "scissor" && values[compIndex] == "rock") || 
             (elementId.id == "paper" && values[compIndex] == "scissor") ||
             (elementId.id == "rock" && values[compIndex] == "paper")
    ) {
        compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
        userChoice.style.borderColor = "#ff1a1a";
        computerChoice.style.borderColor = "#53ff1a";

        userState.innerHTML = "Loss";
        userState.style.color = "#ff1a1a";

        compState.innerHTML = "Win";
        compState.style.color = "#53ff1a";
    }
    else {
        userChoice.style.borderColor = "#cccccc";
        computerChoice.style.borderColor = "#cccccc";

        userState.innerHTML = "Draw";
        userState.style.color = "#cccccc";

        compState.innerHTML = "Draw";
        compState.style.color = "#cccccc";
    }

    setTimeout(hide, 1500);
}