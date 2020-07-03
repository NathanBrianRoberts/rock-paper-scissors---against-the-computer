let computerChoice = randint(1,3)
let playerChoice = 0

/**
 * You will want to choose either Rock, Paper, or Scissors using button B. You will then have to press
 * 
 * buton A on the Micro Bit to go against the Computer.
 */


input.onButtonPressed(Button.A, function () {
    basic.showString("3 2 1 Go!")
    basic.pause(300)
    if (playerChoice == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (playerChoice == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (playerChoice == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    if (computerChoice == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (computerChoice == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (computerChoice == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    if (playerChoice == computerChoice) {
        basic.showString("draw!")
    } else if (playerChoice == 2, computerChoice == 3) {
        basic.showString("computer Wins")
    } else if (playerChoice == 1, computerChoice == 3) {
        basic.showString("Player Wins")
    } else if (playerChoice == 2, computerChoice == 1) {
        basic.showString("Player Wins!")
    } else if (playerChoice == 3, computerChoice == 1) {
        basic.showString("Player Wins!")
    } else {
        basic.showString("Computer Wins")
    }
    computerChoice = randint(1, 3)
})
input.onButtonPressed(Button.B, function () {
    playerChoice += 1
    if (playerChoice > 3) {
        playerChoice = 1
    }
    if (playerChoice == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (playerChoice == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (playerChoice == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
