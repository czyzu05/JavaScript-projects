const images = [...document.querySelectorAll('img[data-option]')]
const btn = document.querySelector('button')

const gameStats = {
    gameNumbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: null,
    compHand: null
}

const selectHand = () => {
    game.playerHand = this.dataset.option
    images.forEach(image => image.style.boxShadow = '')
    this.style.boxShadow = '0 0 0 2px yellow'
}

images.forEach(image => {
    image.addEventListener('click', selectHand)
})


const startGame = () => {
    if(game.playerHand === "") return alert("Wybierz dłoń")

    game.compHand = compChoice()

    const gameResult = checkResult(game.playerHand, game.compHand)

    setStats(game.playerHand, game.compHand, gameResult)

    endGame()
    
}

const compChoice = () => {
    const compResult = images[Math.floor(Math.random()*3)].dataset.option
    return compResult
}

const checkResult = (player, comp) => {
    if(player == comp) return 'draw'
    else if ((player === "papier" && comp === "kamien") || (player === "kamien" && comp === "nozyczki") || (player === "nozyczki" && comp === "papier")) return 'win'
    else return 'loss'
}

const setStats = (player, comp, result) => {
    document.querySelector('[data-summary="your-choice"]').textContent = player
    document.querySelector('[data-summary="ai-choice"]').textContent = comp

    if(result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameStats.wins
        document.querySelector('[data-summary="who-win"]').textContent = 'Wygrałeś!'
        document.querySelector('[data-summary="who-win"]').style.color = 'green'
    }
    else if (result === 'loss') {
        document.querySelector('p.losses span').textContent = ++gameStats.losses
        document.querySelector('[data-summary="who-win"]').textContent = 'Przegrałeś'
        document.querySelector('[data-summary="who-win"]').style.color = 'red'

    }
    else {
        document.querySelector('p.draws span').textContent = ++gameStats.draws
        document.querySelector('[data-summary="who-win"]').textContent = 'Remis :)'
        document.querySelector('[data-summary="who-win"]').style.color = 'orange'
    }

    document.querySelector('p.numbers span').textContent = ++gameStats.gameNumbers
}

const endGame = () => {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = ''
    game.playerHand = ''
}

btn.addEventListener('click', startGame)