var icons = {
    "rock" : ["far fa-hand-rock fa-3x", "fas fa-hand-rock fa-3x"],
    "paper" : ["far fa-hand-paper fa-3x", "fas fa-hand-paper fa-3x"],
    "scissor" : ["far fa-hand-scissors fa-3x", "fas fa-hand-scissors fa-3x"]
}
var objectVsRank = {
	rock: 0,
	paper: 1,
	scissor: 2
}
var objectLen = Object.keys(objectVsRank).length;
var keys = Object.keys(icons);
var userChoice, computerChoice, userScore, compScore, userState, compState;

function init() {
    userChoice = document.getElementById('userChoice');
    computerChoice = document.getElementById('computerChoice');
    userScore = document.getElementById('userScore');
    compScore = document.getElementById('computerScore');
    userState = document.getElementById('userState');
    compState = document.getElementById('compState');
}

function changeIcon(elementId, key) {
    elementId.children[0].className = icons[elementId.id][key];
}
function hide() {
    userChoice.style.visibility = computerChoice.style.visibility = userState.style.visibility = compState.style.visibility = "hidden";
}

var compare = function(computer, user) {
    var objectLen = Object.keys(objectVsRank).length;
	if (objectVsRank[computer] === objectVsRank[user]) {
		return "draw";
	} else if (((objectVsRank[computer] + 1) % objectLen) === objectVsRank[user]) {
		return "win";
	} else {
		return "loss";
	}
}

function whoWins(elementId) {
    let choice = keys[Math.floor(Math.random() * 10) % objectLen];
    userChoice.children[0].className = icons[elementId.id]['regular'];
    computerChoice.children[0].className = icons[choice]['regular'];

    userChoice.style.visibility = computerChoice.style.visibility = userState.style.visibility = compState.style.visibility = "visible";
    let check = compare(elementId.id, choice)
    if( check == "win" ) {
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
        userChoice.style.borderColor = userState.style.color = "#53ff1a";
        computerChoice.style.borderColor = compState.style.color = "#ff1a1a";
        userState.innerHTML = "Win";
        compState.innerHTML = "Loss";
    }
    else if( check == "loss" ) {
        compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
        userChoice.style.borderColor = userState.style.color = "#ff1a1a";
        computerChoice.style.borderColor = compState.style.color = "#53ff1a";
        userState.innerHTML = "Loss";
        compState.innerHTML = "Win";
    }
    else {
        userChoice.style.borderColor = computerChoice.style.borderColor = userState.style.color = compState.style.color = "#cccccc";
        userState.innerHTML = compState.innerHTML = "Draw";
    }
    setTimeout(hide, 1500);
}
