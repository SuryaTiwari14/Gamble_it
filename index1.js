function dice1(){
    var randomNumber = Math.random()
    randomNumber = randomNumber*6 
    randomNumber = Math.floor(randomNumber) + 1
return randomNumber
}
function dice2(){
    var randomNumber = Math.random()
    randomNumber = randomNumber*6 
    randomNumber = Math.floor(randomNumber) + 1
return randomNumber
}

function companerDice(dice1,dice2){
    if(dice1 > dice2 ){
        document.querySelector("#presenter").innerHTML ="Surya WINS"
    }
    else if(dice1<dice2){
        document.querySelector("#presenter").innerHTML ="YOU WINS"

    }
    else{
        document.querySelector("#presenter").innerHTML ="DRAW"

    }
}

function diceImg1(dice) {
    if (dice == 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    } else if (dice == 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    } else if (dice == 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    } else if (dice == 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    } else if (dice == 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    } else {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }
}

function diceImg2(dice) {
    if (dice == 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    } else if (dice == 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    } else if (dice == 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    } else if (dice == 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    } else if (dice == 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    } else {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
}




var dice1 = dice1()
var dice2 = dice2()
diceImg1(dice1)
diceImg2(dice2)

companerDice(dice1,dice2)
console.log(dice1 +" "+dice2 )