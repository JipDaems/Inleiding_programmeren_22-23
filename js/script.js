
// sound variables
let bananaSound = new Audio('audio/banana.mp3')
let barrelSound = new Audio('audio/jumping-over-a-barrel.mp3')
let winningSound = new Audio('audio/winning-sound.mp3')
let gameOverSound = new Audio('audio/game-over.mp3')

//variables for the game
let nameInput = document.getElementById('nameInput')
let gameStatus = document.getElementById('gameStatus')
let startGameButton = document.getElementById('startGame')
let playerName = document.getElementById('playerName')
let progressBarBanana = document.getElementById('bananaProgressBar')
let progressBarBarrel = document.getElementById('barrelProgressBar')
let bananaButton = document.getElementById("banana")
let barrelButton = document.getElementById("barrel")
let isGameStarted = false
let step
let diddyKong = document.getElementById('diddyKong')
let diddyLevel

let nameMonkey = document.getElementById('nameMonkey');
let randomNameArray = Array("Diddy Kong", "Donkey Kong", 'Monkey Kong', 'Monkey Jobbe','Monkey Mobbe', "Aapje");


//om het spel te beginnen
startGameButton.addEventListener("click", function () {
    if (nameInput.value !== "") {
        playerName.innerHTML = nameInput.value
        isGameStarted = true

        //standard values for starting game
        diddyKong.src = "../Inleiding_programmeren_22-23/img/diddykong.png"
        progressBarBanana.value = 0
        progressBarBarrel.value = 0
        diddyLevel = 1
        step = 10
        gameStatus.innerHTML = "Spel is begonnen"

        if(isGameStarted){
            // pick a random name from the array
            let randomName = randomNameArray[Math.floor(Math.random()*randomNameArray.length)];
            console.log(randomName)
            nameMonkey.innerHTML = randomName
        }

    } else {
        gameStatus.innerHTML = "Vul je naam in"
    }
})

//banana button click
bananaButton.addEventListener('click', function bananaButton() {
    if (isGameStarted) {
        // add steps to progress bar value
        progressBarBanana.value += step
        //play sound
        bananaSound.play()

        gameStatus.innerHTML = ""

        //upgrade diddy to level 2
        if (progressBarBanana.value >= 100 && diddyLevel === 1) {
            diddyKong.src = "../Inleiding_programmeren_22-23/img/diddykonglvl2.png"
            progressBarBanana.value = 0
            diddyLevel = 2
        }
        //update diddy to level 3
        if (progressBarBanana.value >= 100 && diddyLevel === 2) {
            diddyKong.src = "../Inleiding_programmeren_22-23/img/diddydonkey.jpeg"
            progressBarBanana.value = 0
            diddyLevel = 3
        }
        //game over, you won
        if (progressBarBanana.value >= 100 && diddyLevel === 3) {
            winningSound.play()
            diddyLevel = 1
            isGameStarted = false
            progressBarBarrel.value = 0
            progressBarBanana.value = 0
            diddyKong.src = "../Inleiding_programmeren_22-23/img/winning.jpeg"
            gameStatus.innerHTML = "Gij hebt gewonnen, klik op start om opieuw te beginnen"
        }

    } else {
        gameStatus.innerHTML = "Je moet eerst het spel starten voordat je deze knoppen kunt gebruiken"
    }
})

//barrelbutton click
barrelButton.addEventListener('click', function bananaButton() {
    if (isGameStarted) {
        // add steps to progress bar value
        progressBarBarrel.value += step
        //play sound
        barrelSound.play()

        gameStatus.innerHTML = ""

        //game over, you lost
        if (progressBarBarrel.value >= 100 && diddyLevel === 1) {
            gameOverSound.play()
            isGameStarted = false
            diddyKong.src = "../Inleiding_programmeren_22-23/img/game_over.jpeg"
            gameStatus.innerHTML = "Gij hebt verloren, klik op start om opieuw te beginnen"
            progressBarBarrel.value = 0
            progressBarBanana.value = 0
        }
        // level down to lvl 1
        if (progressBarBarrel.value >= 100 && diddyLevel === 2) {
            diddyKong.src = "../Inleiding_programmeren_22-23/img/diddykong.png"
            diddyLevel = 1
            progressBarBarrel.value = 0
        }
        //level down to lvl 2
        if (progressBarBarrel.value >= 100 && diddyLevel === 3) {
            diddyKong.src = "../Inleiding_programmeren_22-23/img/diddykonglvl2.png"
            diddyLevel = 2
            progressBarBarrel.value = 0
        }

    } else {
        gameStatus.innerHTML = "Je moet eerst het spel starten voordat je deze knoppen kunt gebruiken"
    }
})