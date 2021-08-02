document.querySelector(".both-dice").display = "none";

function generateDice() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);

    var player1 = "images/dice" + randomNumber1.toString() + ".png";

    document.querySelector(".img1").setAttribute("src", player1);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var player2 = "images/dice" + randomNumber2.toString() + ".png";

    document.querySelector(".img2").setAttribute("src", player2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "You Wins!";

        var head = document.createElement("p");
        var val = document.createTextNode("Congrats🎉🎉");
        head.appendChild(val);

        document.getElementsByClassName("heading")[0].appendChild(head);

    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerText = "Computer Wins!";

        var para = document.createElement("p");
        var val2 = document.createTextNode("Better Luck Next Time");
        para.appendChild(val2);

        document.getElementsByClassName("heading")[0].appendChild(para);

    } else {
        document.querySelector("h1").innerText = "Draw!";
    }
}

function letsPlay() {
    document.querySelector(".game").style.visibility = "visible";
    document.querySelector("#btn").style.display = "none";
    document.querySelector(".rules").style.display = "none";
    document.querySelector(".both-dice").style.display = "none";
}

function show() {
    document.querySelector(".both-dice").style.display = "block";
    document.querySelector(".details").style.display = "none";
}
