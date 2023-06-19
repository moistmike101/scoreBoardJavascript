let guestScore = 0
document.getElementById("guest-score").textContent = guestScore
let homeScore = 0
document.getElementById("home-score").textContent = homeScore

function hScore1() {
    console.log("Home score 1 ")
    let result = homeScore += 1
    document.getElementById("home-score").textContent = result
}

function hScore2() {
    console.log("Home score 2")
    let result = homeScore += 2
    document.getElementById("home-score").textContent = result
}

function hScore3() {
    console.log("Home score 3")
    let result = homeScore += 3
    document.getElementById("home-score").textContent = result
}

function gScore1() {
    console.log("Guest score 1")
    let result = guestScore += 1
    document.getElementById("guest-score").textContent = result
}

function gScore2() {
    console.log("Guest score 2")
    let result = guestScore += 2
    document.getElementById("guest-score").textContent = result
}

function gScore3() {
    console.log("Guest score 3")
    let result = guestScore += 3
    document.getElementById("guest-score").textContent = result
}

function resetBtn() {
    document.getElementById("home-score").textContent = 0
    document.getElementById("guest-score").textContent = 0
}