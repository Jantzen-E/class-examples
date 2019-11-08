const bannerElement = document.querySelector('#banner');
const resetButtonElement = document.querySelector('#resetGame');
const squareButtonElements = document.querySelectorAll('.square');
let currentPlayersTurn = 'X';
let isGameOver = false;
let turnCount = 0;
bannerElement.textContent = `Current Player's Turn: ${currentPlayersTurn}`;


for (let i = 0; i < squareButtonElements.length; i++) {
    const squareButtonElement = squareButtonElements[i];

    squareButtonElement.addEventListener('click', function(event) {
        // console.log('Square ' + (i + 1) + ' clicked!');
        const element = event.target;
        const currentValue = element.textContent;
        
        if (currentValue !== '' || isGameOver) {
            return;
        }
        
        turnCount++;

        if (currentPlayersTurn === 'X') {
            element.textContent = 'X';
            checkForWinner(currentPlayersTurn);
            currentPlayersTurn = 'O';
        }
        else {
            element.textContent = 'O';
            checkForWinner(currentPlayersTurn);
            currentPlayersTurn = 'X';
        }
        if(!isGameOver) {
            bannerElement.textContent = `Current Player's Turn: ${currentPlayersTurn}`;
        }
        

        if (turnCount === 9) {
            isGameOver = true;
        }
    });
}

resetButtonElement.addEventListener('click', function() {
    squareButtonElements.forEach ((squareElement) => {
        squareElement.textContent = '';
    });

    isGameOver = false;
    currentPlayersTurn = 'X';
    turnCount = 0;
    bannerElement.textContent = `Current Player's Turn: ${currentPlayersTurn}`;
});

function checkForWinner(player) {
    const square1Value = squareButtonElements[0].textContent;
    const square2Value = squareButtonElements[1].textContent;
    const square3Value = squareButtonElements[2].textContent;
    const square4Value = squareButtonElements[3].textContent;
    const square5Value = squareButtonElements[4].textContent;
    const square6Value = squareButtonElements[5].textContent;
    const square7Value = squareButtonElements[6].textContent;
    const square8Value = squareButtonElements[7].textContent;
    const square9Value = squareButtonElements[8].textContent;

    if (square1Value === player && square2Value === player && square3Value === player) {
        isGameOver = true;
    }
    else if(square4Value === player && square5Value === player && square6Value === player) {
        isGameOver = true;
    }
    else if(square7Value === player && square8Value === player && square9Value === player) {
        isGameOver = true;
    }
    else if(square1Value === player && square5Value === player && square9Value === player) {
        isGameOver = true;
    }
    else if(square3Value === player && square5Value === player && square7Value === player) {
        isGameOver = true;
    }
    else if(square1Value === player && square4Value === player && square7Value === player) {
        isGameOver = true;
    }
    else if(square2Value === player && square5Value === player && square8Value === player) {
        isGameOver = true;
    }
    else if(square3Value === player && square6Value === player && square9Value === player) {
        isGameOver = true;
    }

    // else if (turnCount === 9) {
    //     bannerElement.textContent = 'Tie Game';
    // }

    if (isGameOver) {
        bannerElement.textContent = `PLAYER ${player} is the winner!`;
    }
    if (isGameOver) {
        setTimeout(function(){ alert("YOU WON!!!!!!!!!!!!!!!!!!"); }, 100);
    }
    else if (turnCount === 9) {
        isGameOver = true;
        bannerElement.textContent = 'Tie Game'
    }
};

























// const squareElement = document.querySelector('#square');

// if (squareElement) {
//     squareElement.addEventListener('click', function() {
//         const currentValue = squareElement.textContent;

//         if(currentValue === '') {
//             squareElement.textContent = 'X';
//         }
//         else if(currentValue === 'X') {
//             squareElement.textContent = 'O';
//         }
//         else {
//             squareElement.textContent = '';

//         }
//     });
// }
