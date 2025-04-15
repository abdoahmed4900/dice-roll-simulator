
let dices = [
    "&#9856;",
    "&#9857;",
    "&#9858;",
    "&#9859;",
    "&#9860;",
    "&#9861;",
];

let diceHistory = [

];

document.getElementById("dice").innerHTML = dices[0];

function changeDice() {
    let dice = document.getElementById("dice");
    dice.classList.add("rotate-dice");
    dice.addEventListener("animationend", () => {
        dice.classList.remove("rotate-dice");
        let randomNum = Math.floor(Math.random() * 6);
        document.getElementById("dice").innerHTML = dices[randomNum];
        diceHistory.push(
            dices[randomNum]
        );
        let historyItem = document.createElement("div");
        historyItem.classList.add("dice-history-item");
        historyItem.style.marginTop = '20px';
        historyItem.style.marginBottom = '20px';
        historyItem.innerHTML = `
            <h2>Roll ${diceHistory.length} : </h2>
            <span>${dices[randomNum]}</span>
        `;
        document.querySelector(".dice-history").appendChild(
            historyItem
        );
    }, { once: true });
}



