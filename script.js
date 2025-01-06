Math.floor(Math.random() * 3) //WHY 3? BECAUSE THAT'S THE length OF THE ARRAY. THERE ARE 3 STRINGS IN THE ARRAY. Math.random() GIVES A RANDOM NUMBER FROM 0 - 1 (MEANING DECIMALS) => #0 - 1 * 3. Then MATH.FLOOR() AROUND IT MAKES IT A WHOLE NUMBER, WHICH WE NEED BECAUSE THERE IS NO DECIMAL INDEX NUMBER TO CHOOSE FROM.

// Another option for line 13:
// const computerChoice = computerOptions[Math.floor(Math.random() * 3)]//WE NEED TO GET THE COMPUTER TO CHOOSE AN OPTION BETWEEN 0-2 (THE INDECES OF THE ABOVE ARRAY! OF COURSE THOSE INDECES MUST BE ADDED TO THE SQUARE BRACKETS.)

//math.floor()ROUNDS NUMBER DOWN
// math.ceil()//ROUNDS NUMBER UP
// math.floor(math.random())//THIS ROUNDS THE NUMBER DOWN


const stats = {
    Wins: 0,
    Losses: 0,
    Ties: 0
}
confirm("You think you can defeat ME?")

let playAgain = true

while (playAgain) {
    const userChoice = prompt("Choose: R, P, or S!")
    const computerOptions = ["R", "P", "S"]
    const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)] //USING COMPUTEROPTIONS.length, THIS MAKES IT EASY TO ADD OR SUBTRACT VALUES FROM THE ARRAY AND NOT HAVE TO CHANGE THE NUMBER (3) EVERY TIME. IT CHANGES DEPENDING ON THE LENGTH OF THE ARRAY.
    if (userChoice === "R" && computerChoice === "S" ||
        userChoice === "P" && computerChoice === "R" ||
        userChoice === "S" && computerChoice === "P") {
        alert("YOU WIN?"); //&#128551
        stats.Wins++

    } else if (userChoice === computerChoice) {
        alert("TIE? IMPOSSIBLE!");//&#128553
        stats.Ties++


    } else {
        alert("YOU LOSE");//&#128541
        stats.Losses++
    }
    playAgain = confirm("Do you dare play again?")
    alert(`STATS
Wins: ${stats.Wins}
Losses: ${stats.Losses}
Ties: ${stats.Ties}`)
}