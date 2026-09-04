let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let message = ""
let hasBlackJack = false
let isAlive = true

if (sum < 21) {
    message = "want New card?"
} else if (sum === 21) {
    message = "You got Blackjack"
    hasBlackJack = true
} else {
    message = "You lost!"
    isAlive = false
}


console.log(message)